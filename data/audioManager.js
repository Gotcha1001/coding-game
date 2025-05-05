// // WALKING SOUND ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let audioContext = null;
// let walkingSound = null;

// export const initAudio = () => {
//   try {
//     if (!audioContext) {
//       audioContext = new (window.AudioContext || window.webkitAudioContext)();
//     }
//     return true;
//   } catch (error) {
//     console.error("Web Audio API not supported:", error);
//     return false;
//   }
// };

// export const loadWalkingSound = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     walkingSound = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading audio:", error);
//     return false;
//   }
// };

// let currentSound = null;

// export const playWalkingSound = () => {
//   if (!audioContext || !walkingSound) return;

//   // Stop previous sound if playing
//   if (currentSound) {
//     currentSound.stop();
//   }

//   // Create new source
//   const soundSource = audioContext.createBufferSource();
//   soundSource.buffer = walkingSound;
//   soundSource.loop = true;
//   soundSource.connect(audioContext.destination);
//   soundSource.start();

//   currentSound = soundSource;
//   return soundSource;
// };

// export const stopWalkingSound = () => {
//   if (currentSound) {
//     currentSound.stop();
//     currentSound = null;
//   }
// };

// //BANK MUSIC ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let bankMusic = null;
// let bankMusicSource = null;

// export const loadBankMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     bankMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading bank music:", error);
//     return false;
//   }
// };

// export const playBankMusic = () => {
//   if (!audioContext || !bankMusic) return;

//   // Stop previous music if playing
//   if (bankMusicSource) {
//     bankMusicSource.stop();
//   }

//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = bankMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();

//   bankMusicSource = musicSource;
//   return musicSource;
// };

// export const stopBankMusic = () => {
//   if (bankMusicSource) {
//     bankMusicSource.stop();
//     bankMusicSource = null;
//   }
// };

// // EMPLOYMENT MUSIC +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // data/audioManager.js
// // Add these new functions to the existing file:

// let employmentMusic = null;
// let employmentMusicSource = null;

// export const loadEmploymentMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     employmentMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading employment office music:", error);
//     return false;
//   }
// };

// export const playEmploymentMusic = () => {
//   if (!audioContext || !employmentMusic) return;

//   // Stop previous music if playing
//   if (employmentMusicSource) {
//     employmentMusicSource.stop();
//   }

//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = employmentMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();

//   employmentMusicSource = musicSource;
//   return musicSource;
// };

// export const stopEmploymentMusic = () => {
//   if (employmentMusicSource) {
//     employmentMusicSource.stop();
//     employmentMusicSource = null;
//   }
// };

// // Mall Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let mallMusic = null;
// let mallMusicSource = null;

// export const loadMallMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     mallMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading mall music:", error);
//     return false;
//   }
// };

// export const playMallMusic = () => {
//   if (!audioContext || !mallMusic) return;

//   // Stop previous music if playing
//   if (mallMusicSource) {
//     mallMusicSource.stop();
//   }

//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = mallMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();

//   mallMusicSource = musicSource;
//   return musicSource;
// };

// export const stopMallMusic = () => {
//   if (mallMusicSource) {
//     mallMusicSource.stop();
//     mallMusicSource = null;
//   }
// };

// //LEISURE MUSIC
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let leisureMusic = null;
// let leisureMusicSource = null;

// export const loadLeisureMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     leisureMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading leisure music:", error);
//     return false;
//   }
// };

// export const playLeisureMusic = () => {
//   if (!audioContext || !leisureMusic) return;

//   // Stop previous music if playing
//   if (leisureMusicSource) {
//     leisureMusicSource.stop();
//   }

//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = leisureMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();

//   leisureMusicSource = musicSource;
//   return musicSource;
// };

// export const stopLeisureMusic = () => {
//   if (leisureMusicSource) {
//     leisureMusicSource.stop();
//     leisureMusicSource = null;
//   }
// };

// // Add this to your audioManager.js file below the bankMusic section
// //WORK MUSIC
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let workMusic = null;
// let workMusicSource = null;

// export const loadWorkMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     workMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading work music:", error);
//     return false;
//   }
// };

// export const playWorkMusic = () => {
//   if (!audioContext || !workMusic) return;

//   // Stop previous music if playing
//   if (workMusicSource) {
//     workMusicSource.stop();
//   }

//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = workMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();

//   workMusicSource = musicSource;
//   return musicSource;
// };

// export const stopWorkMusic = () => {
//   if (workMusicSource) {
//     workMusicSource.stop();
//     workMusicSource = null;
//   }
// };

// // UNIVERSITY MUSIC
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let universityMusic = null;
// let universityMusicSource = null;

// export const loadUniversityMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     universityMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading university music:", error);
//     return false;
//   }
// };

// export const playUniversityMusic = () => {
//   if (!audioContext || !universityMusic) return;

//   // Stop previous music if playing
//   if (universityMusicSource) {
//     universityMusicSource.stop();
//   }

//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = universityMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();

//   universityMusicSource = musicSource;
//   return musicSource;
// };

// export const stopUniversityMusic = () => {
//   if (universityMusicSource) {
//     universityMusicSource.stop();
//     universityMusicSource = null;
//   }
// };

// // HOME MUSIC
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let homeMusic = null;
// let homeMusicSource = null;

// export const loadHomeMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     homeMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading home music:", error);
//     return false;
//   }
// };

// export const playHomeMusic = () => {
//   if (!audioContext || !homeMusic) return;

//   // Stop previous music if playing
//   if (homeMusicSource) {
//     homeMusicSource.stop();
//   }

//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = homeMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();

//   homeMusicSource = musicSource;
//   return musicSource;
// };

// export const stopHomeMusic = () => {
//   if (homeMusicSource) {
//     homeMusicSource.stop();
//     homeMusicSource = null;
//   }
// };

// // FAST FOOD MUSIC
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let fastFoodMusic = null;
// let fastFoodMusicSource = null;

// export const loadFastFoodMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     fastFoodMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading fast food music:", error);
//     return false;
//   }
// };

// export const playFastFoodMusic = () => {
//   if (!audioContext || !fastFoodMusic) return;

//   // Stop previous music if playing
//   if (fastFoodMusicSource) {
//     fastFoodMusicSource.stop();
//   }

//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = fastFoodMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();

