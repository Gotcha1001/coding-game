// "use client";

// import { useGame } from '@/app/context/GameContext';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { hooksData } from '@/data/hooksData';

// export default function GoalsTracker() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const goBack = () => {
//         dispatch({
//             type: 'CHANGE_SCREEN',
//             payload: { screen: 'map' },
//         });
//     };

//     const cashGoal = 1000;
//     const hookMasteryGoal = 5;

//     const cashProgress = Math.min(100, (player.cash / cashGoal) * 100);
//     const hooksProgress = Object.keys(hooksData).reduce((acc, hook) => {
//         acc[hook] = Math.min(100, ((player.hooksMastered[hook] || 0) / hookMasteryGoal) * 100);
//         return acc;
//     }, {});

//     const allHooksMastered = Object.keys(hooksData).every(
//         (hook) => (player.hooksMastered[hook] || 0) >= hookMasteryGoal
//     );
//     const cashGoalMet = player.cash >= cashGoal;
//     const hasWon = allHooksMastered && cashGoalMet;

//     useEffect(() => {
//         if (hasWon && !state.gameWon) {
//             dispatch({ type: 'SET_GAME_WON' });
//         }
//     }, [hasWon, state.gameWon, dispatch]);

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-yellow-400">Your Goals</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>
//             <div className="grid gap-6">
//                 {/* Cash Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Cash</span>
//                         <span className={`font-medium ${cashProgress >= 100 ? 'text-green-400' : 'text-white'}`}>
//                             ${player.cash} / ${cashGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${cashProgress >= 100 ? 'bg-green-500' : 'bg-blue-500'}`}
//                             style={{ width: `${cashProgress}%` }}
//                         ></div>
//                     </div>
//                     {cashProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//                 {/* Hooks Mastery Goals */}
//                 {Object.keys(hooksData).map((hook) => (
//                     <div key={hook} className="goal-item">
//                         <div className="flex justify-between mb-1">
//                             <span className="text-lg font-medium text-white">{hooksData[hook].title}</span>
//                             <span className={`font-medium ${hooksProgress[hook] >= 100 ? 'text-green-400' : 'text-white'}`}>
//                                 {player.hooksMastered[hook] || 0} / {hookMasteryGoal}
//                             </span>
//                         </div>
//                         <div className="w-full bg-gray-700 rounded h-4">
//                             <div
//                                 className={`h-4 rounded ${hooksProgress[hook] >= 100 ? 'bg-green-500' : 'bg-purple-500'}`}
//                                 style={{ width: `${hooksProgress[hook]}%` }}
//                             ></div>
//                         </div>
//                         {hooksProgress[hook] >= 100 && (
//                             <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                         )}
//                     </div>
//                 ))}
//                 {/* Win Condition */}
//                 {hasWon ? (
//                     <div className="mt-4 bg-green-900 p-3 rounded text-center">
//                         <p className="text-lg font-bold text-green-300">All goals achieved! You've won!</p>
//                     </div>
//                 ) : (
//                     <div className="mt-4 bg-blue-900 p-3 rounded text-center">
//                         <p className="text-blue-300">Master all hooks and earn $1000 to win!</p>
//                     </div>
//                 )}
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


// export default function GoalsTracker() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const goBack = () => {
//         dispatch({
//             type: 'CHANGE_SCREEN',
//             payload: { screen: 'map' },
//         });
//     };

//     const cashGoal = 1000;
//     const masteryGoal = 5;

//     const cashProgress = Math.min(100, (player.cash / cashGoal) * 100);
//     const hooksProgress = Object.keys(hooksData).reduce((acc, hook) => {
//         acc[hook] = Math.min(100, ((player.hooksMastered[hook] || 0) / masteryGoal) * 100);
//         return acc;
//     }, {});
//     const nextJsProgress = Object.keys(nextJsData).reduce((acc, topic) => {
//         acc[topic] = Math.min(100, ((player.nextJsMastered[topic] || 0) / masteryGoal) * 100);
//         return acc;
//     }, {});

//     const allHooksMastered = Object.keys(hooksData).every(
//         (hook) => (player.hooksMastered[hook] || 0) >= masteryGoal
//     );
//     const allNextJsMastered = Object.keys(nextJsData).every(
//         (topic) => (player.nextJsMastered[topic] || 0) >= masteryGoal
//     );
//     const cashGoalMet = player.cash >= cashGoal;
//     const hasWon = allHooksMastered && allNextJsMastered && cashGoalMet;

