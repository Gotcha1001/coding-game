









// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast } from "sonner";
// import {
//     initAudio,
//     loadClickSound,
//     loadWorkMusic,
//     playClickSound,
//     playWorkMusic,
//     stopWorkMusic,
// } from "@/data/audioManager";

// export default function DevWork() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     useEffect(() => {
//         initAudio();
//         loadClickSound("/sounds/click.mp3").then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//         loadWorkMusic("/sounds/workmusic.mp3").then(() => {
//             playWorkMusic();
//         });
//         return () => {
//             stopWorkMusic();
//         };
//     }, []);

//     const workOptions = [
//         {
//             id: "frontend",
//             name: "Frontend Dev",
//             requiredMastery: ["hooksMastered", "cssMastered"],
//             calculateEarnings: () => {
//                 const hooksMastery = Object.values(player.hooksMastered || {}).reduce((sum, val) => sum + val, 0);
//                 const cssMastery = Object.values(player.cssMastered || {}).reduce((sum, val) => sum + val, 0);
//                 return (hooksMastery + cssMastery) * 10;
//             },
//             isAvailable: () => {
//                 return (
//                     Object.values(player.hooksMastered || {}).some(val => val >= 1) ||
//                     Object.values(player.cssMastered || {}).some(val => val >= 1)
//                 );
//             },
//             description: "Build user interfaces using React Hooks and CSS.",
//         },
//         {
//             id: "backend",
//             name: "Backend Dev",
//             requiredMastery: ["expressMastered", "pythonMastered", "typeScriptMastered"],
//             calculateEarnings: () => {
//                 const expressMastery = Object.values(player.expressMastered || {}).reduce((sum, val) => sum + val, 0);
//                 const pythonMastery = Object.values(player.pythonMastered || {}).reduce((sum, val) => sum + val, 0);
//                 const typeScriptMastery = Object.values(player.typeScriptMastered || {}).reduce((sum, val) => sum + val, 0);
//                 return (expressMastery + pythonMastery + typeScriptMastery) * 12;
//             },
//             isAvailable: () => {
//                 return (
//                     Object.values(player.expressMastered || {}).some(val => val >= 1) ||
//                     Object.values(player.pythonMastered || {}).some(val => val >= 1) ||
//                     Object.values(player.typeScriptMastered || {}).some(val => val >= 1)
//                 );
//             },
//             description: "Develop APIs and server logic with Express, Python, or TypeScript.",
//         },
//         {
//             id: "fullstack",
//             name: "Full-Stack Dev",
//             requiredMastery: ["nextJsMastered", "javaScriptMastered"],
//             calculateEarnings: () => {
//                 const nextJsMastery = Object.values(player.nextJsMastered || {}).reduce((sum, val) => sum + val, 0);
//                 const javaScriptMastery = Object.values(player.javaScriptMastered || {}).reduce((sum, val) => sum + val, 0);
//                 return (nextJsMastery + javaScriptMastery) * 15;
//             },
//             isAvailable: () => {
//                 return (
//                     Object.values(player.nextJsMastered || {}).some(val => val >= 1) ||
//                     Object.values(player.javaScriptMastered || {}).some(val => val >= 1)
//                 );
//             },
//             description: "Create end-to-end applications with Next.js and JavaScript.",
//         },
//     ];

//     const handleWork = (option) => {
//         if (!option.isAvailable()) {
//             toast.error(`You need to master at least one relevant subject for ${option.name}!`);
//             return;
//         }
//         if (player.energy < 20) {
//             toast.error("Not enough energy to work!");
//             return;
//         }
//         const cashEarned = option.calculateEarnings();
//         if (cashEarned <= 0) {
//             toast.error("No earnings available. Master more subjects to earn cash!");
//             return;
//         }
//         dispatch({
//             type: "WORK_AT_DEV",
//             payload: {
//                 jobType: option.name,
//                 cashEarned,
//                 energySpent: 20,
//                 timeSpent: 15,
//             },
//         });
//         dispatch({
//             type: "USE_TIME",
//             payload: { amount: 15 },
//         });
//         toast.success(`Worked as ${option.name} and earned $${cashEarned}!`);
//     };

//     const goBackToMap = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
//     };

//     const masteredSubjects = [
//         ...Object.entries(player.hooksMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([hook]) => ({ category: "Hooks", name: hook })),
//         ...Object.entries(player.nextJsMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "Next.js", name: topic })),
//         ...Object.entries(player.cssMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "CSS", name: topic })),
//         ...Object.entries(player.pythonMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "Python", name: topic })),
//         ...Object.entries(player.javaScriptMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "JavaScript", name: topic })),
//         ...Object.entries(player.typeScriptMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "TypeScript", name: topic })),
//         ...Object.entries(player.expressMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "Express", name: topic })),
//     ];

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-br from-blue-900 to-teal-800 rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-yellow-400">Dev Work</h2>
//                 <button
//                     onClick={withSound(goBackToMap)}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Map
//                 </button>
//             </div>

//             <div className="mb-6">
//                 <img
//                     src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
//                     alt="Dev Work Office"
//                     className="w-full h-64 object-cover rounded-lg"
//                 />
//                 <p className="mt-2 text-gray-200 text-center">
//                     Take on development projects to earn cash based on your mastered skills.
//                 </p>
//             </div>

//             <div className="mb-6">
//                 <h3 className="text-xl font-semibold text-white mb-4">Work Options</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {workOptions.map((option) => {
//                         const earnings = option.calculateEarnings();
//                         const isAvailable = option.isAvailable();
//                         return (
//                             <motion.div
//                                 key={option.id}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="bg-black bg-opacity-30 p-4 rounded-lg"
//                             >
//                                 <h4 className="text-lg font-semibold text-white">{option.name}</h4>
//                                 <p className="text-gray-300 text-sm">{option.description}</p>
//                                 <p className="text-green-400 font-medium mt-2">
//                                     Earnings: ${earnings}
//                                 </p>
//                                 <button
//                                     onClick={withSound(() => handleWork(option))}
//                                     disabled={!isAvailable || player.energy < 20}
//                                     className={`mt-2 w-full py-2 rounded ${!isAvailable || player.energy < 20
//                                             ? "bg-gray-500 cursor-not-allowed"
//                                             : "bg-blue-600 hover:bg-blue-500 text-white"
//                                         }`}
//                                 >
//                                     Work (20 Energy)
//                                 </button>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>