//   fastFoodMusicSource = musicSource;
//   return musicSource;
// };

// export const stopFastFoodMusic = () => {
//   if (fastFoodMusicSource) {
//     fastFoodMusicSource.stop();
//     fastFoodMusicSource = null;
//   }
// };

// // DATING OFFICE MUSIC
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let datingOfficeMusic = null;
// let datingOfficeMusicSource = null;

// export const loadDatingOfficeMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }

//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     datingOfficeMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading dating office music:", error);
//     return false;
//   }
// };

// export const playDatingOfficeMusic = () => {
//   if (!audioContext || !datingOfficeMusic) return;

//   // Stop previous music if playing
//   if (datingOfficeMusicSource) {
//     datingOfficeMusicSource.stop();
//   }

//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = datingOfficeMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   datingOfficeMusicSource = musicSource;

//   return musicSource;
// };

// export const stopDatingOfficeMusic = () => {
//   if (datingOfficeMusicSource) {
//     datingOfficeMusicSource.stop();
//     datingOfficeMusicSource = null;
//   }
// };

// // NextJsHotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let nextJsHotelMusic = null;
// let nextJsHotelMusicSource = null;

// export const loadNextJsHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     nextJsHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading NextJsHotel music:", error);
//     return false;
//   }
// };

// export const playNextJsHotelMusic = () => {
//   if (!audioContext || !nextJsHotelMusic) return;
//   // Stop previous music if playing
//   if (nextJsHotelMusicSource) {
//     nextJsHotelMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = nextJsHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   nextJsHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopNextJsHotelMusic = () => {
//   if (nextJsHotelMusicSource) {
//     nextJsHotelMusicSource.stop();
//     nextJsHotelMusicSource = null;
//   }
// };

// // audioManager.jsx

// // audioManager.jsx
// let clickSound = null;

// export const loadClickSound = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return false;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     clickSound = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading click sound:", error);
//     return false;
//   }
// };

// export const playClickSound = () => {
//   if (!audioContext || !clickSound) return;
//   const soundSource = audioContext.createBufferSource();
//   soundSource.buffer = clickSound;
//   soundSource.connect(audioContext.destination);
//   soundSource.start();
// };

// // ExpressHotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let expressHotelMusic = null;
// let expressHotelMusicSource = null;

// export const loadExpressHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     expressHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading ExpressHotel music:", error);
//     return false;
//   }
// };

// export const playExpressHotelMusic = () => {
//   if (!audioContext || !expressHotelMusic) return;
//   // Stop previous music if playing
//   if (expressHotelMusicSource) {
//     expressHotelMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = expressHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   expressHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopExpressHotelMusic = () => {
//   if (expressHotelMusicSource) {
//     expressHotelMusicSource.stop();
//     expressHotelMusicSource = null;
//   }
// };

// // CssHotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let cssHotelMusic = null;
// let cssHotelMusicSource = null;

// export const loadCssHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     cssHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading CssHotel music:", error);
//     return false;
//   }
// };

// export const playCssHotelMusic = () => {
//   if (!audioContext || !cssHotelMusic) return;
//   // Stop previous music if playing
//   if (cssHotelMusicSource) {
//     cssHotelMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = cssHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   cssHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopCssHotelMusic = () => {
//   if (cssHotelMusicSource) {
//     cssHotelMusicSource.stop();
//     cssHotelMusicSource = null;
//   }
// };

// // Python Hotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let pythonHotelMusic = null;
// let pythonHotelMusicSource = null;

// export const loadPythonHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     pythonHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading Python Hotel music:", error);
//     return false;
//   }
// };

// export const playPythonHotelMusic = () => {
//   if (!audioContext || !pythonHotelMusic) return;
//   // Stop previous music if playing
//   if (pythonHotelMusicSource) {
//     pythonHotelMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = pythonHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   pythonHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopPythonHotelMusic = () => {
//   if (pythonHotelMusicSource) {
//     pythonHotelMusicSource.stop();
//     pythonHotelMusicSource = null;
//   }
// };

// // Gaming Hotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let gamingHotelMusic = null;
// let gamingHotelMusicSource = null;

// export const loadGamingHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     gamingHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading Gaming Hotel music:", error);
//     return false;
//   }
// };

// export const playGamingHotelMusic = () => {
//   if (!audioContext || !gamingHotelMusic) return;
//   // Stop previous music if playing
//   if (gamingHotelMusicSource) {
//     gamingHotelMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = gamingHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   gamingHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopGamingHotelMusic = () => {
//   if (gamingHotelMusicSource) {
//     gamingHotelMusicSource.stop();
//     gamingHotelMusicSource = null;
//   }
// };

// // React University Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let reactUniversityMusic = null;
// let reactUniversityMusicSource = null;

// export const loadReactUniversityMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     reactUniversityMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading React University music:", error);
//     return false;
//   }
// };

// export const playReactUniversityMusic = () => {
//   if (!audioContext || !reactUniversityMusic) return;
//   // Stop previous music if playing
//   if (reactUniversityMusicSource) {
//     reactUniversityMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = reactUniversityMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   reactUniversityMusicSource = musicSource;
//   return musicSource;
// };

// export const stopReactUniversityMusic = () => {
//   if (reactUniversityMusicSource) {
//     reactUniversityMusicSource.stop();
//     reactUniversityMusicSource = null;
//   }
// };

// // TypeScript Holiday Resort Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let typeScriptHolidayResortMusic = null;
// let typeScriptHolidayResortMusicSource = null;

// export const loadTypeScriptHolidayResortMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     typeScriptHolidayResortMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading TypeScript Holiday Resort music:", error);
//     return false;
//   }
// };

// export const playTypeScriptHolidayResortMusic = () => {
//   if (!audioContext || !typeScriptHolidayResortMusic) return;
//   // Stop previous music if playing
//   if (typeScriptHolidayResortMusicSource) {
//     typeScriptHolidayResortMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = typeScriptHolidayResortMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   typeScriptHolidayResortMusicSource = musicSource;
//   return musicSource;
// };

// export const stopTypeScriptHolidayResortMusic = () => {
//   if (typeScriptHolidayResortMusicSource) {
//     typeScriptHolidayResortMusicSource.stop();
//     typeScriptHolidayResortMusicSource = null;
//   }
// };

