



// "use client";

// import GameContext from "@/app/context/GameContext";
// import { useContext, useEffect } from "react";
// import LocationDetail from "./LocationDetail";
// import Map from "./Map";
// import PlayerSelect from "./PlayerSelect";
// import Header from "./Header";
// import University from "./University";
// import Stats from "./Stats";
// import GoalsTracker from "./GoalsTracker";
// import WinNotification from "./WinNotification";
// import RentalOffice from "./RentalOffice";
// import MessageArea from "./MessageArea";
// import NextJs from "./NextJs";
// import FastFood from "./FastFood";
// import CssHotel from "./CssHotel";
// import PythonHotel from "./PythonHotel";
// import JavaScriptHotel from "./JavaScriptHotel";
// import TypeScriptHolidayResort from "./TypeScriptHolidayResort";
// import ExpressHotel from "./ExpressHotel";
// import CSharpHotel from "./CSharpHotel";
// import ReactNativeUniversity from "./ReactNativeUniversity";
// import JavaResort from "./JavaResort";
// import GamingHotel from "./GamingHotel";

// export default function GameContainer() {
//     const { state, dispatch } = useContext(GameContext);
//     const { currentScreen, gameWon, isPlayerSelect, player, message } = state;

//     useEffect(() => {
//         console.log({ currentScreen, gameWon, isPlayerSelect, player, message });
//         dispatch({ type: "SET_MESSAGE", payload: { text: "Welcome to the game!" } });
//     }, [dispatch]);

//     useEffect(() => {
//         const checkStuckState = () => {
//             if (!player) return; // Guard clause to prevent accessing null player
//             const minEnergyForActions = 20;
//             const canRestAtHome = player.currentLocation === "apartment";
//             if (player.energy < 10 && player.energy < minEnergyForActions && !canRestAtHome) {
//                 dispatch({ type: "ADVANCE_WEEK_AND_REST" });
//             }
//         };

//         const interval = setInterval(checkStuckState, 30000); // Check every 30 seconds
//         return () => clearInterval(interval);
//     }, [dispatch, player?.energy, player?.currentLocation]);

//     if (isPlayerSelect || !player || !player.name || !player.avatar) {
//         return <PlayerSelect />;
//     }

//     if (gameWon) {
//         return <WinNotification />;
//     }

//     return (
//         <div className="min-h-screen max-w-7xl mx-auto relative  gradient-background2 px-5 mb-10 rounded-lg p-10">
//             <Header />
//             <MessageArea message={message} />
//             <div className="w-full h-screen">
//                 {currentScreen === "map" && <Map />}
//                 {currentScreen === "location" && <LocationDetail />}
//                 {currentScreen === "university" && <University />}
//                 {currentScreen === "rentOffice" && <RentalOffice />}
//                 {currentScreen === "nextJsSchool" && <NextJs />}
//                 {currentScreen === "stats" && <Stats />}
//                 {currentScreen === "goals" && <GoalsTracker />}
//                 {currentScreen === 'fastFood' && <FastFood />}
//                 {currentScreen === "cssHotel" && <CssHotel />}
//                 {currentScreen === "cSharpHotel" && <CSharpHotel />}
//                 {currentScreen === "pythonHotel" && <PythonHotel />}
//                 {currentScreen === "reactNativeUniversity" && <ReactNativeUniversity />}
//                 {currentScreen === "javaScriptHotel" && <JavaScriptHotel />}
//                 {currentScreen === "typeScriptHolidayResort" && <TypeScriptHolidayResort />}
//                 {currentScreen === "expressHotel" && <ExpressHotel />}
//                 {currentScreen === "javaResort" && <JavaResort />}
//                 {currentScreen === "gamingHotel" && <GamingHotel />}
//             </div>
//         </div>
//     );
// }



// "use client";

// import GameContext from "@/app/context/GameContext";
// import { useContext, useEffect } from "react";
// import LocationDetail from "./LocationDetail";
// import Map from "./Map";
// import PlayerSelect from "./PlayerSelect";
// import Header from "./Header";
// import University from "./University";
// import Stats from "./Stats";
// import GoalsTracker from "./GoalsTracker";
// import GameOver from "./GameOver"; // Import new GameOver component
// import RentalOffice from "./RentalOffice";
// import MessageArea from "./MessageArea";
// import NextJs from "./NextJs";
// import FastFood from "./FastFood";
// import CssHotel from "./CssHotel";
// import PythonHotel from "./PythonHotel";
// import JavaScriptHotel from "./JavaScriptHotel";
// import TypeScriptHolidayResort from "./TypeScriptHolidayResort";
// import ExpressHotel from "./ExpressHotel";
// import CSharpHotel from "./CSharpHotel";
// import ReactNativeUniversity from "./ReactNativeUniversity";
// import JavaResort from "./JavaResort";
// import GamingHotel from "./GamingHotel";

// export default function GameContainer() {
//     const { state, dispatch } = useContext(GameContext);
//     const { currentScreen, gameWon, isPlayerSelect, player, message } = state;

//     // Check win conditions in GameContainer
//     useEffect(() => {
//         if (!player || isPlayerSelect || gameWon) return;

//         const cashGoal = 200;
//         const happinessGoal = 80;
//         const masteryGoal = 1;

//         const hasMasteredOneSubject = [
//             ...Object.values(player.hooksMastered || {}),
//             ...Object.values(player.nextJsMastered || {}),
//             ...Object.values(player.cssMastered || {}),
//             ...Object.values(player.pythonMastered || {}),
//             ...Object.values(player.javaScriptMastered || {}),
//             ...Object.values(player.typeScriptMastered || {}),
//             ...Object.values(player.expressMastered || {}),
//             ...Object.values(player.cSharpMastered || {}),
//             ...Object.values(player.reactNativeMastered || {}),
//             ...Object.values(player.javaMastered || {}),
//             ...Object.values(player.cppMastered || {}),
//         ].some((mastery) => mastery >= masteryGoal);

//         const cashGoalMet = player.cash >= cashGoal;
//         const happinessGoalMet = player.happiness >= happinessGoal;
//         const hasWon = cashGoalMet && hasMasteredOneSubject && happinessGoalMet;

