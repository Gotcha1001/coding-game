"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "@/app/context/GameContext";

const avatars = [
    '/avatars/avatar30.jpg',
    '/avatars/avatar25.jpg',
    '/avatars/avatar24.jpg',
    '/avatars/avatar26.jpg',
    '/avatars/avatar27.jpg',
    '/avatars/avatar32.jpg',
    '/avatars/avatar34.jpg',
    '/avatars/avatar35.jpg',
    '/avatars/avatar38.jpg',
    '/avatars/avatar39.jpg',
    '/avatars/avatar28.jpg',
    '/avatars/avatar21.jpg',
    '/avatars/avatar31.jpg', // Fixed space in filename
    '/avatars/avatar37.jpg',
    '/avatars/avatar40.jpg',
    '/avatars/avatar41.jpg',
    '/avatars/avatar29.jpg',
    '/avatars/avatar17.jpg',
    '/avatars/avatar15.jpg',
    '/avatars/avatar16.jpg',
    '/avatars/avatar19.jpg',
    '/avatars/avatar42.jpg',
    '/avatars/avatar33.jpg',
    '/avatars/avatar36.jpg',
    '/avatars/person.jpg',
    '/avatars/sexygirl.jpg',
    '/avatars/sexygirl1.jpg',
    '/avatars/sexygirl2.jpg',
    '/avatars/sexygirl3.jpg',
    '/avatars/sexygirl4.jpg',
    '/avatars/sexyguy1.jpg',
    '/avatars/sexyguy2.jpg',
    '/avatars/sexyguy.jpg',
    '/avatars/sexyguy3.jpg',
    '/avatars/sexyguy4.jpg',
];

export default function PlayerSelect() {
    const { dispatch } = useGame();
    const [name, setName] = useState("Player");
    const [selectedAvatar, setSelectedAvatar] = useState(0);
    const [difficulty, setDifficulty] = useState("medium");

    const handleStart = () => {
        dispatch({
            type: "START_GAME",
            payload: {
                player: {
                    name,
                    avatar: avatars[selectedAvatar],
                    difficulty,
                },
            },
        });
    };

    // Animation variants for the container
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: { duration: 0.5 },
        },
    };

    // Animation variants for child elements
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="max-w-2xl mx-auto mt-16 p-8 rounded-2xl shadow-2xl text-white"
            style={{
                background: "linear-gradient(135deg, #4c1d95 0%, #1e1b4b 50%, #000000 100%)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.1)",
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.h2
                className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600"
                variants={childVariants}
            >
                Create Your Coder
            </motion.h2>

            <motion.div className="mb-6" variants={childVariants}>
                <label className="block mb-2 text-lg font-semibold text-purple-200">
                    Player Name
                </label>
                <motion.input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-900/50 text-white border border-purple-500/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
                    placeholder="Enter your name"
                    whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                />
            </motion.div>

            <motion.div className="mb-6" variants={childVariants}>
                <label className="block mb-3 text-lg font-semibold text-purple-200">
                    Select Difficulty
                </label>
                <div className="grid grid-cols-3 gap-4">
                    {["easy", "medium", "hard"].map((level) => (
                        <motion.button
                            key={level}
                            onClick={() => setDifficulty(level)}
                            className={`p-3 rounded-lg text-center capitalize transition-all duration-300 ${difficulty === level
                                ? "bg-indigo-600 shadow-lg shadow-indigo-500/50"
                                : "bg-gray-900/50 hover:bg-gray-800/50"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {level}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            <motion.div className="mb-8" variants={childVariants}>
                <label className="block mb-3 text-lg font-semibold text-purple-200">
                    Select Avatar
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 justify-center">
                    <AnimatePresence>
                        {avatars.map((avatar, index) => (
                            <motion.img
                                key={index}
                                src={avatar}
                                alt={`Avatar ${index + 1}`}
                                className={`w-16 h-16 rounded-full cursor-pointer border-4 transition-all duration-300 ${selectedAvatar === index
                                    ? "border-indigo-400 shadow-lg shadow-indigo-500/50"
                                    : "border-transparent hover:border-purple-500/50"
                                    }`}
                                onClick={() => setSelectedAvatar(index)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>

            <motion.button
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg text-white font-semibold text-lg shadow-lg"
                onClick={handleStart}
                variants={childVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.7)" }}
                whileTap={{ scale: 0.95 }}
            >
                Start Your Journey
            </motion.button>
        </motion.div>
    );
}