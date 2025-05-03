

// "use client";

// import { useGame } from '@/app/context/GameContext';
// import { useEffect } from 'react';
// import { toast } from 'sonner';
// import { initAudio, loadClickSound, playClickSound } from '@/data/audioManager';
// import MotionWrapperDelay from '../FramerMotion/MotionWrapperDelay';

// export default function LocationDetail() {
//     const { state, dispatch } = useGame();
//     const { player, locations } = state;
//     const location = locations[player.currentLocation];

//     const showMessage = (message, actionType = null) => {
//         dispatch({
//             type: 'SET_MESSAGE',
//             payload: { text: message },
//         });
//         toast.success(message);
//         if (actionType) {
//             dispatch({ type: actionType });
//         }
//     };

//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     useEffect(() => {
//         initAudio();
//         loadClickSound('/sounds/click.mp3').then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//     }, []);

//     const handleAction = (action) => {
//         const minEnergyForActions = 20;
//         const canRestAtHome = location.type === "home";

//         // Check if player is stuck: not enough energy for actions and not at home
//         if (
//             player.energy < minEnergyForActions &&
//             !canRestAtHome &&
//             action !== "rest" &&
//             action !== "enterUniversity" &&
//             action !== "enterNextJsSchool" &&
//             action !== "rentOffice" &&
//             action !== "fastFood" &&
//             action !== "enterCssHotel" &&
//             action !== "enterPythonHotel" &&
//             action !== "enterJavaScriptHotel" &&
//             action !== "enterTypeScriptHolidayResort" &&
//             action !== "enterExpressHotel" &&
//             action !== "enterCSharpHotel" &&
//             action !== "enterReactNativeUniversity" &&
//             action !== "enterJavaResort" &&
//             action !== "enterGamingHotel" &&
//             action !== "shop" &&
//             action !== "enterApartment"
//         ) {
//             dispatch({ type: "ADVANCE_WEEK_AND_REST" });
//             showMessage("Energy too low! Advanced to next week and restored energy.");
//             return;
//         }

//         switch (action) {
//             case 'learnHook':
//                 if (location.type === "hook" && player.energy >= 20) {
//                     dispatch({
//                         type: "LEARN_HOOK",
//                         payload: { hook: location.hook, pointsEarned: 10, energySpent: 20 },
//                     });
//                     showMessage(`Learned ${location.hook}!`);
//                 } else if (player.energy < 20) {
//                     showMessage("Not enough energy!");
//                 }
//                 break;
//             case 'work':
//                 if (location.type === "hook") {
//                     dispatch({
//                         type: "WORK_AT_HOOK",
//                         payload: { hook: location.hook },
//                     });
//                     showMessage("Worked at hook location!");
//                 }
//                 break;
//             case 'fastFood':
//                 if (player.energy < minEnergyForActions) {
//                     showMessage("Not enough energy to visit Python Burgers!");
//                     return;
//                 }
//                 dispatch({ type: "CHANGE_SCREEN", payload: { screen: "fastFood" } });
//                 break;
//             case 'rest':
//                 if (location.type === "home") {
//                     dispatch({ type: "REST" });
//                     showMessage("Rested and recovered energy!");
//                 }
//                 break;
//             case 'enterUniversity':
//                 if (location.type === "education" && location.id === "university") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "university" } });
//                 }
//                 break;
//             case 'enterNextJsSchool':
//                 if (location.type === "education" && location.id === "nextJsSchool") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "nextJsSchool" } });
//                 }
//                 break;
//             case 'enterJavaResort':
//                 if (location.type === "education" && location.id === "javaResort") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "javaResort" } });
//                 }
//                 break;
//             case 'enterCssHotel':
//                 if (location.type === "education" && location.id === "cssHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "cssHotel" } });
//                 }
//                 break;
//             case 'enterPythonHotel':
//                 if (location.type === "education" && location.id === "pythonHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "pythonHotel" } });
//                 }
//             case 'enterGamingHotel':
//                 if (location.type === "education" && location.id === "gamingHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "gamingHotel" } });
//                 }
//             case 'enterJavaScriptHotel':
//                 if (location.type === "education" && location.id === "javaScriptHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "javaScriptHotel" } });
//                 }
//             case 'enterTypeScriptHolidayResort':
//                 if (location.type === "education" && location.id === "typeScriptHolidayResort") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "typeScriptHolidayResort" } });
//                 }
//             case 'enterExpressHotel':
//                 if (location.type === "education" && location.id === "expressHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "expressHotel" } });
//                 }
//                 break;
//             case 'enterCSharpHotel':
//                 if (location.type === "education" && location.id === "cSharpHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "cSharpHotel" } });
//                 }
//                 break;
//             case 'enterReactNativeUniversity':
//                 if (location.type === "education" && location.id === "reactNativeUniversity") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "reactNativeUniversity" } });
//                 }
//                 break;
//             case 'rentOffice':
//                 if (location.type === "finance" && location.id === "rentOffice") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "rentOffice" } });
//                 }
//                 break;
//             case 'shop':
//                 if (location.type === "shop" && location.id === "mall") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "mall" } });
//                 }
//                 break;