//         if (hasWon && !gameWon) {
//             dispatch({ type: "SET_GAME_WON" });
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: "Congratulations! You've achieved all goals and won the game!" },
//             });
//         }
//     }, [
//         player?.cash,
//         player?.happiness,
//         player?.hooksMastered,
//         player?.nextJsMastered,
//         player?.cssMastered,
//         player?.pythonMastered,
//         player?.javaScriptMastered,
//         player?.typeScriptMastered,
//         player?.expressMastered,
//         player?.cSharpMastered,
//         player?.reactNativeMastered,
//         player?.javaMastered,
//         player?.cppMastered,
//         gameWon,
//         isPlayerSelect,
//         dispatch,
//     ]);

//     // Initial welcome message
//     useEffect(() => {
//         dispatch({ type: "SET_MESSAGE", payload: { text: "Welcome to the game!" } });
//     }, [dispatch]);

//     // Check for stuck state (low energy)
//     useEffect(() => {
//         const checkStuckState = () => {
//             if (!player) return;
//             const minEnergyForActions = 20;
//             const canRestAtHome = player.currentLocation === "apartment";
//             if (player.energy < 10 && player.energy < minEnergyForActions && !canRestAtHome) {
//                 dispatch({ type: "ADVANCE_WEEK_AND_REST" });
//             }
//         };

//         const interval = setInterval(checkStuckState, 30000);
//         return () => clearInterval(interval);
//     }, [dispatch, player?.energy, player?.currentLocation]);

//     if (isPlayerSelect || !player || !player.name || !player.avatar) {
//         return <PlayerSelect />;
//     }

//     if (gameWon) {
//         return <GameOver won={true} />; // Render GameOver instead of WinNotification
//     }

//     return (
//         <div className="min-h-screen max-w-7xl mx-auto relative gradient-background2 px-5 mb-10 rounded-lg p-10">
//             <Header />
//             <MessageArea message={message} />
//             <div className="w-full h-screen">
//                 {currentScreen === "map" && <Map />}
//                 {currentScreen === "location" && <LocationDetail />}
//                 {currentScreen === "university" && <University />}
//                 {currentScreen === "rentOffice" && <RentalOffice />}
//                 {currentScreen === "nextJsSchool" && <NextJs />}
//                 {currentScreen === "stats" && <Stats />}
//                 {currentScreen === "goals" && <GoalsTracker />}
//                 {currentScreen === "fastFood" && <FastFood />}
//                 {currentScreen === "cssHotel" && <CssHotel />}
//                 {currentScreen === "cSharpHotel" && <CSharpHotel />}
//                 {currentScreen === "pythonHotel" && <PythonHotel />}
//                 {currentScreen === "reactNativeUniversity" && <ReactNativeUniversity />}
//                 {currentScreen === "javaScriptHotel" && <JavaScriptHotel />}
//                 {currentScreen === "typeScriptHolidayResort" && <TypeScriptHolidayResort />}
//                 {currentScreen === "expressHotel" && <ExpressHotel />}
//                 {currentScreen === "javaResort" && <JavaResort />}
//                 {currentScreen === "gamingHotel" && <GamingHotel />}
//             </div>
//         </div>
//     );
// }



// "use client";

// import GameContext from "@/app/context/GameContext";
// import { useContext, useEffect } from "react";
// import LocationDetail from "./LocationDetail";
// import Map from "./Map";
// import PlayerSelect from "./PlayerSelect";
// import Header from "./Header";
// import University from "./University";
// import Stats from "./Stats";
// import GoalsTracker from "./GoalsTracker";
// import GameOver from "./GameOver";
// import RentalOffice from "./RentalOffice";
// import MessageArea from "./MessageArea";
// import NextJs from "./NextJs";
// import FastFood from "./FastFood";
// import CssHotel from "./CssHotel";
// import PythonHotel from "./PythonHotel";
// import JavaScriptHotel from "./JavaScriptHotel";
// import TypeScriptHolidayResort from "./TypeScriptHolidayResort";
// import ExpressHotel from "./ExpressHotel";
// import CSharpHotel from "./CSharpHotel";
// import ReactNativeUniversity from "./ReactNativeUniversity";
// import JavaResort from "./JavaResort";
// import GamingHotel from "./GamingHotel";

// export default function GameContainer() {
//     const { state, dispatch } = useContext(GameContext);
//     const { currentScreen, gameWon, isPlayerSelect, player, message } = state;

//     // Check win conditions
//     useEffect(() => {
//         if (!player || isPlayerSelect || gameWon) return;

//         const cashGoal = 200;
//         const happinessGoal = 80;
//         const masteryGoal = 1;

//         const hasMasteredOneSubject = [
//             ...Object.values(player.hooksMastered || {}),
//             ...Object.values(player.nextJsMastered || {}),
//             ...Object.values(player.cssMastered || {}),
//             ...Object.values(player.pythonMastered || {}),
//             ...Object.values(player.javaScriptMastered || {}),
//             ...Object.values(player.typeScriptMastered || {}),
//             ...Object.values(player.expressMastered || {}),
//             ...Object.values(player.cSharpMastered || {}),
//             ...Object.values(player.reactNativeMastered || {}),
//             ...Object.values(player.javaMastered || {}),
//             ...Object.values(player.cppMastered || {}),
//         ].some((mastery) => mastery >= masteryGoal);

//         const cashGoalMet = player.cash >= cashGoal;
//         const happinessGoalMet = player.happiness >= happinessGoal;
//         const hasWon = cashGoalMet && hasMasteredOneSubject && happinessGoalMet;

//         if (hasWon && !gameWon) {
//             dispatch({ type: "SET_GAME_WON" });
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: "Congratulations! You've achieved all goals and won the game!" },
//             });
//         }
//     }, [
//         player?.cash,
//         player?.happiness,
//         player?.hooksMastered,
//         player?.nextJsMastered,
//         player?.cssMastered,
//         player?.pythonMastered,
//         player?.javaScriptMastered,
//         player?.typeScriptMastered,
//         player?.expressMastered,
//         player?.cSharpMastered,
//         player?.reactNativeMastered,
//         player?.javaMastered,
//         player?.cppMastered,
//         gameWon,
//         isPlayerSelect,
//         dispatch,
//     ]);