//     useEffect(() => {
//         // Dispatch messages when goals are achieved
//         Object.keys(nextJsData).forEach((topic) => {
//             if (
//                 (player.nextJsMastered[topic] || 0) >= masteryGoal &&
//                 nextJsProgress[topic] === 100
//             ) {
//                 dispatch({
//                     type: 'SET_MESSAGE',
//                     payload: { text: `Mastered ${nextJsData[topic].title}!` },
//                 });
//             }
//         });
//         Object.keys(hooksData).forEach((hook) => {
//             if (
//                 (player.hooksMastered[hook] || 0) >= masteryGoal &&
//                 hooksProgress[hook] === 100
//             ) {
//                 dispatch({
//                     type: 'SET_MESSAGE',
//                     payload: { text: `Mastered ${hooksData[hook].title}!` },
//                 });
//             }
//         });
//         if (cashGoalMet) {
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: `Achieved cash goal of $${cashGoal}!` },
//             });
//         }
//         if (hasWon && !state.gameWon) {
//             dispatch({ type: 'SET_GAME_WON' });
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: 'Congratulations! You’ve mastered all goals and won the game!' },
//             });
//         }
//     }, [
//         hasWon,
//         state.gameWon,
//         dispatch,
//         cashGoalMet,
//         hooksProgress,
//         nextJsProgress,
//         player.hooksMastered,
//         player.nextJsMastered,
//     ]);

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-yellow-400">Your Goals</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>
//             <div className="grid gap-6">
//                 {/* Cash Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Cash</span>
//                         <span className={`font-medium ${cashProgress >= 100 ? 'text-green-400' : 'text-white'}`}>
//                             ${player.cash} / ${cashGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${cashProgress >= 100 ? 'bg-green-500' : 'bg-blue-500'}`}
//                             style={{ width: `${cashProgress}%` }}
//                         ></div>
//                     </div>
//                     {cashProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//                 {/* Hooks Mastery Goals */}
//                 <h3 className="text-xl font-semibold text-white mt-4">React Hooks Mastery</h3>
//                 {Object.keys(hooksData).map((hook) => (
//                     <div key={hook} className="goal-item">
//                         <div className="flex justify-between mb-1">
//                             <span className="text-lg font-medium text-white">{hooksData[hook].title}</span>
//                             <span className={`font-medium ${hooksProgress[hook] >= 100 ? 'text-green-400' : 'text-white'}`}>
//                                 {player.hooksMastered[hook] || 0} / {masteryGoal}
//                             </span>
//                         </div>
//                         <div className="w-full bg-gray-700 rounded h-4">
//                             <div
//                                 className={`h-4 rounded ${hooksProgress[hook] >= 100 ? 'bg-green-500' : 'bg-purple-500'}`}
//                                 style={{ width: `${hooksProgress[hook]}%` }}
//                             ></div>
//                         </div>
//                         {hooksProgress[hook] >= 100 && (
//                             <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                         )}
//                     </div>
//                 ))}
//                 {/* Next.js Mastery Goals */}
//                 <h3 className="text-xl font-semibold text-white mt-4">Next.js Mastery</h3>
//                 {Object.keys(nextJsData).map((topic) => (
//                     <div key={topic} className="goal-item">
//                         <div className="flex justify-between mb-1">
//                             <span className="text-lg font-medium text-white">{nextJsData[topic].title}</span>
//                             <span className={`font-medium ${nextJsProgress[topic] >= 100 ? 'text-green-400' : 'text-white'}`}>
//                                 {player.nextJsMastered[topic] || 0} / {masteryGoal}
//                             </span>
//                         </div>
//                         <div className="w-full bg-gray-700 rounded h-4">
//                             <div
//                                 className={`h-4 rounded ${nextJsProgress[topic] >= 100 ? 'bg-green-500' : 'bg-teal-500'}`}
//                                 style={{ width: `${nextJsProgress[topic]}%` }}
//                             ></div>
//                         </div>
//                         {nextJsProgress[topic] >= 100 && (
//                             <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                         )}
//                     </div>
//                 ))}
//                 {/* Win Condition */}
//                 {hasWon ? (
//                     <div className="mt-4 bg-green-900 p-3 rounded text-center">
//                         <p className="text-lg font-bold text-green-300">All goals achieved! You've won!</p>
//                     </div>
//                 ) : (
//                     <div className="mt-4 bg-blue-900 p-3 rounded text-center">
//                         <p className="text-blue-300">
//                             Master all React hooks, Next.js topics, and earn ${cashGoal} to win!
//                         </p>
//                     </div>
//                 )}
//             </div>
//         </motion.div>
//     );
// }


//only complete the subject once perfect to get the score

// "use client";

// import { useGame } from '@/app/context/GameContext';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { hooksData } from '@/data/hooksData';
// import { nextJsData } from '@/data/nextJsData';

// export default function GoalsTracker() {
//     const { state, dispatch } = useGame();
//     const { player } = state || {};

//     // Fallback if state or player is missing
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

//     const cashGoal = 1000;
//     const masteryGoal = 1; // One-time mastery with perfect quiz score

//     const cashProgress = Math.min(100, (player.cash / cashGoal) * 100);
//     const hooksProgress = Object.keys(hooksData).reduce((acc, hook) => {
//         acc[hook] = (player.hooksMastered?.[hook] || 0) >= masteryGoal ? 100 : 0;
//         return acc;
//     }, {});
//     const nextJsProgress = Object.keys(nextJsData).reduce((acc, topic) => {
//         acc[topic] = (player.nextJsMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//         return acc;
//     }, {});

//     const allHooksMastered = Object.keys(hooksData).every(
//         (hook) => (player.hooksMastered?.[hook] || 0) >= masteryGoal
//     );
//     const allNextJsMastered = Object.keys(nextJsData).every(
//         (topic) => (player.nextJsMastered?.[topic] || 0) >= masteryGoal
//     );
//     const cashGoalMet = player.cash >= cashGoal;
//     const hasWon = allHooksMastered && allNextJsMastered && cashGoalMet;