// // C# Hotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let cSharpHotelMusic = null;
// let cSharpHotelMusicSource = null;

// export const loadCSharpHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     cSharpHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading C# Hotel music:", error);
//     return false;
//   }
// };

// export const playCSharpHotelMusic = () => {
//   if (!audioContext || !cSharpHotelMusic) return;
//   // Stop previous music if playing
//   if (cSharpHotelMusicSource) {
//     cSharpHotelMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = cSharpHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   cSharpHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopCSharpHotelMusic = () => {
//   if (cSharpHotelMusicSource) {
//     cSharpHotelMusicSource.stop();
//     cSharpHotelMusicSource = null;
//   }
// };

// // ReactNative Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let reactNativeMusic = null;
// let reactNativeMusicSource = null;

// export const loadReactNativeMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     reactNativeMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading React Native music:", error);
//     return false;
//   }
// };

// export const playReactNativeMusic = () => {
//   if (!audioContext || !reactNativeMusic) return;
//   // Stop previous music if playing
//   if (reactNativeMusicSource) {
//     reactNativeMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = reactNativeMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   reactNativeMusicSource = musicSource;
//   return musicSource;
// };

// export const stopReactNativeMusic = () => {
//   if (reactNativeMusicSource) {
//     reactNativeMusicSource.stop();
//     reactNativeMusicSource = null;
//   }
// };

// // JavaResort Music Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let javaResortMusic = null;
// let javaResortMusicSource = null;

// export const loadJavaResortMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     javaResortMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading Java Resort music:", error);
//     return false;
//   }
// };

// export const playJavaResortMusic = () => {
//   if (!audioContext || !javaResortMusic) return;
//   // Stop previous music if playing
//   if (javaResortMusicSource) {
//     javaResortMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = javaResortMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   javaResortMusicSource = musicSource;
//   return musicSource;
// };

// export const stopJavaResortMusic = () => {
//   if (javaResortMusicSource) {
//     javaResortMusicSource.stop();
//     javaResortMusicSource = null;
//   }
// };

// // JavascriptHotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let javaScriptHotelMusic = null;
// let javaScriptHotelMusicSource = null;

// export const loadJavaScriptHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     javaScriptHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading JavaScript Hotel music:", error);
//     return false;
//   }
// };

// export const playJavaScriptHotelMusic = () => {
//   if (!audioContext || !javaScriptHotelMusic) return;
//   // Stop previous music if playing
//   if (javaScriptHotelMusicSource) {
//     javaScriptHotelMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = javaScriptHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   javaScriptHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopJavaScriptHotelMusic = () => {
//   if (javaScriptHotelMusicSource) {
//     javaScriptHotelMusicSource.stop();
//     javaScriptHotelMusicSource = null;
//   }
// };

// // All locations music before entering

// let healingMusic = null;
// let healingMusicSource = null;

// export const loadHealingMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     healingMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading healing music:", error);
//     return false;
//   }
// };

// export const playHealingMusic = () => {
//   if (!audioContext || !healingMusic) return;
//   // Stop previous music if playing
//   if (healingMusicSource) {
//     healingMusicSource.stop();
//   }
//   // Create new source
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = healingMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   healingMusicSource = musicSource;
//   return musicSource;
// };

// export const stopHealingMusic = () => {
//   if (healingMusicSource) {
//     healingMusicSource.stop();
//     healingMusicSource = null;
//   }
// };

// let audioContext = null;
// let walkingSound = null;
// let currentSound = null;
// let bankMusic = null;
// let bankMusicSource = null;
// let employmentMusic = null;
// let employmentMusicSource = null;
// let mallMusic = null;
// let mallMusicSource = null;
// let leisureMusic = null;
// let leisureMusicSource = null;
// let workMusic = null;
// let workMusicSource = null;
// let universityMusic = null;
// let universityMusicSource = null;
// let homeMusic = null;
// let homeMusicSource = null;
// let fastFoodMusic = null;
// let fastFoodMusicSource = null;
// let datingOfficeMusic = null;
// let datingOfficeMusicSource = null;
// let nextJsHotelMusic = null;
// let nextJsHotelMusicSource = null;
// let clickSound = null;
// let expressHotelMusic = null;
// let expressHotelMusicSource = null;
// let cssHotelMusic = null;
// let cssHotelMusicSource = null;
// let pythonHotelMusic = null;
// let pythonHotelMusicSource = null;
// let gamingHotelMusic = null;
// let gamingHotelMusicSource = null;
// let reactUniversityMusic = null;
// let reactUniversityMusicSource = null;
// let typeScriptHolidayResortMusic = null;
// let typeScriptHolidayResortMusicSource = null;
// let cSharpHotelMusic = null;
// let cSharpHotelMusicSource = null;
// let reactNativeMusic = null;
// let reactNativeMusicSource = null;
// let javaResortMusic = null;
// let javaResortMusicSource = null;
// let javaScriptHotelMusic = null;
// let javaScriptHotelMusicSource = null;
// let healingMusic = null;
// let healingMusicSource = null;

// export const initAudio = () => {
//   try {
//     if (!audioContext) {
//       audioContext = new (window.AudioContext || window.webkitAudioContext)();
//     }
//     return true;
//   } catch (error) {
//     console.error("Web Audio API not supported:", error);
//     return false;
//   }
// };

// // Walking Sound
// export const loadWalkingSound = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     walkingSound = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading audio:", error);
//     return false;
//   }
// };

// export const playWalkingSound = () => {
//   if (!audioContext || !walkingSound) return;
//   if (currentSound) {
//     currentSound.stop();
//   }
//   const soundSource = audioContext.createBufferSource();
//   soundSource.buffer = walkingSound;
//   soundSource.loop = true;
//   soundSource.connect(audioContext.destination);
//   soundSource.start();
//   currentSound = soundSource;
//   return soundSource;
// };

// export const stopWalkingSound = () => {
//   if (currentSound) {
//     currentSound.stop();
//     currentSound = null;
//   }
// };

// // Bank Music
// export const loadBankMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     bankMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading bank music:", error);
//     return false;
//   }
// };

// export const playBankMusic = () => {
//   if (!audioContext || !bankMusic) return;
//   if (bankMusicSource) {
//     bankMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = bankMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   bankMusicSource = musicSource;
//   return musicSource;
// };

