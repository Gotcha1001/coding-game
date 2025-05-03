

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useGame } from "@/app/context/GameContext";

// const avatars = [

//     '/avatars/avatar30.jpg',
//     '/avatars/avatar25.jpg',
//     '/avatars/avatar24.jpg',
//     '/avatars/avatar26.jpg',
//     '/avatars/avatar27.jpg',
//     '/avatars/avatar32.jpg',
//     '/avatars/avatar34.jpg',
//     '/avatars/avatar35.jpg',
//     '/avatars/avatar38.jpg',
//     '/avatars/avatar39.jpg',
//     '/avatars/avatar28.jpg',
//     '/avatars/avatar21.jpg',
//     '/avatars/avatar 31.jpg',
//     '/avatars/avatar37.jpg',
//     '/avatars/avatar40.jpg',
//     '/avatars/avatar41.jpg',
//     '/avatars/avatar29.jpg',
//     '/avatars/avatar17.jpg',
//     '/avatars/avatar15.jpg',
//     '/avatars/avatar16.jpg',
//     '/avatars/avatar19.jpg',
//     '/avatars/avatar42.jpg',
//     '/avatars/avatar33.jpg',
//     '/avatars/avatar36.jpg',

//     '/avatars/person.jpg',


//     '/avatars/sexygirl.jpg',
//     '/avatars/sexygirl1.jpg',
//     '/avatars/sexygirl2.jpg',
//     '/avatars/sexygirl3.jpg',
//     '/avatars/sexygirl4.jpg',

//     '/avatars/sexyguy1.jpg',
//     '/avatars/sexyguy2.jpg',
//     '/avatars/sexyguy.jpg',
//     '/avatars/sexyguy3.jpg',
//     '/avatars/sexyguy4.jpg',

// ];

// export default function PlayerSelect() {
//     const { dispatch } = useGame();
//     const [name, setName] = useState("Player");
//     const [selectedAvatar, setSelectedAvatar] = useState(0);

//     const handleStart = () => {
//         dispatch({
//             type: "START_GAME",
//             payload: {
//                 player: {
//                     name,
//                     avatar: avatars[selectedAvatar],
//                 },
//             },
//         });
//     };

//     return (
//         <motion.div
//             className="max-w-xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//         >
//             <h2 className="text-3xl font-bold mb-4 text-center">Choose Your Character</h2>

//             <div className="mb-4">
//                 <label className="block mb-2">Player Name</label>
//                 <input
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full p-2 rounded bg-gray-700 text-white"
//                 />
//             </div>

//             <div className="mb-4">
//                 <label className="block mb-2">Select Avatar</label>
//                 <div className="flex gap-4 flex-wrap justify-center">
//                     {avatars.map((avatar, index) => (
//                         <motion.img
//                             key={index}
//                             src={avatar}
//                             alt={`Avatar ${index}`}
//                             className={`w-20 h-20 rounded-full cursor-pointer border-4 ${selectedAvatar === index ? "border-blue-400" : "border-transparent"
//                                 }`}
//                             onClick={() => setSelectedAvatar(index)}
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.95 }}
//                         />
//                     ))}
//                 </div>
//             </div>