//     useEffect(() => {
//         // Dispatch messages when goals are achieved
//         Object.keys(nextJsData).forEach((topic) => {
//             if (
//                 (player.nextJsMastered?.[topic] || 0) >= masteryGoal &&
//                 nextJsProgress[topic] === 100
//             ) {
//                 dispatch({
//                     type: 'SET_MESSAGE',
//                     payload: { text: `Mastered ${nextJsData[topic].title} with a perfect score!` },
//                 });
//             }
//         });
//         Object.keys(hooksData).forEach((hook) => {
//             if (
//                 (player.hooksMastered?.[hook] || 0) >= masteryGoal &&
//                 hooksProgress[hook] === 100
//             ) {
//                 dispatch({
//                     type: 'SET_MESSAGE',
//                     payload: { text: `Mastered ${hooksData[hook].title} with a perfect score!` },
//                 });
//             }
//         });
//         if (cashGoalMet) {
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: `Achieved cash goal of $${cashGoal}!` },
//             });
//         }
//         if (hasWon && !state.gameWon) {
//             dispatch({ type: 'SET_GAME_WON' });
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: 'Congratulations! You’ve mastered all goals and won the game!' },
//             });
//         }
//     }, [
//         hasWon,
//         state.gameWon,
//         dispatch,
//         cashGoalMet,
//         hooksProgress,
//         nextJsProgress,
//         player.hooksMastered,
//         player.nextJsMastered,
//     ]);

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-yellow-400">Your Goals</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>
//             <div className="grid gap-6">
//                 {/* Cash Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Cash</span>
//                         <span className={`font-medium ${cashProgress >= 100 ? 'text-green-400' : 'text-white'}`}>
//                             ${player.cash} / ${cashGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${cashProgress >= 100 ? 'bg-green-500' : 'bg-blue-500'}`}
//                             style={{ width: `${cashProgress}%` }}
//                         ></div>
//                     </div>
//                     {cashProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//                 {/* Hooks Mastery Goals */}
//                 <h3 className="text-xl font-semibold text-white mt-4">React Hooks Mastery</h3>
//                 {Object.keys(hooksData).map((hook) => (
//                     <div key={hook} className="goal-item">
//                         <div className="flex justify-between mb-1">
//                             <span className="text-lg font-medium text-white">{hooksData[hook].title}</span>
//                             <span className={`font-medium ${hooksProgress[hook] >= 100 ? 'text-green-400' : 'text-white'}`}>
//                                 {(player.hooksMastered?.[hook] || 0) >= masteryGoal ? 'Mastered' : 'Not Mastered'}
//                             </span>
//                         </div>
//                         <div className="w-full bg-gray-700 rounded h-4">
//                             <div
//                                 className={`h-4 rounded ${hooksProgress[hook] >= 100 ? 'bg-green-500' : 'bg-purple-500'}`}
//                                 style={{ width: `${hooksProgress[hook]}%` }}
//                             ></div>
//                         </div>
//                         {hooksProgress[hook] >= 100 && (
//                             <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                         )}
//                     </div>
//                 ))}
//                 {/* Next.js Mastery Goals */}
//                 <h3 className="text-xl font-semibold text-white mt-4">Next.js Mastery</h3>
//                 {Object.keys(nextJsData).map((topic) => (
//                     <div key={topic} className="goal-item">
//                         <div className="flex justify-between mb-1">
//                             <span className="text-lg font-medium text-white">{nextJsData[topic].title}</span>
//                             <span className={`font-medium ${nextJsProgress[topic] >= 100 ? 'text-green-400' : 'text-white'}`}>
//                                 {(player.nextJsMastered?.[topic] || 0) >= masteryGoal ? 'Mastered' : 'Not Mastered'}
//                             </span>
//                         </div>
//                         <div className="w-full bg-gray-700 rounded h-4">
//                             <div
//                                 className={`h-4 rounded ${nextJsProgress[topic] >= 100 ? 'bg-green-500' : 'bg-teal-500'}`}
//                                 style={{ width: `${nextJsProgress[topic]}%` }}
//                             ></div>
//                         </div>
//                         {nextJsProgress[topic] >= 100 && (
//                             <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                         )}
//                     </div>
//                 ))}
//                 {/* Win Condition */}
//                 {hasWon ? (
//                     <div className="mt-4 bg-green-900 p-3 rounded text-center">
//                         <p className="text-lg font-bold text-green-300">All goals achieved! You've won!</p>
//                     </div>
//                 ) : (
//                     <div className="mt-4 bg-blue-900 p-3 rounded text-center">
//                         <p className="text-blue-300">
//                             Master all React hooks and Next.js topics with perfect quiz scores, and earn ${cashGoal} to win!
//                         </p>
//                     </div>
//                 )}
//             </div>
//         </motion.div>
//     );
// }

//EASIER TO FINISH THE GAME FOR TESTING ONE SUBJECT MASTERED 80 HAPPY AND CASH 200

// "use client";

// import { useGame } from '@/app/context/GameContext';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { hooksData } from '@/data/hooksData';
// import { nextJsData } from '@/data/nextJsData';
// import { cssData } from '@/data/cssData';
// import { pythonData } from '@/data/pythonData';
// import { javaScriptData } from '@/data/javaScriptData';
// import { typeScriptData } from '@/data/typeScriptData';
// import { expressData } from '@/data/expressData';
// import { cSharpData } from '@/data/cSharpData';

// import { javaData } from '@/data/javaData';
// import { cppData } from '@/data/cppData';
// import { reactNativeData } from '@/data/reactNativeData.';

// export default function GoalsTracker() {
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

//     const cashGoal = 200;
//     const happinessGoal = 80;
//     const masteryGoal = 1;

//     const cashProgress = Math.min(100, (player.cash / cashGoal) * 100);
//     const happinessProgress = Math.min(100, (player.happiness / happinessGoal) * 100);

//     const masteryProgress = {
//         hooks: Object.keys(hooksData).reduce((acc, hook) => {
//             acc[hook] = (player.hooksMastered?.[hook] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         nextJs: Object.keys(nextJsData).reduce((acc, topic) => {
//             acc[topic] = (player.nextJsMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         css: Object.keys(cssData).reduce((acc, topic) => {
//             acc[topic] = (player.cssMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         python: Object.keys(pythonData).reduce((acc, topic) => {
//             acc[topic] = (player.pythonMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         javaScript: Object.keys(javaScriptData).reduce((acc, topic) => {
//             acc[topic] = (player.javaScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         typeScript: Object.keys(typeScriptData).reduce((acc, topic) => {
//             acc[topic] = (player.typeScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         express: Object.keys(expressData).reduce((acc, topic) => {
//             acc[topic] = (player.expressMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         cSharp: Object.keys(cSharpData).reduce((acc, topic) => {
//             acc[topic] = (player.cSharpMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         reactNative: Object.keys(reactNativeData).reduce((acc, topic) => {
//             acc[topic] = (player.reactNativeMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         java: Object.keys(javaData).reduce((acc, topic) => {
//             acc[topic] = (player.javaMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         cpp: Object.keys(cppData).reduce((acc, topic) => {
//             acc[topic] = (player.cppMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//     };

//     const hasMasteredOneSubject = [
//         ...Object.values(player.hooksMastered),
//         ...Object.values(player.nextJsMastered),
//         ...Object.values(player.cssMastered),
//         ...Object.values(player.pythonMastered),
//         ...Object.values(player.javaScriptMastered),
//         ...Object.values(player.typeScriptMastered),
//         ...Object.values(player.expressMastered),
//         ...Object.values(player.cSharpMastered),
//         ...Object.values(player.reactNativeMastered),
//         ...Object.values(player.javaMastered),
//         ...Object.values(player.cppMastered),
//     ].some(mastery => mastery >= masteryGoal);

//     const cashGoalMet = player.cash >= cashGoal;
//     const happinessGoalMet = player.happiness >= happinessGoal;
//     const hasWon = cashGoalMet && hasMasteredOneSubject && happinessGoalMet;