//     // Initial welcome message
//     useEffect(() => {
//         dispatch({ type: "SET_MESSAGE", payload: { text: "Welcome to the game!" } });
//     }, [dispatch]);

//     // Check for stuck state
//     useEffect(() => {
//         const checkStuckState = () => {
//             if (!player) return;
//             const minEnergyForActions = 20;
//             const canRestAtHome = player.currentLocation === "apartment";
//             if (player.energy < 10 && player.energy < minEnergyForActions && !canRestAtHome) {
//                 dispatch({ type: "ADVANCE_WEEK_AND_REST" });
//             }
//         };

//         const interval = setInterval(checkStuckState, 30000);
//         return () => clearInterval(interval);
//     }, [dispatch, player?.energy, player?.currentLocation]);

//     if (isPlayerSelect || !player || !player.name || !player.avatar) {
//         return <PlayerSelect />;
//     }

//     if (gameWon) {
//         return <GameOver won={true} />;
//     }

//     return (
//         <div className="min-h-screen max-w-7xl mx-auto relative gradient-background2 px-5 mb-10 rounded-lg p-10">
//             <Header />
//             <MessageArea message={message} />
//             <div className="w-full h-screen">
//                 {currentScreen === "map" && <Map />}
//                 {currentScreen === "location" && <LocationDetail />}
//                 {currentScreen === "university" && <University />}
//                 {currentScreen === "rentOffice" && <RentalOffice />}
//                 {currentScreen === "nextJsSchool" && <NextJs />}
//                 {currentScreen === "stats" && <Stats />}
//                 {currentScreen === "goals" && <GoalsTracker />}
//                 {currentScreen === "fastFood" && <FastFood />}
//                 {currentScreen === "cssHotel" && <CssHotel />}
//                 {currentScreen === "cSharpHotel" && <CSharpHotel />}
//                 {currentScreen === "pythonHotel" && <PythonHotel />}
//                 {currentScreen === "reactNativeUniversity" && <ReactNativeUniversity />}
//                 {currentScreen === "javaScriptHotel" && <JavaScriptHotel />}
//                 {currentScreen === "typeScriptHolidayResort" && <TypeScriptHolidayResort />}
//                 {currentScreen === "expressHotel" && <ExpressHotel />}
//                 {currentScreen === "javaResort" && <JavaResort />}
//                 {currentScreen === "gamingHotel" && <GamingHotel />}
//             </div>
//         </div>
//     );
// }




// "use client";

// import GameContext from "@/app/context/GameContext";
// import { useContext, useEffect } from "react";
// import LocationDetail from "./LocationDetail";
// import Map from "./Map";
// import PlayerSelect from "./PlayerSelect";
// import Header from "./Header";
// import University from "./University";
// import Stats from "./Stats";
// import GoalsTracker from "./GoalsTracker";
// import GameOver from "./GameOver";
// import RentalOffice from "./RentalOffice";
// import MessageArea from "./MessageArea";
// import NextJs from "./NextJs";
// import FastFood from "./FastFood";
// import CssHotel from "./CssHotel";
// import PythonHotel from "./PythonHotel";
// import JavaScriptHotel from "./JavaScriptHotel";
// import TypeScriptHolidayResort from "./TypeScriptHolidayResort";
// import ExpressHotel from "./ExpressHotel";
// import CSharpHotel from "./CSharpHotel";
// import ReactNativeUniversity from "./ReactNativeUniversity";
// import JavaResort from "./JavaResort";
// import GamingHotel from "./GamingHotel";
// import Apartment from "./Apartment";
// import Mall from "./Mall";
// import DevWork from "./Devwork";

// export default function GameContainer() {
//     const { state, dispatch } = useContext(GameContext);
//     const { currentScreen, gameWon, isPlayerSelect, player, message, gameEnded } = state;

//     // Check win conditions
//     useEffect(() => {
//         if (!player || isPlayerSelect || gameWon || gameEnded) return;

//         const cashGoal = 200;
//         const happinessGoal = 80;
//         const masteryGoal = 1;

//         const hasMasteredOneSubject = [
//             ...Object.values(player.hooksMastered || {}),
//             ...Object.values(player.nextJsMastered || {}),
//             ...Object.values(player.cssMastered || {}),
//             ...Object.values(player.pythonMastered || {}),
//             ...Object.values(player.javaScriptMastered || {}),
//             ...Object.values(player.typeScriptMastered || {}),
//             ...Object.values(player.expressMastered || {}),
//             ...Object.values(player.cSharpMastered || {}),
//             ...Object.values(player.reactNativeMastered || {}),
//             ...Object.values(player.javaMastered || {}),
//             ...Object.values(player.cppMastered || {}),
//         ].some((mastery) => mastery >= masteryGoal);

//         const cashGoalMet = player.cash >= cashGoal;
//         const happinessGoalMet = player.happiness >= happinessGoal;
//         const hasWon = cashGoalMet && hasMasteredOneSubject && happinessGoalMet;

//         if (hasWon && !gameWon) {
//             dispatch({ type: "SET_GAME_WON" });
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: "Congratulations! You've achieved all goals and won the game!" },
//             });
//         }
//     }, [
//         player?.cash,
//         player?.happiness,
//         player?.hooksMastered,
//         player?.nextJsMastered,
//         player?.cssMastered,
//         player?.pythonMastered,
//         player?.javaScriptMastered,
//         player?.typeScriptMastered,
//         player?.expressMastered,
//         player?.cSharpMastered,
//         player?.reactNativeMastered,
//         player?.javaMastered,
//         player?.cppMastered,
//         gameWon,
//         isPlayerSelect,
//         gameEnded,
//         dispatch,
//     ]);

//     // Initial welcome message
//     useEffect(() => {
//         dispatch({ type: "SET_MESSAGE", payload: { text: "Welcome to the game!" } });
//     }, [dispatch]);

//     // Check for stuck state
//     useEffect(() => {
//         const checkStuckState = () => {
//             if (!player) return;
//             const minEnergyForActions = 20;
//             const canRestAtHome = player.currentLocation === "apartment";
//             if (player.energy < 10 && player.energy < minEnergyForActions && !canRestAtHome) {
//                 dispatch({ type: "ADVANCE_WEEK_AND_REST" });
//             }
//         };