//             case 'enterApartment':
//                 if (location.type === "home" && location.id === "apartment") {
//                     if (!player.rental.hasApartment) {
//                         showMessage("You need to rent an apartment first! Visit the Rental Office.");
//                         return;
//                     }
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "apartment" } });
//                 }
//                 break;
//             default:
//                 showMessage(`Action "${action}" not implemented.`);
//                 break;
//         }
//     };

//     const goBackToMap = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
//     };

//     if (!location) return <div>Location not found</div>;


//     const actions = location.actions || [];


//     // Helper function to get a thematic background color based on location type
//     const getBackgroundStyle = () => {
//         switch (location.type) {
//             case "hook":
//                 return "from-blue-900 to-indigo-800"; // Blue gradient for hooks
//             case "home":
//                 return "from-purple-900 to-blue-800"; // Green gradient for home
//             case "education":
//                 return "from-purple-900 to-violet-800"; // Purple gradient for education
//             case "finance":
//                 return "from-indigo-500 to-teal-500"; // Amber gradient for finance
//             case "shop":
//                 return "from-rose-900 to-pink-800"; // Rose gradient for shops
//             case "fastFood":
//                 return "from-red-900 to-orange-400"; // Red gradient for restaurants
//             default:
//                 return "from-gray-900 to-slate-800"; // Default gradient
//         }
//     };

//     // Additional styling info based on location type
//     const getLocationIcon = () => {
//         switch (location.type) {
//             case "hook": return "🧩";
//             case "home": return "🏠";
//             case "education": return "🎓";
//             case "finance": return "💰";
//             case "shop": return "🛒";
//             case "fastFood": return "🍔";
//             default: return "📍";
//         }
//     };

//     return (
//         <div className="location-detail mt-4">
//             {/* Header with back button */}
//             <div className="flex justify-between items-center mb-4">
//                 <MotionWrapperDelay
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     variants={{
//                         hidden: { opacity: 0, x: -100 },
//                         visible: { opacity: 1, x: 0 },
//                     }}
//                 >     <h2 className="text-xl font-bold flex items-center">
//                         <span className="mr-2">{getLocationIcon()}</span>
//                         {location.name}
//                     </h2></MotionWrapperDelay>

//                 <button
//                     onClick={withSound(goBackToMap)}
//                     className="bg-indigo-500 hover:bg-purple-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Map
//                 </button>
//             </div>
//             {/* Main content with themed background */}
//             <div className={`bg-gradient-to-br ${getBackgroundStyle()} rounded-xl shadow-lg overflow-hidden p-6`}>
//                 <div className="flex flex-col md:flex-row gap-6">
//                     {/* Image section with caption */}
//                     <div className="flex-shrink-0 md:w-96">
//                         <div className="bg-black bg-opacity-30 p-3 rounded-lg">
//                             <MotionWrapperDelay
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true, amount: 0.5 }}
//                                 transition={{ duration: 0.5, delay: 0.4 }}
//                                 variants={{
//                                     hidden: { opacity: 0, x: -100 },
//                                     visible: { opacity: 1, x: 0 },
//                                 }}
//                             >      <img
//                                     src={location.image}
//                                     alt={location.name}
//                                     className="w-full h-72 object-cover rounded-lg shadow-md"
//                                 /> </MotionWrapperDelay>