//     useEffect(() => {
//         if (cashGoalMet) {
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: `Achieved cash goal of $${cashGoal}!` },
//             });
//         }
//         if (happinessGoalMet) {
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: `Achieved happiness goal of ${happinessGoal}!` },
//             });
//         }
//         if (hasMasteredOneSubject) {
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: 'Mastered at least one subject!' },
//             });
//         }
//         if (hasWon && !state.gameWon) {
//             dispatch({ type: 'SET_GAME_WON' });
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: 'Congratulations! You’ve achieved all goals and won the game!' },
//             });
//         }
//     }, [hasWon, state.gameWon, dispatch, cashGoalMet, happinessGoalMet, hasMasteredOneSubject]);

//     const renderMasterySection = (title, data, progress, masteredKey) => (
//         <>
//             <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>
//             {Object.keys(data).map((topic) => (
//                 <div key={topic} className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">{data[topic].title}</span>
//                         <span className={`font-medium ${progress[topic] >= 100 ? 'text-green-400' : 'text-white'}`}>
//                             {(player[masteredKey]?.[topic] || 0) >= masteryGoal ? 'Mastered' : 'Not Mastered'}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${progress[topic] >= 100 ? 'bg-green-500' : 'bg-purple-500'}`}
//                             style={{ width: `${progress[topic]}%` }}
//                         ></div>
//                     </div>
//                     {progress[topic] >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//             ))}
//         </>
//     );

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-yellow-400">Your Goals</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>
//             <div className="grid gap-6">
//                 {/* Cash Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Cash</span>
//                         <span className={`font-medium ${cashProgress >= 100 ? 'text-green-400' : 'text-white'}`}>
//                             ${player.cash} / ${cashGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${cashProgress >= 100 ? 'bg-green-500' : 'bg-blue-500'}`}
//                             style={{ width: `${cashProgress}%` }}
//                         ></div>
//                     </div>
//                     {cashProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//                 {/* Happiness Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Happiness</span>
//                         <span className={`font-medium ${happinessProgress >= 100 ? 'text-green-400' : 'text-white'}`}>
//                             {player.happiness} / {happinessGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${happinessProgress >= 100 ? 'bg-green-500' : 'bg-yellow-500'}`}
//                             style={{ width: `${happinessProgress}%` }}
//                         ></div>
//                     </div>
//                     {happinessProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//                 {/* Mastery Goals */}
//                 {renderMasterySection('React Hooks Mastery', hooksData, masteryProgress.hooks, 'hooksMastered')}
//                 {renderMasterySection('Next.js Mastery', nextJsData, masteryProgress.nextJs, 'nextJsMastered')}
//                 {renderMasterySection('CSS Mastery', cssData, masteryProgress.css, 'cssMastered')}
//                 {renderMasterySection('Python Mastery', pythonData, masteryProgress.python, 'pythonMastered')}
//                 {renderMasterySection('JavaScript Mastery', javaScriptData, masteryProgress.javaScript, 'javaScriptMastered')}
//                 {renderMasterySection('TypeScript Mastery', typeScriptData, masteryProgress.typeScript, 'typeScriptMastered')}
//                 {renderMasterySection('Express.js Mastery', expressData, masteryProgress.express, 'expressMastered')}
//                 {renderMasterySection('C# Mastery', cSharpData, masteryProgress.cSharp, 'cSharpMastered')}
//                 {renderMasterySection('React Native Mastery', reactNativeData, masteryProgress.reactNative, 'reactNativeMastered')}
//                 {renderMasterySection('Java Mastery', javaData, masteryProgress.java, 'javaMastered')}
//                 {renderMasterySection('C++ Mastery', cppData, masteryProgress.cpp, 'cppMastered')}
//                 {/* Win Condition */}
//                 {hasWon ? (
//                     <div className="mt-4 bg-green-900 p-3 rounded text-center">
//                         <p className="text-lg font-bold text-green-300">All goals achieved! You've won!</p>
//                     </div>
//                 ) : (
//                     <div className="mt-4 bg-blue-900 p-3 rounded text-center">
//                         <p className="text-blue-300">
//                             Earn ${cashGoal}, master at least one subject, and reach {happinessGoal} happiness to win!
//                         </p>
//                     </div>
//                 )}
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
// import { javaScriptData } from '@/data/javaScriptData';
// import { typeScriptData } from '@/data/typeScriptData';
// import { expressData } from '@/data/expressData';
// import { cSharpData } from '@/data/cSharpData';

// import { javaData } from '@/data/javaData';
// import { cppData } from '@/data/cppData';
// import { reactNativeData } from '@/data/reactNativeData.';

// export default function GoalsTracker() {
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

//     const cashGoal = 200;
//     const happinessGoal = 80;
//     const masteryGoal = 1;

//     const cashProgress = Math.min(100, (player.cash / cashGoal) * 100);
//     const happinessProgress = Math.min(100, (player.happiness / happinessGoal) * 100);

//     const masteryProgress = {
//         hooks: Object.keys(hooksData).reduce((acc, hook) => {
//             acc[hook] = (player.hooksMastered?.[hook] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         nextJs: Object.keys(nextJsData).reduce((acc, topic) => {
//             acc[topic] = (player.nextJsMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         css: Object.keys(cssData).reduce((acc, topic) => {
//             acc[topic] = (player.cssMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         python: Object.keys(pythonData).reduce((acc, topic) => {
//             acc[topic] = (player.pythonMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         javaScript: Object.keys(javaScriptData).reduce((acc, topic) => {
//             acc[topic] = (player.javaScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         typeScript: Object.keys(typeScriptData).reduce((acc, topic) => {
//             acc[topic] = (player.typeScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         express: Object.keys(expressData).reduce((acc, topic) => {
//             acc[topic] = (player.expressMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         cSharp: Object.keys(cSharpData).reduce((acc, topic) => {
//             acc[topic] = (player.cSharpMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         reactNative: Object.keys(reactNativeData).reduce((acc, topic) => {
//             acc[topic] = (player.reactNativeMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         java: Object.keys(javaData).reduce((acc, topic) => {
//             acc[topic] = (player.javaMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         cpp: Object.keys(cppData).reduce((acc, topic) => {
//             acc[topic] = (player.cppMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//     };