//             <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Mastered Subjects</h3>
//                 {masteredSubjects.length > 0 ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {masteredSubjects.map((subject, index) => (
//                             <motion.div
//                                 key={`${subject.category}-${subject.name}-${index}`}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="bg-black bg-opacity-30 p-4 rounded-lg flex items-center"
//                             >
//                                 <span className="text-2xl mr-3">🏆</span>
//                                 <div>
//                                     <p className="text-white font-medium">{subject.name}</p>
//                                     <p className="text-gray-300 text-sm">{subject.category}</p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-300">You haven't mastered any subjects yet. Study to unlock work options!</p>
//                 )}
//             </div>
//         </motion.div>
//     );
// }



// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast } from "sonner";
// import {
//     initAudio,
//     loadClickSound,
//     loadWorkMusic,
//     playClickSound,
//     playWorkMusic,
//     stopWorkMusic,
// } from "@/data/audioManager";

// export default function DevWork() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     useEffect(() => {
//         initAudio();
//         loadClickSound("/sounds/click.mp3").then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//         loadWorkMusic("/sounds/workmusic.mp3").then(() => {
//             playWorkMusic();
//         });
//         return () => {
//             stopWorkMusic();
//         };
//     }, []);

//     const workOptions = [
//         {
//             id: "frontend",
//             name: "Frontend Dev",
//             requiredMastery: ["hooksMastered", "cssMastered"],
//             calculateEarnings: () => {
//                 const hooksMastery = Object.values(player.hooksMastered || {}).reduce((sum, val) => sum + val, 0);
//                 const cssMastery = Object.values(player.cssMastered || {}).reduce((sum, val) => sum + val, 0);
//                 return (hooksMastery + cssMastery) * 10;
//             },
//             isAvailable: () => {
//                 return (
//                     Object.values(player.hooksMastered || {}).some(val => val >= 1) ||
//                     Object.values(player.cssMastered || {}).some(val => val >= 1)
//                 );
//             },
//             description: "Build user interfaces using React Hooks and CSS.",
//         },
//         {
//             id: "backend",
//             name: "Backend Dev",
//             requiredMastery: ["expressMastered", "pythonMastered", "typeScriptMastered"],
//             calculateEarnings: () => {
//                 const expressMastery = Object.values(player.expressMastered || {}).reduce((sum, val) => sum + val, 0);
//                 const pythonMastery = Object.values(player.pythonMastered || {}).reduce((sum, val) => sum + val, 0);
//                 const typeScriptMastery = Object.values(player.typeScriptMastered || {}).reduce((sum, val) => sum + val, 0);
//                 return (expressMastery + pythonMastery + typeScriptMastery) * 12;
//             },
//             isAvailable: () => {
//                 return (
//                     Object.values(player.expressMastered || {}).some(val => val >= 1) ||
//                     Object.values(player.pythonMastered || {}).some(val => val >= 1) ||
//                     Object.values(player.typeScriptMastered || {}).some(val => val >= 1)
//                 );
//             },
//             description: "Develop APIs and server logic with Express, Python, or TypeScript.",
//         },
//         {
//             id: "fullstack",
//             name: "Full-Stack Dev",
//             requiredMastery: ["nextJsMastered", "javaScriptMastered"],
//             calculateEarnings: () => {
//                 const nextJsMastery = Object.values(player.nextJsMastered || {}).reduce((sum, val) => sum + val, 0);
//                 const javaScriptMastery = Object.values(player.javaScriptMastered || {}).reduce((sum, val) => sum + val, 0);
//                 return (nextJsMastery + javaScriptMastery) * 15;
//             },
//             isAvailable: () => {
//                 return (
//                     Object.values(player.nextJsMastered || {}).some(val => val >= 1) ||
//                     Object.values(player.javaScriptMastered || {}).some(val => val >= 1)
//                 );
//             },
//             description: "Create end-to-end applications with Next.js and JavaScript.",
//         },
//     ];

//     const handleWork = (option) => {
//         if (!option.isAvailable()) {
//             toast.error(`You need to master at least one relevant subject for ${option.name}!`);
//             return;
//         }
//         if (player.energy < 20) {
//             toast.error("Not enough energy to work!");
//             return;
//         }
//         const cashEarned = option.calculateEarnings();
//         if (cashEarned <= 0) {
//             toast.error("No earnings available. Master more subjects to earn cash!");
//             return;
//         }
//         dispatch({
//             type: "WORK_AT_DEV",
//             payload: {
//                 jobType: option.name,
//                 cashEarned,
//                 workEnergySpent: 20,
//                 timeSpent: 15,
//             },
//         });
//         dispatch({
//             type: "USE_TIME",
//             payload: { amount: 15 },
//         });
//         toast.success(`Worked as ${option.name} and earned $${cashEarned}!`);
//     };

//     const goBackToMap = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
//     };

//     const masteredSubjects = [
//         ...Object.entries(player.hooksMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([hook]) => ({ category: "Hooks", name: hook })),
//         ...Object.entries(player.nextJsMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "Next.js", name: topic })),
//         ...Object.entries(player.cssMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "CSS", name: topic })),
//         ...Object.entries(player.pythonMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "Python", name: topic })),
//         ...Object.entries(player.javaScriptMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "JavaScript", name: topic })),
//         ...Object.entries(player.typeScriptMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "TypeScript", name: topic })),
//         ...Object.entries(player.expressMastered || {}).filter(([_, mastery]) => mastery >= 1).map(([topic]) => ({ category: "Express", name: topic })),
//     ];

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-br from-blue-900 to-teal-800 rounded-lg p-6 m-4"
//         >
//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-yellow-400">Dev Work</h2>
//                 <button
//                     onClick={withSound(goBackToMap)}
//                     className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Map
//                 </button>
//             </div>

//             <div className="mb-6">
//                 <img
//                     src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
//                     alt="Dev Work Office"
//                     className="w-full h-64 object-cover rounded-lg"
//                 />
//                 <p className="mt-2 text-gray-200 text-center">
//                     Take on development projects to earn cash based on your mastered skills.
//                 </p>
//             </div>

//             <div className="mb-6">
//                 <h3 className="text-xl font-semibold text-white mb-4">Work Options</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {workOptions.map((option) => {
//                         const earnings = option.calculateEarnings();
//                         const isAvailable = option.isAvailable();
//                         return (
//                             <motion.div
//                                 key={option.id}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="bg-black bg-opacity-30 p-4 rounded-lg"
//                             >
//                                 <h4 className="text-lg font-semibold text-white">{option.name}</h4>
//                                 <p className="text-gray-300 text-sm">{option.description}</p>
//                                 <p className="text-green-400 font-medium mt-2">
//                                     Earnings: ${earnings}
//                                 </p>
//                                 <button
//                                     onClick={withSound(() => handleWork(option))}
//                                     disabled={!isAvailable || player.energy < 20}
//                                     className={`mt-2 w-full py-2 rounded ${!isAvailable || player.energy < 20
//                                             ? "bg-gray-500 cursor-not-allowed"
//                                             : "bg-blue-600 hover:bg-blue-500 text-white"
//                                         }`}
//                                 >
//                                     Work (20 Energy)
//                                 </button>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </div>