// export const stopBankMusic = () => {
//   if (bankMusicSource) {
//     bankMusicSource.stop();
//     bankMusicSource = null;
//   }
// };

// // Employment Music
// export const loadEmploymentMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     employmentMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading employment office music:", error);
//     return false;
//   }
// };

// export const playEmploymentMusic = () => {
//   if (!audioContext || !employmentMusic) return;
//   if (employmentMusicSource) {
//     employmentMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = employmentMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   employmentMusicSource = musicSource;
//   return musicSource;
// };

// export const stopEmploymentMusic = () => {
//   if (employmentMusicSource) {
//     employmentMusicSource.stop();
//     employmentMusicSource = null;
//   }
// };

// // Mall Music
// export const loadMallMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     mallMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading mall music:", error);
//     return false;
//   }
// };

// export const playMallMusic = () => {
//   if (!audioContext || !mallMusic) return;
//   if (mallMusicSource) {
//     mallMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = mallMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   mallMusicSource = musicSource;
//   return musicSource;
// };

// export const stopMallMusic = () => {
//   if (mallMusicSource) {
//     mallMusicSource.stop();
//     mallMusicSource = null;
//   }
// };

// // Leisure Music
// export const loadLeisureMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     leisureMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading leisure music:", error);
//     return false;
//   }
// };

// export const playLeisureMusic = () => {
//   if (!audioContext || !leisureMusic) return;
//   if (leisureMusicSource) {
//     leisureMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = leisureMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   leisureMusicSource = musicSource;
//   return musicSource;
// };

// export const stopLeisureMusic = () => {
//   if (leisureMusicSource) {
//     leisureMusicSource.stop();
//     leisureMusicSource = null;
//   }
// };

// // Work Music
// export const loadWorkMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     workMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading work music:", error);
//     return false;
//   }
// };

// export const playWorkMusic = () => {
//   if (!audioContext || !workMusic) return;
//   if (workMusicSource) {
//     workMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = workMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   workMusicSource = musicSource;
//   return musicSource;
// };

// export const stopWorkMusic = () => {
//   if (workMusicSource) {
//     workMusicSource.stop();
//     workMusicSource = null;
//   }
// };

// // University Music
// export const loadUniversityMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     universityMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading university music:", error);
//     return false;
//   }
// };

// export const playUniversityMusic = () => {
//   if (!audioContext || !universityMusic) return;
//   if (universityMusicSource) {
//     universityMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = universityMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   universityMusicSource = musicSource;
//   return musicSource;
// };

// export const stopUniversityMusic = () => {
//   if (universityMusicSource) {
//     universityMusicSource.stop();
//     universityMusicSource = null;
//   }
// };

// // Home Music
// export const loadHomeMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     homeMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading home music:", error);
//     return false;
//   }
// };

// export const playHomeMusic = () => {
//   if (!audioContext || !homeMusic) return;
//   if (homeMusicSource) {
//     homeMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = homeMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   homeMusicSource = musicSource;
//   return musicSource;
// };

// export const stopHomeMusic = () => {
//   if (homeMusicSource) {
//     homeMusicSource.stop();
//     homeMusicSource = null;
//   }
// };

// // Fast Food Music
// export const loadFastFoodMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     fastFoodMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading fast food music:", error);
//     return false;
//   }
// };

// export const playFastFoodMusic = () => {
//   if (!audioContext || !fastFoodMusic) return;
//   if (fastFoodMusicSource) {
//     fastFoodMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = fastFoodMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   fastFoodMusicSource = musicSource;
//   return musicSource;
// };

// export const stopFastFoodMusic = () => {
//   if (fastFoodMusicSource) {
//     fastFoodMusicSource.stop();
//     fastFoodMusicSource = null;
//   }
// };

// // Dating Office Music
// export const loadDatingOfficeMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     datingOfficeMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading dating office music:", error);
//     return false;
//   }
// };

// export const playDatingOfficeMusic = () => {
//   if (!audioContext || !datingOfficeMusic) return;
//   if (datingOfficeMusicSource) {
//     datingOfficeMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = datingOfficeMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   datingOfficeMusicSource = musicSource;
//   return musicSource;
// };

// export const stopDatingOfficeMusic = () => {
//   if (datingOfficeMusicSource) {
//     datingOfficeMusicSource.stop();
//     datingOfficeMusicSource = null;
//   }
// };

// // NextJsHotel Music
// export const loadNextJsHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     nextJsHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading NextJsHotel music:", error);
//     return false;
//   }
// };

// export const playNextJsHotelMusic = () => {
//   if (!audioContext || !nextJsHotelMusic) return;
//   if (nextJsHotelMusicSource) {
//     nextJsHotelMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = nextJsHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   nextJsHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopNextJsHotelMusic = () => {
//   if (nextJsHotelMusicSource) {
//     nextJsHotelMusicSource.stop();
//     nextJsHotelMusicSource = null;
//   }
// };

// // Click Sound
// export const loadClickSound = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return false;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     clickSound = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading click sound:", error);
//     return false;
//   }
// };

// export const playClickSound = () => {
//   if (!audioContext || !clickSound) return;
//   const soundSource = audioContext.createBufferSource();
//   soundSource.buffer = clickSound;
//   soundSource.connect(audioContext.destination);
//   soundSource.start();
// };

// // ExpressHotel Music
// export const loadExpressHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     expressHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading ExpressHotel music:", error);
//     return false;
//   }
// };

// export const playExpressHotelMusic = () => {
//   if (!audioContext || !expressHotelMusic) return;
//   if (expressHotelMusicSource) {
//     expressHotelMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = expressHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   expressHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopExpressHotelMusic = () => {
//   if (expressHotelMusicSource) {
//     expressHotelMusicSource.stop();
//     expressHotelMusicSource = null;
//   }
// };

// // CssHotel Music
// export const loadCssHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     cssHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading CssHotel music:", error);
//     return false;
//   }
// };

// export const playCssHotelMusic = () => {
//   if (!audioContext || !cssHotelMusic) return;
//   if (cssHotelMusicSource) {
//     cssHotelMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = cssHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   cssHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopCssHotelMusic = () => {
//   if (cssHotelMusicSource) {
//     cssHotelMusicSource.stop();
//     cssHotelMusicSource = null;
//   }
// };