//     const hasMasteredOneSubject = [
//         ...Object.values(player.hooksMastered),
//         ...Object.values(player.nextJsMastered),
//         ...Object.values(player.cssMastered),
//         ...Object.values(player.pythonMastered),
//         ...Object.values(player.javaScriptMastered),
//         ...Object.values(player.typeScriptMastered),
//         ...Object.values(player.expressMastered),
//         ...Object.values(player.cSharpMastered),
//         ...Object.values(player.reactNativeMastered),
//         ...Object.values(player.javaMastered),
//         ...Object.values(player.cppMastered),
//     ].some(mastery => mastery >= masteryGoal);

//     const cashGoalMet = player.cash >= cashGoal;
//     const happinessGoalMet = player.happiness >= happinessGoal;
//     const hasWon = cashGoalMet && hasMasteredOneSubject && happinessGoalMet;

//     useEffect(() => {
//         if (cashGoalMet) {
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: `Achieved cash goal of $${cashGoal}!` },
//             });
//         }
//         if (happinessGoalMet) {
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: `Achieved happiness goal of ${happinessGoal}!` },
//             });
//         }
//         if (hasMasteredOneSubject) {
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: 'Mastered at least one subject!' },
//             });
//         }
//         if (hasWon && !state.gameWon) {
//             dispatch({ type: 'SET_GAME_WON' });
//             dispatch({
//                 type: 'SET_MESSAGE',
//                 payload: { text: 'Congratulations! You’ve achieved all goals and won the game!' },
//             });
//         }
//     }, [hasWon, state.gameWon, dispatch, cashGoalMet, happinessGoalMet, hasMasteredOneSubject]);

//     const renderMasterySection = (title, data, progress, masteredKey) => (
//         <>
//             <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>
//             {Object.keys(data).map((topic) => (
//                 <div key={topic} className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">{data[topic].title}</span>
//                         <span className={`font-medium ${progress[topic] >= 100 ? 'text-green-400' : 'text-white'}`}>
//                             {(player[masteredKey]?.[topic] || 0) >= masteryGoal ? 'Mastered' : 'Not Mastered'}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${progress[topic] >= 100 ? 'bg-green-500' : 'bg-purple-500'}`}
//                             style={{ width: `${progress[topic]}%` }}
//                         ></div>
//                     </div>
//                     {progress[topic] >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//             ))}
//         </>
//     );

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-yellow-400">Your Goals</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>
//             <div className="grid gap-6">
//                 {/* Cash Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Cash</span>
//                         <span className={`font-medium ${cashProgress >= 100 ? 'text-green-400' : 'text-white'}`}>
//                             ${player.cash} / ${cashGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${cashProgress >= 100 ? 'bg-green-500' : 'bg-blue-500'}`}
//                             style={{ width: `${cashProgress}%` }}
//                         ></div>
//                     </div>
//                     {cashProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//                 {/* Happiness Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Happiness</span>
//                         <span className={`font-medium ${happinessProgress >= 100 ? 'text-green-400' : 'text-white'}`}>
//                             {player.happiness} / {happinessGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${happinessProgress >= 100 ? 'bg-green-500' : 'bg-yellow-500'}`}
//                             style={{ width: `${happinessProgress}%` }}
//                         ></div>
//                     </div>
//                     {happinessProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//                 {/* Mastery Goals */}
//                 {renderMasterySection('React Hooks Mastery', hooksData, masteryProgress.hooks, 'hooksMastered')}
//                 {renderMasterySection('Next.js Mastery', nextJsData, masteryProgress.nextJs, 'nextJsMastered')}
//                 {renderMasterySection('JavaScript Mastery', javaScriptData, masteryProgress.javaScript, 'javaScriptMastered')}
//                 {renderMasterySection('TypeScript Mastery', typeScriptData, masteryProgress.typeScript, 'typeScriptMastered')}
//                 {renderMasterySection('CSS Mastery', cssData, masteryProgress.css, 'cssMastered')}
//                 {renderMasterySection('Python Mastery', pythonData, masteryProgress.python, 'pythonMastered')}
//                 {renderMasterySection('Express.js Mastery', expressData, masteryProgress.express, 'expressMastered')}
//                 {renderMasterySection('C# Mastery', cSharpData, masteryProgress.cSharp, 'cSharpMastered')}
//                 {renderMasterySection('React Native Mastery', reactNativeData, masteryProgress.reactNative, 'reactNativeMastered')}
//                 {renderMasterySection('Java Mastery', javaData, masteryProgress.java, 'javaMastered')}
//                 {renderMasterySection('C++ Mastery', cppData, masteryProgress.cpp, 'cppMastered')}
//                 {/* Win Condition */}
//                 {hasWon ? (
//                     <div className="mt-4 bg-green-900 p-3 rounded text-center">
//                         <p className="text-lg font-bold text-green-300">All goals achieved! You've won!</p>
//                     </div>
//                 ) : (
//                     <div className="mt-4 bg-blue-900 p-3 rounded text-center">
//                         <p className="text-blue-300">
//                             Earn ${cashGoal}, master at least one subject, and reach {happinessGoal} happiness to win!
//                         </p>
//                     </div>
//                 )}
//             </div>
//         </motion.div>
//     );
// }


// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { motion } from "framer-motion";
// import { hooksData } from "@/data/hooksData";
// import { nextJsData } from "@/data/nextJsData";
// import { cssData } from "@/data/cssData";
// import { pythonData } from "@/data/pythonData";
// import { javaScriptData } from "@/data/javaScriptData";
// import { typeScriptData } from "@/data/typeScriptData";
// import { expressData } from "@/data/expressData";
// import { cSharpData } from "@/data/cSharpData";
// import { javaData } from "@/data/javaData";
// import { cppData } from "@/data/cppData";
// import { reactNativeData } from "@/data/reactNativeData.";


// export default function GoalsTracker() {
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

//     const cashGoal = 200;
//     const happinessGoal = 80;
//     const masteryGoal = 1;

//     const cashProgress = Math.min(100, (player.cash / cashGoal) * 100);
//     const happinessProgress = Math.min(100, (player.happiness / happinessGoal) * 100);