//             <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Mastered Subjects</h3>
//                 {masteredSubjects.length > 0 ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {masteredSubjects.map((subject, index) => (
//                             <motion.div
//                                 key={`${subject.category}-${subject.name}-${index}`}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="bg-black bg-opacity-30 p-4 rounded-lg flex items-center"
//                             >
//                                 <span className="text-2xl mr-3">🏆</span>
//                                 <div>
//                                     <p className="text-white font-medium">{subject.name}</p>
//                                     <p className="text-gray-300 text-sm">{subject.category}</p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-300">You haven't mastered any subjects yet. Study to unlock work options!</p>
//                 )}
//             </div>
//         </motion.div>
//     );
// }


// updated get more money on completion of subjects and ui

// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast } from "sonner";
// import {
//     initAudio,
//     loadClickSound,
//     loadWorkMusic,
//     playClickSound,
//     playWorkMusic,
//     stopWorkMusic,
// } from "@/data/audioManager";
// import { jobs } from "@/data/jobs";
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

// export default function DevWork() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     useEffect(() => {
//         initAudio();
//         loadClickSound("/sounds/click.mp3").then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//         loadWorkMusic("/sounds/workmusic.mp3").then(() => {
//             playWorkMusic();
//         });
//         return () => {
//             stopWorkMusic();
//         };
//     }, []);

//     // Count total mastered subjects across all destinations
//     const totalMastered = [
//         ...(player.hooksMastered ? Object.values(player.hooksMastered).filter(val => val >= 1) : []),
//         ...(player.nextJsMastered ? Object.values(player.nextJsMastered).filter(val => val >= 1) : []),
//         ...(player.cssMastered ? Object.values(player.cssMastered).filter(val => val >= 1) : []),
//         ...(player.pythonMastered ? Object.values(player.pythonMastered).filter(val => val >= 1) : []),
//         ...(player.javaScriptMastered ? Object.values(player.javaScriptMastered).filter(val => val >= 1) : []),
//         ...(player.typeScriptMastered ? Object.values(player.typeScriptMastered).filter(val => val >= 1) : []),
//         ...(player.expressMastered ? Object.values(player.expressMastered).filter(val => val >= 1) : []),
//         ...(player.cSharpMastered ? Object.values(player.cSharpMastered).filter(val => val >= 1) : []),
//         ...(player.javaMastered ? Object.values(player.javaMastered).filter(val => val >= 1) : []),
//         ...(player.cppMastered ? Object.values(player.cppMastered).filter(val => val >= 1) : []),
//     ].length;

//     const handleWork = (job) => {
//         if (!job.isAvailable(totalMastered)) {
//             toast.error(`You need to master at least ${job.requiredSubjects} subjects for ${job.name}!`);
//             return;
//         }
//         if (player.energy < 20) {
//             toast.error("Not enough energy to work!");
//             return;
//         }

//         dispatch({
//             type: "WORK_AT_DEV",
//             payload: {
//                 jobType: job.name,
//                 cashEarned: job.earnings,
//                 workEnergySpent: 20,
//                 timeSpent: 15,
//             },
//         });
//         dispatch({
//             type: "USE_TIME",
//             payload: { amount: 15 },
//         });
//         toast.success(`Worked as ${job.name} and earned $${job.earnings}!`);
//     };

//     const goBackToMap = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
//     };

//     const masteredSubjects = [
//         ...Object.entries(player.hooksMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([hook]) => ({
//                 category: "Hooks",
//                 name: hook,
//                 title: hooksData[hook]?.title || hook,
//             })),
//         ...Object.entries(player.nextJsMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Next.js",
//                 name: topic,
//                 title: nextJsData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cssMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "CSS",
//                 name: topic,
//                 title: cssData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.pythonMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Python",
//                 name: topic,
//                 title: pythonData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.javaScriptMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "JavaScript",
//                 name: topic,
//                 title: javaScriptData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.typeScriptMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "TypeScript",
//                 name: topic,
//                 title: typeScriptData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.expressMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Express",
//                 name: topic,
//                 title: expressData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cSharpMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "C#",
//                 name: topic,
//                 title: cSharpData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.javaMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Java",
//                 name: topic,
//                 title: javaData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cppMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "C++",
//                 name: topic,
//                 title: cppData[topic]?.title || topic,
//             })),
//     ];

