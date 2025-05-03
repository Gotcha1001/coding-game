"use client";

import { useGame } from "@/app/context/GameContext";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { shopItems } from "@/data/items";
import { toast } from "sonner";
import {
    initAudio,
    loadClickSound,
    loadMallMusic,
    playClickSound,
    playMallMusic,
    stopMallMusic,
} from "@/data/audioManager";

export default function Mall() {
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
        loadMallMusic("/sounds/mallmusic.mp3").then(() => {
            playMallMusic();
        });
        return () => {
            stopMallMusic();
        };
    }, []);

    const handleBuyItem = (item) => {
        if (player.cash < item.price) {
            toast.error(`Not enough cash to buy ${item.name}!`);
            return;
        }
        if (player.energy < 5) {
            toast.error("Not enough energy to shop!");
            return;
        }
        dispatch({
            type: "BUY_ITEM",
            payload: { item },
        });
        dispatch({
            type: "USE_TIME",
            payload: { amount: 10 },
        });
        toast.success(`Purchased ${item.name} for $${item.price}!`);
    };

    const goBackToMap = () => {
        dispatch({ type: "CHANGE_SCREEN", payload: { screen: "map" } });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-rose-900 to-pink-800 rounded-lg p-6 m-4"
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-yellow-400">Shopping Mall</h2>
                <button
                    onClick={withSound(goBackToMap)}
                    className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded"
                >
                    Back to Map
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {shopItems.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-black bg-opacity-30 p-4 rounded-lg"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-56 object-cover rounded-md mb-2"
                        />
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                        <p className="text-yellow-400 font-medium mt-2">
                            Price: ${item.price}
                        </p>
                        <p className="text-green-400 text-sm">
                            Happiness: +{item.happiness}
                        </p>
                        <button
                            onClick={withSound(() => handleBuyItem(item))}
                            disabled={player.cash < item.price || player.energy < 5}
                            className={`mt-2 w-full py-2 rounded ${player.cash < item.price || player.energy < 5
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-500 text-white"
                                }`}
                        >
                            Buy
                        </button>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}