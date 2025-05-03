

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    '/avatars/avatar 31.jpg',
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

    return (
        <motion.div
            className="max-w-xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="text-3xl font-bold mb-4 text-center">Choose Your Character</h2>

            <div className="mb-4">
                <label className="block mb-2">Player Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">Select Avatar</label>
                <div className="flex gap-4 flex-wrap justify-center">
                    {avatars.map((avatar, index) => (
                        <motion.img
                            key={index}
                            src={avatar}
                            alt={`Avatar ${index}`}
                            className={`w-20 h-20 rounded-full cursor-pointer border-4 ${selectedAvatar === index ? "border-blue-400" : "border-transparent"
                                }`}
                            onClick={() => setSelectedAvatar(index)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        />
                    ))}
                </div>
            </div>

            <button
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white mt-4"
                onClick={handleStart}
            >
                Start Game
            </button>
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