// // Python Hotel Music
// export const loadPythonHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     pythonHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading Python Hotel music:", error);
//     return false;
//   }
// };

// export const playPythonHotelMusic = () => {
//   if (!audioContext || !pythonHotelMusic) return;
//   if (pythonHotelMusicSource) {
//     pythonHotelMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = pythonHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   pythonHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopPythonHotelMusic = () => {
//   if (pythonHotelMusicSource) {
//     pythonHotelMusicSource.stop();
//     pythonHotelMusicSource = null;
//   }
// };

// // Gaming Hotel Music
// export const loadGamingHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     gamingHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading Gaming Hotel music:", error);
//     return false;
//   }
// };

// export const playGamingHotelMusic = () => {
//   if (!audioContext || !gamingHotelMusic) return;
//   if (gamingHotelMusicSource) {
//     gamingHotelMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = gamingHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   gamingHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopGamingHotelMusic = () => {
//   if (gamingHotelMusicSource) {
//     gamingHotelMusicSource.stop();
//     gamingHotelMusicSource = null;
//   }
// };

// // React University Music
// export const loadReactUniversityMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     reactUniversityMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading React University music:", error);
//     return false;
//   }
// };

// export const playReactUniversityMusic = () => {
//   if (!audioContext || !reactUniversityMusic) return;
//   if (reactUniversityMusicSource) {
//     reactUniversityMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = reactUniversityMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   reactUniversityMusicSource = musicSource;
//   return musicSource;
// };

// export const stopReactUniversityMusic = () => {
//   if (reactUniversityMusicSource) {
//     reactUniversityMusicSource.stop();
//     reactUniversityMusicSource = null;
//   }
// };

// // TypeScript Holiday Resort Music
// export const loadTypeScriptHolidayResortMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     typeScriptHolidayResortMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading TypeScript Holiday Resort music:", error);
//     return DEXTERfalse;
//   }
// };

// export const playTypeScriptHolidayResortMusic = () => {
//   if (!audioContext || !typeScriptHolidayResortMusic) return;
//   if (typeScriptHolidayResortMusicSource) {
//     typeScriptHolidayResortMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = typeScriptHolidayResortMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   typeScriptHolidayResortMusicSource = musicSource;
//   return musicSource;
// };

// export const stopTypeScriptHolidayResortMusic = () => {
//   if (typeScriptHolidayResortMusicSource) {
//     typeScriptHolidayResortMusicSource.stop();
//     typeScriptHolidayResortMusicSource = null;
//   }
// };

// // C# Hotel Music
// export const loadCSharpHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     cSharpHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading C# Hotel music:", error);
//     return false;
//   }
// };

// export const playCSharpHotelMusic = () => {
//   if (!audioContext || !cSharpHotelMusic) return;
//   if (cSharpHotelMusicSource) {
//     cSharpHotelMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = cSharpHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   cSharpHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopCSharpHotelMusic = () => {
//   if (cSharpHotelMusicSource) {
//     cSharpHotelMusicSource.stop();
//     cSharpHotelMusicSource = null;
//   }
// };

// // React Native Music
// export const loadReactNativeMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     reactNativeMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading React Native music:", error);
//     return false;
//   }
// };

// export const playReactNativeMusic = () => {
//   if (!audioContext || !reactNativeMusic) return;
//   if (reactNativeMusicSource) {
//     reactNativeMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = reactNativeMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   reactNativeMusicSource = musicSource;
//   return musicSource;
// };

// export const stopReactNativeMusic = () => {
//   if (reactNativeMusicSource) {
//     reactNativeMusicSource.stop();
//     reactNativeMusicSource = null;
//   }
// };

// // Java Resort Music
// export const loadJavaResortMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     javaResortMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading Java Resort music:", error);
//     return false;
//   }
// };

// export const playJavaResortMusic = () => {
//   if (!audioContext || !javaResortMusic) return;
//   if (javaResortMusicSource) {
//     javaResortMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = javaResortMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   javaResortMusicSource = musicSource;
//   return musicSource;
// };

// export const stopJavaResortMusic = () => {
//   if (javaResortMusicSource) {
//     javaResortMusicSource.stop();
//     javaResortMusicSource = null;
//   }
// };

// // JavaScript Hotel Music
// export const loadJavaScriptHotelMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     javaScriptHotelMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading JavaScript Hotel music:", error);
//     return false;
//   }
// };

// export const playJavaScriptHotelMusic = () => {
//   if (!audioContext || !javaScriptHotelMusic) return;
//   if (javaScriptHotelMusicSource) {
//     javaScriptHotelMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = javaScriptHotelMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   javaScriptHotelMusicSource = musicSource;
//   return musicSource;
// };

// export const stopJavaScriptHotelMusic = () => {
//   if (javaScriptHotelMusicSource) {
//     javaScriptHotelMusicSource.stop();
//     javaScriptHotelMusicSource = null;
//   }
// };

// // Healing Music
// export const loadHealingMusic = async (url) => {
//   if (!audioContext) {
//     if (!initAudio()) return;
//   }
//   try {
//     const response = await fetch(url);
//     const arrayBuffer = await response.arrayBuffer();
//     const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
//     healingMusic = audioBuffer;
//     return true;
//   } catch (error) {
//     console.error("Error loading healing music:", error);
//     return false;
//   }
// };

// export const playHealingMusic = () => {
//   if (!audioContext || !healingMusic) return;
//   if (healingMusicSource) {
//     healingMusicSource.stop();
//   }
//   const musicSource = audioContext.createBufferSource();
//   musicSource.buffer = healingMusic;
//   musicSource.loop = true;
//   musicSource.connect(audioContext.destination);
//   musicSource.start();
//   healingMusicSource = musicSource;
//   return musicSource;
// };

// export const stopHealingMusic = () => {
//   if (healingMusicSource) {
//     healingMusicSource.stop();
//     healingMusicSource = null;
//   }
// };

