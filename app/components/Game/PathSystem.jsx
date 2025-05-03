import { useMemo } from "react";

export default function PathSystem({ locationPositions, isMobile }) {
    const pathNetwork = useMemo(() => {
        const mainPath = [
            { x: 15, y: 15 }, // Top left
            { x: 50, y: 10 }, // Top middle
            { x: 85, y: 15 }, // Top right
            { x: 90, y: 50 }, // Right middle
            { x: 85, y: 85 }, // Bottom right
            { x: 50, y: 90 }, // Bottom middle
            { x: 15, y: 85 }, // Bottom left
            { x: 10, y: 50 }, // Left middle
            { x: 15, y: 15 }, // Back to top left
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

    const generateStoneSegments = useMemo(() => {
        const segments = [];
        const locationKeys = Object.keys(locationPositions);
        const addedPoints = new Set();

        locationKeys.forEach((fromId) => {
            Object.entries(pathNetwork[fromId].directConnections).forEach(
                ([toId, path]) => {
                    for (let i = 0; i < path.length - 1; i++) {
                        const start = path[i];
                        const end = path[i + 1];
                        const distance = Math.sqrt(
                            Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
                        );
                        const steps = isMobile
                            ? Math.max(1, Math.floor(distance / 4))
                            : Math.max(3, Math.floor(distance / 2));

                        for (let step = 0; step <= steps; step++) {
                            const progress = step / steps;
                            const x = start.x + (end.x - start.x) * progress;
                            const y = start.y + (end.y - start.y) * progress;
                            const pointId = `${Math.round(x * 10)},${Math.round(y * 10)}`;

                            if (!addedPoints.has(pointId)) {
                                addedPoints.add(pointId);
                                const jitterX = (Math.random() - 0.5) * 1.5;
                                const jitterY = (Math.random() - 0.5) * 1.5;
                                segments.push({
                                    x: x + jitterX,
                                    y: y + jitterY,
                                    size: 4 + Math.random() * 2,
                                    rotation: Math.random() * 360,
                                    opacity: 0.7 + Math.random() * 0.3,
                                });
                            }
                        }
                    }
                }
            );
        });

        return segments;
    }, [pathNetwork, locationPositions, isMobile]);

    return (
        <>
            {generateStoneSegments.map((stone, index) => (
                <div
                    key={`stone-${index}`}
                    className="absolute"
                    style={{
                        left: `${stone.x}%`,
                        top: `${stone.y}%`,
                        width: `${stone.size}%`,
                        height: `${stone.size}%`,
                        transform: `translate(-50%, -50%) rotate(${stone.rotation}deg)`,
                        opacity: stone.opacity,
                        zIndex: 0,
                    }}
                >
                    <img
                        src="/stone.png"
                        alt="Stone"
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}
        </>
    );
}