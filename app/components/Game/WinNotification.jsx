// "use client";

// import React, { useEffect } from 'react';
// import confetti from 'canvas-confetti';
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle
// } from '@/components/ui/alert-dialog';
// import { useGame } from '@/app/context/GameContext';
// import { motion } from 'framer-motion';
// import { hooksData } from '@/data/hooksData';

// export default function WinNotification() {
//     const { state, dispatch } = useGame();
//     const { gameWon, player } = state;

//     const handlePlayAgain = () => {
//         dispatch({ type: 'RESTART_GAME' });
//     };

//     const handleViewStats = () => {
//         dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'stats' } });
//     };

//     const fireConfetti = () => {
//         const duration = 7000;
//         const animationEnd = Date.now() + duration;
//         const defaults = {
//             startVelocity: 40,
//             spread: 360,
//             ticks: 80,
//             zIndex: 1000,
//             scalar: 1.5,
//         };
//         const colors = ['#FFD700', '#FF4500', '#00FF00', '#1E90FF', '#FF69B4'];
//         const randomInRange = (min, max) => Math.random() * (max - min) + min;

//         const interval = setInterval(() => {
//             const timeLeft = animationEnd - Date.now();
//             if (timeLeft <= 0) {
//                 return clearInterval(interval);
//             }
//             const particleCount = 100 * (timeLeft / duration);
//             confetti({
//                 ...defaults,
//                 particleCount,
//                 colors,
//                 origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
//                 shapes: ['circle', 'square', 'star'],
//                 scalar: randomInRange(1, 2),
//             });
//             confetti({
//                 ...defaults,
//                 particleCount,
//                 colors,
//                 origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
//                 shapes: ['circle', 'square', 'star'],
//                 scalar: randomInRange(1, 2),
//             });
//             if (Math.random() > 0.7) {
//                 confetti({
//                     ...defaults,
//                     particleCount: 20,
//                     colors: ['#FFFFFF', '#FFFFE0', '#FFD700'],
//                     spread: 60,
//                     startVelocity: 50,
//                     origin: { x: randomInRange(0.4, 0.6), y: randomInRange(0.3, 0.7) },
//                     scalar: randomInRange(0.5, 1),
//                 });
//             }
//         }, 200);
//     };

//     useEffect(() => {
//         if (gameWon) {
//             fireConfetti();
//         }
//     }, [gameWon]);

//     if (!gameWon || !player || !player.name) {
//         return null;
//     }

//     return (
//         <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, ease: 'easeOut' }}
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
//         >
//             <AlertDialog open={gameWon} onOpenChange={() => { }}>
//                 <AlertDialogContent className="bg-gradient-to-br from-gray-900 to-blue-900 border-4 border-green-400 rounded-xl shadow-2xl animate-pulse-glow max-w-lg">
//                     <AlertDialogHeader>
//                         <AlertDialogTitle className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 animate-pulse">
//                             🎉 Congratulations! 🎉
//                         </AlertDialogTitle>
//                         <AlertDialogDescription className="text-2xl text-white font-semibold">
//                             {player.name} has mastered all React hooks and earned $1000!
//                             <br />
//                             <span className="block mt-3 text-yellow-300">
//                                 Hooks Mastered: {Object.keys(hooksData).length}
//                             </span>
//                             <span className="block mt-1 text-yellow-300">
//                                 Cash: ${player.cash}
//                             </span>
//                         </AlertDialogDescription>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter className="flex flex-col gap-4 sm:flex-row sm:justify-between">
//                         <AlertDialogAction
//                             onClick={handleViewStats}
//                             className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-3 px-8 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-transform"
//                         >
//                             View Stats
//                         </AlertDialogAction>
//                         <AlertDialogAction
//                             onClick={handlePlayAgain}
//                             className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-8 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-transform"
//                         >
//                             Play Again
//                         </AlertDialogAction>
//                     </AlertDialogFooter>
//                 </AlertDialogContent>
//             </AlertDialog>
//         </motion.div>
//     );
// }

// "use client";

// import React, { useEffect } from 'react';
// import confetti from 'canvas-confetti';
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle
// } from '@/components/ui/alert-dialog';
// import { useGame } from '@/app/context/GameContext';
// import { motion } from 'framer-motion';

// export default function WinNotification() {
//     const { state, dispatch } = useGame();
//     const { gameWon, player } = state;

//     const handlePlayAgain = () => {
//         dispatch({ type: 'RESTART_GAME' });
//     };

//     const handleViewStats = () => {
//         dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'stats' } });
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