//         const interval = setInterval(checkStuckState, 30000);
//         return () => clearInterval(interval);
//     }, [dispatch, player?.energy, player?.currentLocation]);

//     if (isPlayerSelect || !player || !player.name || !player.avatar) {
//         return <PlayerSelect />;
//     }

//     if (gameWon) {
//         return <GameOver won={true} />;
//     }

//     return (
//         <div className="min-h-screen max-w-7xl mx-auto relative gradient-background2 px-5 mb-10 rounded-lg p-10">
//             <Header />
//             <MessageArea message={message} />
//             <div className="w-full h-screen">
//                 {currentScreen === "map" && <Map />}
//                 {currentScreen === "location" && <LocationDetail />}
//                 {currentScreen === "university" && <University />}
//                 {currentScreen === "rentOffice" && <RentalOffice />}
//                 {currentScreen === "nextJsSchool" && <NextJs />}
//                 {currentScreen === "stats" && <Stats />}
//                 {currentScreen === "goals" && <GoalsTracker />}
//                 {currentScreen === "fastFood" && <FastFood />}
//                 {currentScreen === "cssHotel" && <CssHotel />}
//                 {currentScreen === "cSharpHotel" && <CSharpHotel />}
//                 {currentScreen === "pythonHotel" && <PythonHotel />}
//                 {currentScreen === "reactNativeUniversity" && <ReactNativeUniversity />}
//                 {currentScreen === "javaScriptHotel" && <JavaScriptHotel />}
//                 {currentScreen === "typeScriptHolidayResort" && <TypeScriptHolidayResort />}
//                 {currentScreen === "expressHotel" && <ExpressHotel />}
//                 {currentScreen === "javaResort" && <JavaResort />}
//                 {currentScreen === "gamingHotel" && <GamingHotel />}
//                 {currentScreen === "apartment" && <Apartment />}
//                 {currentScreen === "mall" && <Mall />}
//                 {currentScreen === "devWork" && <DevWork />}
//             </div>
//         </div>
//     );
// }


// increase the size for overflowing larger venues

// "use client";

// import GameContext from "@/app/context/GameContext";
// import { useContext, useEffect } from "react";
// import LocationDetail from "./LocationDetail";
// import Map from "./Map";
// import PlayerSelect from "./PlayerSelect";
// import Header from "./Header";
// import University from "./University";
// import Stats from "./Stats";
// import GoalsTracker from "./GoalsTracker";
// import GameOver from "./GameOver";
// import RentalOffice from "./RentalOffice";
// import MessageArea from "./MessageArea";
// import NextJs from "./NextJs";
// import FastFood from "./FastFood";
// import CssHotel from "./CssHotel";
// import PythonHotel from "./PythonHotel";
// import JavaScriptHotel from "./JavaScriptHotel";
// import TypeScriptHolidayResort from "./TypeScriptHolidayResort";
// import ExpressHotel from "./ExpressHotel";
// import CSharpHotel from "./CSharpHotel";
// import ReactNativeUniversity from "./ReactNativeUniversity";
// import JavaResort from "./JavaResort";
// import GamingHotel from "./GamingHotel";
// import Apartment from "./Apartment";
// import Mall from "./Mall";
// import DevWork from "./Devwork";
// import DatingOffice from "./DatingOffice";


// export default function GameContainer() {
//     const { state, dispatch } = useContext(GameContext);
//     const { currentScreen, gameWon, isPlayerSelect, player, message, gameEnded } = state;

//     // Check win conditions
//     useEffect(() => {
//         if (!player || isPlayerSelect || gameWon || gameEnded) return;

//         const cashGoal = 200;
//         const happinessGoal = 80;
//         const masteryGoal = 1;

//         const hasMasteredOneSubject = [
//             ...Object.values(player.hooksMastered || {}),
//             ...Object.values(player.nextJsMastered || {}),
//             ...Object.values(player.cssMastered || {}),
//             ...Object.values(player.pythonMastered || {}),
//             ...Object.values(player.javaScriptMastered || {}),
//             ...Object.values(player.typeScriptMastered || {}),
//             ...Object.values(player.expressMastered || {}),
//             ...Object.values(player.cSharpMastered || {}),
//             ...Object.values(player.reactNativeMastered || {}),
//             ...Object.values(player.javaMastered || {}),
//             ...Object.values(player.cppMastered || {}),
//         ].some((mastery) => mastery >= masteryGoal);

//         const cashGoalMet = player.cash >= cashGoal;
//         const happinessGoalMet = player.happiness >= happinessGoal;
//         const hasWon = cashGoalMet && hasMasteredOneSubject && happinessGoalMet;

//         if (hasWon && !gameWon) {
//             dispatch({ type: "SET_GAME_WON" });
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: "Congratulations! You've achieved all goals and won the game!" },
//             });
//         }
//     }, [
//         player?.cash,
//         player?.happiness,
//         player?.hooksMastered,
//         player?.nextJsMastered,
//         player?.cssMastered,
//         player?.pythonMastered,
//         player?.javaScriptMastered,
//         player?.typeScriptMastered,
//         player?.expressMastered,
//         player?.cSharpMastered,
//         player?.reactNativeMastered,
//         player?.javaMastered,
//         player?.cppMastered,
//         gameWon,
//         isPlayerSelect,
//         gameEnded,
//         dispatch,
//     ]);

//     // Initial welcome message
//     useEffect(() => {
//         dispatch({ type: "SET_MESSAGE", payload: { text: "Welcome to the game!" } });
//     }, [dispatch]);

//     // Check for stuck state
//     useEffect(() => {
//         const checkStuckState = () => {
//             if (!player) return;
//             const minEnergyForActions = 20;
//             const canRestAtHome = player.currentLocation === "apartment";
//             if (player.energy < 10 && player.energy < minEnergyForActions && !canRestAtHome) {
//                 dispatch({ type: "ADVANCE_WEEK_AND_REST" });
//             }
//         };

//         const interval = setInterval(checkStuckState, 30000);
//         return () => clearInterval(interval);
//     }, [dispatch, player?.energy, player?.currentLocation]);

//     if (isPlayerSelect || !player || !player.name || !player.avatar) {
//         return <PlayerSelect />;
//     }

