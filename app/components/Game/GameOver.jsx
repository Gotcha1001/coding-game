"use client";

import { useGame } from "@/app/context/GameContext";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { getWinConditions } from "@/data/winConditions";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function GameOver({ won }) {
    const { state, dispatch } = useGame();
    const { player, gameWon } = state;
    const hasFiredConfetti = useRef(false);

    if (!state || !player) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
            >
                <h2 className="text-2xl font-bold text-yellow-400">Error</h2>
                <p className="text-white">Game state is not available. Please try again.</p>
            </motion.div>
        );
    }

    const winConditions = getWinConditions(player.difficulty);

    const countMasteredSubjects = () => {
        let subjectsMastered = 0;
        subjectsMastered += Object.values(player.hooksMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.nextJsMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.cssMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.pythonMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.javaScriptMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.typeScriptMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.expressMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.cSharpMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.reactNativeMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.javaMastered || {}).filter((v) => v >= 1).length;
        subjectsMastered += Object.values(player.cppMastered || {}).filter((v) => v >= 1).length;
        return subjectsMastered;
    };

    const subjectsMastered = countMasteredSubjects();

    const conditionsMet = {
        cash: player.cash >= winConditions.cash,
        happiness: player.happiness >= winConditions.happiness,
        health: player.relationship?.health >= winConditions.health,
        subjectsMastered: subjectsMastered >= winConditions.subjectsMastered,
        isDating: player.relationship?.isDating === winConditions.isDating,
        apartmentTier: (() => {
            const tiers = ["Basic", "Standard", "Luxury"];
            const playerTierIndex = tiers.indexOf(player.rental?.apartmentTier);
            const requiredTierIndex = tiers.indexOf(winConditions.apartmentTier);
            return playerTierIndex >= requiredTierIndex;
        })(),
        possessions: player.possessions?.length >= winConditions.possessions,
    };

    const fireConfetti = () => {
        const duration = 7000;
        const animationEnd = Date.now() + duration;
        const defaults = {
            startVelocity: 40,
            spread: 360,
            ticks: 80,
            zIndex: 1000,
            scalar: 1.5,
        };
        const colors = ["#FFD700", "#FF4500", "#00FF00", "#1E90FF", "#FF69B4"];
        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }
            const particleCount = 100 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                colors,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                shapes: ["circle", "square", "star"],
                scalar: randomInRange(1, 2),
            });
            confetti({
                ...defaults,
                particleCount,
                colors,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                shapes: ["circle", "square", "star"],
                scalar: randomInRange(1, 2),
            });
            if (Math.random() > 0.7) {
                confetti({
                    ...defaults,
                    particleCount: 20,
                    colors: ["#FFFFFF", "#FFFFE0", "#FFD700"],
                    spread: 60,
                    startVelocity: 50,
                    origin: { x: randomInRange(0.4, 0.6), y: randomInRange(0.3, 0.7) },
                    scalar: randomInRange(0.5, 1),
                });
            }
        }, 200);
    };

    useEffect(() => {
        if (gameWon && won && !hasFiredConfetti.current) {
            hasFiredConfetti.current = true;
            fireConfetti();
        }
    }, [gameWon, won]);

    const handlePlayAgain = () => {
        dispatch({ type: "RESTART_GAME" });
    };

    const handleViewStats = () => {
        dispatch({ type: "CHANGE_SCREEN", payload: { screen: "stats" } });
        dispatch({ type: "RESET_GAME_WON" });
    };

    if (!gameWon || !player || !player.name || !won) {
        return null;
    }

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
        >
            <AlertDialog open={gameWon} onOpenChange={() => { }}>
                <AlertDialogContent className="bg-gradient-to-br from-gray-900 to-blue-900 border-4 border-green-400 rounded-xl shadow-2xl max-w-lg">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                            🎉 Congratulations, {player.name}! 🎉
                        </AlertDialogTitle>
                        <AlertDialogDescription asChild className="text-xl text-white font-semibold">
                            <div>
                                You've won the game by achieving all goals!
                                <p className="mt-2">Completed in {player.week} weeks.</p>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="bg-gray-900 p-4 rounded-lg mt-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Final Stats</h3>
                        <div className="grid grid-cols-1 gap-2">
                            <div>
                                <p className="text-gray-400">Cash:</p>
                                <p className={`text-lg ${conditionsMet.cash ? "text-green-400" : "text-red-400"}`}>
                                    ${player.cash} / ${winConditions.cash}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400">Happiness:</p>
                                <p className={`text-lg ${conditionsMet.happiness ? "text-green-400" : "text-red-400"}`}>
                                    {player.happiness} / {winConditions.happiness}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400">Health:</p>
                                <p className={`text-lg ${conditionsMet.health ? "text-green-400" : "text-red-400"}`}>
                                    {player.relationship?.health ?? 0} / {winConditions.health}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400">Subjects Mastered:</p>
                                <p className={`text-lg ${conditionsMet.subjectsMastered ? "text-green-400" : "text-red-400"}`}>
                                    {subjectsMastered} / {winConditions.subjectsMastered}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400">Dating:</p>
                                <p className={`text-lg ${conditionsMet.isDating ? "text-green-400" : "text-red-400"}`}>
                                    {player.relationship?.isDating ? "Yes" : "No"}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400">Apartment Tier:</p>
                                <p className={`text-lg ${conditionsMet.apartmentTier ? "text-green-400" : "text-red-400"}`}>
                                    {player.rental?.apartmentTier ?? "None"} / {winConditions.apartmentTier}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400">Possessions:</p>
                                <p className={`text-lg ${conditionsMet.possessions ? "text-green-400" : "text-red-400"}`}>
                                    {player.possessions?.length ?? 0} / {winConditions.possessions}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400">Points:</p>
                                <p className="text-lg text-white">{player.points}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Week:</p>
                                <p className="text-lg text-white">{player.week}</p>
                            </div>
                        </div>
                    </div>

                    <AlertDialogFooter className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                        <AlertDialogAction
                            onClick={handleViewStats}
                            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-3 px-8 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-transform"
                        >
                            View Stats
                        </AlertDialogAction>
                        <AlertDialogAction
                            onClick={handlePlayAgain}
                            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-8 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-transform"
                        >
                            Play Again
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </motion.div>
    );
}