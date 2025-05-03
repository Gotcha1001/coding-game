

// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { useRouter } from "next/navigation";

// export default function Header() {
//     const { state, dispatch } = useGame();
//     const { player, locations } = state;
//     const router = useRouter();

//     const handleHome = () => {
//         router.push('/');
//     };

//     const handleViewStats = () => {
//         dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'stats' } });
//     };

//     if (!player) return null;

//     return (
//         <div className="bg-indigo-600 text-white p-4 shadow-md">
//             <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center">
//                 <div className="flex items-center space-x-2">
//                     <button
//                         onClick={handleHome}
//                         className="bg-white text-indigo-600 px-3 py-1 rounded-md hover:bg-indigo-100 transition"
//                     >
//                         Restart
//                     </button>
//                     <h1 className="text-xl font-bold">React Hooks Adventure</h1>
//                 </div>
//                 <div className="flex flex-wrap gap-4 mt-2 sm:mt-0">
//                     <div className="stat">
//                         <span className="stat-label">Week</span>
//                         <span className="stat-value">{player.week}</span>
//                     </div>
//                     <div className="stat">
//                         <span className="stat-label">Energy</span>
//                         <span className="stat-value">{player.energy}/100</span>
//                     </div>
//                     <div className="stat">
//                         <span className="stat-label">Cash</span>
//                         <span className="stat-value">${player.cash}</span>
//                     </div>
//                     <div className="stat">
//                         <span className="stat-label">Points</span>
//                         <span className="stat-value">{player.points}</span>
//                     </div>
//                     <button
//                         onClick={handleViewStats}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
//                     >
//                         View Stats
//                     </button>
//                 </div>
//             </div>
//             <div className="bg-indigo-500 bg-opacity-90 p-1 sm:p-4 rounded-lg shadow text-center text-white mt-4">
//                 <p className="font-semibold text-base sm:text-lg">
//                     Current Location: <span className="text-blue-200">{locations[player.currentLocation]?.name}</span>
//                 </p>
//                 <p className="text-xs sm:text-sm md:text-base mt-1 text-center text-blue-100">
//                     {locations[player.currentLocation]?.description}
//                 </p>
//             </div>
//         </div>
//     );
// }



// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { useRouter } from "next/navigation";
// import { Home, BarChart2, MapPin } from "lucide-react";

// export default function Header() {
//     const { state, dispatch } = useGame();
//     const { player, locations } = state;
//     const router = useRouter();

//     const handleHome = () => {
//         router.push('/');
//     };

//     const handleViewStats = () => {
//         dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'stats' } });
//     };

//     if (!player) return null;

//     return (
//         <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg">
//             <div className="max-w-6xl mx-auto p-4">
//                 {/* Top Bar */}
//                 <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                     {/* Logo Section */}
//                     <div className="flex items-center space-x-3">
//                         <button
//                             onClick={handleHome}
//                             className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition-all duration-300 shadow-md flex items-center space-x-2"
//                         >
//                             <Home size={18} />
//                             <span>Restart</span>
//                         </button>
//                         <h1 className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
//                             React Hooks Adventure
//                         </h1>
//                     </div>

//                     {/* Stats Dashboard */}
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <StatDisplay label="Week" value={player.week} color="bg-indigo-500" />
//                         <StatDisplay label="Energy" value={`${player.energy}/100`} color="bg-green-500" />
//                         <StatDisplay label="Cash" value={`$${player.cash}`} color="bg-yellow-500" />
//                         <StatDisplay label="Happiness" value={`${player.happiness}/100`} color="bg-pink-500" />
//                         <StatDisplay label="Points" value={player.points} color="bg-purple-500" />

//                         <button
//                             onClick={handleViewStats}
//                             className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md"
//                         >
//                             <BarChart2 size={18} />
//                             <span>View Stats</span>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Location Banner */}
//                 <div className="mt-6 bg-indigo-800 bg-opacity-70 rounded-xl shadow-inner p-4">
//                     <div className="flex flex-col items-center">
//                         <div className="flex items-center gap-2 mb-2">
//                             <MapPin size={22} className="text-blue-300" />
//                             <h2 className="font-bold text-xl text-blue-200">
//                                 {locations[player.currentLocation]?.name}
//                             </h2>
//                         </div>
//                         <p className="text-sm md:text-base text-blue-100 max-w-2xl text-center italic">
//                             {locations[player.currentLocation]?.description}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Reusable stat display component
// function StatDisplay({ label, value, color }) {
//     return (
//         <div className={`${color} px-4 py-2 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:scale-105`}>
//             <span className="text-xs font-medium text-white opacity-90">{label}</span>
//             <span className="text-lg font-bold">{value}</span>
//         </div>
//     );
// }




// "use client";

// import { useGame } from "@/app/context/GameContext";
// import { useRouter } from "next/navigation";
// import { Home, BarChart2, MapPin } from "lucide-react";

// export default function Header() {
//     const { state, dispatch } = useGame();
//     const { player, locations } = state;
//     const router = useRouter();

//     const handleHome = () => {
//         router.push('/');
//     };

//     const handleViewStats = () => {
//         dispatch({ type: 'CHANGE_SCREEN', payload: { screen: 'stats' } });
//     };

//     if (!player) return null;

//     // Safely access relationship data
//     const relationship = player.relationship || { isDating: false, partner: null, health: 80 };
//     const partnerName = relationship.isDating && relationship.partner ? relationship.partner.name : "Single";
//     const relationshipHealth = relationship.health !== undefined ? `${relationship.health}/100` : "80/100";