//     if (gameWon) {
//         return <GameOver won={true} />;
//     }

//     return (
//         <div className="min-h-full h-auto max-w-7xl mx-auto relative gradient-background2 px-5 rounded-lg p-10 flex flex-col">
//             <Header />
//             <MessageArea message={message} />
//             <div className="w-full">
//                 {currentScreen === "map" && <Map />}
//                 {currentScreen === "location" && <LocationDetail />}
//                 {currentScreen === "university" && <University />}
//                 {currentScreen === "rentOffice" && <RentalOffice />}
//                 {currentScreen === "nextJsSchool" && <NextJs />}
//                 {currentScreen === "stats" && <Stats />}
//                 {currentScreen === "goals" && <GoalsTracker />}
//                 {currentScreen === "fastFood" && <FastFood />}
//                 {currentScreen === "cssHotel" && <CssHotel />}
//                 {currentScreen === "cSharpHotel" && <CSharpHotel />}
//                 {currentScreen === "pythonHotel" && <PythonHotel />}
//                 {currentScreen === "reactNativeUniversity" && <ReactNativeUniversity />}
//                 {currentScreen === "javaScriptHotel" && <JavaScriptHotel />}
//                 {currentScreen === "typeScriptHolidayResort" && <TypeScriptHolidayResort />}
//                 {currentScreen === "expressHotel" && <ExpressHotel />}
//                 {currentScreen === "javaResort" && <JavaResort />}
//                 {currentScreen === "gamingHotel" && <GamingHotel />}
//                 {currentScreen === "apartment" && <Apartment />}
//                 {currentScreen === "mall" && <Mall />}
//                 {currentScreen === "devWork" && <DevWork />}
//                 {currentScreen === "datingOffice" && <DatingOffice />}
//             </div>
//         </div>
//     );
// }




// "use client";

// import GameContext from "@/app/context/GameContext";
// import { useContext, useEffect } from "react";
// import { hasWon } from "@/data/winConditions"; // Import hasWon function
// import LocationDetail from "./LocationDetail";
// import Map from "./Map";
// import PlayerSelect from "./PlayerSelect";
// import Header from "./Header";
// import University from "./University";
// import Stats from "./Stats";
// import GoalsTracker from "./GoalsTracker";
// import GameOver from "./GameOver";
// import RentalOffice from "./RentalOffice";
// import MessageArea from "./MessageArea";
// import NextJs from "./NextJs";
// import FastFood from "./FastFood";
// import CssHotel from "./CssHotel";
// import PythonHotel from "./PythonHotel";
// import JavaScriptHotel from "./JavaScriptHotel";
// import TypeScriptHolidayResort from "./TypeScriptHolidayResort";
// import ExpressHotel from "./ExpressHotel";
// import CSharpHotel from "./CSharpHotel";
// import ReactNativeUniversity from "./ReactNativeUniversity";
// import JavaResort from "./JavaResort";
// import GamingHotel from "./GamingHotel";
// import Apartment from "./Apartment";
// import Mall from "./Mall";
// import DevWork from "./DevWork";
// import DatingOffice from "./DatingOffice";

// export default function GameContainer() {
//     const { state, dispatch } = useContext(GameContext);
//     const { currentScreen, gameWon, isPlayerSelect, player, message, gameEnded } = state;

//     // Check win conditions using centralized hasWon function
//     useEffect(() => {
//         if (!player || isPlayerSelect || gameWon || gameEnded) return;

//         if (hasWon(player) && !gameWon) {
//             dispatch({ type: "SET_GAME_WON" });
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: "Congratulations! You've achieved all goals and won the game!" },
//             });
//         }
//     }, [player, gameWon, isPlayerSelect, gameEnded, dispatch]);

//     // Initial welcome message
//     useEffect(() => {
//         dispatch({ type: "SET_MESSAGE", payload: { text: "Welcome to the game!" } });
//     }, [dispatch]);

//     // Check for stuck state
//     useEffect(() => {
//         const checkStuckState = () => {
//             if (!player) return;
//             const minEnergyForActions = 20;
//             const canRestAtHome = player.currentLocation === "apartment";
//             if (player.energy < 10 && player.energy < minEnergyForActions && !canRestAtHome) {
//                 dispatch({ type: "ADVANCE_WEEK_AND_REST" });
//             }
//         };

//         const interval = setInterval(checkStuckState, 30000);
//         return () => clearInterval(interval);
//     }, [dispatch, player?.energy, player?.currentLocation]);

//     if (isPlayerSelect || !player || !player.name || !player.avatar) {
//         return <PlayerSelect />;
//     }

//     if (gameWon) {
//         return <GameOver won={true} />;
//     }

//     return (
//         <div className="min-h-full h-auto max-w-7xl mx-auto relative gradient-background2 px-5 rounded-lg p-10 flex flex-col">
//             <Header />
//             <MessageArea message={message} />
//             <div className="w-full">
//                 {currentScreen === "map" && <Map />}
//                 {currentScreen === "location" && <LocationDetail />}
//                 {currentScreen === "university" && <University />}
//                 {currentScreen === "rentOffice" && <RentalOffice />}
//                 {currentScreen === "nextJsSchool" && <NextJs />}
//                 {currentScreen === "stats" && <Stats />}
//                 {currentScreen === "goals" && <GoalsTracker />}
//                 {currentScreen === "fastFood" && <FastFood />}
//                 {currentScreen === "cssHotel" && <CssHotel />}
//                 {currentScreen === "cSharpHotel" && <CSharpHotel />}
//                 {currentScreen === "pythonHotel" && <PythonHotel />}
//                 {currentScreen === "reactNativeUniversity" && <ReactNativeUniversity />}
//                 {currentScreen === "javaScriptHotel" && <JavaScriptHotel />}
//                 {currentScreen === "typeScriptHolidayResort" && <TypeScriptHolidayResort />}
//                 {currentScreen === "expressHotel" && <ExpressHotel />}
//                 {currentScreen === "javaResort" && <JavaResort />}
//                 {currentScreen === "gamingHotel" && <GamingHotel />}
//                 {currentScreen === "apartment" && <Apartment />}
//                 {currentScreen === "mall" && <Mall />}
//                 {currentScreen === "devWork" && <DevWork />}
//                 {currentScreen === "datingOffice" && <DatingOffice />}
//             </div>
//         </div>
//     );
// }