// // Stop All Music
// export const stopAllMusic = () => {
//   stopWalkingSound();
//   stopBankMusic();
//   stopEmploymentMusic();
//   stopMallMusic();
//   stopLeisureMusic();
//   stopWorkMusic();
//   stopUniversityMusic();
//   stopHomeMusic();
//   stopFastFoodMusic();
//   stopDatingOfficeMusic();
//   stopNextJsHotelMusic();
//   stopExpressHotelMusic();
//   stopCssHotelMusic();
//   stopPythonHotelMusic();
//   stopGamingHotelMusic();
//   stopReactUniversityMusic();
//   stopTypeScriptHolidayResortMusic();
//   stopCSharpHotelMusic();
//   stopReactNativeMusic();
//   stopJavaResortMusic();
//   stopJavaScriptHotelMusic();
//   stopHealingMusic();
// };

let audioContext = null;
let walkingSound = null;
let currentSound = null;
let bankMusic = null;
let bankMusicSource = null;
let employmentMusic = null;
let employmentMusicSource = null;
let mallMusic = null;
let mallMusicSource = null;
let leisureMusic = null;
let leisureMusicSource = null;
let workMusic = null;
let workMusicSource = null;
let universityMusic = null;
let universityMusicSource = null;
let homeMusic = null;
let homeMusicSource = null;
let fastFoodMusic = null;
let fastFoodMusicSource = null;
let datingOfficeMusic = null;
let datingOfficeMusicSource = null;
let nextJsHotelMusic = null;
let nextJsHotelMusicSource = null;
let clickSound = null;
let expressHotelMusic = null;
let expressHotelMusicSource = null;
let cssHotelMusic = null;
let cssHotelMusicSource = null;
let pythonHotelMusic = null;
let pythonHotelMusicSource = null;
let gamingHotelMusic = null;
let gamingHotelMusicSource = null;
let reactUniversityMusic = null;
let reactUniversityMusicSource = null;
let typeScriptHolidayResortMusic = null;
let typeScriptHolidayResortMusicSource = null;
let cSharpHotelMusic = null;
let cSharpHotelMusicSource = null;
let reactNativeMusic = null;
let reactNativeMusicSource = null;
let javaResortMusic = null;
let javaResortMusicSource = null;
let javaScriptHotelMusic = null;
let javaScriptHotelMusicSource = null;
let healingMusic = null;
let healingMusicSource = null;

export const initAudio = () => {
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      console.log("AudioContext initialized successfully");
    }
    return true;
  } catch (error) {
    console.error("Failed to initialize Web Audio API:", error);
    return false;
  }
};