//     return (
//         <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg">
//             <div className="max-w-6xl mx-auto p-4">
//                 {/* Top Bar */}
//                 <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                     {/* Logo Section */}
//                     <div className="flex items-center space-x-3">
//                         <button
//                             onClick={handleHome}
//                             className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition-all duration-300 shadow-md flex items-center space-x-2"
//                         >
//                             <Home size={18} />
//                             <span>Restart</span>
//                         </button>
//                         <h1 className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
//                             React Hooks Adventure
//                         </h1>
//                     </div>
//                     {/* Stats Dashboard */}
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <StatDisplay label="Week" value={player.week} color="bg-indigo-500" />
//                         <StatDisplay label="Energy" value={`${player.energy}/100`} color="bg-green-500" />
//                         <StatDisplay label="Cash" value={`$${player.cash}`} color="bg-yellow-500" />
//                         <StatDisplay label="Happiness" value={`${player.happiness}/100`} color="bg-pink-500" />
//                         <StatDisplay label="Partner" value={partnerName} color="bg-red-500" />
//                         <StatDisplay label="Health" value={relationshipHealth} color="bg-orange-500" />
//                         <StatDisplay label="Points" value={player.points} color="bg-purple-500" />
//                         <button
//                             onClick={handleViewStats}
//                             className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md"
//                         >
//                             <BarChart2 size={18} />
//                             <span>View Stats</span>
//                         </button>
//                     </div>
//                 </div>
//                 {/* Location Banner */}
//                 <div className="mt-6 bg-indigo-800 bg-opacity-70 rounded-xl shadow-inner p-4">
//                     <div className="flex flex-col items-center">
//                         <div className="flex items-center gap-2 mb-2">
//                             <MapPin size={22} className="text-blue-300" />
//                             <h2 className="font-bold text-xl text-blue-200">
//                                 {locations[player.currentLocation]?.name}
//                             </h2>
//                         </div>
//                         <p className="text-sm md:text-base text-blue-100 max-w-2xl text-center italic">
//                             {locations[player.currentLocation]?.description}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Reusable stat display component
// function StatDisplay({ label, value, color }) {
//     return (
//         <div className={`${color} px-4 py-2 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:scale-105`}>
//             <span className="text-xs font-medium text-white opacity-90">{label}</span>
//             <span className="text-lg font-bold">{value}</span>
//         </div>
//     );
// }




"use client";

import { useGame } from "@/app/context/GameContext";
import { useRouter } from "next/navigation";
import { Home, BarChart2, MapPin, Save } from "lucide-react";

export default function Header() {
    const { state, dispatch } = useGame();
    const { player, locations } = state;
    const router = useRouter();

    const handleHome = () => {
        router.push("/");
    };

    const handleViewStats = () => {
        dispatch({ type: "CHANGE_SCREEN", payload: { screen: "stats" } });
    };

    const handleSaveLoad = () => {
        dispatch({ type: "CHANGE_SCREEN", payload: { screen: "saveload" } });
    };

    const handleReset = () => {
        dispatch({ type: "RESTART_GAME" });
        localStorage.removeItem("reactHooksAdventure_saveGame");
        sessionStorage.removeItem("reactHooksAdventure_hasFileHandle");
        dispatch({
            type: "SET_MESSAGE",
            payload: { text: "Game reset successfully!" },
        });
    };

    if (!player) return null;

    const relationship = player.relationship || { isDating: false, partner: null, health: 80 };
    const partnerName = relationship.isDating && relationship.partner ? relationship.partner.name : "Single";
    const relationshipHealth = relationship.health !== undefined ? `${relationship.health}/100` : "80/100";

    return (
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg">
            <div className="max-w-6xl mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={handleHome}
                            className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100 transition-all duration-300 shadow-md flex items-center space-x-2"
                        >
                            <Home size={18} />
                            <span>Restart</span>
                        </button>
                        <h1 className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                            React Hooks Adventure
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <StatDisplay label="Week" value={player.week} color="bg-indigo-500" />
                        <StatDisplay label="Energy" value={`${player.energy}/100`} color="bg-green-500" />
                        <StatDisplay label="Cash" value={`$${player.cash}`} color="bg-yellow-500" />
                        <StatDisplay label="Happiness" value={`${player.happiness}/100`} color="bg-pink-500" />
                        <StatDisplay label="Partner" value={partnerName} color="bg-red-500" />
                        <StatDisplay label="Health" value={relationshipHealth} color="bg-orange-500" />
                        <StatDisplay label="Points" value={player.points} color="bg-purple-500" />
                        <button
                            onClick={handleViewStats}
                            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md"
                        >
                            <BarChart2 size={18} />
                            <span>View Stats</span>
                        </button>
                        <button
                            onClick={handleSaveLoad}
                            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md"
                        >
                            <Save size={18} />
                            <span>Save/Load</span>
                        </button>
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md"
                        >
                            <span>Reset Game</span>
                        </button>
                    </div>
                </div>
                <div className="mt-6 bg-indigo-800 bg-opacity-70 rounded-xl shadow-inner p-4">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin size={22} className="text-blue-300" />
                            <h2 className="font-bold text-xl text-blue-200">
                                {locations[player.currentLocation]?.name}
                            </h2>
                        </div>
                        <p className="text-sm md:text-base text-blue-100 max-w-2xl text-center italic">
                            {locations[player.currentLocation]?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatDisplay({ label, value, color }) {
    return (
        <div className={`${color} px-4 py-2 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:scale-105`}>
            <span className="text-xs font-medium text-white opacity-90">{label}</span>
            <span className="text-lg font-bold">{value}</span>
        </div>
    );
}