// // GameProvider.jsx
// "use client";

// import { useReducer } from "react";
// import gameReducer from "./gameReducer";
// import initialState from "./initialState";
// import GameContext from "./GameContext";

// function GameProvider({ children }) {
//     const [state, dispatch] = useReducer(gameReducer, initialState);

//     return (
//         <GameContext.Provider value={{ state, dispatch }}>
//             {children}
//         </GameContext.Provider>
//     );
// }

// export default GameProvider;




"use client";

import { useReducer, useEffect, useState } from "react";
import gameReducer from "./gameReducer";
import initialState from "./initialState";
import GameContext from "./GameContext";
import { loadFromLocalStorage } from "@/data/saveManager";

function GameProvider({ children }) {
    const [state, dispatch] = useReducer(gameReducer, initialState);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
        const savedState = loadFromLocalStorage();
        if (savedState) {
            try {
                dispatch({
                    type: "HYDRATE_STATE",
                    payload: savedState,
                });
            } catch (error) {
                console.error("Error parsing saved game state:", error);
            }
        }
    }, []);

    useEffect(() => {
        if (isHydrated && state.player && state.gameWon === false) {
            localStorage.setItem("reactHooksAdventure_saveGame", JSON.stringify(state));
        }
    }, [state, isHydrated]);

    useEffect(() => {
        if (state.message) {
            const timer = setTimeout(() => {
                dispatch({ type: "SET_MESSAGE", payload: { text: null } });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [state.message]);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
}

export default GameProvider;