//optimization for the game useMemo

// "use client";

// import { useContext, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import GameContext from "@/app/context/GameContext";
// import { hasWon } from "@/data/winConditions";
// import { locations } from "@/data/locations";
// import LocationDetail from "./LocationDetail";
// import Map from "./Map";
// import PlayerSelect from "./PlayerSelect";
// import Header from "./Header";
// import University from "./University";
// import Stats from "./Stats";
// import GoalsTracker from "./GoalsTracker";
// import GameOver from "./GameOver";
// import RentalOffice from "./RentalOffice";
// import MessageArea from "./MessageArea";
// import NextJs from "./NextJs";
// import FastFood from "./FastFood";
// import CssHotel from "./CssHotel";
// import PythonHotel from "./PythonHotel";
// import JavaScriptHotel from "./JavaScriptHotel";
// import TypeScriptHolidayResort from "./TypeScriptHolidayResort";
// import ExpressHotel from "./ExpressHotel";
// import CSharpHotel from "./CSharpHotel";
// import ReactNativeUniversity from "./ReactNativeUniversity";
// import JavaResort from "./JavaResort";
// import GamingHotel from "./GamingHotel";
// import Apartment from "./Apartment";
// import Mall from "./Mall";
// import DevWork from "./DevWork";
// import DatingOffice from "./DatingOffice";

// export default function GameContainer() {
//     const { state, dispatch } = useContext(GameContext);
//     const { currentScreen, gameWon, isPlayerSelect, player, message, gameEnded } = state;

//     // Preload static resources
//     const imageUrls = useMemo(() => [
//         "https://cdn.pixabay.com/photo/2021/09/26/20/49/world-6658881_1280.jpg", // Map background
//         ...Object.values(locations).map((loc) => loc.image),
//         "/avatars/avatar1.jpg",
//         "/avatars/avatar2.jpg",
//         "/avatars/avatar3.jpg",
//         "/avatars/avatar4.jpg",
//         "/avatars/avatar5.jpg",
//         "/avatars/avatar6.jpg",
//         "/avatars/avatar7.jpg",
//         "/avatars/avatar8.jpg",
//         "/avatars/avatar9.jpg",
//         "/avatars/avatar10.jpg",
//         "/images/professor.jpg",
//         "/images/boss.jpg",
//         "/images/rental-agent.jpg",
//         "/images/fastfood-counter.jpg",
//         "/images/css-hotel-lobby.jpg",
//         "/images/python-hotel-room.jpg",
//         "/images/javascript-hotel-pool.jpg",
//         "/images/typescript-resort-beach.jpg",
//         "/images/express-hotel-bar.jpg",
//         "/images/csharp-hotel-gym.jpg",
//         "/images/reactnative-classroom.jpg",
//         "/images/java-resort-garden.jpg",
//         "/images/gaming-hotel-arcade.jpg",
//         "/images/apartment-livingroom.jpg",
//         "/images/mall-storefront.jpg",
//         "/images/devwork-office.jpg",
//         "/images/dating-office-lounge.jpg",
//         "/images/nextjs-classroom.jpg",
//     ], []);

//     const audioUrls = useMemo(() => [
//         "/sounds/click.mp3",
//         "/sounds/leisuresound.mp3",
//         "/sounds/healing.mp3",
//         "/sounds/walk.mp3",
//         "/sounds/type.mp3",
//         "/sounds/university-lecture.mp3",
//         "/sounds/fastfood-order.mp3",
//         "/sounds/hotel-checkin.mp3",
//         "/sounds/mall-ambience.mp3",
//         "/sounds/gaming-arcade.mp3",
//         "/sounds/dating-chat.mp3",
//         "/sounds/rental-sign.mp3",
//     ], []);

//     const videoUrls = useMemo(() => [
//         "https://cdn.pixabay.com/video/2023/08/24/177572-857741629_tiny.mp4", // University
//         "/videos/nextjs-bg.mp4", // NextJs
//         "/videos/csshotel-bg.mp4", // CssHotel
//         "/videos/pythonhotel-bg.mp4", // PythonHotel
//         "/videos/javascript-bg.mp4", // JavaScriptHotel
//         "/videos/typescript-bg.mp4", // TypeScriptHolidayResort
//         "/videos/express-bg.mp4", // ExpressHotel
//         "/videos/csharp-bg.mp4", // CSharpHotel
//         "/videos/reactnative-bg.mp4", // ReactNativeUniversity
//         "https://cdn.pixabay.com/video/2016/09/21/5364-183788428_tiny.mp4", // JavaResort
//         "/videos/gaming-bg.mp4", // GamingHotel
//         "/videos/devwork-bg.mp4", // DevWork
//         "/videos/apartment-bg.mp4", // Apartment
//         "/videos/mall-bg.mp4", // Mall
//         "/videos/fastfood-bg.mp4", // FastFood
//     ], []);

//     useEffect(() => {
//         // Preload images
//         imageUrls.forEach((url) => {
//             const img = new Image();
//             img.src = url;
//         });

//         // Preload audio
//         audioUrls.forEach((url) => {
//             const audio = new Audio(url);
//             audio.preload = "auto";
//         });

//         // Preload videos
//         videoUrls.forEach((url) => {
//             const video = document.createElement("video");
//             video.src = url;
//             video.preload = "auto";
//             video.muted = true; // Prevents autoplay issues
//         });
//     }, [imageUrls, audioUrls, videoUrls]);

//     // Preload dynamic player avatar
//     useEffect(() => {
//         if (player && player.avatar) {
//             const img = new Image();
//             img.src = player.avatar;
//         }
//     }, [player?.avatar]);

//     // Check win condition
//     useEffect(() => {
//         if (!player || isPlayerSelect || gameWon || gameEnded) return;
//         if (hasWon(player) && !gameWon) {
//             dispatch({ type: "SET_GAME_WON" });
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: "Congratulations! You've achieved all goals and won the game!" },
//             });
//         }
//     }, [player, gameWon, isPlayerSelect, gameEnded, dispatch]);