//     return (
//         <div className="devwork-interface mt-4">
//             <style jsx>{`
//                 .video-header {
//                     width: 100%;
//                     height: 256px;
//                     overflow: hidden;
//                     border-radius: 0.5rem;
//                     border: 2px solid #6366f1;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                 }
//                 .boss-image {
//                     width: 100%;
//                     max-height: 40vh;
//                     object-fit: cover;
//                     border-radius: 0.5rem;
//                     border: 2px solid #6366f1;
//                 }
//                 @media (max-width: 640px) {
//                     .video-header {
//                         height: 192px;
//                     }
//                     .boss-image {
//                         max-height: 30vh;
//                     }
//                 }
//             `}</style>
//             <div className="header mb-4">
//                 <div className="video-header">
//                     <video
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         className="w-full h-full object-cover"
//                     >
//                         <source src="/videos/workplacevideo.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//                 <div className="p-4 bg-gray-800 rounded-lg">
//                     <h2 className="text-2xl font-bold text-white text-center">Dev Work</h2>
//                 </div>
//             </div>
//             <div className="content p-4 bg-gray-800 rounded-lg">
//                 <div className="mb-4">
//                     <img
//                         src="/boss.jpg"
//                         alt="Team Lead"
//                         className="boss-image object-[center_top]"
//                         onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src = "https://images.unsplash.com/photo-1552960394-c81a44194462?w=800&auto=format&fit=crop&q=60";
//                         }}
//                     />
//                     <p className="mt-2 text-gray-300 text-center">
//                         Take on development projects to earn cash based on your mastered skills.
//                     </p>
//                 </div>
//                 <div className="flex justify-end mb-4">
//                     <button
//                         onClick={withSound(goBackToMap)}
//                         className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                     >
//                         Back to Map
//                     </button>
//                 </div>
//                 <div className="p-4 rounded mb-4">
//                     <h3 className="text-lg font-semibold mb-2">Work Options</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {jobs.map((job) => {
//                             const isAvailable = job.isAvailable(totalMastered);
//                             return (
//                                 <motion.div
//                                     key={job.id}
//                                     initial={{ opacity: 0, scale: 0.9 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     transition={{ duration: 0.3 }}
//                                     className="bg-black bg-opacity-30 p-4 rounded-lg"
//                                 >
//                                     <h4 className="text-lg font-semibold text-white">{job.name}</h4>
//                                     <p className="text-gray-300 text-sm">{job.description}</p>
//                                     <p className="text-green-400 font-medium mt-2">
//                                         Earnings: ${job.earnings}
//                                     </p>
//                                     <p className="text-gray-400 text-sm mt-1">
//                                         Requires: {job.requiredSubjects} subjects
//                                     </p>
//                                     <button
//                                         onClick={withSound(() => handleWork(job))}
//                                         disabled={!isAvailable || player.energy < 20}
//                                         className={`mt-2 w-full py-2 rounded ${!isAvailable || player.energy < 20
//                                             ? "bg-gray-500 cursor-not-allowed"
//                                             : "bg-blue-600 hover:bg-blue-500 text-white"
//                                             }`}
//                                     >
//                                         Work (20 Energy, 15 min)
//                                     </button>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//                 <div className="p-4 rounded mb-4">
//                     <h3 className="text-lg font-semibold mb-2">Mastered Subjects</h3>
//                     {masteredSubjects.length > 0 ? (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {masteredSubjects.map((subject, index) => (
//                                 <motion.div
//                                     key={`${subject.category}-${subject.name}-${index}`}
//                                     initial={{ opacity: 0, scale: 0.9 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     transition={{ duration: 0.3 }}
//                                     className="bg-black bg-opacity-30 p-4 rounded-lg flex items-center"
//                                 >
//                                     <span className="text-2xl mr-3">🏆</span>
//                                     <div>
//                                         <p className="text-white font-medium">{subject.title}</p>
//                                         <p className="text-gray-300 text-sm">{subject.category}</p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     ) : (
//                         <p className="text-gray-400 text-sm">
//                             You haven't mastered any subjects yet. Study to unlock work options!
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }


// better boss image

// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast } from "sonner";
// import {
//     initAudio,
//     loadClickSound,
//     loadWorkMusic,
//     playClickSound,
//     playWorkMusic,
//     stopWorkMusic,
// } from "@/data/audioManager";
// import { jobs } from "@/data/jobs";
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

// export default function DevWork() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     useEffect(() => {
//         initAudio();
//         loadClickSound("/sounds/click.mp3").then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//         loadWorkMusic("/sounds/workmusic.mp3").then(() => {
//             playWorkMusic();
//         });
//         return () => {
//             stopWorkMusic();
//         };
//     }, []);

//     // Count total mastered subjects across all destinations
//     const totalMastered = [
//         ...(player.hooksMastered ? Object.values(player.hooksMastered).filter(val => val >= 1) : []),
//         ...(player.nextJsMastered ? Object.values(player.nextJsMastered).filter(val => val >= 1) : []),
//         ...(player.cssMastered ? Object.values(player.cssMastered).filter(val => val >= 1) : []),
//         ...(player.pythonMastered ? Object.values(player.pythonMastered).filter(val => val >= 1) : []),
//         ...(player.javaScriptMastered ? Object.values(player.javaScriptMastered).filter(val => val >= 1) : []),
//         ...(player.typeScriptMastered ? Object.values(player.typeScriptMastered).filter(val => val >= 1) : []),
//         ...(player.expressMastered ? Object.values(player.expressMastered).filter(val => val >= 1) : []),
//         ...(player.cSharpMastered ? Object.values(player.cSharpMastered).filter(val => val >= 1) : []),
//         ...(player.javaMastered ? Object.values(player.javaMastered).filter(val => val >= 1) : []),
//         ...(player.cppMastered ? Object.values(player.cppMastered).filter(val => val >= 1) : []),
//     ].length;

//     const handleWork = (job) => {
//         if (!job.isAvailable(totalMastered)) {
//             toast.error(`You need to master at least ${job.requiredSubjects} subjects for ${job.name}!`);
//             return;
//         }
//         if (player.energy < 20) {
//             toast.error("Not enough energy to work!");
//             return;
//         }

//         dispatch({
//             type: "WORK_AT_DEV",
//             payload: {
//                 jobType: job.name,
//                 cashEarned: job.earnings,
//                 workEnergySpent: 20,
//                 timeSpent: 15,
//             },
//         });
//         dispatch({
//             type: "USE_TIME",
//             payload: { amount: 15 },
//         });
//         toast.success(`Worked as ${job.name} and earned $${job.earnings}!`);
//     };

//     const goBackToMap = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
//     };

//     const masteredSubjects = [
//         ...Object.entries(player.hooksMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([hook]) => ({
//                 category: "Hooks",
//                 name: hook,
//                 title: hooksData[hook]?.title || hook,
//             })),
//         ...Object.entries(player.nextJsMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Next.js",
//                 name: topic,
//                 title: nextJsData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cssMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "CSS",
//                 name: topic,
//                 title: cssData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.pythonMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Python",
//                 name: topic,
//                 title: pythonData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.javaScriptMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "JavaScript",
//                 name: topic,
//                 title: javaScriptData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.typeScriptMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "TypeScript",
//                 name: topic,
//                 title: typeScriptData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.expressMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Express",
//                 name: topic,
//                 title: expressData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cSharpMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "C#",
//                 name: topic,
//                 title: cSharpData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.javaMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Java",
//                 name: topic,
//                 title: javaData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cppMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "C++",
//                 name: topic,
//                 title: cppData[topic]?.title || topic,
//             })),
//     ];

