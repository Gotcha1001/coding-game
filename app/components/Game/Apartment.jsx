"use client";

import { useGame } from '@/app/context/GameContext';
import {
    initAudio,
    loadHomeMusic,
    playHomeMusic,
    stopHomeMusic,
    loadClickSound,
    playClickSound,
} from '@/data/audioManager';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import EncouragementModal from './EncouragementModal';
import PCWorkspace from './PCWorkspace';
import { shopItems } from '@/data/items';
import { hooksData } from '@/data/hooksData';
import { nextJsData } from '@/data/nextJsData';
import { cssData } from '@/data/cssData';
import { pythonData } from '@/data/pythonData';
import { javaScriptData } from '@/data/javaScriptData';
import { typeScriptData } from '@/data/typeScriptData';
import { expressData } from '@/data/expressData';
import { cSharpData } from '@/data/cSharpData';
import { javaData } from '@/data/javaData';
import { cppData } from '@/data/cppData';
import ImageGenerator from './ImageGenerator';

export default function Apartment() {
    const { state, dispatch } = useGame();
    const { player } = state;
    const [showTvModal, setShowTvModal] = useState(false);
    const [showGamingModal, setShowGamingModal] = useState(false);
    const [showMeditationModal, setShowMeditationModal] = useState(false);
    const [isEncouragementModalOpen, setIsEncouragementModalOpen] = useState(false);
    const [showPCWorkspace, setShowPCWorkspace] = useState(false);
    const [showImageGenerator, setShowImageGenerator] = useState(false);

    // Wrapper function to play click sound before executing the handler
    const withSound = (handler) => (event) => {
        playClickSound();
        if (handler) {
            handler(event);
        }
    };

    useEffect(() => {
        if (!player?.rental?.hasApartment) {
            dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'map' } });
            toast.error("You need to rent an apartment first!");
        }
    }, [player, dispatch]);

    useEffect(() => {
        loadClickSound("/sounds/click.mp3").then((success) => {
            if (!success) {
                console.warn("Failed to load click sound");
            }
        });
    }, []);

    const showMessage = (message) => {
        dispatch({ type: 'SET_MESSAGE', payload: { text: message } });
        toast.success(message);
    };

    const getApartmentImage = () => {
        if (!player?.rental?.hasApartment) return "/home.jpg";
        switch (player.rental.rentAmount) {
            case 50: return "/home.jpg";
            case 100: return "/home2.jpg";
            case 200: return "/home3.jpg";
            default: return "/home.jpg";
        }
    };

    const getApartmentTier = () => {
        if (!player?.rental?.hasApartment) return "none";
        switch (player.rental.rentAmount) {
            case 50: return "basic";
            case 100: return "standard";
            case 200: return "luxury";
            default: return "basic";
        }
    };

    const apartmentTier = getApartmentTier();

    const goBackToLocation = () => {
        dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'location' } });
    };

    const handleSleep = () => {
        if (player.energy < 100) {
            dispatch({ type: 'REST' });
            dispatch({ type: 'USE_TIME', payload: { amount: 30 } });
            showMessage("You had a good rest and recovered energy!");
        } else {
            showMessage("You're already full of energy!");
        }
    };

    const handleWatchTV = () => {
        if (player.energy < 5) {
            showMessage("You're too tired to watch TV!");
            return;
        }
        setShowTvModal(true);
        dispatch({
            type: 'DO_LEISURE_ACTIVITY',
            payload: { cost: 0, happiness: 10, energy: 5 }
        });
        dispatch({ type: 'USE_TIME', payload: { amount: 15 } });
        showMessage("You enjoyed watching TV and gained happiness!");
    };

    const handlePlayGames = () => {
        if (player.energy < 8) {
            showMessage("You're too tired to play video games!");
            return;
        }
        setShowGamingModal(true);
        dispatch({
            type: 'DO_LEISURE_ACTIVITY',
            payload: { cost: 0, happiness: 15, energy: 8 }
        });
        dispatch({ type: 'USE_TIME', payload: { amount: 20 } });
        showMessage("You had fun playing games and gained happiness!");
    };

    const handleMeditate = () => {
        if (player.energy < 3) {
            showMessage("You're too tired to meditate effectively!");
            return;
        }
        setShowMeditationModal(true);
        dispatch({
            type: 'DO_LEISURE_ACTIVITY',
            payload: { cost: 0, happiness: 12, energy: -5 }
        });
        dispatch({ type: 'USE_TIME', payload: { amount: 15 } });
        showMessage("You meditated peacefully and feel refreshed!");
    };

    const handleOpenEncouragementModal = () => {
        setIsEncouragementModalOpen(true);
    };

    const handleVisitDatingOffice = () => {
        dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'datingOffice' } });
        showMessage("Heading to the Dating Office to find a match!");
    };

    const handleOpenPCWorkspace = () => {
        if (player.energy < 5) {
            showMessage("You're too tired to use the PC!");
            return;
        }
        setShowPCWorkspace(true);
        dispatch({
            type: 'DO_LEISURE_ACTIVITY',
            payload: { cost: 0, happiness: 5, energy: 5 }
        });
        dispatch({ type: 'USE_TIME', payload: { amount: 15 } });
    };

    const handleOpenImageGenerator = () => {
        if (player.energy < 5) {
            showMessage("You're too tired to use the image generator!");
            return;
        }
        setShowImageGenerator(true);
        dispatch({
            type: 'DO_LEISURE_ACTIVITY',
            payload: { cost: 0, happiness: 5, energy: 5 }
        });
        dispatch({ type: 'USE_TIME', payload: { amount: 15 } });
    };

    // Mastered subjects across all destinations
    const masteredSubjects = [
        ...Object.entries(player.hooksMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([hook]) => ({
                category: "Hooks",
                name: hook,
                title: hooksData[hook]?.title || hook,
            })),
        ...Object.entries(player.nextJsMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([topic]) => ({
                category: "Next.js",
                name: topic,
                title: nextJsData[topic]?.title || topic,
            })),
        ...Object.entries(player.cssMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([topic]) => ({
                category: "CSS",
                name: topic,
                title: cssData[topic]?.title || topic,
            })),
        ...Object.entries(player.pythonMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([topic]) => ({
                category: "Python",
                name: topic,
                title: pythonData[topic]?.title || topic,
            })),
        ...Object.entries(player.javaScriptMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([topic]) => ({
                category: "JavaScript",
                name: topic,
                title: javaScriptData[topic]?.title || topic,
            })),
        ...Object.entries(player.typeScriptMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([topic]) => ({
                category: "TypeScript",
                name: topic,
                title: typeScriptData[topic]?.title || topic,
            })),
        ...Object.entries(player.expressMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([topic]) => ({
                category: "Express",
                name: topic,
                title: expressData[topic]?.title || topic,
            })),
        ...Object.entries(player.cSharpMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([topic]) => ({
                category: "C#",
                name: topic,
                title: cSharpData[topic]?.title || topic,
            })),
        ...Object.entries(player.javaMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([topic]) => ({
                category: "Java",
                name: topic,
                title: javaData[topic]?.title || topic,
            })),
        ...Object.entries(player.cppMastered || {})
            .filter(([_, mastery]) => mastery >= 1)
            .map(([topic]) => ({
                category: "C++",
                name: topic,
                title: cppData[topic]?.title || topic,
            })),
    ];

    // Owned items from possessions
    const ownedItems = player.possessions
        ? shopItems.filter((item) => player.possessions.includes(item.id))
        : [];

    if (!player?.rental?.hasApartment) {
        return null;
    }

    return (
        <div className="apartment-interface mt-4">
            <style jsx>{`
                .apartment-image {
                    width: 100%;
                    max-height: 60vh;
                    object-fit: cover;
                    border-radius: 0.5rem;
                    border: 2px solid #6366f1;
                }
                .video-header {
                    width: 100%;
                    height: 256px;
                    overflow: hidden;
                    border-radius: 0.5rem;
                    border: 2px solid #6366f1;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                @media (max-width: 640px) {
                    .apartment-image {
                        max-height: 40vh;
                    }
                    .video-header {
                        height: 192px;
                    }
                }
            `}</style>
            <div className="header mb-4">
                <div className="video-header">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/apartment.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                    <h2 className="text-2xl font-bold text-white text-center">
                        Your {apartmentTier.charAt(0).toUpperCase() + apartmentTier.slice(1)} Apartment
                    </h2>
                </div>
            </div>
            <div className="content p-4 bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-300">${player.rental.rentAmount}/month</p>
                    <button
                        onClick={withSound(goBackToLocation)}
                        className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
                    >
                        Back
                    </button>
                </div>
                <div className="mb-4">
                    <img
                        src={getApartmentImage()}
                        alt="Apartment Interior"
                        className="apartment-image"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2095.jpg";
                        }}
                    />
                </div>
                <div className="p-4 rounded mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-center">Home Status</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-2 bg-gray-700 rounded">
                            <span className="text-gray-400">Energy:</span>
                            <span className="ml-2 text-blue-400">{player.energy}%</span>
                        </div>
                        <div className="p-2 bg-gray-700 rounded">
                            <span className="text-gray-400">Happiness:</span>
                            <span className="ml-2 text-green-400">{player.happiness}%</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded mb-4">
                    <h3 className="text-lg font-semibold mb-2">Mastered Subjects</h3>
                    {masteredSubjects.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {masteredSubjects.map((subject, index) => (
                                <motion.div
                                    key={`${subject.category}-${subject.name}-${index}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-black bg-opacity-30 p-4 rounded-lg flex items-center"
                                >
                                    <span className="text-2xl mr-3">🏆</span>
                                    <div>
                                        <p className="text-white font-medium">{subject.title}</p>
                                        <p className="text-gray-300 text-sm">{subject.category}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400 text-sm">You haven't mastered any subjects yet. Keep studying!</p>
                    )}
                </div>
                <div className="p-4 rounded mb-4">
                    <h3 className="text-lg font-semibold mb-2">Home Activities</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={withSound(handleSleep)}
                            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Sleep
                            <span className="block text-xs text-blue-200">Restore energy (30 min)</span>
                        </button>
                        <button
                            onClick={withSound(handleOpenPCWorkspace)}
                            className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded"
                        >
                            Use PC
                            <span className="block text-xs text-purple-200">Search coding solutions (15 min)</span>
                        </button>
                        <button
                            onClick={withSound(() => dispatch({
                                type: 'CHANGE_SCREEN',
                                payload: { screen: 'goals' }
                            }))}
                            className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded"
                        >
                            Check Goals
                            <span className="block text-xs text-green-200">Review your progress</span>
                        </button>
                        {(apartmentTier === "standard" || apartmentTier === "luxury") && (
                            <button
                                onClick={withSound(handleWatchTV)}
                                className="bg-amber-600 hover:bg-amber-500 text-white py-2 px-4 rounded"
                            >
                                Watch TV
                                <span className="block text-xs text-amber-200">+10 Happiness (15 min)</span>
                            </button>
                        )}
                        {apartmentTier === "luxury" && (
                            <>
                                <button
                                    onClick={withSound(handlePlayGames)}
                                    className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded"
                                >
                                    Play Games
                                    <span className="block text-xs text-indigo-200">+15 Happiness (20 min)</span>
                                </button>
                                <button
                                    onClick={withSound(handleMeditate)}
                                    className="bg-teal-600 hover:bg-teal-500 text-white py-2 px-4 rounded"
                                >
                                    Meditate
                                    <span className="block text-xs text-teal-200">+12 Happiness, +5 Energy (15 min)</span>
                                </button>
                            </>
                        )}
                        <button
                            onClick={withSound(handleOpenEncouragementModal)}
                            className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded"
                        >
                            Get Inspired
                            <span className="block text-xs text-green-200">Receive motivational quotes</span>
                        </button>
                        <button
                            onClick={withSound(handleVisitDatingOffice)}
                            className="bg-pink-600 hover:bg-pink-500 text-white py-2 px-4 rounded"
                        >
                            Visit Dating Office
                            <span className="block text-xs text-pink-200">Find a partner (5 min)</span>
                        </button>
                        <button
                            onClick={withSound(handleOpenImageGenerator)}
                            className="bg-pink-600 hover:bg-pink-500 text-white py-2 px-4 rounded"
                        >
                            AI Image Generator
                            <span className="block text-xs text-pink-200">Create unique images (15 min)</span>
                        </button>
                    </div>
                </div>
                <div className="p-4 rounded mb-4">
                    <h3 className="text-lg font-semibold mb-2">Your Possessions</h3>
                    {ownedItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {ownedItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-black bg-opacity-30 p-4 rounded-lg"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-32 object-cover rounded-md mb-2"
                                    />
                                    <p className="text-white font-medium">{item.name}</p>
                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400 text-sm">You haven't purchased any items yet. Visit the Mall!</p>
                    )}
                </div>
            </div>
            <AlertDialog open={showTvModal} onOpenChange={setShowTvModal}>
                <AlertDialogContent className="bg-gray-800 border border-gray-700">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">Watching TV</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-300">
                            You relax on your couch and enjoy some entertainment on your TV.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="mt-2 rounded-lg overflow-hidden">
                        <img
                            src="/tv.jpg"
                            alt="Watching TV"
                            className="w-full max-h-[300px] object-cover"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <button
                            onClick={withSound(() => setShowTvModal(false))}
                            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded"
                        >
                            Close
                        </button>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
            <AlertDialog open={showGamingModal} onOpenChange={setShowGamingModal}>
                <AlertDialogContent className="bg-gray-800 border border-gray-700">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">Gaming Session</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-300">
                            You grab your controller and immerse yourself in an exciting video game.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="mt-2 rounded-lg overflow-hidden">
                        <img
                            src="/gaming.jpg"
                            alt="Playing Video Games"
                            className="w-full max-h-[300px] object-cover"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <button
                            onClick={withSound(() => setShowGamingModal(false))}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-6 rounded"
                        >
                            Close
                        </button>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
            <AlertDialog open={showMeditationModal} onOpenChange={setShowMeditationModal}>
                <AlertDialogContent className="bg-gray-800 border border-gray-700">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">Meditation</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-300">
                            You find a quiet corner in your luxury apartment and practice mindfulness meditation.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="mt-2 rounded-lg overflow-hidden">
                        <img
                            src="/meditate.jpg"
                            alt="Meditation"
                            className="w-full max-h-[300px] object-cover"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <button
                            onClick={withSound(() => setShowMeditationModal(false))}
                            className="bg-teal-600 hover:bg-teal-500 text-white py-2 px-6 rounded"
                        >
                            Close
                        </button>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
            <EncouragementModal
                open={isEncouragementModalOpen}
                onOpenChange={setIsEncouragementModalOpen}
            />
            {showPCWorkspace && (
                <PCWorkspace onClose={() => setShowPCWorkspace(false)} />
            )}
            {showImageGenerator && (
                <ImageGenerator onClose={() => setShowImageGenerator(false)} />
            )}
        </div>
    );
}