//     // Initial welcome message
//     useEffect(() => {
//         dispatch({ type: "SET_MESSAGE", payload: { text: "Welcome to the game!" } });
//     }, [dispatch]);

//     // Check for stuck state (low energy)
//     useEffect(() => {
//         const checkStuckState = () => {
//             if (!player) return;
//             const minEnergyForActions = 20;
//             const canRestAtHome = player.currentLocation === "apartment";
//             if (player.energy < 10 && player.energy < minEnergyForActions && !canRestAtHome) {
//                 dispatch({ type: "ADVANCE_WEEK_AND_REST" });
//             }
//         };

//         const interval = setInterval(checkStuckState, 30000);
//         return () => clearInterval(interval);
//     }, [dispatch, player?.energy, player?.currentLocation]);

//     // Render logic
//     if (isPlayerSelect || !player || !player.name || !player.avatar) {
//         return <PlayerSelect />;
//     }

//     if (gameWon) {
//         return <GameOver won={true} />;
//     }

//     return (
//         <motion.div
//             className="min-h-full h-auto max-w-7xl mx-auto relative gradient-background2 px-5 rounded-lg p-10 flex flex-col"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//         >
//             <AnimatePresence>
//                 <Header key="header" />
//                 <MessageArea key="message-area" message={message} />
//                 <div key={currentScreen} className="w-full">
//                     {currentScreen === "map" && <Map />}
//                     {currentScreen === "location" && <LocationDetail />}
//                     {currentScreen === "university" && <University />}
//                     {currentScreen === "rentOffice" && <RentalOffice />}
//                     {currentScreen === "nextJsSchool" && <NextJs />}
//                     {currentScreen === "stats" && <Stats />}
//                     {currentScreen === "goals" && <GoalsTracker />}
//                     {currentScreen === "fastFood" && <FastFood />}
//                     {currentScreen === "cssHotel" && <CssHotel />}
//                     {currentScreen === "cSharpHotel" && <CSharpHotel />}
//                     {currentScreen === "pythonHotel" && <PythonHotel />}
//                     {currentScreen === "reactNativeUniversity" && <ReactNativeUniversity />}
//                     {currentScreen === "javaScriptHotel" && <JavaScriptHotel />}
//                     {currentScreen === "typeScriptHolidayResort" && <TypeScriptHolidayResort />}
//                     {currentScreen === "expressHotel" && <ExpressHotel />}
//                     {currentScreen === "javaResort" && <JavaResort />}
//                     {currentScreen === "gamingHotel" && <GamingHotel />}
//                     {currentScreen === "apartment" && <Apartment />}
//                     {currentScreen === "mall" && <Mall />}
//                     {currentScreen === "devWork" && <DevWork />}
//                     {currentScreen === "datingOffice" && <DatingOffice />}
//                 </div>
//             </AnimatePresence>
//         </motion.div>
//     );
// }




"use client";