//     const masteryProgress = {
//         hooks: Object.keys(hooksData).reduce((acc, hook) => {
//             acc[hook] = (player.hooksMastered?.[hook] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         nextJs: Object.keys(nextJsData).reduce((acc, topic) => {
//             acc[topic] = (player.nextJsMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         css: Object.keys(cssData).reduce((acc, topic) => {
//             acc[topic] = (player.cssMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         python: Object.keys(pythonData).reduce((acc, topic) => {
//             acc[topic] = (player.pythonMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         javaScript: Object.keys(javaScriptData).reduce((acc, topic) => {
//             acc[topic] = (player.javaScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         typeScript: Object.keys(typeScriptData).reduce((acc, topic) => {
//             acc[topic] = (player.typeScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         express: Object.keys(expressData).reduce((acc, topic) => {
//             acc[topic] = (player.expressMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         cSharp: Object.keys(cSharpData).reduce((acc, topic) => {
//             acc[topic] = (player.cSharpMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         reactNative: Object.keys(reactNativeData).reduce((acc, topic) => {
//             acc[topic] = (player.reactNativeMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         java: Object.keys(javaData).reduce((acc, topic) => {
//             acc[topic] = (player.javaMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         cpp: Object.keys(cppData).reduce((acc, topic) => {
//             acc[topic] = (player.cppMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//     };

//     const hasMasteredOneSubject = [
//         ...Object.values(player.hooksMastered || {}),
//         ...Object.values(player.nextJsMastered || {}),
//         ...Object.values(player.cssMastered || {}),
//         ...Object.values(player.pythonMastered || {}),
//         ...Object.values(player.javaScriptMastered || {}),
//         ...Object.values(player.typeScriptMastered || {}),
//         ...Object.values(player.expressMastered || {}),
//         ...Object.values(player.cSharpMastered || {}),
//         ...Object.values(player.reactNativeMastered || {}),
//         ...Object.values(player.javaMastered || {}),
//         ...Object.values(player.cppMastered || {}),
//     ].some((mastery) => mastery >= masteryGoal);

//     const cashGoalMet = player.cash >= cashGoal;
//     const happinessGoalMet = player.happiness >= happinessGoal;
//     const hasWon = cashGoalMet && hasMasteredOneSubject && happinessGoalMet;

//     const renderMasterySection = (title, data, progress, masteredKey) => (
//         <>
//             <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>
//             {Object.keys(data).map((topic) => (
//                 <div key={topic} className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">{data[topic].title}</span>
//                         <span className={`font-medium ${progress[topic] >= 100 ? "text-green-400" : "text-white"}`}>
//                             {(player[masteredKey]?.[topic] || 0) >= masteryGoal ? "Mastered" : "Not Mastered"}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${progress[topic] >= 100 ? "bg-green-500" : "bg-purple-500"}`}
//                             style={{ width: `${progress[topic]}%` }}
//                         ></div>
//                     </div>
//                     {progress[topic] >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//             ))}
//         </>
//     );

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-yellow-400">Your Goals</h2>
//                 <button
//                     onClick={goBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Game
//                 </button>
//             </div>
//             <div className="grid gap-6">
//                 {/* Cash Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Cash</span>
//                         <span className={`font-medium ${cashProgress >= 100 ? "text-green-400" : "text-white"}`}>
//                             ${player.cash} / ${cashGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${cashProgress >= 100 ? "bg-green-500" : "bg-blue-500"}`}
//                             style={{ width: `${cashProgress}%` }}
//                         ></div>
//                     </div>
//                     {cashProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>

//                 {/* Happiness Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Happiness</span>
//                         <span className={`font-medium ${happinessProgress >= 100 ? "text-green-400" : "text-white"}`}>
//                             {player.happiness} / {happinessGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${happinessProgress >= 100 ? "bg-green-500" : "bg-yellow-500"}`}
//                             style={{ width: `${happinessProgress}%` }}
//                         ></div>
//                     </div>
//                     {happinessProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>

//                 {/* Mastery Goals */}
//                 {renderMasterySection("React Hooks Mastery", hooksData, masteryProgress.hooks, "hooksMastered")}
//                 {renderMasterySection("Next.js Mastery", nextJsData, masteryProgress.nextJs, "nextJsMastered")}
//                 {renderMasterySection("JavaScript Mastery", javaScriptData, masteryProgress.javaScript, "javaScriptMastered")}
//                 {renderMasterySection("TypeScript Mastery", typeScriptData, masteryProgress.typeScript, "typeScriptMastered")}
//                 {renderMasterySection("CSS Mastery", cssData, masteryProgress.css, "cssMastered")}
//                 {renderMasterySection("Python Mastery", pythonData, masteryProgress.python, "pythonMastered")}
//                 {renderMasterySection("Express.js Mastery", expressData, masteryProgress.express, "expressMastered")}
//                 {renderMasterySection("C# Mastery", cSharpData, masteryProgress.cSharp, "cSharpMastered")}
//                 {renderMasterySection("React Native Mastery", reactNativeData, masteryProgress.reactNative, "reactNativeMastered")}
//                 {renderMasterySection("Java Mastery", javaData, masteryProgress.java, "javaMastered")}
//                 {renderMasterySection("C++ Mastery", cppData, masteryProgress.cpp, "cppMastered")}

//                 {/* Win Condition */}
//                 {hasWon ? (
//                     <div className="mt-4 bg-green-900 p-3 rounded text-center">
//                         <p className="text-lg font-bold text-green-300">All goals achieved! You've won!</p>
//                     </div>
//                 ) : (
//                     <div className="mt-4 bg-blue-900 p-3 rounded text-center">
//                         <p className="text-blue-300">
//                             Earn ${cashGoal}, master at least one subject, and reach {happinessGoal} happiness to win!
//                         </p>
//                     </div>
//                 )}
//             </div>
//         </motion.div>
//     );
// }





// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { motion } from "framer-motion";
// import { hooksData } from "@/data/hooksData";
// import { nextJsData } from "@/data/nextJsData";
// import { cssData } from "@/data/cssData";
// import { pythonData } from "@/data/pythonData";
// import { javaScriptData } from "@/data/javaScriptData";
// import { typeScriptData } from "@/data/typeScriptData";
// import { expressData } from "@/data/expressData";
// import { cSharpData } from "@/data/cSharpData";
// import { javaData } from "@/data/javaData";
// import { cppData } from "@/data/cppData";
// import { reactNativeData } from "@/data/reactNativeData.";


// export default function GoalsTracker() {
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
//             dispatch({ type: "CHANGE_SCREEN", payload: { screen: "stats" } }); // Back to Stats post-game
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

//     const cashGoal = 200;
//     const happinessGoal = 80;
//     const masteryGoal = 1;

//     const cashProgress = Math.min(100, (player.cash / cashGoal) * 100);
//     const happinessProgress = Math.min(100, (player.happiness / happinessGoal) * 100);

//     const masteryProgress = {
//         hooks: Object.keys(hooksData).reduce((acc, hook) => {
//             acc[hook] = (player.hooksMastered?.[hook] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         nextJs: Object.keys(nextJsData).reduce((acc, topic) => {
//             acc[topic] = (player.nextJsMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         css: Object.keys(cssData).reduce((acc, topic) => {
//             acc[topic] = (player.cssMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         python: Object.keys(pythonData).reduce((acc, topic) => {
//             acc[topic] = (player.pythonMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         javaScript: Object.keys(javaScriptData).reduce((acc, topic) => {
//             acc[topic] = (player.javaScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         typeScript: Object.keys(typeScriptData).reduce((acc, topic) => {
//             acc[topic] = (player.typeScriptMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         express: Object.keys(expressData).reduce((acc, topic) => {
//             acc[topic] = (player.expressMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         cSharp: Object.keys(cSharpData).reduce((acc, topic) => {
//             acc[topic] = (player.cSharpMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         reactNative: Object.keys(reactNativeData).reduce((acc, topic) => {
//             acc[topic] = (player.reactNativeMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         java: Object.keys(javaData).reduce((acc, topic) => {
//             acc[topic] = (player.javaMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//         cpp: Object.keys(cppData).reduce((acc, topic) => {
//             acc[topic] = (player.cppMastered?.[topic] || 0) >= masteryGoal ? 100 : 0;
//             return acc;
//         }, {}),
//     };

//     const hasMasteredOneSubject = [
//         ...Object.values(player.hooksMastered || {}),
//         ...Object.values(player.nextJsMastered || {}),
//         ...Object.values(player.cssMastered || {}),
//         ...Object.values(player.pythonMastered || {}),
//         ...Object.values(player.javaScriptMastered || {}),
//         ...Object.values(player.typeScriptMastered || {}),
//         ...Object.values(player.expressMastered || {}),
//         ...Object.values(player.cSharpMastered || {}),
//         ...Object.values(player.reactNativeMastered || {}),
//         ...Object.values(player.javaMastered || {}),
//         ...Object.values(player.cppMastered || {}),
//     ].some((mastery) => mastery >= masteryGoal);

//     const cashGoalMet = player.cash >= cashGoal;
//     const happinessGoalMet = player.happiness >= happinessGoal;
//     const hasWon = cashGoalMet && hasMasteredOneSubject && happinessGoalMet;

//     const renderMasterySection = (title, data, progress, masteredKey) => (
//         <>
//             <h3 className="text-xl font-semibold text-white mt-4">{title}</h3>
//             {Object.keys(data).map((topic) => (
//                 <div key={topic} className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">{data[topic].title}</span>
//                         <span className={`font-medium ${progress[topic] >= 100 ? "text-green-400" : "text-white"}`}>
//                             {(player[masteredKey]?.[topic] || 0) >= masteryGoal ? "Mastered" : "Not Mastered"}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${progress[topic] >= 100 ? "bg-green-500" : "bg-purple-500"}`}
//                             style={{ width: `${progress[topic]}%` }}
//                         ></div>
//                     </div>
//                     {progress[topic] >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>
//             ))}
//         </>
//     );

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-yellow-400">Your Goals</h2>
//                 <button
//                     onClick={handleBack}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     {gameEnded ? "Back to Stats" : "Back to Game"}
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 gap-6">
//                 {/* Cash Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Cash</span>
//                         <span className={`font-medium ${cashProgress >= 100 ? "text-green-400" : "text-white"}`}>
//                             ${player.cash} / ${cashGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${cashProgress >= 100 ? "bg-green-500" : "bg-blue-500"}`}
//                             style={{ width: `${cashProgress}%` }}
//                         ></div>
//                     </div>
//                     {cashProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>

//                 {/* Happiness Goal */}
//                 <div className="goal-item">
//                     <div className="flex justify-between mb-1">
//                         <span className="text-lg font-medium text-white">Happiness</span>
//                         <span className={`font-medium ${happinessProgress >= 100 ? "text-green-400" : "text-white"}`}>
//                             {player.happiness} / {happinessGoal}
//                         </span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded h-4">
//                         <div
//                             className={`h-4 rounded ${happinessProgress >= 100 ? "bg-green-500" : "bg-yellow-500"}`}
//                             style={{ width: `${happinessProgress}%` }}
//                         ></div>
//                     </div>
//                     {happinessProgress >= 100 && (
//                         <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
//                     )}
//                 </div>

//                 {/* Mastery Goals */}
//                 {renderMasterySection("React Hooks Mastery", hooksData, masteryProgress.hooks, "hooksMastered")}
//                 {renderMasterySection("Next.js Mastery", nextJsData, masteryProgress.nextJs, "nextJsMastered")}
//                 {renderMasterySection("JavaScript Mastery", javaScriptData, masteryProgress.javaScript, "javaScriptMastered")}
//                 {renderMasterySection("TypeScript Mastery", typeScriptData, masteryProgress.typeScript, "typeScriptMastered")}
//                 {renderMasterySection("CSS Mastery", cssData, masteryProgress.css, "cssMastered")}
//                 {renderMasterySection("Python Mastery", pythonData, masteryProgress.python, "pythonMastered")}
//                 {renderMasterySection("Express.js Mastery", expressData, masteryProgress.express, "expressMastered")}
//                 {renderMasterySection("C# Mastery", cSharpData, masteryProgress.cSharp, "cSharpMastered")}
//                 {renderMasterySection("React Native Mastery", reactNativeData, masteryProgress.reactNative, "reactNativeMastered")}
//                 {renderMasterySection("Java Mastery", javaData, masteryProgress.java, "javaMastered")}
//                 {renderMasterySection("C++ Mastery", cppData, masteryProgress.cpp, "cppMastered")}

