// "use client";

// import { useGame } from "@/app/context/GameContext";

// export default function ProfessorHeader() {
//     const { state } = useGame();
//     const { currentScreen } = state;

//     return (
//         <div className="w-full bg-gradient-to-r from-blue-900 to-indigo-800 p-4 shadow-md rounded-lg mb-5">
//             <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//                 <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg bg-black">
//                     <video
//                         src="https://videos.pexels.com/video-files/3252126/3252126-sd_640_360_25fps.mp4" // place your video file in the public/videos folder
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="w-full h-full object-cover object-[center_top]"
//                     />
//                 </div>
//                 {/* <div className="w-40 h-40 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
//                     <img
//                         src="https://img.freepik.com/premium-photo/smiling-young-indian-business-man-wearing-suit-standing-office-portrait_562687-3120.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740"
//                         alt="Professor React"
//                         className="w-full h-full object-cover object-[center_top]"
//                     />
//                 </div> */}
//                 <div className="text-center sm:text-left">
//                     <h3 className="text-white font-extrabold text-2xl sm:text-3xl">Professor React</h3>
//                     <p className="text-blue-200 text-sm sm:text-base">
//                         {currentScreen === "university"
//                             ? "Teaching React Hooks"
//                             : currentScreen === "location" && state.player?.currentLocation === "university"
//                                 ? "Welcome to React University"
//                                 : "React Hooks Adventure Guide"}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }



// "use client";

// import { useGame } from "@/app/context/GameContext";

// export default function ProfessorHeader() {
//     const { state } = useGame();
//     const { currentScreen } = state;

//     return (
//         <div className="w-full bg-gradient-to-r from-blue-900 to-indigo-800 p-4 shadow-md rounded-lg mb-5">
//             <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4">
//                 <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg bg-black">
//                     <video
//                         src="https://videos.pexels.com/video-files/3252126/3252126-sd_640_360_25fps.mp4"
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="w-full h-full object-cover object-[center_top]"
//                     />
//                 </div>
//                 <div className="text-center">
//                     <h3 className="text-white font-extrabold text-2xl sm:text-3xl">Professor React</h3>
//                     <p className="text-blue-200 text-sm sm:text-base">
//                         {currentScreen === "university"
//                             ? "Teaching React Hooks"
//                             : currentScreen === "location" && state.player?.currentLocation === "university"
//                                 ? "Welcome to React University"
//                                 : "React Hooks Adventure Guide"}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }




"use client";

import { useGame } from "@/app/context/GameContext";
import { locations } from "@/data/locations";

export default function ProfessorHeader() {
    const { state } = useGame();
    const { currentScreen, player } = state;

    // Define professor configurations for each educational location
    const professorConfig = {
        university: {
            name: "Professor React",
            description: "Teaching React Hooks",
            video: "https://videos.pexels.com/video-files/3252126/3252126-sd_640_360_25fps.mp4",
            fallbackDescription: "React Hooks Adventure Guide",
        },
        reactNativeUniversity: {
            name: "Professor React Native",
            description: "Teaching React Native Mobile Development",
            video: "https://videos.pexels.com/video-files/7968376/7968376-sd_960_506_25fps.mp4",
            fallbackDescription: "React Native Adventure Guide",
        },
        cssHotel: {
            name: "Professor CSS",
            description: "Teaching Tailwind CSS and CSS",
            video: "https://videos.pexels.com/video-files/5676175/5676175-hd_1080_1920_25fps.mp4",
            fallbackDescription: "CSS and Tailwind Adventure Guide",
        },
        nextJsSchool: {
            name: "Professor Next.js",
            description: "Teaching Next.js Features",
            video: "https://videos.pexels.com/video-files/8264022/8264022-sd_360_640_25fps.mp4",
            fallbackDescription: "Next.js Adventure Guide",
        },
        javaScriptHotel: {
            name: "Professor JavaScript",
            description: "Teaching JavaScript Concepts",
            video: "https://videos.pexels.com/video-files/7968372/7968372-uhd_2732_1440_25fps.mp4",
            fallbackDescription: "JavaScript Adventure Guide",
        },
        pythonHotel: {
            name: "Professor Python",
            description: "Teaching Python Concepts",
            video: "https://videos.pexels.com/video-files/5676140/5676140-sd_640_360_25fps.mp4",
            fallbackDescription: "Python Adventure Guide",
        },
        typeScriptHolidayResort: {
            name: "Professor TypeScript",
            description: "Teaching TypeScript Concepts",
            video: "https://videos.pexels.com/video-files/7583723/7583723-sd_640_360_25fps.mp4",
            fallbackDescription: "TypeScript Adventure Guide",
        },
        expressHotel: {
            name: "Professor Express",
            description: "Teaching Express.js API Concepts",
            video: "https://videos.pexels.com/video-files/6269216/6269216-uhd_2560_1440_24fps.mp4",
            fallbackDescription: "Express.js Adventure Guide",
        },
        cSharpHotel: {
            name: "Professor C#",
            description: "Teaching C# and .NET Concepts",
            video: "https://videos.pexels.com/video-files/15958462/15958462-sd_640_360_30fps.mp4",
            fallbackDescription: "C# and .NET Adventure Guide",
        },
        javaResort: {
            name: "Professor Java",
            description: "Teaching Java Concepts",
            video: "https://videos.pexels.com/video-files/7989531/7989531-sd_640_360_25fps.mp4",
            fallbackDescription: "Java Adventure Guide",
        },
        gamingHotel: {
            name: "Professor GameDev",
            description: "Teaching Game Development with C++",
            video: "https://videos.pexels.com/video-files/4629795/4629795-sd_640_360_25fps.mp4",
            fallbackDescription: "Game Development Adventure Guide",
        },
    };

    // Determine the current professor based on currentScreen or player's location
    const getProfessorDetails = () => {
        if (currentScreen in professorConfig) {
            return {
                ...professorConfig[currentScreen],
                description:
                    currentScreen === currentScreen
                        ? professorConfig[currentScreen].description
                        : professorConfig[currentScreen].fallbackDescription,
            };
        }
        // Fallback for locations not directly mapped to a screen
        const location = player?.currentLocation;
        if (location && professorConfig[location]) {
            return {
                ...professorConfig[location],
                description: `Welcome to ${locations[location].name}`,
            };
        }
        // Default fallback
        return {
            name: "Professor Code",
            description: "General Coding Adventure Guide",
            video: "https://videos.pexels.com/video-files/3252126/3252126-sd_640_360_25fps.mp4",
            fallbackDescription: "General Coding Adventure Guide",
        };
    };

    const { name, description, video } = getProfessorDetails();

    return (
        <div className="w-full bg-gradient-to-r from-blue-900 to-indigo-800 p-4 shadow-md rounded-lg mb-5">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4">
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg bg-black">
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover object-[center_top]"
                        onError={(e) => console.error("Failed to load professor video:", e)}
                    />
                </div>
                <div className="text-center">
                    <h3 className="text-white font-extrabold text-2xl sm:text-3xl">{name}</h3>
                    <p className="text-blue-200 text-sm sm:text-base">{description}</p>
                </div>
            </div>
        </div>
    );
}