//                             <p className="mt-3 text-gray-200 text-lg font-medium text-center p-2 bg-black bg-opacity-40 rounded">
//                                 {location.description}
//                             </p>
//                         </div>
//                     </div>
//                     {/* Actions section */}
//                     <div className="flex-grow flex flex-col justify-between">
//                         <div>
//                             <h3 className="text-xl text-white font-bold mb-4 border-b border-white border-opacity-20 pb-2">
//                                 Available Actions
//                             </h3>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                 {actions.map(action => {
//                                     let actionName = '';
//                                     let actionDesc = '';
//                                     let actionIcon = '';
//                                     switch (action) {
//                                         case 'learnHook':
//                                             actionName = `Learn ${location.hook}`;
//                                             actionDesc = 'Spend 20 energy to learn this hook';
//                                             actionIcon = '📚';
//                                             break;
//                                         case 'fastFood':
//                                             actionName = 'Order Food';
//                                             actionDesc = 'Grab a quick bite at Python Burgers';
//                                             actionIcon = '🍔';
//                                             break;
//                                         case 'work':
//                                             actionName = 'Work';
//                                             actionDesc = 'Earn cash based on hook mastery (20 energy)';
//                                             actionIcon = '💼';
//                                             break;
//                                         case 'rest':
//                                             actionName = 'Rest';
//                                             actionDesc = 'Recover all energy';
//                                             actionIcon = '😴';
//                                             break;
//                                         case 'enterJavaResort':
//                                             actionName = 'Enter Java Resort';
//                                             actionDesc = 'Study Java concepts';
//                                             actionIcon = '☕';
//                                             break;
//                                         case 'enterGamingHotel':
//                                             actionName = 'Enter Gaming Hotel';
//                                             actionDesc = 'Learn to code games using C++';
//                                             actionIcon = '🎮';
//                                             break;
//                                         case 'enterUniversity':
//                                             actionName = 'Enter University';
//                                             actionDesc = 'Study React hooks';
//                                             actionIcon = '🏛️';
//                                             break;
//                                         case 'enterNextJsSchool':
//                                             actionName = 'Enter NextJs School';
//                                             actionDesc = 'Study Next.js features';
//                                             actionIcon = '🖥️';
//                                             break;
//                                         case 'enterCssHotel':
//                                             actionName = 'Enter CSS Hotel';
//                                             actionDesc = 'Study Tailwind CSS and CSS';
//                                             actionIcon = '🎨';
//                                             break;
//                                         case 'enterPythonHotel':
//                                             actionName = 'Enter Python Hotel';
//                                             actionDesc = 'Study Python concepts';
//                                             actionIcon = '🐍';
//                                             break;
//                                         case 'enterJavaScriptHotel':
//                                             actionName = 'Enter JavaScript Hotel';
//                                             actionDesc = 'Study JavaScript concepts';
//                                             actionIcon = '📜';
//                                             break;
//                                         case 'enterTypeScriptHolidayResort':
//                                             actionName = 'Enter TypeScript Holiday Resort';
//                                             actionDesc = 'Study TypeScript concepts';
//                                             actionIcon = '🏖️';
//                                             break;
//                                         case 'enterReactNativeUniversity':
//                                             actionName = 'Enter React Native University';
//                                             actionDesc = 'Study React Native mobile app development';
//                                             actionIcon = '📱';
//                                             break;
//                                         case 'enterExpressHotel':
//                                             actionName = 'Enter Express Hotel';
//                                             actionDesc = 'Study Express.js API concepts';
//                                             actionIcon = '🚀';
//                                             break;
//                                         case 'enterCSharpHotel':
//                                             actionName = 'Enter C# Hotel';
//                                             actionDesc = 'Study C# and .NET concepts';
//                                             actionIcon = '💻';
//                                             break;
//                                         case 'rentOffice':
//                                             actionName = 'Visit Rental Office';
//                                             actionDesc = 'Manage your apartment';
//                                             actionIcon = '📝';
//                                             break;
//                                         case 'shop':
//                                             actionName = 'Go Shopping';
//                                             actionDesc = 'Browse items for your apartment';
//                                             actionIcon = '🛒';
//                                             break;
//                                         case 'enterApartment':
//                                             actionName = 'Enter Apartment';
//                                             actionDesc = 'Visit your home to rest and view items';
//                                             actionIcon = '🏠';
//                                             break;
//                                         default:
//                                             actionName = action;
//                                             actionDesc = 'Perform this action';
//                                             actionIcon = '⚡';
//                                     }
//                                     return (
//                                         <button
//                                             key={action}
//                                             onClick={withSound(() => handleAction(action))}
//                                             className="bg-black bg-opacity-40 hover:bg-opacity-60 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center"
//                                         >
//                                             <span className="text-xl mr-3">{actionIcon}</span>
//                                             <div className="text-left">
//                                                 <span className="font-bold block">{actionName}</span>
//                                                 <span className="text-xs text-blue-200">{actionDesc}</span>
//                                             </div>
//                                         </button>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                         {/* Location stats section - optional */}
//                         {location.type === "hook" && (
//                             <div className="mt-6 bg-black bg-opacity-30 p-4 rounded-lg">
//                                 <h4 className="text-lg text-white font-semibold mb-2">Hook Mastery</h4>
//                                 <div className="flex items-center">
//                                     <div className="bg-gray-700 h-4 flex-grow rounded-full overflow-hidden">
//                                         <div
//                                             className="bg-blue-500 h-full"
//                                             style={{ width: `${(player.hooks?.[location.hook] || 0) * 10}%` }}
//                                         ></div>
//                                     </div>
//                                     <span className="ml-3 text-white">{player.hooks?.[location.hook] || 0}/10</span>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// "use client";

// import { useGame } from '@/app/context/GameContext';
// import { useEffect } from 'react';
// import { toast } from 'sonner';
// import { initAudio, loadClickSound, playClickSound } from '@/data/audioManager';
// import MotionWrapperDelay from '../FramerMotion/MotionWrapperDelay';