//     return (
//         <div className="devwork-interface mt-4">
//             <style jsx>{`
//                 .video-header {
//                     width: 100%;
//                     height: 256px;
//                     overflow: hidden;
//                     border-radius: 0.5rem;
//                     border: 2px solid #6366f1;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                 }
//                 .boss-image {
//                     width: 192px;
//                     height: 256px;
//                     max-width: 100%;
//                     max-height: 60vh;
//                     object-fit: cover;
//                     object-position: center top;
//                     border-radius: 50%;
//                     border: 2px solid #6366f1;
//                     margin-left: auto;
//                     margin-right: auto;
//                 }
//                 @media (max-width: 640px) {
//                     .video-header {
//                         height: 192px;
//                     }
//                     .boss-image {
//                         width: 128px;
//                         height: 192px;
//                         max-height: 40vh;
//                     }
//                 }
//             `}</style>
//             <div className="header mb-4">
//                 <div className="video-header">
//                     <video
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         className="w-full h-full object-cover"
//                     >
//                         <source src="/videos/workplacevideo.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//                 <div className="p-4 bg-gray-800 rounded-lg">
//                     <h2 className="text-2xl font-bold text-white text-center">Dev Work</h2>
//                 </div>
//             </div>
//             <div className="content p-4 bg-gray-800 rounded-lg">
//                 <div className="mb-4">
//                     <img
//                         src="/boss.jpg"
//                         alt="Team Lead"
//                         className="boss-image"
//                         onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src = "https://images.unsplash.com/photo-1552960394-c81a44194462?w=800&auto=format&fit=crop&q=60";
//                         }}
//                     />
//                     <p className="mt-2 text-gray-300 text-center">
//                         Take on development projects to earn cash based on your mastered skills.
//                     </p>
//                 </div>
//                 <div className="flex justify-end mb-4">
//                     <button
//                         onClick={withSound(goBackToMap)}
//                         className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                     >
//                         Back to Map
//                     </button>
//                 </div>
//                 <div className="p-4 rounded mb-4">
//                     <h3 className="text-lg font-semibold mb-2">Work Options</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {jobs.map((job) => {
//                             const isAvailable = job.isAvailable(totalMastered);
//                             return (
//                                 <motion.div
//                                     key={job.id}
//                                     initial={{ opacity: 0, scale: 0.9 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     transition={{ duration: 0.3 }}
//                                     className="bg-black bg-opacity-30 p-4 rounded-lg"
//                                 >
//                                     <h4 className="text-lg font-semibold text-white">{job.name}</h4>
//                                     <p className="text-gray-300 text-sm">{job.description}</p>
//                                     <p className="text-green-400 font-medium mt-2">
//                                         Earnings: ${job.earnings}
//                                     </p>
//                                     <p className="text-gray-400 text-sm mt-1">
//                                         Requires: {job.requiredSubjects} subjects
//                                     </p>
//                                     <button
//                                         onClick={withSound(() => handleWork(job))}
//                                         disabled={!isAvailable || player.energy < 20}
//                                         className={`mt-2 w-full py-2 rounded ${!isAvailable || player.energy < 20
//                                                 ? "bg-gray-500 cursor-not-allowed"
//                                                 : "bg-blue-600 hover:bg-blue-500 text-white"
//                                             }`}
//                                     >
//                                         Work (20 Energy, 15 min)
//                                     </button>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//                 <div className="p-4 rounded mb-4">
//                     <h3 className="text-lg font-semibold mb-2">Mastered Subjects</h3>
//                     {masteredSubjects.length > 0 ? (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {masteredSubjects.map((subject, index) => (
//                                 <motion.div
//                                     key={`${subject.category}-${subject.name}-${index}`}
//                                     initial={{ opacity: 0, scale: 0.9 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     transition={{ duration: 0.3 }}
//                                     className="bg-black bg-opacity-30 p-4 rounded-lg flex items-center"
//                                 >
//                                     <span className="text-2xl mr-3">🏆</span>
//                                     <div>
//                                         <p className="text-white font-medium">{subject.title}</p>
//                                         <p className="text-gray-300 text-sm">{subject.category}</p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     ) : (
//                         <p className="text-gray-400 text-sm">
//                             You haven't mastered any subjects yet. Study to unlock work options!
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// video background holding it all

// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast } from "sonner";
// import {
//     initAudio,
//     loadClickSound,
//     loadWorkMusic,
//     playClickSound,
//     playWorkMusic,
//     stopWorkMusic,
// } from "@/data/audioManager";
// import { jobs } from "@/data/jobs";
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

// export default function DevWork() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     useEffect(() => {
//         initAudio();
//         loadClickSound("/sounds/click.mp3").then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//         loadWorkMusic("/sounds/workmusic.mp3").then(() => {
//             playWorkMusic();
//         });
//         return () => {
//             stopWorkMusic();
//         };
//     }, []);

//     // Count total mastered subjects across all destinations
//     const totalMastered = [
//         ...(player.hooksMastered ? Object.values(player.hooksMastered).filter(val => val >= 1) : []),
//         ...(player.nextJsMastered ? Object.values(player.nextJsMastered).filter(val => val >= 1) : []),
//         ...(player.cssMastered ? Object.values(player.cssMastered).filter(val => val >= 1) : []),
//         ...(player.pythonMastered ? Object.values(player.pythonMastered).filter(val => val >= 1) : []),
//         ...(player.javaScriptMastered ? Object.values(player.javaScriptMastered).filter(val => val >= 1) : []),
//         ...(player.typeScriptMastered ? Object.values(player.typeScriptMastered).filter(val => val >= 1) : []),
//         ...(player.expressMastered ? Object.values(player.expressMastered).filter(val => val >= 1) : []),
//         ...(player.cSharpMastered ? Object.values(player.cSharpMastered).filter(val => val >= 1) : []),
//         ...(player.javaMastered ? Object.values(player.javaMastered).filter(val => val >= 1) : []),
//         ...(player.cppMastered ? Object.values(player.cppMastered).filter(val => val >= 1) : []),
//     ].length;

//     const handleWork = (job) => {
//         if (!job.isAvailable(totalMastered)) {
//             toast.error(`You need to master at least ${job.requiredSubjects} subjects for ${job.name}!`);
//             return;
//         }
//         if (player.energy < 20) {
//             toast.error("Not enough energy to work!");
//             return;
//         }

//         dispatch({
//             type: "WORK_AT_DEV",
//             payload: {
//                 jobType: job.name,
//                 cashEarned: job.earnings,
//                 workEnergySpent: 20,
//                 timeSpent: 15,
//             },
//         });
//         dispatch({
//             type: "USE_TIME",
//             payload: { amount: 15 },
//         });
//         toast.success(`Worked as ${job.name} and earned $${job.earnings}!`);
//     };

//     const goBackToMap = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
//     };

//     const masteredSubjects = [
//         ...Object.entries(player.hooksMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([hook]) => ({
//                 category: "Hooks",
//                 name: hook,
//                 title: hooksData[hook]?.title || hook,
//             })),
//         ...Object.entries(player.nextJsMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Next.js",
//                 name: topic,
//                 title: nextJsData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cssMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "CSS",
//                 name: topic,
//                 title: cssData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.pythonMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Python",
//                 name: topic,
//                 title: pythonData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.javaScriptMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "JavaScript",
//                 name: topic,
//                 title: javaScriptData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.typeScriptMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "TypeScript",
//                 name: topic,
//                 title: typeScriptData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.expressMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Express",
//                 name: topic,
//                 title: expressData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cSharpMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "C#",
//                 name: topic,
//                 title: cSharpData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.javaMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Java",
//                 name: topic,
//                 title: javaData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cppMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "C++",
//                 name: topic,
//                 title: cppData[topic]?.title || topic,
//             })),
//     ];

