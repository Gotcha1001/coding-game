// "use client";

// import { useGame } from '@/app/context/GameContext';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { hooksData } from '@/data/hooksData';

// export default function Stats() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const goBack = () => {
//         dispatch({
//             type: 'CHANGE_SCREEN',
//             payload: { screen: 'map' },
//         });
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-white">{player.name}'s Stats</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Cash</h3>
//                     <p className="text-white">${player.cash}</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Points</h3>
//                     <p className="text-white">{player.points}</p>
//                 </div>
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Energy</h3>
//                     <p className="text-white">{player.energy}/100</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Hooks Mastered</h3>
//                     {Object.keys(hooksData).map((hook) => (
//                         <p key={hook} className="text-white">
//                             {hooksData[hook].title}: {player.hooksMastered[hook] || 0}/5
//                         </p>
//                     ))}
//                 </div>
//             </div>
//             <div className="mt-6 text-center">
//                 <button
//                     onClick={() => dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'goals' } })}
//                     className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
//                 >
//                     View Goals
//                 </button>
//             </div>
//         </motion.div>
//     );
// }


// "use client";

// import { useGame } from '@/app/context/GameContext';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { hooksData } from '@/data/hooksData';
// import { nextJsData } from '@/data/nextJsData';
// import { cssData } from '@/data/cssData';
// import { pythonData } from '@/data/pythonData';

// export default function Stats() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const goBack = () => {
//         dispatch({
//             type: 'CHANGE_SCREEN',
//             payload: { screen: 'map' },
//         });
//     };

//     const countMasteredSubjects = () => {
//         let subjectsMastered = 0;
//         subjectsMastered += Object.values(player.hooksMastered || {}).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.nextJsMastered || {}).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.cssMastered || {}).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.pythonMastered || {}).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.javaMastered || {}).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.cppMastered || {}).filter(v => v >= 1).length;
//         return subjectsMastered;
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-white">{player.name}'s Stats</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Week</h3>
//                     <p className="text-white">{player.week}</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Cash</h3>
//                     <p className="text-white">${player.cash}</p>
//                 </div>
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Points</h3>
//                     <p className="text-white">{player.points}</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Energy</h3>
//                     <p className="text-white">{player.energy}/100</p>
//                 </div>
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Happiness</h3>
//                     <p className="text-white">{player.happiness}/100</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Subjects Mastered</h3>
//                     <p className="text-white">{countMasteredSubjects()}</p>
//                 </div>
//             </div>
//             <div className="mt-6 text-center">
//                 <button
//                     onClick={() => dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'goals' } })}
//                     className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
//                 >
//                     View Goals
//                 </button>
//             </div>
//         </motion.div>
//     );
// }




// "use client";

// import { useGame } from '@/app/context/GameContext';
// import { motion } from 'framer-motion';

// export default function Stats() {
//     const { state, dispatch } = useGame();
//     const { player } = state || {};

//     if (!state || !player) {
//         return (
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//             >
//                 <h2 className="text-2xl font-bold text-yellow-400">Error</h2>
//                 <p className="text-white">Game state is not available. Please try again.</p>
//             </motion.div>
//         );
//     }

//     const goBack = () => {
//         dispatch({
//             type: 'CHANGE_SCREEN',
//             payload: { screen: 'map' },
//         });
//     };

//     const countMasteredSubjects = () => {
//         let subjectsMastered = 0;
//         subjectsMastered += Object.values(player.hooksMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.nextJsMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.cssMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.pythonMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.javaScriptMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.typeScriptMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.expressMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.cSharpMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.reactNativeMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.javaMastered).filter(v => v >= 1).length;
//         subjectsMastered += Object.values(player.cppMastered).filter(v => v >= 1).length;
//         return subjectsMastered;
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-white">{player.name}'s Stats</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Week</h3>
//                     <p className="text-white">{player.week}</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Cash</h3>
//                     <p className="text-white">${player.cash}</p>
//                 </div>
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Points</h3>
//                     <p className="text-white">{player.points}</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Energy</h3>
//                     <p className="text-white">{player.energy}/100</p>
//                 </div>
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Happiness</h3>
//                     <p className="text-white">{player.happiness}/100</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Subjects Mastered</h3>
//                     <p className="text-white">{countMasteredSubjects()}</p>
//                 </div>
//             </div>
//             <div className="mt-6 text-center">
//                 <button
//                     onClick={() => dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'goals' } })}
//                     className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
//                 >
//                     View Goals
//                 </button>
//             </div>
//         </motion.div>
//     );
// }



// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { motion } from "framer-motion";

// export default function Stats() {
//     const { state, dispatch } = useGame();
//     const { player } = state || {};

//     if (!state || !player) {
//         return (
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//             >
//                 <h2 className="text-2xl font-bold text-yellow-400">Error</h2>
//                 <p className="text-white">Game state is not available. Please try again.</p>
//             </motion.div>
//         );
//     }

//     const goBack = () => {
//         dispatch({
//             type: "CHANGE_SCREEN",
//             payload: { screen: "map" },
//         });
//     };

//     const countMasteredSubjects = () => {
//         let subjectsMastered = 0;
//         subjectsMastered += Object.values(player.hooksMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.nextJsMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.cssMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.pythonMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.javaScriptMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.typeScriptMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.expressMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.cSharpMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.reactNativeMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.javaMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.cppMastered || {}).filter((v) => v >= 1).length;
//         return subjectsMastered;
//     };

//     const cashGoal = 200;
//     const happinessGoal = 80;
//     const masteryGoal = 1;
//     const hasEnoughCash = player.cash >= cashGoal;
//     const hasEnoughHappiness = player.happiness >= happinessGoal;
//     const hasMasteredOneSubject = countMasteredSubjects() >= masteryGoal;

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-white">{player.name}'s Stats</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Week</h3>
//                     <p className="text-white">{player.week}</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Cash</h3>
//                     <p className={`text-white ${hasEnoughCash ? "text-green-400" : "text-red-400"}`}>
//                         ${player.cash} / ${cashGoal}
//                     </p>
//                 </div>
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Points</h3>
//                     <p className="text-white">{player.points}</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Energy</h3>
//                     <p className="text-white">{player.energy}/100</p>
//                 </div>
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Happiness</h3>
//                     <p className={`text-white ${hasEnoughHappiness ? "text-green-400" : "text-red-400"}`}>
//                         {player.happiness} / {happinessGoal}
//                     </p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Subjects Mastered</h3>
//                     <p className={`text-white ${hasMasteredOneSubject ? "text-green-400" : "text-red-400"}`}>
//                         {countMasteredSubjects()} / {masteryGoal}
//                     </p>
//                 </div>
//             </div>

//             <div className="mt-6 text-center">
//                 <button
//                     onClick={() => dispatch({ type: "CHANGE_SCREEN", payload: { screen: "goals" } })}
//                     className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
//                 >
//                     View Goals
//                 </button>
//             </div>
//         </motion.div>
//     );
// }



// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { motion } from "framer-motion";

// export default function Stats() {
//     const { state, dispatch } = useGame();
//     const { player, gameEnded } = state || {};

//     if (!state || !player) {
//         return (
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//             >
//                 <h2 className="text-2xl font-bold text-yellow-400">Error</h2>
//                 <p className="text-white">Game state is not available. Please try again.</p>
//             </motion.div>
//         );
//     }

//     const handleBack = () => {
//         if (gameEnded) {
//             dispatch({ type: "SET_GAME_WON" }); // Return to GameOver
//         } else {
//             dispatch({
//                 type: "CHANGE_SCREEN",
//                 payload: { screen: "map" },
//             });
//         }
//     };

//     const handlePlayAgain = () => {
//         dispatch({ type: "RESTART_GAME" });
//     };

//     const countMasteredSubjects = () => {
//         let subjectsMastered = 0;
//         subjectsMastered += Object.values(player.hooksMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.nextJsMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.cssMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.pythonMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.javaScriptMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.typeScriptMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.expressMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.cSharpMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.reactNativeMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.javaMastered || {}).filter((v) => v >= 1).length;
//         subjectsMastered += Object.values(player.cppMastered || {}).filter((v) => v >= 1).length;
//         return subjectsMastered;
//     };