// export default function LocationDetail() {
//     const { state, dispatch } = useGame();
//     const { player, locations } = state;
//     const location = locations[player.currentLocation];

//     const showMessage = (message, actionType = null) => {
//         dispatch({
//             type: 'SET_MESSAGE',
//             payload: { text: message },
//         });
//         toast.success(message);
//         if (actionType) {
//             dispatch({ type: actionType });
//         }
//     };

//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     useEffect(() => {
//         initAudio();
//         loadClickSound('/sounds/click.mp3').then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//     }, []);

//     const handleAction = (action) => {
//         const minEnergyForActions = 20;
//         const canRestAtHome = location.type === "home";

//         if (
//             player.energy < minEnergyForActions &&
//             !canRestAtHome &&
//             action !== "rest" &&
//             action !== "enterUniversity" &&
//             action !== "enterNextJsSchool" &&
//             action !== "rentOffice" &&
//             action !== "fastFood" &&
//             action !== "enterCssHotel" &&
//             action !== "enterPythonHotel" &&
//             action !== "enterJavaScriptHotel" &&
//             action !== "enterTypeScriptHolidayResort" &&
//             action !== "enterExpressHotel" &&
//             action !== "enterCSharpHotel" &&
//             action !== "enterReactNativeUniversity" &&
//             action !== "enterJavaResort" &&
//             action !== "enterGamingHotel" &&
//             action !== "shop" &&
//             action !== "enterApartment" &&
//             action !== "enterDevWork"
//         ) {
//             dispatch({ type: "ADVANCE_WEEK_AND_REST" });
//             showMessage("Energy too low! Advanced to next week and restored energy.");
//             return;
//         }

//         switch (action) {
//             case 'fastFood':
//                 if (player.energy < minEnergyForActions) {
//                     showMessage("Not enough energy to visit Python Burgers!");
//                     return;
//                 }
//                 dispatch({ type: "CHANGE_SCREEN", payload: { screen: "fastFood" } });
//                 break;

//             case 'rest':
//                 if (location.type === "home") {
//                     dispatch({ type: "REST" });
//                     showMessage("Rested and recovered energy!");
//                 }
//                 break;

//             case 'enterUniversity':
//                 if (location.type === "education" && location.id === "university") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "university" } });
//                 }
//                 break;

//             case 'enterNextJsSchool':
//                 if (location.type === "education" && location.id === "nextJsSchool") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "nextJsSchool" } });
//                 }
//                 break;

//             case 'enterJavaResort':
//                 if (location.type === "education" && location.id === "javaResort") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "javaResort" } });
//                 }
//                 break;

//             case 'enterCssHotel':
//                 if (location.type === "education" && location.id === "cssHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "cssHotel" } });
//                 }
//                 break;

//             case 'enterPythonHotel':
//                 if (location.type === "education" && location.id === "pythonHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "pythonHotel" } });
//                 }
//                 break;

//             case 'enterGamingHotel':
//                 if (location.type === "education" && location.id === "gamingHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "gamingHotel" } });
//                 }
//                 break;

//             case 'enterJavaScriptHotel':
//                 if (location.type === "education" && location.id === "javaScriptHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "javaScriptHotel" } });
//                 }
//                 break;

//             case 'enterTypeScriptHolidayResort':
//                 if (location.type === "education" && location.id === "typeScriptHolidayResort") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "typeScriptHolidayResort" } });
//                 }
//                 break;

//             case 'enterExpressHotel':
//                 if (location.type === "education" && location.id === "expressHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "expressHotel" } });
//                 }
//                 break;

//             case 'enterCSharpHotel':
//                 if (location.type === "education" && location.id === "cSharpHotel") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "cSharpHotel" } });
//                 }
//                 break;

//             case 'enterReactNativeUniversity':
//                 if (location.type === "education" && location.id === "reactNativeUniversity") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "reactNativeUniversity" } });
//                 }
//                 break;

//             case 'rentOffice':
//                 if (location.type === "finance" && location.id === "rentOffice") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "rentOffice" } });
//                 }
//                 break;

//             case 'shop':
//                 if (location.type === "shop" && location.id === "mall") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "mall" } });
//                 }
//                 break;

//             case 'enterApartment':
//                 if (location.type === "home" && location.id === "apartment") {
//                     if (!player.rental.hasApartment) {
//                         showMessage("You need to rent an apartment first! Visit the Rental Office.");
//                         return;
//                     }
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "apartment" } });
//                 }
//                 break;

//             case 'enterDevWork':
//                 if (location.type === "work" && location.id === "devWork") {
//                     dispatch({ type: "CHANGE_SCREEN", payload: { screen: "devWork" } });
//                 }
//                 break;