//     return (
//         <div className="devwork-interface relative min-h-screen">
//             <style jsx>{`
//                 .background-video {
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                     z-index: -10;
//                 }
//                 .video-header {
//                     width: 100%;
//                     height: 256px;
//                     overflow: hidden;
//                     border-radius: 0.5rem;
//                     border: 2px solid #6366f1;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                 }
//                 .boss-image {
//                     width: 192px;
//                     height: 256px;
//                     max-width: 100%;
//                     max-height: 60vh;
//                     object-fit: cover;
//                     object-position: center top;
//                     border-radius: 50%;
//                     border: 2px solid #6366f1;
//                     margin-left: auto;
//                     margin-right: auto;
//                 }
//                 .content-container {
//                     background-color: rgba(31, 41, 55, 0.9); /* bg-gray-800 with 90% opacity */
//                     border-radius: 0.5rem;
//                     padding: 1rem;
//                 }
//                 @media (max-width: 640px) {
//                     .video-header {
//                         height: 192px;
//                     }
//                     .boss-image {
//                         width: 128px;
//                         height: 192px;
//                         max-height: 40vh;
//                     }
//                 }
//             `}</style>
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="background-video"
//             >
//                 <source src="https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="content-container mx-auto max-w-6xl mt-4">
//                 <div className="header mb-4">
//                     <div className="video-header">
//                         <video
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                             className="w-full h-full object-cover"
//                         >
//                             <source src="/videos/workplacevideo.mp4" type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video>
//                     </div>
//                     <div className="p-4 bg-gray-800 rounded-lg">
//                         <h2 className="text-2xl font-bold text-white text-center">Dev Work</h2>
//                     </div>
//                 </div>
//                 <div className="content p-4">
//                     <div className="mb-4">
//                         <img
//                             src="/boss.jpg"
//                             alt="Team Lead"
//                             className="boss-image"
//                             onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "https://images.unsplash.com/photo-1552960394-c81a44194462?w=800&auto=format&fit=crop&q=60";
//                             }}
//                         />
//                         <p className="mt-2 text-gray-300 text-center">
//                             Take on development projects to earn cash based on your mastered skills.
//                         </p>
//                     </div>
//                     <div className="flex justify-end mb-4">
//                         <button
//                             onClick={withSound(goBackToMap)}
//                             className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                         >
//                             Back to Map
//                         </button>
//                     </div>
//                     <div className="p-4 rounded mb-4">
//                         <h3 className="text-lg font-semibold mb-2 text-white">Work Options</h3>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {jobs.map((job) => {
//                                 const isAvailable = job.isAvailable(totalMastered);
//                                 return (
//                                     <motion.div
//                                         key={job.id}
//                                         initial={{ opacity: 0, scale: 0.9 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="bg-black bg-opacity-30 p-4 rounded-lg"
//                                     >
//                                         <h4 className="text-lg font-semibold text-white">{job.name}</h4>
//                                         <p className="text-gray-300 text-sm">{job.description}</p>
//                                         <p className="text-green-400 font-medium mt-2">
//                                             Earnings: ${job.earnings}
//                                         </p>
//                                         <p className="text-gray-400 text-sm mt-1">
//                                             Requires: {job.requiredSubjects} subjects
//                                         </p>
//                                         <button
//                                             onClick={withSound(() => handleWork(job))}
//                                             disabled={!isAvailable || player.energy < 20}
//                                             className={`mt-2 w-full py-2 rounded ${!isAvailable || player.energy < 20
//                                                 ? "bg-gray-500 cursor-not-allowed"
//                                                 : "bg-blue-600 hover:bg-blue-500 text-white"
//                                                 }`}
//                                         >
//                                             Work (20 Energy, 15 min)
//                                         </button>
//                                     </motion.div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                     <div className="p-4 rounded mb-4">
//                         <h3 className="text-lg font-semibold mb-2 text-white">Mastered Subjects</h3>
//                         {masteredSubjects.length > 0 ? (
//                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                                 {masteredSubjects.map((subject, index) => (
//                                     <motion.div
//                                         key={`${subject.category}-${subject.name}-${index}`}
//                                         initial={{ opacity: 0, scale: 0.9 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="bg-black bg-opacity-30 p-4 rounded-lg flex items-center"
//                                     >
//                                         <span className="text-2xl mr-3">🏆</span>
//                                         <div>
//                                             <p className="text-white font-medium">{subject.title}</p>
//                                             <p className="text-gray-300 text-sm">{subject.category}</p>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <p className="text-gray-400 text-sm">
//                                 You haven't mastered any subjects yet. Study to unlock work options!
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }





// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast } from "sonner";
// import {
//     initAudio,
//     loadClickSound,
//     loadWorkMusic,
//     playClickSound,
//     playWorkMusic,
//     stopWorkMusic,
// } from "@/data/audioManager";
// import { jobs } from "@/data/jobs";
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

// export default function DevWork() {
//     const { state, dispatch } = useGame();
//     const { player } = state;

//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     useEffect(() => {
//         initAudio();
//         loadClickSound("/sounds/click.mp3").then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//         loadWorkMusic("/sounds/workmusic.mp3").then(() => {
//             playWorkMusic();
//         });
//         return () => {
//             stopWorkMusic();
//         };
//     }, []);

//     // Count total mastered subjects across all destinations
//     const totalMastered = [
//         ...(player.hooksMastered ? Object.values(player.hooksMastered).filter(val => val >= 1) : []),
//         ...(player.nextJsMastered ? Object.values(player.nextJsMastered).filter(val => val >= 1) : []),
//         ...(player.cssMastered ? Object.values(player.cssMastered).filter(val => val >= 1) : []),
//         ...(player.pythonMastered ? Object.values(player.pythonMastered).filter(val => val >= 1) : []),
//         ...(player.javaScriptMastered ? Object.values(player.javaScriptMastered).filter(val => val >= 1) : []),
//         ...(player.typeScriptMastered ? Object.values(player.typeScriptMastered).filter(val => val >= 1) : []),
//         ...(player.expressMastered ? Object.values(player.expressMastered).filter(val => val >= 1) : []),
//         ...(player.cSharpMastered ? Object.values(player.cSharpMastered).filter(val => val >= 1) : []),
//         ...(player.javaMastered ? Object.values(player.javaMastered).filter(val => val >= 1) : []),
//         ...(player.cppMastered ? Object.values(player.cppMastered).filter(val => val >= 1) : []),
//     ].length;