//     const cashGoal = 200;
//     const happinessGoal = 80;
//     const masteryGoal = 1;
//     const hasEnoughCash = player.cash >= cashGoal;
//     const hasEnoughHappiness = player.happiness >= happinessGoal;
//     const hasMasteredOneSubject = countMasteredSubjects() >= masteryGoal;

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-white">{player.name}'s Stats</h2>
//                 <button
//                     onClick={handleBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     {gameEnded ? "Back to Game Over" : "Back to Game"}
//                 </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Week</h3>
//                     <p className="text-white">{player.week}</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Cash</h3>
//                     <p className={`text-white ${hasEnoughCash ? "text-green-400" : "text-red-400"}`}>
//                         ${player.cash} / ${cashGoal}
//                     </p>
//                 </div>
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Points</h3>
//                     <p className="text-white">{player.points}</p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Energy</h3>
//                     <p className="text-white">{player.energy}/100</p>
//                 </div>
//                 <div className="bg-indigo-600 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Happiness</h3>
//                     <p className={`text-white ${hasEnoughHappiness ? "text-green-400" : "text-red-400"}`}>
//                         {player.happiness} / {happinessGoal}
//                     </p>
//                 </div>
//                 <div className="bg-purple-700 p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold text-white mb-2">Subjects Mastered</h3>
//                     <p className={`text-white ${hasMasteredOneSubject ? "text-green-400" : "text-red-400"}`}>
//                         {countMasteredSubjects()} / {masteryGoal}
//                     </p>
//                 </div>
//             </div>

//             <div className="mt-6 text-center flex flex-col sm:flex-row sm:justify-center gap-4">
//                 <button
//                     onClick={() => dispatch({ type: "CHANGE_SCREEN", payload: { screen: "goals" } })}
//                     className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
//                 >
//                     View Goals
//                 </button>
//                 {gameEnded && (
//                     <button
//                         onClick={handlePlayAgain}
//                         className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded-lg"
//                     >
//                         Play Again
//                     </button>
//                 )}
//             </div>
//         </motion.div>
//     );
// }




"use client";

import { useGame } from "@/app/context/GameContext";
import { winConditions } from "@/data/winConditions";
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

    const subjectsMastered = countMasteredSubjects();

    const conditions = {
        cash: player.cash >= winConditions.cash,
        happiness: player.happiness >= winConditions.happiness,
        health: (player.relationship?.health || 0) >= winConditions.health,
        subjectsMastered: subjectsMastered >= winConditions.subjectsMastered,
        isDating: player.relationship?.isDating === winConditions.isDating,
        apartmentTier: player.rental?.apartmentTier === winConditions.apartmentTier,
        possessions: (player.possessions?.length || 0) >= winConditions.possessions,
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
                    <h3 className="text-lg font-semibold text-white mb-2">Health</h3>
                    <p className={`text-white ${conditions.health ? "text-green-400" : "text-red-400"}`}>
                        {player.relationship?.health || 0} / {winConditions.health}
                    </p>
                </div>
                <div className="bg-indigo-600 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Subjects Mastered</h3>
                    <p className={`text-white ${conditions.subjectsMastered ? "text-green-400" : "text-red-400"}`}>
                        {subjectsMastered} / {winConditions.subjectsMastered}
                    </p>
                </div>
                <div className="bg-purple-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Dating</h3>
                    <p className={`text-white ${conditions.isDating ? "text-green-400" : "text-red-400"}`}>
                        {player.relationship?.isDating ? "Yes" : "No"}
                    </p>
                </div>
                <div className="bg-indigo-600 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Apartment Tier</h3>
                    <p className={`text-white ${conditions.apartmentTier ? "text-green-400" : "text-red-400"}`}>
                        {player.rental?.apartmentTier || "None"} / {winConditions.apartmentTier}
                    </p>
                </div>
                <div className="bg-purple-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">Possessions</h3>
                    <p className={`text-white ${conditions.possessions ? "text-green-400" : "text-red-400"}`}>
                        {player.possessions?.length || 0} / {winConditions.possessions}
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
                <button
                    onClick={() => {
                        if (hasWon(player)) {
                            dispatch({ type: "SET_GAME_WON" });
                        } else {
                            toast.error("You haven't met all the goals yet!");
                        }
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                >
                    Check if You've Won
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