// Generic load audio function with enhanced error handling
const loadAudio = async (url, bufferSetter, name) => {
  if (!audioContext) {
    if (!initAudio()) {
      console.error(`Cannot load ${name}: AudioContext initialization failed`);
      return false;
    }
  }
  try {
    console.log(`Fetching audio file: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        `Failed to fetch ${name} at ${url}: HTTP ${response.status}`
      );
      return false;
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.startsWith("audio/")) {
      console.error(
        `Invalid content type for ${name} at ${url}: ${contentType}`
      );
      return false;
    }
    const arrayBuffer = await response.arrayBuffer();
    if (arrayBuffer.byteLength === 0) {
      console.error(`Empty audio data for ${name} at ${url}`);
      return false;
    }
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    bufferSetter(audioBuffer);
    console.log(`Successfully loaded ${name}`);
    return true;
  } catch (error) {
    console.error(`Error loading ${name} at ${url}:`, error);
    return false;
  }
};

// Walking Sound
export const loadWalkingSound = async (url) => {
  return loadAudio(url, (buffer) => (walkingSound = buffer), "walking sound");
};

export const playWalkingSound = () => {
  if (!audioContext || !walkingSound) {
    console.warn("Cannot play walking sound: not loaded or no AudioContext");
    return;
  }
  if (currentSound) {
    currentSound.stop();
  }
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = walkingSound;
  soundSource.loop = true;
  soundSource.connect(audioContext.destination);
  soundSource.start();
  currentSound = soundSource;
  return soundSource;
};

export const stopWalkingSound = () => {
  if (currentSound) {
    currentSound.stop();
    currentSound = null;
  }
};

// Bank Music
export const loadBankMusic = async (url) => {
  return loadAudio(url, (buffer) => (bankMusic = buffer), "bank music");
};

export const playBankMusic = () => {
  if (!audioContext || !bankMusic) {
    console.warn("Cannot play bank music: not loaded or no AudioContext");
    return;
  }
  if (bankMusicSource) {
    bankMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = bankMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  bankMusicSource = musicSource;
  return musicSource;
};

export const stopBankMusic = () => {
  if (bankMusicSource) {
    bankMusicSource.stop();
    bankMusicSource = null;
  }
};

// Employment Music
export const loadEmploymentMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (employmentMusic = buffer),
    "employment music"
  );
};

export const playEmploymentMusic = () => {
  if (!audioContext || !employmentMusic) {
    console.warn("Cannot play employment music: not loaded or no AudioContext");
    return;
  }
  if (employmentMusicSource) {
    employmentMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = employmentMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  employmentMusicSource = musicSource;
  return musicSource;
};

export const stopEmploymentMusic = () => {
  if (employmentMusicSource) {
    employmentMusicSource.stop();
    employmentMusicSource = null;
  }
};

// Mall Music
export const loadMallMusic = async (url) => {
  return loadAudio(url, (buffer) => (mallMusic = buffer), "mall music");
};

export const playMallMusic = () => {
  if (!audioContext || !mallMusic) {
    console.warn("Cannot play mall music: not loaded or no AudioContext");
    return;
  }
  if (mallMusicSource) {
    mallMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = mallMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  mallMusicSource = musicSource;
  return musicSource;
};

export const stopMallMusic = () => {
  if (mallMusicSource) {
    mallMusicSource.stop();
    mallMusicSource = null;
  }
};

// Leisure Music
export const loadLeisureMusic = async (url) => {
  return loadAudio(url, (buffer) => (leisureMusic = buffer), "leisure music");
};

export const playLeisureMusic = () => {
  if (!audioContext || !leisureMusic) {
    console.warn("Cannot play leisure music: not loaded or no AudioContext");
    return;
  }
  if (leisureMusicSource) {
    leisureMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = leisureMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  leisureMusicSource = musicSource;
  return musicSource;
};

export const stopLeisureMusic = () => {
  if (leisureMusicSource) {
    leisureMusicSource.stop();
    leisureMusicSource = null;
  }
};

// Work Music
export const loadWorkMusic = async (url) => {
  return loadAudio(url, (buffer) => (workMusic = buffer), "work music");
};

export const playWorkMusic = () => {
  if (!audioContext || !workMusic) {
    console.warn("Cannot play work music: not loaded or no AudioContext");
    return;
  }
  if (workMusicSource) {
    workMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = workMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  workMusicSource = musicSource;
  return musicSource;
};

export const stopWorkMusic = () => {
  if (workMusicSource) {
    workMusicSource.stop();
    workMusicSource = null;
  }
};

// University Music
export const loadUniversityMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (universityMusic = buffer),
    "university music"
  );
};

export const playUniversityMusic = () => {
  if (!audioContext || !universityMusic) {
    console.warn("Cannot play university music: not loaded or no AudioContext");
    return;
  }
  if (universityMusicSource) {
    universityMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = universityMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  universityMusicSource = musicSource;
  return musicSource;
};

export const stopUniversityMusic = () => {
  if (universityMusicSource) {
    universityMusicSource.stop();
    universityMusicSource = null;
  }
};

// Home Music
export const loadHomeMusic = async (url) => {
  return loadAudio(url, (buffer) => (homeMusic = buffer), "home music");
};

export const playHomeMusic = () => {
  if (!audioContext || !homeMusic) {
    console.warn("Cannot play home music: not loaded or no AudioContext");
    return;
  }
  if (homeMusicSource) {
    homeMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = homeMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  homeMusicSource = musicSource;
  return musicSource;
};

export const stopHomeMusic = () => {
  if (homeMusicSource) {
    homeMusicSource.stop();
    homeMusicSource = null;
  }
};

// Fast Food Music
export const loadFastFoodMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (fastFoodMusic = buffer),
    "fast food music"
  );
};

export const playFastFoodMusic = () => {
  if (!audioContext || !fastFoodMusic) {
    console.warn("Cannot play fast food music: not loaded or no AudioContext");
    return;
  }
  if (fastFoodMusicSource) {
    fastFoodMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = fastFoodMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  fastFoodMusicSource = musicSource;
  return musicSource;
};

export const stopFastFoodMusic = () => {
  if (fastFoodMusicSource) {
    fastFoodMusicSource.stop();
    fastFoodMusicSource = null;
  }
};

// Dating Office Music
export const loadDatingOfficeMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (datingOfficeMusic = buffer),
    "dating office music"
  );
};

export const playDatingOfficeMusic = () => {
  if (!audioContext || !datingOfficeMusic) {
    console.warn(
      "Cannot play dating office music: not loaded or no AudioContext"
    );
    return;
  }
  if (datingOfficeMusicSource) {
    datingOfficeMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = datingOfficeMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  datingOfficeMusicSource = musicSource;
  return musicSource;
};

export const stopDatingOfficeMusic = () => {
  if (datingOfficeMusicSource) {
    datingOfficeMusicSource.stop();
    datingOfficeMusicSource = null;
  }
};

// NextJsHotel Music
export const loadNextJsHotelMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (nextJsHotelMusic = buffer),
    "NextJs hotel music"
  );
};

export const playNextJsHotelMusic = () => {
  if (!audioContext || !nextJsHotelMusic) {
    console.warn(
      "Cannot play NextJs hotel music: not loaded or no AudioContext"
    );
    return;
  }
  if (nextJsHotelMusicSource) {
    nextJsHotelMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = nextJsHotelMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  nextJsHotelMusicSource = musicSource;
  return musicSource;
};

export const stopNextJsHotelMusic = () => {
  if (nextJsHotelMusicSource) {
    nextJsHotelMusicSource.stop();
    nextJsHotelMusicSource = null;
  }
};

// Click Sound
export const loadClickSound = async (url) => {
  return loadAudio(url, (buffer) => (clickSound = buffer), "click sound");
};

export const playClickSound = () => {
  if (!audioContext || !clickSound) {
    console.warn("Cannot play click sound: not loaded or no AudioContext");
    return;
  }
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = clickSound;
  soundSource.connect(audioContext.destination);
  soundSource.start();
};

// ExpressHotel Music
export const loadExpressHotelMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (expressHotelMusic = buffer),
    "Express hotel music"
  );
};

export const playExpressHotelMusic = () => {
  if (!audioContext || !expressHotelMusic) {
    console.warn(
      "Cannot play Express hotel music: not loaded or no AudioContext"
    );
    return;
  }
  if (expressHotelMusicSource) {
    expressHotelMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = expressHotelMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  expressHotelMusicSource = musicSource;
  return musicSource;
};

export const stopExpressHotelMusic = () => {
  if (expressHotelMusicSource) {
    expressHotelMusicSource.stop();
    expressHotelMusicSource = null;
  }
};

// CssHotel Music
export const loadCssHotelMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (cssHotelMusic = buffer),
    "CSS hotel music"
  );
};

export const playCssHotelMusic = () => {
  if (!audioContext || !cssHotelMusic) {
    console.warn("Cannot play CSS hotel music: not loaded or no AudioContext");
    return;
  }
  if (cssHotelMusicSource) {
    cssHotelMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = cssHotelMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  cssHotelMusicSource = musicSource;
  return musicSource;
};

export const stopCssHotelMusic = () => {
  if (cssHotelMusicSource) {
    cssHotelMusicSource.stop();
    cssHotelMusicSource = null;
  }
};

// Python Hotel Music
export const loadPythonHotelMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (pythonHotelMusic = buffer),
    "Python hotel music"
  );
};

export const playPythonHotelMusic = () => {
  if (!audioContext || !pythonHotelMusic) {
    console.warn(
      "Cannot play Python hotel music: not loaded or no AudioContext"
    );
    return;
  }
  if (pythonHotelMusicSource) {
    pythonHotelMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = pythonHotelMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  pythonHotelMusicSource = musicSource;
  return musicSource;
};

export const stopPythonHotelMusic = () => {
  if (pythonHotelMusicSource) {
    pythonHotelMusicSource.stop();
    pythonHotelMusicSource = null;
  }
};

// Gaming Hotel Music
export const loadGamingHotelMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (gamingHotelMusic = buffer),
    "Gaming hotel music"
  );
};

export const playGamingHotelMusic = () => {
  if (!audioContext || !gamingHotelMusic) {
    console.warn(
      "Cannot play Gaming hotel music: not loaded or no AudioContext"
    );
    return;
  }
  if (gamingHotelMusicSource) {
    gamingHotelMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = gamingHotelMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  gamingHotelMusicSource = musicSource;
  return musicSource;
};

export const stopGamingHotelMusic = () => {
  if (gamingHotelMusicSource) {
    gamingHotelMusicSource.stop();
    gamingHotelMusicSource = null;
  }
};

// React University Music
export const loadReactUniversityMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (reactUniversityMusic = buffer),
    "React University music"
  );
};

export const playReactUniversityMusic = () => {
  if (!audioContext || !reactUniversityMusic) {
    console.warn(
      "Cannot play React University music: not loaded or no AudioContext"
    );
    return;
  }
  if (reactUniversityMusicSource) {
    reactUniversityMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = reactUniversityMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  reactUniversityMusicSource = musicSource;
  return musicSource;
};

export const stopReactUniversityMusic = () => {
  if (reactUniversityMusicSource) {
    reactUniversityMusicSource.stop();
    reactUniversityMusicSource = null;
  }
};

// TypeScript Holiday Resort Music
export const loadTypeScriptHolidayResortMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (typeScriptHolidayResortMusic = buffer),
    "TypeScript Holiday Resort music"
  );
};

export const playTypeScriptHolidayResortMusic = () => {
  if (!audioContext || !typeScriptHolidayResortMusic) {
    console.warn(
      "Cannot play TypeScript Holiday Resort music: not loaded or no AudioContext"
    );
    return;
  }
  if (typeScriptHolidayResortMusicSource) {
    typeScriptHolidayResortMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = typeScriptHolidayResortMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  typeScriptHolidayResortMusicSource = musicSource;
  return musicSource;
};

export const stopTypeScriptHolidayResortMusic = () => {
  if (typeScriptHolidayResortMusicSource) {
    typeScriptHolidayResortMusicSource.stop();
    typeScriptHolidayResortMusicSource = null;
  }
};

// C# Hotel Music
export const loadCSharpHotelMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (cSharpHotelMusic = buffer),
    "C# Hotel music"
  );
};

export const playCSharpHotelMusic = () => {
  if (!audioContext || !cSharpHotelMusic) {
    console.warn("Cannot play C# Hotel music: not loaded or no AudioContext");
    return;
  }
  if (cSharpHotelMusicSource) {
    cSharpHotelMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = cSharpHotelMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  cSharpHotelMusicSource = musicSource;
  return musicSource;
};

export const stopCSharpHotelMusic = () => {
  if (cSharpHotelMusicSource) {
    cSharpHotelMusicSource.stop();
    cSharpHotelMusicSource = null;
  }
};

// React Native Music
export const loadReactNativeMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (reactNativeMusic = buffer),
    "React Native music"
  );
};

export const playReactNativeMusic = () => {
  if (!audioContext || !reactNativeMusic) {
    console.warn(
      "Cannot play React Native music: not loaded or no AudioContext"
    );
    return;
  }
  if (reactNativeMusicSource) {
    reactNativeMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = reactNativeMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  reactNativeMusicSource = musicSource;
  return musicSource;
};

export const stopReactNativeMusic = () => {
  if (reactNativeMusicSource) {
    reactNativeMusicSource.stop();
    reactNativeMusicSource = null;
  }
};

// Java Resort Music
export const loadJavaResortMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (javaResortMusic = buffer),
    "Java Resort music"
  );
};

export const playJavaResortMusic = () => {
  if (!audioContext || !javaResortMusic) {
    console.warn(
      "Cannot play Java Resort music: not loaded or no AudioContext"
    );
    return;
  }
  if (javaResortMusicSource) {
    javaResortMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = javaResortMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  javaResortMusicSource = musicSource;
  return musicSource;
};

export const stopJavaResortMusic = () => {
  if (javaResortMusicSource) {
    javaResortMusicSource.stop();
    javaResortMusicSource = null;
  }
};

// JavaScript Hotel Music
export const loadJavaScriptHotelMusic = async (url) => {
  return loadAudio(
    url,
    (buffer) => (javaScriptHotelMusic = buffer),
    "JavaScript Hotel music"
  );
};

export const playJavaScriptHotelMusic = () => {
  if (!audioContext || !javaScriptHotelMusic) {
    console.warn(
      "Cannot play JavaScript Hotel music: not loaded or no AudioContext"
    );
    return;
  }
  if (javaScriptHotelMusicSource) {
    javaScriptHotelMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = javaScriptHotelMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  javaScriptHotelMusicSource = musicSource;
  return musicSource;
};

export const stopJavaScriptHotelMusic = () => {
  if (javaScriptHotelMusicSource) {
    javaScriptHotelMusicSource.stop();
    javaScriptHotelMusicSource = null;
  }
};

// Healing Music
export const loadHealingMusic = async (url) => {
  return loadAudio(url, (buffer) => (healingMusic = buffer), "healing music");
};

export const playHealingMusic = () => {
  if (!audioContext || !healingMusic) {
    console.warn("Cannot play healing music: not loaded or no AudioContext");
    return;
  }
  if (healingMusicSource) {
    healingMusicSource.stop();
  }
  const musicSource = audioContext.createBufferSource();
  musicSource.buffer = healingMusic;
  musicSource.loop = true;
  musicSource.connect(audioContext.destination);
  musicSource.start();
  healingMusicSource = musicSource;
  return musicSource;
};

export const stopHealingMusic = () => {
  if (healingMusicSource) {
    healingMusicSource.stop();
    healingMusicSource = null;
  }
};

// Stop All Music
export const stopAllMusic = () => {
  stopWalkingSound();
  stopBankMusic();
  stopEmploymentMusic();
  stopMallMusic();
  stopLeisureMusic();
  stopWorkMusic();
  stopUniversityMusic();
  stopHomeMusic();
  stopFastFoodMusic();
  stopDatingOfficeMusic();
  stopNextJsHotelMusic();
  stopExpressHotelMusic();
  stopCssHotelMusic();
  stopPythonHotelMusic();
  stopGamingHotelMusic();
  stopReactUniversityMusic();
  stopTypeScriptHolidayResortMusic();
  stopCSharpHotelMusic();
  stopReactNativeMusic();
  stopJavaResortMusic();
  stopJavaScriptHotelMusic();
  stopHealingMusic();
};