//     const handleWork = (job) => {
//         if (!job.isAvailable(totalMastered)) {
//             toast.error(`You need to master at least ${job.requiredSubjects} subjects for ${job.name}!`);
//             return;
//         }
//         if (player.energy < 20) {
//             toast.error("Not enough energy to work!");
//             return;
//         }

//         dispatch({
//             type: "WORK_AT_DEV",
//             payload: {
//                 jobType: job.name,
//                 cashEarned: job.earnings,
//                 workEnergySpent: 20,
//                 timeSpent: 15,
//             },
//         });
//         dispatch({
//             type: "USE_TIME",
//             payload: { amount: 15 },
//         });
//         toast.success(`Worked as ${job.name} and earned $${job.earnings}!`);
//     };

//     const goBackToMap = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
//     };

//     const masteredSubjects = [
//         ...Object.entries(player.hooksMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([hook]) => ({
//                 category: "Hooks",
//                 name: hook,
//                 title: hooksData[hook]?.title || hook,
//             })),
//         ...Object.entries(player.nextJsMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Next.js",
//                 name: topic,
//                 title: nextJsData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cssMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "CSS",
//                 name: topic,
//                 title: cssData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.pythonMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Python",
//                 name: topic,
//                 title: pythonData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.javaScriptMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "JavaScript",
//                 name: topic,
//                 title: javaScriptData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.typeScriptMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "TypeScript",
//                 name: topic,
//                 title: typeScriptData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.expressMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Express",
//                 name: topic,
//                 title: expressData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cSharpMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "C#",
//                 name: topic,
//                 title: cSharpData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.javaMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "Java",
//                 name: topic,
//                 title: javaData[topic]?.title || topic,
//             })),
//         ...Object.entries(player.cppMastered || {})
//             .filter(([_, mastery]) => mastery >= 1)
//             .map(([topic]) => ({
//                 category: "C++",
//                 name: topic,
//                 title: cppData[topic]?.title || topic,
//             })),
//     ];

//     return (
//         <div className="devwork-interface relative min-h-full">
//             <style jsx>{`
//                 .background-video {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                     z-index: -1;
//                 }
//                 .video-header {
//                     width: 100%;
//                     height: 256px;
//                     overflow: hidden;
//                     border-radius: 0.5rem;
//                     border: 2px solid #6366f1;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                 }
//                 .boss-image {
//                     width: 192px;
//                     height: 256px;
//                     max-width: 100%;
//                     max-height: 60vh;
//                     object-fit: cover;
//                     object-position: center top;
//                     border-radius: 50%;
//                     border: 2px solid #6366f1;
//                     margin-left: auto;
//                     margin-right: auto;
//                 }
//                 .content-container {
//                     position: relative;
//                     z-index: 0;
//                     background-color: rgba(31, 41, 55, 0.9); /* bg-gray-800 with 90% opacity */
//                     border-radius: 0.5rem;
//                     padding: 1rem;
//                 }
//                 @media (max-width: 640px) {
//                     .video-header {
//                         height: 192px;
//                     }
//                     .boss-image {
//                         width: 128px;
//                         height: 192px;
//                         max-height: 40vh;
//                     }
//                 }
//             `}</style>
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="background-video"
//             >
//                 <source src="https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="content-container mx-auto max-w-6xl mt-4">
//                 <div className="header mb-4">
//                     <div className="video-header">
//                         <video
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                             className="w-full h-full object-cover"
//                         >
//                             <source src="/videos/workplacevideo.mp4" type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video>
//                     </div>
//                     <div className="p-4 bg-gray-800 rounded-lg">
//                         <h2 className="text-2xl font-bold text-white text-center">Dev Work</h2>
//                     </div>
//                 </div>
//                 <div className="content p-4">
//                     <div className="mb-4">
//                         <img
//                             src="/boss.jpg"
//                             alt="Team Lead"
//                             className="boss-image"
//                             onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "https://images.unsplash.com/photo-1552960394-c81a44194462?w=800&auto=format&fit=crop&q=60";
//                             }}
//                         />
//                         <p className="mt-2 text-gray-300 text-center">
//                             Take on development projects to earn cash based on your mastered skills.
//                         </p>
//                     </div>
//                     <div className="flex justify-end mb-4">
//                         <button
//                             onClick={withSound(goBackToMap)}
//                             className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
//                         >
//                             Back to Map
//                         </button>
//                     </div>
//                     <div className="p-4 rounded mb-4">
//                         <h3 className="text-lg font-semibold mb-2 text-white">Work Options</h3>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {jobs.map((job) => {
//                                 const isAvailable = job.isAvailable(totalMastered);
//                                 return (
//                                     <motion.div
//                                         key={job.id}
//                                         initial={{ opacity: 0, scale: 0.9 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="bg-black bg-opacity-30 p-4 rounded-lg"
//                                     >
//                                         <h4 className="text-lg font-semibold text-white">{job.name}</h4>
//                                         <p className="text-gray-300 text-sm">{job.description}</p>
//                                         <p className="text-green-400 font-medium mt-2">
//                                             Earnings: ${job.earnings}
//                                         </p>
//                                         <p className="text-gray-400 text-sm mt-1">
//                                             Requires: {job.requiredSubjects} subjects
//                                         </p>
//                                         <button
//                                             onClick={withSound(() => handleWork(job))}
//                                             disabled={!isAvailable || player.energy < 20}
//                                             className={`mt-2 w-full py-2 rounded ${!isAvailable || player.energy < 20
//                                                 ? "bg-gray-500 cursor-not-allowed"
//                                                 : "bg-blue-600 hover:bg-blue-500 text-white"
//                                                 }`}
//                                         >
//                                             Work (20 Energy, 15 min)
//                                         </button>
//                                     </motion.div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                     <div className="p-4 rounded mb-4">
//                         <h3 className="text-lg font-semibold mb-2 text-white">Mastered Subjects</h3>
//                         {masteredSubjects.length > 0 ? (
//                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                                 {masteredSubjects.map((subject, index) => (
//                                     <motion.div
//                                         key={`${subject.category}-${subject.name}-${index}`}
//                                         initial={{ opacity: 0, scale: 0.9 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="bg-black bg-opacity-30 p-4 rounded-lg flex items-center"
//                                     >
//                                         <span className="text-2xl mr-3">🏆</span>
//                                         <div>
//                                             <p className="text-white font-medium">{subject.title}</p>
//                                             <p className="text-gray-300 text-sm">{subject.category}</p>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <p className="text-gray-400 text-sm">
//                                 You haven't mastered any subjects yet. Study to unlock work options!
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




