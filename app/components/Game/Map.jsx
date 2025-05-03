




"use client";

import GameContext from "@/app/context/GameContext";
import { useContext, useEffect, useState, useMemo, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PathSystem from "./PathSystem";
import {
    initAudio,
    loadWalkingSound,
    playWalkingSound,
    stopWalkingSound,
} from "@/data/audioManager";

export default function Map() {
    const { state, dispatch } = useContext(GameContext);
    const { locations, player, isWalking, targetLocation, currentScreen } = state;
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const [animationProgress, setAnimationProgress] = useState(0);
    const [currentPathSegment, setCurrentPathSegment] = useState(0);
    const [pathSegments, setPathSegments] = useState([]);
    const [overallProgress, setOverallProgress] = useState(0);
    const mapRef = useRef(null);

    // Initialize audio
    useEffect(() => {
        initAudio();
        loadWalkingSound("/sounds/walk.mp3");
    }, []);

    // Play/stop walking sound
    useEffect(() => {
        if (isWalking) {
            playWalkingSound();
        } else {
            stopWalkingSound();
        }
    }, [isWalking]);

    // Stop sound on unmount or screen change to location
    useEffect(() => {
        return () => {
            stopWalkingSound();
        };
    }, []);

    useEffect(() => {
        if (currentScreen === "location") {
            stopWalkingSound();
        }
    }, [currentScreen]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Track map container size
    useEffect(() => {
        const updateDimensions = () => {
            if (mapRef.current) {
                const { width, height } = mapRef.current.getBoundingClientRect();
                setWindowSize({ width, height });
            }
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // Location positions
    const locationPositions = useMemo(() => {
        const positions = {};
        Object.entries(locations).forEach(([id, location]) => {
            const isMobile = windowSize.width < 768;
            // const minBoundary = isMobile ? 15 : 10;
            // const maxBoundary = isMobile ? 80 : 85;
            // const safeLeft = Math.max(minBoundary, Math.min(maxBoundary, location.mapX));
            // const safeTop = Math.max(minBoundary, Math.min(maxBoundary, location.mapY));
            // positions[id] = {
            //     x: safeLeft,
            //     y: safeTop > 80 ? 80 : safeTop,
            // };

            positions[id] = {
                x: location.mapX,
                y: location.mapY,
            };
        });
        return positions;
    }, [locations, windowSize.width]);

    // Path network
    const pathNetwork = useMemo(() => {
        const mainPath = [
            { x: 15, y: 15 },
            { x: 50, y: 10 },
            { x: 85, y: 15 },
            { x: 90, y: 50 },
            { x: 85, y: 85 },
            { x: 50, y: 90 },
            { x: 15, y: 85 },
            { x: 10, y: 50 },
            { x: 15, y: 15 },
        ];
        const network = {};
        const locationKeys = Object.keys(locationPositions);
        locationKeys.forEach((id) => {
            const pos = locationPositions[id];
            let closestPoint = null;
            let minDistance = Infinity;
            mainPath.forEach((point) => {
                const distance = Math.sqrt(
                    Math.pow(pos.x - point.x, 2) + Math.pow(pos.y - point.y, 2)
                );
                if (distance < minDistance) {
                    minDistance = distance;
                    closestPoint = point;
                }
            });
            network[id] = {
                mainPathConnection: closestPoint,
                directConnections: {},
            };
        });
        locationKeys.forEach((fromId) => {
            locationKeys.forEach((toId) => {
                if (fromId !== toId) {
                    const from = locationPositions[fromId];
                    const to = locationPositions[toId];
                    const fromMainPoint = network[fromId].mainPathConnection;
                    const toMainPoint = network[toId].mainPathConnection;
                    const fromIndex = mainPath.findIndex(
                        (p) => p.x === fromMainPoint.x && p.y === fromMainPoint.y
                    );
                    const toIndex = mainPath.findIndex(
                        (p) => p.x === toMainPoint.x && p.y === toMainPoint.y
                    );
                    let pathPoints = [];
                    pathPoints.push({ x: from.x, y: from.y });
                    pathPoints.push({ x: fromMainPoint.x, y: fromMainPoint.y });
                    const clockwise =
                        (toIndex > fromIndex &&
                            toIndex - fromIndex <= mainPath.length / 2) ||
                        (fromIndex > toIndex &&
                            fromIndex - toIndex > mainPath.length / 2);
                    if (clockwise) {
                        let i = fromIndex;
                        while (i !== toIndex) {
                            i = (i + 1) % (mainPath.length - 1);
                            pathPoints.push({ x: mainPath[i].x, y: mainPath[i].y });
                        }
                    } else {
                        let i = fromIndex;
                        while (i !== toIndex) {
                            i = (i - 1 + (mainPath.length - 1)) % (mainPath.length - 1);
                            pathPoints.push({ x: mainPath[i].x, y: mainPath[i].y });
                        }
                    }
                    pathPoints.push({ x: to.x, y: to.y });
                    network[fromId].directConnections[toId] = pathPoints;
                }
            });
        });
        return network;
    }, [locationPositions]);

    // Easing function
    const easeInOutQuad = (t) =>
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    // Walking animation
    useEffect(() => {
        if (isWalking && targetLocation) {
            const path = pathNetwork[player.currentLocation].directConnections[targetLocation];
            setPathSegments(path);
            const totalSegments = path.length - 1;
            const duration = 5000;
            let startTime = null;
            let animationId = null;
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const rawProgress = Math.min(elapsed / duration, 1);
                const smoothProgress = easeInOutQuad(rawProgress);
                setOverallProgress(smoothProgress);
                const segmentProgress = smoothProgress * totalSegments;
                const currentSegment = Math.min(
                    Math.floor(segmentProgress),
                    totalSegments - 1
                );
                setCurrentPathSegment(currentSegment);
                setAnimationProgress(segmentProgress - currentSegment);
                if (rawProgress < 1) {
                    animationId = requestAnimationFrame(animate);
                }
            };
            animationId = requestAnimationFrame(animate);
            return () => {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            };
        } else {
            setAnimationProgress(0);
            setOverallProgress(0);
            setPathSegments([]);
        }
    }, [isWalking, targetLocation, player.currentLocation, pathNetwork]);

    // Move to location
    const moveToLocation = (locationId) => {
        if (isWalking || locationId === player.currentLocation) return;

        const travelEnergy = 10;
        const minEnergyForActions = 20; // Minimum energy for actions like learning or working
        const canRestAtHome = player.currentLocation === "apartment"; // Check if player is at home to rest

        if (player.energy < travelEnergy && player.energy < minEnergyForActions && !canRestAtHome) {
            // Player is stuck: not enough energy to travel or perform actions, and not at home
            dispatch({
                type: "ADVANCE_WEEK_AND_REST",
            });
            return;
        }

        if (player.energy < travelEnergy) {
            dispatch({
                type: "SET_MESSAGE",
                payload: { text: "Not enough energy to travel!" },
            });
            return;
        }

        dispatch({ type: "START_WALKING", payload: { locationId } });

        setTimeout(() => {
            dispatch({
                type: "MOVE_TO_LOCATION",
                payload: { locationId },
            });
            dispatch({
                type: "CHANGE_SCREEN",
                payload: { screen: "location" },
            });
            dispatch({
                type: "UPDATE_ENERGY",
                payload: { amount: -travelEnergy },
            });
        }, 5000);
    };

    // Animated position
    const getAnimatedPosition = () => {
        if (!isWalking || !targetLocation || pathSegments.length === 0) return null;
        if (currentPathSegment >= pathSegments.length - 1)
            return pathSegments[pathSegments.length - 1];
        const start = pathSegments[currentPathSegment];
        const end = pathSegments[currentPathSegment + 1];
        return {
            x: start.x + (end.x - start.x) * animationProgress,
            y: start.y + (end.y - start.y) * animationProgress,
        };
    };

    // Center avatar styles
    const getCenterAvatarStyles = () => {
        if (!isWalking) return {};
        const scale = overallProgress < 0.3 ? 1 + overallProgress * 0.25 : 1.25;
        const opacity = overallProgress > 0.7 ? 1 - (overallProgress - 0.7) / 0.3 : 1;
        return {
            transform: `scale(${scale})`,
            opacity,
        };
    };

    return (
        <div
            ref={mapRef}
            className="w-full h-screen pt-10 relative overflow-hidden rounded-lg mt-10"
            style={{
                backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2021/09/26/20/49/world-6658881_1280.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "10px"


            }}
        >
            <PathSystem locationPositions={locationPositions} isMobile={isMobile} />
            {/* Walking Avatar */}
            {isWalking && getAnimatedPosition() && (
                <div
                    className="absolute z-30 transition-transform duration-300 ease-in-out"
                    style={{
                        left: `${getAnimatedPosition().x}%`,
                        top: `${getAnimatedPosition().y}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <div
                        className={`${isMobile ? "h-12 w-12" : "h-16 w-16"} bg-blue-600 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 rounded-full border-2 border-yellow-400 z-20"></div>
                        <Image
                            src={player.avatar}
                            alt={player.name}
                            width={isMobile ? 48 : 64}
                            height={isMobile ? 48 : 64}
                            className="rounded-full z-10 object-cover w-full h-full object-[center_top]"
                        />
                    </div>
                    <div className="mt-1 bg-black px-2 py-1 rounded text-xs text-center shadow-md text-white">
                        {player.name}
                    </div>
                </div>
            )}
            {/* Static Player Avatar */}
            {!isWalking && player.currentLocation && (
                <div
                    className="absolute z-30"
                    style={{
                        left: `${locationPositions[player.currentLocation].x}%`,
                        top: `${locationPositions[player.currentLocation].y}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <div
                        className={`${isMobile ? "h-16 w-16" : "h-20 w-20"} rounded-full flex items-center justify-center shadow-lg relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-pulse z-20"></div>
                        <div
                            className={`${isMobile ? "h-14 w-14" : "h-18 w-18"} bg-indigo-600 rounded-full flex items-center justify-center z-10 m-1 overflow-hidden`}
                        >
                            <Image
                                src={player.avatar}
                                alt={player.name}
                                width={isMobile ? 64 : 80}
                                height={isMobile ? 64 : 80}
                                className="rounded-full object-cover w-full h-full object-[center_top]"
                            />
                        </div>
                    </div>
                    <div className="mt-2 bg-gradient-to-r from-indigo-500 via-purple-900 to-black px-3 py-1 rounded text-sm text-center font-bold shadow-md text-white">
                        {player.name}
                    </div>
                </div>
            )}
            {/* Center Avatar */}
            <div
                className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                style={{
                    opacity: isWalking && overallProgress > 0.95 ? 0 : 1,
                    pointerEvents: isWalking ? "none" : "auto",
                }}
            >
                <div
                    className={`transition-all duration-500 ${isWalking ? "animate-wiggle" : ""}`}
                    style={getCenterAvatarStyles()}
                >
                    <div
                        className={`${isMobile ? "w-32 h-32" : "w-48 h-48"} rounded-full overflow-hidden border-4 border-blue-500 mb-4 shadow-xl bg-white`}
                    >
                        <Image
                            src={player.avatar}
                            alt="Player Avatar"
                            width={256}
                            height={256}
                            className="object-cover w-full h-full object-[center_top]"
                        />
                    </div>
                    <p className="text-xl md:text-2xl font-bold bg-white text-indigo-500 gradient-background2 text-center px-2 py-1 rounded-full shadow-md">
                        {player.name}
                    </p>
                </div>
            </div>
            {/* Location Markers */}
            {Object.entries(locations).map(([id, location]) => {
                const pos = locationPositions[id];
                const isCurrent = player.currentLocation === id;
                const isTarget = targetLocation === id;
                const imageSize = isMobile ? "w-20 h-20" : "w-24 h-24";
                return (
                    <div
                        key={id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: `${pos.x}%`,
                            top: `${pos.y}%`,
                            zIndex: isCurrent || isTarget ? 10 : 1,
                        }}
                    >
                        <motion.button
                            onClick={() => moveToLocation(id)}
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div
                                className={`${imageSize} rounded-full overflow-hidden mb-2 shadow-lg border-2 ${isCurrent
                                    ? "border-yellow-400 ring-4 ring-yellow-400 scale-110"
                                    : isTarget
                                        ? "border-amber-300"
                                        : "border-indigo-300"
                                    }`}
                            >
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span
                                className={`${isMobile ? "text-sm" : "text-base"} font-medium px-3 py-1 rounded-full gradient-background2 ${isCurrent ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"
                                    }`}
                            >
                                {location.name}
                            </span>
                        </motion.button>
                    </div>
                );
            })}
        </div>
    );
}