//             <button
//                 className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white mt-4"
//                 onClick={handleStart}
//             >
//                 Start Game
//             </button>
//         </motion.div>
//     );
// }





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

    const handleStart = () => {
        dispatch({
            type: "START_GAME",
            payload: {
                player: {
                    name,
                    avatar: avatars[selectedAvatar],
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





// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useGame } from "@/app/context/GameContext";

// const avatars = [

//     '/avatars/avatar30.jpg',
//     '/avatars/avatar25.jpg',
//     '/avatars/avatar24.jpg',
//     '/avatars/avatar26.jpg',
//     '/avatars/avatar27.jpg',
//     '/avatars/avatar32.jpg',
//     '/avatars/avatar34.jpg',
//     '/avatars/avatar35.jpg',
//     '/avatars/avatar38.jpg',
//     '/avatars/avatar39.jpg',
//     '/avatars/avatar28.jpg',
//     '/avatars/avatar21.jpg',
//     '/avatars/avatar 31.jpg',
//     '/avatars/avatar37.jpg',
//     '/avatars/avatar40.jpg',
//     '/avatars/avatar41.jpg',
//     '/avatars/avatar29.jpg',
//     '/avatars/avatar17.jpg',
//     '/avatars/avatar15.jpg',
//     '/avatars/avatar16.jpg',
//     '/avatars/avatar19.jpg',
//     '/avatars/avatar42.jpg',
//     '/avatars/avatar33.jpg',
//     '/avatars/avatar36.jpg',

//     '/avatars/person.jpg',


//     '/avatars/sexygirl.jpg',
//     '/avatars/sexygirl1.jpg',
//     '/avatars/sexygirl2.jpg',
//     '/avatars/sexygirl3.jpg',
//     '/avatars/sexygirl4.jpg',

//     '/avatars/sexyguy1.jpg',
//     '/avatars/sexyguy2.jpg',
//     '/avatars/sexyguy.jpg',
//     '/avatars/sexyguy3.jpg',
//     '/avatars/sexyguy4.jpg',

// ];

// export default function PlayerSelect() {
//     const { dispatch } = useGame();
//     const [numPlayers, setNumPlayers] = useState(1);
//     const [playerName, setPlayerName] = useState("Player 1");
//     const [selectedAvatar, setSelectedAvatar] = useState(0);
//     const [currentPlayer, setCurrentPlayer] = useState(1);
//     const [players, setPlayers] = useState([]);

//     const handleAddPlayer = () => {
//         const newPlayer = {
//             id: currentPlayer,
//             name: playerName || `Player ${currentPlayer}`,
//             avatar: avatars[selectedAvatar],
//             week: 1,
//             energy: 100,
//             cash: 100,
//             happiness: 50,
//             points: 0,
//             cppMastered: {},
//             relationship: { isDating: false, partner: null, health: 80 },
//             currentLocation: "apartment",
//         };

//         const updatedPlayers = [...players, newPlayer];
//         setPlayers(updatedPlayers);

//         if (updatedPlayers.length < numPlayers) {
//             // Setup for next player
//             setCurrentPlayer(currentPlayer + 1);
//             setPlayerName(`Player ${currentPlayer + 1}`);
//             setSelectedAvatar(0);
//         } else {
//             // Start the game with all players
//             dispatch({
//                 type: "START_GAME",
//                 payload: {
//                     players: updatedPlayers,
//                     numPlayers,
//                     currentPlayerId: 1, // Start with Player 1
//                 },
//             });
//         }
//     };

//     return (
//         <motion.div
//             className="max-w-xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//         >
//             <h2 className="text-3xl font-bold mb-4 text-center">Choose Your Characters</h2>

//             {players.length < numPlayers ? (
//                 <>
//                     <div className="mb-6">
//                         <label className="block mb-2 text-center">How many players?</label>
//                         <div className="flex justify-center gap-4 flex-wrap">
//                             {[1, 2, 3, 4].map((num) => (
//                                 <motion.button
//                                     key={num}
//                                     className={`px-4 py-2 rounded ${numPlayers === num ? "bg-blue-600" : "bg-gray-600"}`}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     onClick={() => setNumPlayers(num)}
//                                 >
//                                     {num} Player{num > 1 ? "s" : ""}
//                                 </motion.button>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label className="block mb-2">Player {currentPlayer} Name</label>
//                         <input
//                             value={playerName}
//                             onChange={(e) => setPlayerName(e.target.value)}
//                             className="w-full p-2 rounded bg-gray-700 text-white"
//                             placeholder={`Enter Player ${currentPlayer} name`}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block mb-2">Select Avatar</label>
//                         <div className="flex gap-4 flex-wrap justify-center">
//                             {avatars.map((avatar, index) => (
//                                 <motion.img
//                                     key={index}
//                                     src={avatar}
//                                     alt={`Avatar ${index}`}
//                                     className={`w-20 h-20 rounded-full cursor-pointer border-4 ${selectedAvatar === index ? "border-blue-400" : "border-transparent"
//                                         }`}
//                                     onClick={() => setSelectedAvatar(index)}
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     <motion.button
//                         className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white mt-4"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={handleAddPlayer}
//                     >
//                         {players.length === numPlayers - 1 ? "Start Game" : "Next Player"}
//                     </motion.button>
//                 </>
//             ) : (
//                 <div className="text-center">
//                     <p>Starting game...</p>
//                 </div>
//             )}
//         </motion.div>
//     );
// }