"use client";

import { useGame } from "@/app/context/GameContext";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
    initAudio,
    loadClickSound,
    loadWorkMusic,
    playClickSound,
    playWorkMusic,
    stopWorkMusic,
} from "@/data/audioManager";
import { jobs } from "@/data/jobs";
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

export default function DevWork() {
    const { state, dispatch } = useGame();
    const { player } = state;

    const withSound = (handler) => (event) => {
        playClickSound();
        if (handler) {
            handler(event);
        }
    };

    useEffect(() => {
        initAudio();
        loadClickSound("/sounds/click.mp3").then((success) => {
            if (!success) {
                console.warn("Failed to load click sound");
            }
        });
        loadWorkMusic("/sounds/workmusic.mp3").then(() => {
            playWorkMusic();
        });
        return () => {
            stopWorkMusic();
        };
    }, []);

    // Count total mastered subjects across all destinations
    const totalMastered = [
        ...(player.hooksMastered ? Object.values(player.hooksMastered).filter(val => val >= 1) : []),
        ...(player.nextJsMastered ? Object.values(player.nextJsMastered).filter(val => val >= 1) : []),
        ...(player.cssMastered ? Object.values(player.cssMastered).filter(val => val >= 1) : []),
        ...(player.pythonMastered ? Object.values(player.pythonMastered).filter(val => val >= 1) : []),
        ...(player.javaScriptMastered ? Object.values(player.javaScriptMastered).filter(val => val >= 1) : []),
        ...(player.typeScriptMastered ? Object.values(player.typeScriptMastered).filter(val => val >= 1) : []),
        ...(player.expressMastered ? Object.values(player.expressMastered).filter(val => val >= 1) : []),
        ...(player.cSharpMastered ? Object.values(player.cSharpMastered).filter(val => val >= 1) : []),
        ...(player.javaMastered ? Object.values(player.javaMastered).filter(val => val >= 1) : []),
        ...(player.cppMastered ? Object.values(player.cppMastered).filter(val => val >= 1) : []),
    ].length;

    const handleWork = (job) => {
        if (!job.isAvailable(totalMastered)) {
            toast.error(`You need to master at least ${job.requiredSubjects} subjects for ${job.name}!`);
            return;
        }
        if (player.energy < 20) {
            toast.error("Not enough energy to work!");
            return;
        }

        dispatch({
            type: "WORK_AT_DEV",
            payload: {
                jobType: job.name,
                cashEarned: job.earnings,
                workEnergySpent: 20,
                timeSpent: 15,
            },
        });
        dispatch({
            type: "USE_TIME",
            payload: { amount: 15 },
        });
        toast.success(`Worked as ${job.name} and earned $${job.earnings}!`);
    };

    const goBackToMap = () => {
        dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
    };

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

    return (
        <div className="devwork-interface relative min-h-full bg-transparent">
            <style jsx>{`
                .background-video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }
                .video-header {
                    width: 100%;
                    height: 256px;
                    overflow: hidden;
                    border-radius: 0.5rem;
                    border: 2px solid #6366f1;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .boss-image {
                    width: 192px;
                    height: 256px;
                    max-width: 100%;
                    max-height: 60vh;
                    object-fit: cover;
                    object-position: center top;
                    border-radius: 50%;
                    border: 2px solid #6366f1;
                    margin-left: auto;
                    margin-right: auto;
                }
                .content-container {
                    position: relative;
                    z-index: 1;
                    border-radius: 0.5rem;
                    padding: 1rem;
                }
                .content-section {
                    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black for readability */
                    border-radius: 0.5rem;
                    padding: 1rem;
                }
                @media (max-width: 640px) {
                    .video-header {
                        height: 192px;
                    }
                    .boss-image {
                        width: 128px;
                        height: 192px;
                        max-height: 40vh;
                    }
                }
            `}</style>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="background-video"
                onError={(e) => {
                    console.error("Failed to load background video:", e);
                }}
            >
                <source src="https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4" type="video/mp4" />
                <source src="/videos/devwork-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-container mx-auto max-w-6xl mt-4">
                <div className="header mb-4">
                    <div className="video-header">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/videos/workplacevideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="p-4 bg-black bg-opacity-50 rounded-lg">
                        <h2 className="text-2xl font-bold text-white text-center">Dev Work</h2>
                    </div>
                </div>
                <div className="content p-4">
                    <div className="mb-4 content-section">
                        <img
                            src="/boss.jpg"
                            alt="Team Lead"
                            className="boss-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1552960394-c81a44194462?w=800&auto=format&fit=crop&q=60";
                            }}
                        />
                        <p className="mt-2 text-gray-300 text-center">
                            Take on development projects to earn cash based on your mastered skills.
                        </p>
                    </div>
                    <div className="flex justify-end mb-4 content-section">
                        <button
                            onClick={withSound(goBackToMap)}
                            className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
                        >
                            Back to Map
                        </button>
                    </div>
                    <div className="p-4 rounded mb-4 content-section">
                        <h3 className="text-lg font-semibold mb-2 text-white">Work Options</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {jobs.map((job) => {
                                const isAvailable = job.isAvailable(totalMastered);
                                return (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-black bg-opacity-30 p-4 rounded-lg"
                                    >
                                        <h4 className="text-lg font-semibold text-white">{job.name}</h4>
                                        <p className="text-gray-300 text-sm">{job.description}</p>
                                        <p className="text-green-400 font-medium mt-2">
                                            Earnings: ${job.earnings}
                                        </p>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Requires: {job.requiredSubjects} subjects
                                        </p>
                                        <button
                                            onClick={withSound(() => handleWork(job))}
                                            disabled={!isAvailable || player.energy < 20}
                                            className={`mt-2 w-full py-2 rounded ${!isAvailable || player.energy < 20
                                                    ? "bg-gray-500 cursor-not-allowed"
                                                    : "bg-blue-600 hover:bg-blue-500 text-white"
                                                }`}
                                        >
                                            Work (20 Energy, 15 min)
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="p-4 rounded mb-4 content-section">
                        <h3 className="text-lg font-semibold mb-2 text-white">Mastered Subjects</h3>
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
                            <p className="text-gray-400 text-sm">
                                You haven't mastered any subjects yet. Study to unlock work options!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}