//                 {/* Win Condition */}
//                 {hasWon ? (
//                     <div className="mt-4 bg-green-900 p-3 rounded text-center">
//                         <p className="text-lg font-bold text-green-300">All goals achieved! You've won!</p>
//                     </div>
//                 ) : (
//                     <div className="mt-4 bg-blue-900 p-3 rounded text-center">
//                         <p className="text-blue-300">
//                             Earn ${cashGoal}, master at least one subject, and reach {happinessGoal} happiness to win!
//                         </p>
//                     </div>
//                 )}
//             </div>

//             {gameEnded && (
//                 <div className="mt-6 text-center">
//                     <button
//                         onClick={handlePlayAgain}
//                         className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded-lg"
//                     >
//                         Play Again
//                     </button>
//                 </div>
//             )}
//         </motion.div>
//     );
// }





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

import { winConditions, hasWon } from "@/data/winConditions";
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

    // Calculate total mastered subjects
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

    // Progress calculations
    const cashProgress = Math.min(100, (player.cash / winConditions.cash) * 100);
    const happinessProgress = Math.min(100, (player.happiness / winConditions.happiness) * 100);
    const healthProgress = Math.min(100, ((player.relationship?.health || 0) / winConditions.health) * 100);
    const subjectsMasteredProgress = Math.min(100, (subjectsMastered / winConditions.subjectsMastered) * 100);
    const possessionsProgress = Math.min(100, ((player.possessions?.length || 0) / winConditions.possessions) * 100);

    // Mastery progress for individual topics
    const masteryProgress = {
        hooks: Object.keys(hooksData).reduce((acc, hook) => {
            acc[hook] = (player.hooksMastered?.[hook] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        nextJs: Object.keys(nextJsData).reduce((acc, topic) => {
            acc[topic] = (player.nextJsMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        css: Object.keys(cssData).reduce((acc, topic) => {
            acc[topic] = (player.cssMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        python: Object.keys(pythonData).reduce((acc, topic) => {
            acc[topic] = (player.pythonMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        javaScript: Object.keys(javaScriptData).reduce((acc, topic) => {
            acc[topic] = (player.javaScriptMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        typeScript: Object.keys(typeScriptData).reduce((acc, topic) => {
            acc[topic] = (player.typeScriptMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        express: Object.keys(expressData).reduce((acc, topic) => {
            acc[topic] = (player.expressMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        cSharp: Object.keys(cSharpData).reduce((acc, topic) => {
            acc[topic] = (player.cSharpMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        reactNative: Object.keys(reactNativeData).reduce((acc, topic) => {
            acc[topic] = (player.reactNativeMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        java: Object.keys(javaData).reduce((acc, topic) => {
            acc[topic] = (player.javaMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
        cpp: Object.keys(cppData).reduce((acc, topic) => {
            acc[topic] = (player.cppMastered?.[topic] || 0) >= 1 ? 100 : 0;
            return acc;
        }, {}),
    };

    // Conditions met
    const conditionsMet = {
        cash: player.cash >= winConditions.cash,
        happiness: player.happiness >= winConditions.happiness,
        health: player.relationship?.health >= winConditions.health,
        subjectsMastered: subjectsMastered >= winConditions.subjectsMastered,
        isDating: player.relationship?.isDating === winConditions.isDating,
        apartmentTier: player.rental?.apartmentTier === winConditions.apartmentTier,
        possessions: player.possessions?.length >= winConditions.possessions,
    };

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
                            {player.relationship?.health || 0} / {winConditions.health}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.health ? "bg-green-500" : "bg-red-500"}`}
                            style={{ width: `${healthProgress}%` }}
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

                {/* Dating Goal */}
                <div className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">Dating</span>
                        <span className={`font-medium ${conditionsMet.isDating ? "text-green-400" : "text-white"}`}>
                            {player.relationship?.isDating ? "Yes" : "No"}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.isDating ? "bg-green-500" : "bg-gray-500"}`}
                            style={{ width: `${conditionsMet.isDating ? 100 : 0}%` }}
                        ></div>
                    </div>
                    {conditionsMet.isDating && (
                        <span className="text-xs text-green-400 mt-1 block">✓ Achieved!</span>
                    )}
                </div>

                {/* Apartment Tier Goal */}
                <div className="goal-item">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-white">Apartment Tier</span>
                        <span className={`font-medium ${conditionsMet.apartmentTier ? "text-green-400" : "text-white"}`}>
                            {player.rental?.apartmentTier || "None"} / {winConditions.apartmentTier}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.apartmentTier ? "bg-green-500" : "bg-gray-500"}`}
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
                            {player.possessions?.length || 0} / {winConditions.possessions}
                        </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded h-4">
                        <div
                            className={`h-4 rounded ${conditionsMet.possessions ? "bg-green-500" : "bg-orange-500"}`}
                            style={{ width: `${possessionsProgress}%` }}
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

                {/* Win Condition */}
                {hasWon(player) ? (
                    <div className="mt-4 bg-green-900 p-3 rounded text-center">
                        <p className="text-lg font-bold text-green-300">All goals achieved! You've won!</p>
                    </div>
                ) : (
                    <div className="mt-4 bg-blue-900 p-3 rounded text-center">
                        <p className="text-blue-300">
                            Earn ${winConditions.cash}, master {winConditions.subjectsMastered} subjects, reach {winConditions.happiness} happiness, {winConditions.health} health, be in a relationship, rent a {winConditions.apartmentTier} apartment, and own {winConditions.possessions} possessions to win!
                        </p>
                    </div>
                )}
            </div>

            {gameEnded && (
                <div className="mt-6 text-center">
                    <button
                        onClick={handlePlayAgain}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-4 rounded-lg"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </motion.div>
    );
}