//             default:
//                 showMessage(`Action "${action}" not implemented.`);
//                 break;
//         }
//     };

//     const goBackToMap = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
//     };

//     if (!location) return <div>Location not found</div>;

//     const actions = location.actions || [];

//     const getBackgroundStyle = () => {
//         switch (location.type) {
//             case "work":
//                 return "from-blue-900 to-teal-800"; // Updated for work type
//             case "home":
//                 return "from-purple-900 to-blue-800";
//             case "education":
//                 return "from-purple-900 to-violet-800";
//             case "finance":
//                 return "from-indigo-500 to-teal-500";
//             case "shop":
//                 return "from-rose-900 to-pink-800";
//             case "fastFood":
//                 return "from-red-900 to-orange-400";
//             default:
//                 return "from-gray-900 to-slate-800";
//         }
//     };

//     const getLocationIcon = () => {
//         switch (location.type) {
//             case "work": return "💻"; // Updated for work type
//             case "home": return "🏠";
//             case "education": return "🎓";
//             case "finance": return "💰";
//             case "shop": return "🛒";
//             case "fastFood": return "🍔";
//             default: return "📍";
//         }
//     };

//     return (
//         <div className="location-detail mt-4">
//             <div className="flex justify-between items-center mb-4">
//                 <MotionWrapperDelay
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     variants={{
//                         hidden: { opacity: 0, x: -100 },
//                         visible: { opacity: 1, x: 0 },
//                     }}
//                 >
//                     <h2 className="text-xl font-bold flex items-center">
//                         <span className="mr-2">{getLocationIcon()}</span>
//                         {location.name}
//                     </h2>
//                 </MotionWrapperDelay>
//                 <button
//                     onClick={withSound(goBackToMap)}
//                     className="bg-indigo-500 hover:bg-purple-600 text-white py-1 px-3 rounded"
//                 >
//                     Back to Map
//                 </button>
//             </div>

//             <div className={`bg-gradient-to-br ${getBackgroundStyle()} rounded-xl shadow-lg overflow-hidden p-6`}>
//                 <div className="flex flex-col md:flex-row gap-6">
//                     <div className="flex-shrink-0 md:w-96">
//                         <div className="bg-black bg-opacity-30 p-3 rounded-lg">
//                             <MotionWrapperDelay
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true, amount: 0.5 }}
//                                 transition={{ duration: 0.5, delay: 0.4 }}
//                                 variants={{
//                                     hidden: { opacity: 0, x: -100 },
//                                     visible: { opacity: 1, x: 0 },
//                                 }}
//                             >
//                                 <img
//                                     src={location.image}
//                                     alt={location.name}
//                                     className="w-full h-72 object-cover rounded-lg shadow-md"
//                                 />
//                             </MotionWrapperDelay>
//                             <p className="mt-3 text-gray-200 text-lg font-medium text-center p-2 bg-black bg-opacity-40 rounded">
//                                 {location.description}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex-grow flex flex-col justify-between">
//                         <div>
//                             <h3 className="text-xl text-white font-bold mb-4 border-b border-white border-opacity-20 pb-2">
//                                 Available Actions
//                             </h3>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                 {actions.map(action => {
//                                     let actionName = '';
//                                     let actionDesc = '';
//                                     let actionIcon = '';
//                                     switch (action) {
//                                         case 'fastFood':
//                                             actionName = 'Order Food';
//                                             actionDesc = 'Grab a quick bite at Python Burgers';
//                                             actionIcon = '🍔';
//                                             break;
//                                         case 'rest':
//                                             actionName = 'Rest';
//                                             actionDesc = 'Recover all energy';
//                                             actionIcon = '😴';
//                                             break;
//                                         case 'enterJavaResort':
//                                             actionName = 'Enter Java Resort';
//                                             actionDesc = 'Study Java concepts';
//                                             actionIcon = '☕';
//                                             break;
//                                         case 'enterGamingHotel':
//                                             actionName = 'Enter Gaming Hotel';
//                                             actionDesc = 'Learn to code games using C++';
//                                             actionIcon = '🎮';
//                                             break;
//                                         case 'enterUniversity':
//                                             actionName = 'Enter University';
//                                             actionDesc = 'Study React hooks';
//                                             actionIcon = '🏛️';
//                                             break;
//                                         case 'enterNextJsSchool':
//                                             actionName = 'Enter NextJs School';
//                                             actionDesc = 'Study Next.js features';
//                                             actionIcon = '🖥️';
//                                             break;
//                                         case 'enterCssHotel':
//                                             actionName = 'Enter CSS Hotel';
//                                             actionDesc = 'Study Tailwind CSS and CSS';
//                                             actionIcon = '🎨';
//                                             break;
//                                         case 'enterPythonHotel':
//                                             actionName = 'Enter Python Hotel';
//                                             actionDesc = 'Study Python concepts';
//                                             actionIcon = '🐍';
//                                             break;
//                                         case 'enterJavaScriptHotel':
//                                             actionName = 'Enter JavaScript Hotel';
//                                             actionDesc = 'Study JavaScript concepts';
//                                             actionIcon = '📜';
//                                             break;
//                                         case 'enterTypeScriptHolidayResort':
//                                             actionName = 'Enter TypeScript Holiday Resort';
//                                             actionDesc = 'Study TypeScript concepts';
//                                             actionIcon = '🏖️';
//                                             break;
//                                         case 'enterReactNativeUniversity':
//                                             actionName = 'Enter React Native University';
//                                             actionDesc = 'Study React Native mobile app development';
//                                             actionIcon = '📱';
//                                             break;
//                                         case 'enterExpressHotel':
//                                             actionName = 'Enter Express Hotel';
//                                             actionDesc = 'Study Express.js API concepts';
//                                             actionIcon = '🚀';
//                                             break;
//                                         case 'enterCSharpHotel':
//                                             actionName = 'Enter C# Hotel';
//                                             actionDesc = 'Study C# and .NET concepts';
//                                             actionIcon = '💻';
//                                             break;
//                                         case 'rentOffice':
//                                             actionName = 'Visit Rental Office';
//                                             actionDesc = 'Manage your apartment';
//                                             actionIcon = '📝';
//                                             break;
//                                         case 'shop':
//                                             actionName = 'Go Shopping';
//                                             actionDesc = 'Browse items for your apartment';
//                                             actionIcon = '🛒';
//                                             break;
//                                         case 'enterApartment':
//                                             actionName = 'Enter Apartment';
//                                             actionDesc = 'Visit your home to rest and view items';
//                                             actionIcon = '🏠';
//                                             break;
//                                         case 'enterDevWork':
//                                             actionName = 'Enter Dev Work';
//                                             actionDesc = 'Work on development projects to earn cash';
//                                             actionIcon = '💻';
//                                             break;
//                                         default:
//                                             actionName = action;
//                                             actionDesc = 'Perform this action';
//                                             actionIcon = '⚡';
//                                     }
//                                     return (
//                                         <button
//                                             key={action}
//                                             onClick={withSound(() => handleAction(action))}
//                                             className="bg-black bg-opacity-40 hover:bg-opacity-60 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center"
//                                         >
//                                             <span className="text-xl mr-3">{actionIcon}</span>
//                                             <div className="text-left">
//                                                 <span className="font-bold block">{actionName}</span>
//                                                 <span className="text-xs text-blue-200">{actionDesc}</span>
//                                             </div>
//                                         </button>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }













"use client";

import { useGame } from '@/app/context/GameContext';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { initAudio, loadClickSound, playClickSound, loadHealingMusic, playHealingMusic, stopHealingMusic } from '@/data/audioManager';
import MotionWrapperDelay from '../FramerMotion/MotionWrapperDelay';

export default function LocationDetail() {
    const { state, dispatch } = useGame();
    const { player, locations } = state;
    const location = locations[player.currentLocation];

    const showMessage = (message, actionType = null) => {
        dispatch({
            type: 'SET_MESSAGE',
            payload: { text: message },
        });
        toast.success(message);
        if (actionType) {
            dispatch({ type: actionType });
        }
    };

    const withSound = (handler) => (event) => {
        playClickSound();
        if (handler) {
            handler(event);
        }
    };

    useEffect(() => {
        initAudio();
        loadClickSound('/sounds/click.mp3').then((success) => {
            if (!success) {
                console.warn("Failed to load click sound");
            }
        });
        loadHealingMusic('/sounds/leisuresound.mp3').then(() => {
            playHealingMusic();
        });
        return () => {
            stopHealingMusic();
        };
    }, []);

    const handleAction = (action) => {
        const minEnergyForActions = 20;
        const canRestAtHome = location.type === "home";

        if (
            player.energy < minEnergyForActions &&
            !canRestAtHome &&
            action !== "rest" &&
            action !== "enterUniversity" &&
            action !== "enterNextJsSchool" &&
            action !== "rentOffice" &&
            action !== "fastFood" &&
            action !== "enterCssHotel" &&
            action !== "enterPythonHotel" &&
            action !== "enterJavaScriptHotel" &&
            action !== "enterTypeScriptHolidayResort" &&
            action !== "enterExpressHotel" &&
            action !== "enterCSharpHotel" &&
            action !== "enterReactNativeUniversity" &&
            action !== "enterJavaResort" &&
            action !== "enterGamingHotel" &&
            action !== "shop" &&
            action !== "enterApartment" &&
            action !== "enterDevWork" &&
            action !== "datingOffice"
        ) {
            dispatch({ type: "ADVANCE_WEEK_AND_REST" });
            showMessage("Energy too low! Advanced to next week and restored energy.");
            return;
        }

        switch (action) {
            case 'fastFood':
                if (player.energy < minEnergyForActions) {
                    showMessage("Not enough energy to visit Python Burgers!");
                    return;
                }
                dispatch({ type: "CHANGE_SCREEN", payload: { screen: "fastFood" } });
                break;

            case "datingOffice":
                dispatch({ type: "CHANGE_SCREEN", payload: { screen: "datingOffice" } });
                break;

            case 'rest':
                if (location.type === "home") {
                    dispatch({ type: "REST" });
                    showMessage("Rested and recovered energy!");
                }
                break;

            case 'enterUniversity':
                if (location.type === "education" && location.id === "university") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "university" } });
                }
                break;

            case 'enterNextJsSchool':
                if (location.type === "education" && location.id === "nextJsSchool") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "nextJsSchool" } });
                }
                break;

            case 'enterJavaResort':
                if (location.type === "education" && location.id === "javaResort") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "javaResort" } });
                }
                break;

            case 'enterCssHotel':
                if (location.type === "education" && location.id === "cssHotel") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "cssHotel" } });
                }
                break;

            case 'enterPythonHotel':
                if (location.type === "education" && location.id === "pythonHotel") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "pythonHotel" } });
                }
                break;

            case 'enterGamingHotel':
                if (location.type === "education" && location.id === "gamingHotel") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "gamingHotel" } });
                }
                break;

            case 'enterJavaScriptHotel':
                if (location.type === "education" && location.id === "javaScriptHotel") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "javaScriptHotel" } });
                }
                break;

            case 'enterTypeScriptHolidayResort':
                if (location.type === "education" && location.id === "typeScriptHolidayResort") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "typeScriptHolidayResort" } });
                }
                break;

            case 'enterExpressHotel':
                if (location.type === "education" && location.id === "expressHotel") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "expressHotel" } });
                }
                break;

            case 'enterCSharpHotel':
                if (location.type === "education" && location.id === "cSharpHotel") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "cSharpHotel" } });
                }
                break;

            case 'enterReactNativeUniversity':
                if (location.type === "education" && location.id === "reactNativeUniversity") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "reactNativeUniversity" } });
                }
                break;

            case 'rentOffice':
                if (location.type === "finance" && location.id === "rentOffice") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "rentOffice" } });
                }
                break;

            case 'shop':
                if (location.type === "shop" && location.id === "mall") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "mall" } });
                }
                break;

            case 'enterApartment':
                if (location.type === "home" && location.id === "apartment") {
                    if (!player.rental.hasApartment) {
                        showMessage("You need to rent an apartment first! Visit the Rental Office.");
                        return;
                    }
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "apartment" } });
                }
                break;

            case 'enterDevWork':
                if (location.type === "work" && location.id === "devWork") {
                    dispatch({ type: "CHANGE_SCREEN", payload: { screen: "devWork" } });
                }
                break;

            default:
                showMessage(`Action "${action}" not implemented.`);
                break;
        }
    };

    const goBackToMap = () => {
        dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
    };

    if (!location) return <div>Location not found</div>;

    const actions = location.actions || [];

    const getBackgroundStyle = () => {
        switch (location.type) {
            case "work":
                return "from-blue-900 to-teal-800";
            case "home":
                return "from-purple-900 to-blue-800";
            case "education":
                return "from-purple-900 to-violet-800";
            case "finance":
                return "from-indigo-500 to-teal-500";
            case "shop":
                return "from-rose-900 to-pink-800";
            case "fastFood":
                return "from-red-900 to-orange-400";
            default:
                return "from-gray-900 to-slate-800";
        }
    };

    const getLocationIcon = () => {
        switch (location.type) {
            case "work": return "💻";
            case "home": return "🏠";
            case "education": return "🎓";
            case "finance": return "💰";
            case "shop": return "🛒";
            case "fastFood": return "🍔";
            default: return "📍";
        }
    };

    return (
        <div className="location-detail mt-4">
            <div className="flex justify-between items-center mb-4">
                <MotionWrapperDelay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <h2 className="text-xl font-bold flex items-center">
                        <span className="mr-2">{getLocationIcon()}</span>
                        {location.name}
                    </h2>
                </MotionWrapperDelay>
                <button
                    onClick={withSound(goBackToMap)}
                    className="bg-indigo-500 hover:bg-purple-600 text-white py-1 px-3 rounded"
                >
                    Back to Map
                </button>
            </div>

            <div className={`bg-gradient-to-br ${getBackgroundStyle()} rounded-xl shadow-lg overflow-hidden p-6`}>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 md:w-96">
                        <div className="bg-black bg-opacity-30 p-3 rounded-lg">
                            <MotionWrapperDelay
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                variants={{
                                    hidden: { opacity: 0, x: -100 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    className="w-full h-72 object-cover rounded-lg shadow-md"
                                />
                            </MotionWrapperDelay>
                            <p className="mt-3 text-gray-200 text-lg font-medium text-center p-2 bg-black bg-opacity-40 rounded">
                                {location.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex-grow flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl text-white font-bold mb-4 border-b border-white border-opacity-20 pb-2">
                                Available Actions
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {actions.map(action => {
                                    let actionName = '';
                                    let actionDesc = '';
                                    let actionIcon = '';
                                    switch (action) {
                                        case 'fastFood':
                                            actionName = 'Order Food';
                                            actionDesc = 'Grab a quick bite at Python Burgers';
                                            actionIcon = '🍔';
                                            break;
                                        case 'rest':
                                            actionName = 'Rest';
                                            actionDesc = 'Recover all energy';
                                            actionIcon = '😴';
                                            break;
                                        case 'enterJavaResort':
                                            actionName = 'Enter Java Resort';
                                            actionDesc = 'Study Java concepts';
                                            actionIcon = '☕';
                                            break;
                                        case "datingOffice":
                                            actionName = "Visit Dating Office";
                                            actionDesc = "Find a partner and build relationships";
                                            actionIcon = "💖";
                                            break;
                                        case 'enterGamingHotel':
                                            actionName = 'Enter Gaming Hotel';
                                            actionDesc = 'Learn to code games using C++';
                                            actionIcon = '🎮';
                                            break;
                                        case 'enterUniversity':
                                            actionName = 'Enter University';
                                            actionDesc = 'Study React hooks';
                                            actionIcon = '🏛️';
                                            break;
                                        case 'enterNextJsSchool':
                                            actionName = 'Enter NextJs School';
                                            actionDesc = 'Study Next.js features';
                                            actionIcon = '🖥️';
                                            break;
                                        case 'enterCssHotel':
                                            actionName = 'Enter CSS Hotel';
                                            actionDesc = 'Study Tailwind CSS and CSS';
                                            actionIcon = '🎨';
                                            break;
                                        case 'enterPythonHotel':
                                            actionName = 'Enter Python Hotel';
                                            actionDesc = 'Study Python concepts';
                                            actionIcon = '🐍';
                                            break;
                                        case 'enterJavaScriptHotel':
                                            actionName = 'Enter JavaScript Hotel';
                                            actionDesc = 'Study JavaScript concepts';
                                            actionIcon = '📜';
                                            break;
                                        case 'enterTypeScriptHolidayResort':
                                            actionName = 'Enter TypeScript Holiday Resort';
                                            actionDesc = 'Study TypeScript concepts';
                                            actionIcon = '🏖️';
                                            break;
                                        case 'enterReactNativeUniversity':
                                            actionName = 'Enter React Native University';
                                            actionDesc = 'Study React Native mobile app development';
                                            actionIcon = '📱';
                                            break;
                                        case 'enterExpressHotel':
                                            actionName = 'Enter Express Hotel';
                                            actionDesc = 'Study Express.js API concepts';
                                            actionIcon = '🚀';
                                            break;
                                        case 'enterCSharpHotel':
                                            actionName = 'Enter C# Hotel';
                                            actionDesc = 'Study C# and .NET concepts';
                                            actionIcon = '💻';
                                            break;
                                        case 'rentOffice':
                                            actionName = 'Visit Rental Office';
                                            actionDesc = 'Manage your apartment';
                                            actionIcon = '📝';
                                            break;
                                        case 'shop':
                                            actionName = 'Go Shopping';
                                            actionDesc = 'Browse items for your apartment';
                                            actionIcon = '🛒';
                                            break;
                                        case 'enterApartment':
                                            actionName = 'Enter Apartment';
                                            actionDesc = 'Visit your home to rest and view items';
                                            actionIcon = '🏠';
                                            break;
                                        case 'enterDevWork':
                                            actionName = 'Enter Dev Work';
                                            actionDesc = 'Work on development projects to earn cash';
                                            actionIcon = '💻';
                                            break;
                                        default:
                                            actionName = action;
                                            actionDesc = 'Perform this action';
                                            actionIcon = '⚡';
                                    }
                                    return (
                                        <button
                                            key={action}
                                            onClick={withSound(() => handleAction(action))}
                                            className="bg-black bg-opacity-40 hover:bg-opacity-60 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center"
                                        >
                                            <span className="text-xl mr-3">{actionIcon}</span>
                                            <div className="text-left">
                                                <span className="font-bold block">{actionName}</span>
                                                <span className="text-xs text-blue-200">{actionDesc}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}