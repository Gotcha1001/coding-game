"use client";

import { useGame } from "@/app/context/GameContext";
import { motion } from "framer-motion";
import { hooksData } from "@/data/hooksData";
import { nextJsData } from "@/data/nextJsData";
import { cssData } from "@/data/cssData";
import { pythonData } from "@/data/pythonData";
import { javaScriptData } from "@/data/javaScriptData";
import { typeScriptData } from "@/data/typeScriptData";
import { expressData } from "@/data/expressData";
import { cSharpData } from "@/data/cSharpData";
import { javaData } from "@/data/javaData";
import { cppData } from "@/data/cppData";

import { getWinConditions } from "@/data/winConditions";
import { reactNativeData } from "@/data/reactNativeData.";

export default function GoalsTracker() {
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
            dispatch({ type: "CHANGE_SCREEN", payload: { screen: "stats" } }); // Back to Stats post-game
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

    const winConditions = getWinConditions(player.difficulty);
    const masteryGoal = 1;

    // Debug logging for apartment tier comparison
    console.log('GoalsTracker - Player apartment tier:', player.rental.apartmentTier);
    console.log('GoalsTracker - Required apartment tier:', winConditions.apartmentTier);
    console.log('GoalsTracker - Comparison result:', player.rental.apartmentTier.toLowerCase() === winConditions.apartmentTier.toLowerCase());

    const cashProgress = Math.min(100, (player.cash / winConditions.cash) * 100);
    const happinessProgress = Math.min(100, (player.happiness / winConditions.happiness) * 100);

    const masteryProgress = {
        hooks: Object.keys(hooksData).reduce((acc, hook) => {
            acc[hook] = (player.hooksMastered?.[hook] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        nextJs: Object.keys(nextJsData).reduce((acc, topic) => {
            acc[topic] = (player.nextJsMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        css: Object.keys(cssData).reduce((acc, topic) => {
            acc[topic] = (player.cssMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        python: Object.keys(pythonData).reduce((acc, topic) => {
            acc[topic] = (player.pythonMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        javaScript: Object.keys(javaScriptData).reduce((acc, topic) => {
            acc[topic] = (player.javaScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        typeScript: Object.keys(typeScriptData).reduce((acc, topic) => {
            acc[topic] = (player.typeScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        express: Object.keys(expressData).reduce((acc, topic) => {
            acc[topic] = (player.expressMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        cSharp: Object.keys(cSharpData).reduce((acc, topic) => {
            acc[topic] = (player.cSharpMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        reactNative: Object.keys(reactNativeData).reduce((acc, topic) => {
            acc[topic] = (player.reactNativeMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        java: Object.keys(javaData).reduce((acc, topic) => {
            acc[topic] = (player.javaMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
        cpp: Object.keys(cppData).reduce((acc, topic) => {
            acc[topic] = (player.cppMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
            return acc;
        }, {}),
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

    const subjectsMastered = countMasteredSubjects();
    const subjectsMasteredProgress = Math.min(100, (subjectsMastered / winConditions.subjectsMastered) * 100);

    const conditionsMet = {
        cash: player.cash >= winConditions.cash,
        happiness: player.happiness >= winConditions.happiness,
        health: player.relationship.health >= winConditions.health,
        subjectsMastered: subjectsMastered >= winConditions.subjectsMastered,
        isDating: player.relationship.isDating === winConditions.isDating,
        apartmentTier: (() => {
            const tiers = ["Basic", "Standard", "Luxury"];
            const playerTierIndex = tiers.indexOf(player.rental.apartmentTier);
            const requiredTierIndex = tiers.indexOf(winConditions.apartmentTier);
            return playerTierIndex >= requiredTierIndex;
        })(),
        possessions: player.possessions.length >= winConditions.possessions,
    };

    // Debug logging for conditionsMet
    console.log('GoalsTracker - conditionsMet:', conditionsMet);

    const renderMasterySection = (title, data, progress, masteredKey) => (
        <>
            <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>
            {Object.keys(data).map((topic) => (
                <div key={topic} className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">{data[topic].title}</span>
                        <span className={`font-medium ${progress[topic] >= 100 ? "text-green-400" : "text-white"}`}>
                            {(player[masteredKey]?.[topic] || 0) >= 1 ? "Mastered" : "Not Mastered"}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${progress[topic] >= 100 ? "bg-green-500" : "bg-purple-500"}`}
                            style={{ width: `${progress[topic]}%` }}
                        ></div>
                    </div>
                    {progress[topic] >= 100 && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
                    )}
                </div>
            ))}
        </>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-yellow-400">Your Goals</h2>
                <button
                    onClick={handleBack}
                    className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
                >
                    {gameEnded ? "Back to Stats" : "Back to Game"}
                </button>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {/* Cash Goal */}
                <div className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">Cash</span>
                        <span className={`font-medium ${conditionsMet.cash ? "text-green-400" : "text-white"}`}>
                            ${player.cash} / ${winConditions.cash}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.cash ? "bg-green-500" : "bg-blue-500"}`}
                            style={{ width: `${cashProgress}%` }}
                        ></div>
                    </div>
                    {conditionsMet.cash && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
                    )}
                </div>

                {/* Happiness Goal */}
                <div className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">Happiness</span>
                        <span className={`font-medium ${conditionsMet.happiness ? "text-green-400" : "text-white"}`}>
                            {player.happiness} / {winConditions.happiness}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.happiness ? "bg-green-500" : "bg-yellow-500"}`}
                            style={{ width: `${happinessProgress}%` }}
                        ></div>
                    </div>
                    {conditionsMet.happiness && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
                    )}
                </div>

                {/* Health Goal */}
                <div className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">Health</span>
                        <span className={`font-medium ${conditionsMet.health ? "text-green-400" : "text-white"}`}>
                            {player.relationship.health} / {winConditions.health}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.health ? "bg-green-500" : "bg-red-500"}`}
                            style={{ width: `${(player.relationship.health / winConditions.health) * 100}%` }}
                        ></div>
                    </div>
                    {conditionsMet.health && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
                    )}
                </div>

                {/* Subjects Mastered Goal */}
                <div className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">Subjects Mastered</span>
                        <span className={`font-medium ${conditionsMet.subjectsMastered ? "text-green-400" : "text-white"}`}>
                            {subjectsMastered} / {winConditions.subjectsMastered}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.subjectsMastered ? "bg-green-500" : "bg-purple-500"}`}
                            style={{ width: `${subjectsMasteredProgress}%` }}
                        ></div>
                    </div>
                    {conditionsMet.subjectsMastered && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
                    )}
                </div>

                {/* Relationship Goal */}
                <div className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">Relationship</span>
                        <span className={`font-medium ${conditionsMet.isDating ? "text-green-400" : "text-white"}`}>
                            {player.relationship.isDating ? "Dating" : "Single"}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.isDating ? "bg-green-500" : "bg-pink-500"}`}
                            style={{ width: `${player.relationship.isDating ? 100 : 0}%` }}
                        ></div>
                    </div>
                    {conditionsMet.isDating && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
                    )}
                </div>

                {/* Apartment Goal */}
                <div className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">Apartment</span>
                        <span className={`font-medium ${conditionsMet.apartmentTier ? "text-green-400" : "text-white"}`}>
                            {player.rental.apartmentTier}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.apartmentTier ? "bg-green-500" : "bg-blue-500"}`}
                            style={{ width: `${conditionsMet.apartmentTier ? 100 : 0}%` }}
                        ></div>
                    </div>
                    {conditionsMet.apartmentTier && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
                    )}
                </div>

                {/* Possessions Goal */}
                <div className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">Possessions</span>
                        <span className={`font-medium ${conditionsMet.possessions ? "text-green-400" : "text-white"}`}>
                            {player.possessions.length} / {winConditions.possessions}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.possessions ? "bg-green-500" : "bg-yellow-500"}`}
                            style={{ width: `${Math.min(100, (player.possessions.length / winConditions.possessions) * 100)}%` }}
                        ></div>
                    </div>
                    {conditionsMet.possessions && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
                    )}
                </div>

                {/* Mastery Goals */}
                {renderMasterySection("React Hooks Mastery", hooksData, masteryProgress.hooks, "hooksMastered")}
                {renderMasterySection("Next.js Mastery", nextJsData, masteryProgress.nextJs, "nextJsMastered")}
                {renderMasterySection("JavaScript Mastery", javaScriptData, masteryProgress.javaScript, "javaScriptMastered")}
                {renderMasterySection("TypeScript Mastery", typeScriptData, masteryProgress.typeScript, "typeScriptMastered")}
                {renderMasterySection("CSS Mastery", cssData, masteryProgress.css, "cssMastered")}
                {renderMasterySection("Python Mastery", pythonData, masteryProgress.python, "pythonMastered")}
                {renderMasterySection("Express.js Mastery", expressData, masteryProgress.express, "expressMastered")}
                {renderMasterySection("C# Mastery", cSharpData, masteryProgress.cSharp, "cSharpMastered")}
                {renderMasterySection("React Native Mastery", reactNativeData, masteryProgress.reactNative, "reactNativeMastered")}
                {renderMasterySection("Java Mastery", javaData, masteryProgress.java, "javaMastered")}
                {renderMasterySection("C++ Mastery", cppData, masteryProgress.cpp, "cppMastered")}
            </div>

            <div className="mt-6 text-center flex flex-col sm:flex-row sm:justify-center gap-4">
                <button
                    onClick={() => dispatch({ type: "CHANGE_SCREEN", payload: { screen: "stats" } })}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                    View Stats
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