//     const fireConfetti = () => {
//         const duration = 7000;
//         const animationEnd = Date.now() + duration;
//         const defaults = {
//             startVelocity: 40,
//             spread: 360,
//             ticks: 80,
//             zIndex: 1000,
//             scalar: 1.5,
//         };
//         const colors = ['#FFD700', '#FF4500', '#00FF00', '#1E90FF', '#FF69B4'];

//         const randomInRange = (min, max) => Math.random() * (max - min) + min;

//         const interval = setInterval(() => {
//             const timeLeft = animationEnd - Date.now();
//             if (timeLeft <= 0) {
//                 return clearInterval(interval);
//             }
//             const particleCount = 100 * (timeLeft / duration);
//             confetti({
//                 ...defaults,
//                 particleCount,
//                 colors,
//                 origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
//                 shapes: ['circle', 'square', 'star'],
//                 scalar: randomInRange(1, 2),
//             });
//             confetti({
//                 ...defaults,
//                 particleCount,
//                 colors,
//                 origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
//                 shapes: ['circle', 'square', 'star'],
//                 scalar: randomInRange(1, 2),
//             });
//             if (Math.random() > 0.7) {
//                 confetti({
//                     ...defaults,
//                     particleCount: 20,
//                     colors: ['#FFFFFF', '#FFFFE0', '#FFD700'],
//                     spread: 60,
//                     startVelocity: 50,
//                     origin: { x: randomInRange(0.4, 0.6), y: randomInRange(0.3, 0.7) },
//                     scalar: randomInRange(0.5, 1),
//                 });
//             }
//         }, 200);
//     };

//     useEffect(() => {
//         if (gameWon) {
//             fireConfetti();
//         }
//     }, [gameWon]);

//     if (!gameWon || !player || !player.name) {
//         return null;
//     }

//     return (
//         <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, ease: 'easeOut' }}
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
//         >
//             <AlertDialog open={gameWon} onOpenChange={() => { }}>
//                 <AlertDialogContent className="bg-gradient-to-br from-gray-900 to-blue-900 border-4 border-green-400 rounded-xl shadow-2xl animate-pulse-glow max-w-lg">
//                     <AlertDialogHeader>
//                         <AlertDialogTitle className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 animate-pulse">
//                             🎉 Congratulations! 🎉
//                         </AlertDialogTitle>
//                         <AlertDialogDescription className="text-2xl text-white font-semibold">
//                             {player.name} has won the game!
//                             <br />
//                             <span className="block mt-3 text-yellow-300">
//                                 Subjects Mastered: {countMasteredSubjects()}
//                             </span>
//                             <span className="block mt-1 text-yellow-300">
//                                 Cash: ${player.cash}
//                             </span>
//                             <span className="block mt-1 text-yellow-300">
//                                 Happiness: {player.happiness}
//                             </span>
//                         </AlertDialogDescription>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter className="flex flex-col gap-4 sm:flex-row sm:justify-between">
//                         <AlertDialogAction
//                             onClick={handleViewStats}
//                             className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-3 px-8 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-transform"
//                         >
//                             View Stats
//                         </AlertDialogAction>
//                         <AlertDialogAction
//                             onClick={handlePlayAgain}
//                             className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-8 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-transform"
//                         >
//                             Play Again
//                         </AlertDialogAction>
//                     </AlertDialogFooter>
//                 </AlertDialogContent>
//             </AlertDialog>
//         </motion.div>
//     );
// }



// not using it just for reference GameOver does it now 

"use client";

import { useGame } from "@/app/context/GameContext";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function WinNotification() {
    const { state, dispatch } = useGame();
    const { gameWon, player } = state;

    const handlePlayAgain = () => {
        dispatch({ type: "RESTART_GAME" });
    };

    const handleViewStats = () => {
        dispatch({ type: "CHANGE_SCREEN", payload: { screen: "stats" } });
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
        if (gameWon) {
            fireConfetti();
        }
    }, [gameWon]);

    if (!gameWon || !player || !player.name) {
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
                <AlertDialogContent className="bg-gradient-to-br from-gray-900 to-blue-900 border-4 border-green-400 rounded-xl shadow-2xl animate-pulse-glow max-w-lg">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 animate-pulse">
                            🎉 Congratulations! 🎉
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-2xl text-white font-semibold">
                            {player.name} has won the game!
                            <br />
                            <span className="block mt-3 text-yellow-300">
                                Subjects Mastered: {countMasteredSubjects()}
                            </span>
                            <span className="block mt-1 text-yellow-300">
                                Cash: ${player.cash}
                            </span>
                            <span className="block mt-1 text-yellow-300">
                                Happiness: {player.happiness}
                            </span>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
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