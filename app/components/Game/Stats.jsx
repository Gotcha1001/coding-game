"use client";

import { useGame } from "@/app/context/GameContext";
import { getWinConditions } from "@/data/winConditions";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Stats() {
    const { state, dispatch } = useGame();
    const { player, gameEnded } = state || {};

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

    const handleBack = () => {
        if (gameEnded) {
            dispatch({ type: "SET_GAME_WON" }); // Return to GameOver
        } else {
            dispatch({
                type: "CHANGE_SCREEN",
                payload: { screen: "map" },
            });
        }
    };

    const handlePlayAgain = () => {
        dispatch({ type: "RESTART_GAME" });
    };

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

    const winConditions = getWinConditions(player.difficulty);
    const getApartmentProgress = () => {
        const tiers = ["Basic", "Standard", "Luxury"];
        const playerTierIndex = tiers.indexOf(player.rental.apartmentTier);
        const requiredTierIndex = tiers.indexOf(winConditions.apartmentTier);
        if (playerTierIndex >= requiredTierIndex) {
            return 100;
        }
        return (playerTierIndex / requiredTierIndex) * 100;
    };
    const conditions = {
        cash: player.cash >= winConditions.cash,
        happiness: player.happiness >= winConditions.happiness,
        health: player.relationship.health >= winConditions.health,
        subjectsMastered: countMasteredSubjects() >= winConditions.subjectsMastered,
        isDating: player.relationship.isDating === winConditions.isDating,
        apartmentTier: (() => {
            const tiers = ["Basic", "Standard", "Luxury"];
            const playerTierIndex = tiers.indexOf(player.rental.apartmentTier);
            const requiredTierIndex = tiers.indexOf(winConditions.apartmentTier);
            return playerTierIndex >= requiredTierIndex;
        })(),
        possessions: player.possessions.length >= winConditions.possessions,
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">{player.name}'s Stats</h2>
                <button
                    onClick={handleBack}
                    className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
                >
                    {gameEnded ? "Back to Game Over" : "Back to Game"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-600 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Week</h3>
                    <p className="text-white">{player.week}</p>
                </div>
                <div className="bg-purple-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Cash</h3>
                    <p className={`text-white ${conditions.cash ? "text-green-400" : "text-red-400"}`}>
                        ${player.cash} / ${winConditions.cash}
                    </p>
                </div>
                <div className="bg-indigo-600 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Points</h3>
                    <p className="text-white">{player.points}</p>
                </div>
                <div className="bg-purple-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Energy</h3>
                    <p className="text-white">{player.energy}/100</p>
                </div>
                <div className="bg-indigo-600 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Happiness</h3>
                    <p className={`text-white ${conditions.happiness ? "text-green-400" : "text-red-400"}`}>
                        {player.happiness} / {winConditions.happiness}
                    </p>
                </div>
                <div className="bg-purple-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Subjects Mastered</h3>
                    <p className={`text-white ${conditions.subjectsMastered ? "text-green-400" : "text-red-400"}`}>
                        {countMasteredSubjects()} / {winConditions.subjectsMastered}
                    </p>
                </div>
                <div className="bg-indigo-600 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Relationship</h3>
                    <p className={`text-white ${conditions.isDating ? "text-green-400" : "text-red-400"}`}>
                        {player.relationship.isDating ? "Dating" : "Single"}
                    </p>
                </div>
                <div className="bg-purple-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Apartment</h3>
                    <p className={`text-white ${conditions.apartmentTier ? "text-green-400" : "text-red-400"}`}>
                        {player.rental.apartmentTier} / {winConditions.apartmentTier}
                    </p>
                    <div className="w-full bg-gray-700 rounded h-2 mt-2">
                        <div
                            className={`h-2 rounded ${conditions.apartmentTier ? "bg-green-500" : "bg-blue-500"}`}
                            style={{ width: `${getApartmentProgress()}%` }}
                        ></div>
                    </div>
                </div>
                <div className="bg-indigo-600 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Possessions</h3>
                    <p className={`text-white ${conditions.possessions ? "text-green-400" : "text-red-400"}`}>
                        {player.possessions.length} / {winConditions.possessions}
                    </p>
                </div>
            </div>

            <div className="mt-6 text-center flex flex-col sm:flex-row sm:justify-center gap-4">
                <button
                    onClick={() => dispatch({ type: "CHANGE_SCREEN", payload: { screen: "goals" } })}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                    View Goals
                </button>
                {gameEnded && (
                    <button
                        onClick={handlePlayAgain}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded-lg"
                    >
                        Play Again
                    </button>
                )}
            </div>
        </motion.div>
    );
}