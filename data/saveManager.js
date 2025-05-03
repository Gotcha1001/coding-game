"use strict";

const saveToLocalStorage = (gameState) => {
  try {
    const gameStateCopy = JSON.parse(JSON.stringify(gameState));
    localStorage.setItem(
      "reactHooksAdventure_saveGame",
      JSON.stringify(gameStateCopy)
    );
    return true;
  } catch (error) {
    console.error("Error saving game to localStorage:", error);
    return false;
  }
};

const loadFromLocalStorage = () => {
  try {
    const savedGameString = localStorage.getItem(
      "reactHooksAdventure_saveGame"
    );
    if (!savedGameString) return null;
    return JSON.parse(savedGameString);
  } catch (error) {
    console.error("Error loading game from localStorage:", error);
    return null;
  }
};

export const saveGameToFile = async (gameState) => {
  try {
    const gameStateCopy = JSON.parse(JSON.stringify(gameState));
    const content = JSON.stringify(gameStateCopy, null, 2);
    const fileHandle = await window.showSaveFilePicker({
      suggestedName: "react-hooks-adventure-save.json",
      types: [
        {
          description: "JSON Files",
          accept: { "application/json": [".json"] },
        },
      ],
    });
    const writable = await fileHandle.createWritable();
    await writable.write(content);
    await writable.close();
    saveToLocalStorage(gameState); // Backup to localStorage
    sessionStorage.setItem("reactHooksAdventure_hasFileHandle", "true");
    return true;
  } catch (error) {
    console.error("Error saving game to file:", error);
    return saveToLocalStorage(gameState); // Fallback to localStorage
  }
};

export const loadGameFromFile = async () => {
  try {
    const [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: "JSON Files",
          accept: { "application/json": [".json"] },
        },
      ],
    });
    const file = await fileHandle.getFile();
    const contents = await file.text();
    const savedGame = JSON.parse(contents);
    sessionStorage.setItem("reactHooksAdventure_hasFileHandle", "true");
    localStorage.setItem("reactHooksAdventure_saveGame", contents); // Backup to localStorage
    return savedGame;
  } catch (error) {
    console.error("Error loading game from file:", error);
    return loadFromLocalStorage(); // Fallback to localStorage
  }
};

export const saveGame = async (gameState) => {
  return await saveGameToFile(gameState);
};

export const loadGame = async () => {
  return await loadGameFromFile();
};

export const hasSavedGame = () => {
  return (
    !!localStorage.getItem("reactHooksAdventure_saveGame") ||
    sessionStorage.getItem("reactHooksAdventure_hasFileHandle") === "true"
  );
};

export const deleteSavedGame = () => {
  try {
    localStorage.removeItem("reactHooksAdventure_saveGame");
    sessionStorage.removeItem("reactHooksAdventure_hasFileHandle");
    return true;
  } catch (error) {
    console.error("Error deleting saved game:", error);
    return false;
  }
};

// Add this line to export loadFromLocalStorage
export { loadFromLocalStorage, saveToLocalStorage };