import { useContext, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameContext from "@/app/context/GameContext";
import { hasWon } from "@/data/winConditions";
import { locations } from "@/data/locations";
import LocationDetail from "./LocationDetail";
import Map from "./Map";
import PlayerSelect from "./PlayerSelect";
import Header from "./Header";
import University from "./University";
import Stats from "./Stats";
import GoalsTracker from "./GoalsTracker";
import GameOver from "./GameOver";
import RentalOffice from "./RentalOffice";
import MessageArea from "./MessageArea";
import NextJs from "./NextJs";
import FastFood from "./FastFood";
import CssHotel from "./CssHotel";
import PythonHotel from "./PythonHotel";
import JavaScriptHotel from "./JavaScriptHotel";
import TypeScriptHolidayResort from "./TypeScriptHolidayResort";
import ExpressHotel from "./ExpressHotel";
import CSharpHotel from "./CSharpHotel";
import ReactNativeUniversity from "./ReactNativeUniversity";
import JavaResort from "./JavaResort";
import GamingHotel from "./GamingHotel";
import Apartment from "./Apartment";
import Mall from "./Mall";
import DevWork from "./DevWork";
import DatingOffice from "./DatingOffice";
import SaveLoadMenu from "./SaveLoadMenu";

export default function GameContainer() {
    const { state, dispatch } = useContext(GameContext);
    const { currentScreen, gameWon, isPlayerSelect, player, message, gameEnded } = state;

    const imageUrls = useMemo(() => [
        "https://cdn.pixabay.com/photo/2021/09/26/20/49/world-6658881_1280.jpg",
        ...Object.values(locations).map((loc) => loc.image),
        "/avatars/avatar1.jpg",
        "/avatars/avatar2.jpg",
        "/avatars/avatar3.jpg",
        "/avatars/avatar4.jpg",
        "/avatars/avatar5.jpg",
        "/avatars/avatar6.jpg",
        "/avatars/avatar7.jpg",
        "/avatars/avatar8.jpg",
        "/avatars/avatar9.jpg",
        "/avatars/avatar10.jpg",
        "/images/professor.jpg",
        "/images/boss.jpg",
        "/images/rental-agent.jpg",
        "/images/fastfood-counter.jpg",
        "/images/css-hotel-lobby.jpg",
        "/images/python-hotel-room.jpg",
        "/images/javascript-hotel-pool.jpg",
        "/images/typescript-resort-beach.jpg",
        "/images/express-hotel-bar.jpg",
        "/images/csharp-hotel-gym.jpg",
        "/images/reactnative-classroom.jpg",
        "/images/java-resort-garden.jpg",
        "/images/gaming-hotel-arcade.jpg",
        "/images/apartment-livingroom.jpg",
        "/images/mall-storefront.jpg",
        "/images/devwork-office.jpg",
        "/images/dating-office-lounge.jpg",
        "/images/nextjs-classroom.jpg",
    ], []);

    const audioUrls = useMemo(() => [
        "/sounds/click.mp3",
        "/sounds/leisuresound.mp3",
        "/sounds/healing.mp3",
        "/sounds/walk.mp3",
        "/sounds/type.mp3",
        "/sounds/university-lecture.mp3",
        "/sounds/fastfood-order.mp3",
        "/sounds/hotel-checkin.mp3",
        "/sounds/mall-ambience.mp3",
        "/sounds/gaming-arcade.mp3",
        "/sounds/dating-chat.mp3",
        "/sounds/rental-sign.mp3",
    ], []);

    const videoUrls = useMemo(() => [
        "https://cdn.pixabay.com/video/2023/08/24/177572-857741629_tiny.mp4",

        "https://cdn.pixabay.com/video/2016/09/21/5364-183788428_t729_tiny.mp4",
        "/videos/gaming.mp4",
        "/videos/apartment.mp4",
        //places
        "https://cdn.pixabay.com/video/2022/08/27/129247-743827327_tiny.mp4",//rent office
        "https://cdn.pixabay.com/video/2021/04/24/72025-543403489_tiny.mp4", //fast food
        "/videos/devwork-bg.mp4", //devwork
        "/videos/devwork-bg.mp4",
        //videobackgrounds ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        "  https://cdn.pixabay.com/video/2016/09/21/5364-183788428_tiny.mp4", // javaresot
        "https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4", //gaming hotel
        " https://cdn.pixabay.com/video/2023/08/24/177572-857741629_tiny.mp4", //react university
        "https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4", //typscript hotel
        "https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4", //csharp hotel
        "https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4",//expresshotel
        "https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4", //nextjs school
        "https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4", //css hotel
        "https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4", // javascript hotel
        "https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4", //python hotel


        // Professor videos from ProfessorHeader
        "https://videos.pexels.com/video-files/3252126/3252126-sd_640_360_25fps.mp4", // React
        "https://videos.pexels.com/video-files/7968376/7968376-sd_960_506_25fps.mp4", // React Native
        "https://videos.pexels.com/video-files/5763899/5763899-sd_360_640_24fps.mp4", // CSS
        "https://videos.pexels.com/video-files/8264022/8264022-sd_360_640_25fps.mp4", // Next.js
        "https://videos.pexels.com/video-files/7968372/7968372-uhd_2732_1440_25fps.mp4", // JavaScript
        "https://videos.pexels.com/video-files/5676140/5676140-sd_640_360_25fps.mp4", // Python
        "https://videos.pexels.com/video-files/7583723/7583723-sd_640_360_25fps.mp4", // TypeScript
        "https://videos.pexels.com/video-files/6269216/6269216-uhd_2560_1440_24fps.mp4", // Express
        "https://videos.pexels.com/video-files/15958462/15958462-sd_640_360_30fps.mp4", // C#
        "https://videos.pexels.com/video-files/7989531/7989531-sd_640_360_25fps.mp4", // Java
        "https://videos.pexels.com/video-files/4629795/4629795-sd_640_360_25fps.mp4", // GameDev
    ], []);

    useEffect(() => {
        imageUrls.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
        audioUrls.forEach((url) => {
            const audio = new Audio(url);
            audio.preload = "auto";
        });
        videoUrls.forEach((url) => {
            const video = document.createElement("video");
            video.src = url;
            video.preload = "auto";
            video.muted = true;
        });
    }, [imageUrls, audioUrls, videoUrls]);

    useEffect(() => {
        if (player && player.avatar) {
            const img = new Image();
            img.src = player.avatar;
        }
    }, [player?.avatar]);

    useEffect(() => {
        if (!player || isPlayerSelect || gameWon || gameEnded) return;
        if (hasWon(player) && !gameWon) {
            dispatch({ type: "SET_GAME_WON" });
            dispatch({
                type: "SET_MESSAGE",
                payload: { text: "Congratulations! You've achieved all goals and won the game!" },
            });
        }
    }, [player, gameWon, isPlayerSelect, gameEnded, dispatch]);

    useEffect(() => {
        dispatch({ type: "SET_MESSAGE", payload: { text: "Welcome to the game!" } });
    }, [dispatch]);

    useEffect(() => {
        const checkStuckState = () => {
            if (!player) return;
            const minEnergyForActions = 20;
            const canRestAtHome = player.currentLocation === "apartment";
            if (player.energy < 10 && player.energy < minEnergyForActions && !canRestAtHome) {
                dispatch({ type: "ADVANCE_WEEK_AND_REST" });
            }
        };
        const interval = setInterval(checkStuckState, 30000);
        return () => clearInterval(interval);
    }, [dispatch, player?.energy, player?.currentLocation]);

    if (isPlayerSelect || !player || !player.name || !player.avatar) {
        return <PlayerSelect />;
    }

    if (gameWon) {
        return <GameOver won={true} />;
    }

    return (
        <motion.div
            className="min-h-full h-auto max-w-7xl mx-auto relative gradient-background2 px-5 rounded-lg p-10 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <AnimatePresence>
                <Header key="header" />
                <MessageArea key="message-area" message={message} />
                <div key={currentScreen} className="w-full">
                    {currentScreen === "map" && <Map />}
                    {currentScreen === "location" && <LocationDetail />}
                    {currentScreen === "university" && <University />}
                    {currentScreen === "rentOffice" && <RentalOffice />}
                    {currentScreen === "nextJsSchool" && <NextJs />}
                    {currentScreen === "stats" && <Stats />}
                    {currentScreen === "goals" && <GoalsTracker />}
                    {currentScreen === "fastFood" && <FastFood />}
                    {currentScreen === "cssHotel" && <CssHotel />}
                    {currentScreen === "cSharpHotel" && <CSharpHotel />}
                    {currentScreen === "pythonHotel" && <PythonHotel />}
                    {currentScreen === "reactNativeUniversity" && <ReactNativeUniversity />}
                    {currentScreen === "javaScriptHotel" && <JavaScriptHotel />}
                    {currentScreen === "typeScriptHolidayResort" && <TypeScriptHolidayResort />}
                    {currentScreen === "expressHotel" && <ExpressHotel />}
                    {currentScreen === "javaResort" && <JavaResort />}
                    {currentScreen === "gamingHotel" && <GamingHotel />}
                    {currentScreen === "apartment" && <Apartment />}
                    {currentScreen === "mall" && <Mall />}
                    {currentScreen === "devWork" && <DevWork />}
                    {currentScreen === "datingOffice" && <DatingOffice />}
                    {currentScreen === "saveload" && <SaveLoadMenu />}
                </div>
            </AnimatePresence>
        </motion.div>
    );
}