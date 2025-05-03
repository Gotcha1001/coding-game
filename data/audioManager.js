// WALKING SOUND ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let audioContext = null;
let walkingSound = null;

export const initAudio = () => {
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return true;
  } catch (error) {
    console.error("Web Audio API not supported:", error);
    return false;
  }
};

export const loadWalkingSound = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    walkingSound = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading audio:", error);
    return false;
  }
};

let currentSound = null;

export const playWalkingSound = () => {
  if (!audioContext || !walkingSound) return;

  // Stop previous sound if playing
  if (currentSound) {
    currentSound.stop();
  }

  // Create new source
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

//BANK MUSIC ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let bankMusic = null;
let bankMusicSource = null;

export const loadBankMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    bankMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading bank music:", error);
    return false;
  }
};

export const playBankMusic = () => {
  if (!audioContext || !bankMusic) return;

  // Stop previous music if playing
  if (bankMusicSource) {
    bankMusicSource.stop();
  }

  // Create new source
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

// EMPLOYMENT MUSIC +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// data/audioManager.js
// Add these new functions to the existing file:

let employmentMusic = null;
let employmentMusicSource = null;

export const loadEmploymentMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    employmentMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading employment office music:", error);
    return false;
  }
};

export const playEmploymentMusic = () => {
  if (!audioContext || !employmentMusic) return;

  // Stop previous music if playing
  if (employmentMusicSource) {
    employmentMusicSource.stop();
  }

  // Create new source
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

// Mall Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let mallMusic = null;
let mallMusicSource = null;

export const loadMallMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    mallMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading mall music:", error);
    return false;
  }
};

export const playMallMusic = () => {
  if (!audioContext || !mallMusic) return;

  // Stop previous music if playing
  if (mallMusicSource) {
    mallMusicSource.stop();
  }

  // Create new source
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

//LEISURE MUSIC
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let leisureMusic = null;
let leisureMusicSource = null;

export const loadLeisureMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    leisureMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading leisure music:", error);
    return false;
  }
};

export const playLeisureMusic = () => {
  if (!audioContext || !leisureMusic) return;

  // Stop previous music if playing
  if (leisureMusicSource) {
    leisureMusicSource.stop();
  }

  // Create new source
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

// Add this to your audioManager.js file below the bankMusic section
//WORK MUSIC
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let workMusic = null;
let workMusicSource = null;

export const loadWorkMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    workMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading work music:", error);
    return false;
  }
};

export const playWorkMusic = () => {
  if (!audioContext || !workMusic) return;

  // Stop previous music if playing
  if (workMusicSource) {
    workMusicSource.stop();
  }

  // Create new source
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

// UNIVERSITY MUSIC
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let universityMusic = null;
let universityMusicSource = null;

export const loadUniversityMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    universityMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading university music:", error);
    return false;
  }
};

export const playUniversityMusic = () => {
  if (!audioContext || !universityMusic) return;

  // Stop previous music if playing
  if (universityMusicSource) {
    universityMusicSource.stop();
  }

  // Create new source
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

// HOME MUSIC
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let homeMusic = null;
let homeMusicSource = null;

export const loadHomeMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    homeMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading home music:", error);
    return false;
  }
};

export const playHomeMusic = () => {
  if (!audioContext || !homeMusic) return;

  // Stop previous music if playing
  if (homeMusicSource) {
    homeMusicSource.stop();
  }

  // Create new source
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

// FAST FOOD MUSIC
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let fastFoodMusic = null;
let fastFoodMusicSource = null;

export const loadFastFoodMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    fastFoodMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading fast food music:", error);
    return false;
  }
};

export const playFastFoodMusic = () => {
  if (!audioContext || !fastFoodMusic) return;

  // Stop previous music if playing
  if (fastFoodMusicSource) {
    fastFoodMusicSource.stop();
  }

  // Create new source
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

// DATING OFFICE MUSIC
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let datingOfficeMusic = null;
let datingOfficeMusicSource = null;

export const loadDatingOfficeMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }

  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    datingOfficeMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading dating office music:", error);
    return false;
  }
};

export const playDatingOfficeMusic = () => {
  if (!audioContext || !datingOfficeMusic) return;

  // Stop previous music if playing
  if (datingOfficeMusicSource) {
    datingOfficeMusicSource.stop();
  }

  // Create new source
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

// NextJsHotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let nextJsHotelMusic = null;
let nextJsHotelMusicSource = null;

export const loadNextJsHotelMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    nextJsHotelMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading NextJsHotel music:", error);
    return false;
  }
};

export const playNextJsHotelMusic = () => {
  if (!audioContext || !nextJsHotelMusic) return;
  // Stop previous music if playing
  if (nextJsHotelMusicSource) {
    nextJsHotelMusicSource.stop();
  }
  // Create new source
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

// audioManager.jsx

// audioManager.jsx
let clickSound = null;

export const loadClickSound = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return false;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    clickSound = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading click sound:", error);
    return false;
  }
};

export const playClickSound = () => {
  if (!audioContext || !clickSound) return;
  const soundSource = audioContext.createBufferSource();
  soundSource.buffer = clickSound;
  soundSource.connect(audioContext.destination);
  soundSource.start();
};

// ExpressHotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let expressHotelMusic = null;
let expressHotelMusicSource = null;

export const loadExpressHotelMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    expressHotelMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading ExpressHotel music:", error);
    return false;
  }
};

export const playExpressHotelMusic = () => {
  if (!audioContext || !expressHotelMusic) return;
  // Stop previous music if playing
  if (expressHotelMusicSource) {
    expressHotelMusicSource.stop();
  }
  // Create new source
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

// CssHotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let cssHotelMusic = null;
let cssHotelMusicSource = null;

export const loadCssHotelMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    cssHotelMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading CssHotel music:", error);
    return false;
  }
};

export const playCssHotelMusic = () => {
  if (!audioContext || !cssHotelMusic) return;
  // Stop previous music if playing
  if (cssHotelMusicSource) {
    cssHotelMusicSource.stop();
  }
  // Create new source
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

// Python Hotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let pythonHotelMusic = null;
let pythonHotelMusicSource = null;

export const loadPythonHotelMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    pythonHotelMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading Python Hotel music:", error);
    return false;
  }
};

export const playPythonHotelMusic = () => {
  if (!audioContext || !pythonHotelMusic) return;
  // Stop previous music if playing
  if (pythonHotelMusicSource) {
    pythonHotelMusicSource.stop();
  }
  // Create new source
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

// Gaming Hotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let gamingHotelMusic = null;
let gamingHotelMusicSource = null;

export const loadGamingHotelMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    gamingHotelMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading Gaming Hotel music:", error);
    return false;
  }
};

export const playGamingHotelMusic = () => {
  if (!audioContext || !gamingHotelMusic) return;
  // Stop previous music if playing
  if (gamingHotelMusicSource) {
    gamingHotelMusicSource.stop();
  }
  // Create new source
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

// React University Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let reactUniversityMusic = null;
let reactUniversityMusicSource = null;

export const loadReactUniversityMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    reactUniversityMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading React University music:", error);
    return false;
  }
};

export const playReactUniversityMusic = () => {
  if (!audioContext || !reactUniversityMusic) return;
  // Stop previous music if playing
  if (reactUniversityMusicSource) {
    reactUniversityMusicSource.stop();
  }
  // Create new source
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

// TypeScript Holiday Resort Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let typeScriptHolidayResortMusic = null;
let typeScriptHolidayResortMusicSource = null;

export const loadTypeScriptHolidayResortMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    typeScriptHolidayResortMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading TypeScript Holiday Resort music:", error);
    return false;
  }
};

export const playTypeScriptHolidayResortMusic = () => {
  if (!audioContext || !typeScriptHolidayResortMusic) return;
  // Stop previous music if playing
  if (typeScriptHolidayResortMusicSource) {
    typeScriptHolidayResortMusicSource.stop();
  }
  // Create new source
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

// C# Hotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let cSharpHotelMusic = null;
let cSharpHotelMusicSource = null;

export const loadCSharpHotelMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    cSharpHotelMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading C# Hotel music:", error);
    return false;
  }
};

export const playCSharpHotelMusic = () => {
  if (!audioContext || !cSharpHotelMusic) return;
  // Stop previous music if playing
  if (cSharpHotelMusicSource) {
    cSharpHotelMusicSource.stop();
  }
  // Create new source
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

// ReactNative Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let reactNativeMusic = null;
let reactNativeMusicSource = null;

export const loadReactNativeMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    reactNativeMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading React Native music:", error);
    return false;
  }
};

export const playReactNativeMusic = () => {
  if (!audioContext || !reactNativeMusic) return;
  // Stop previous music if playing
  if (reactNativeMusicSource) {
    reactNativeMusicSource.stop();
  }
  // Create new source
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

// JavaResort Music Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let javaResortMusic = null;
let javaResortMusicSource = null;

export const loadJavaResortMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    javaResortMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading Java Resort music:", error);
    return false;
  }
};

export const playJavaResortMusic = () => {
  if (!audioContext || !javaResortMusic) return;
  // Stop previous music if playing
  if (javaResortMusicSource) {
    javaResortMusicSource.stop();
  }
  // Create new source
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

// JavascriptHotel Music ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let javaScriptHotelMusic = null;
let javaScriptHotelMusicSource = null;

export const loadJavaScriptHotelMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    javaScriptHotelMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading JavaScript Hotel music:", error);
    return false;
  }
};

export const playJavaScriptHotelMusic = () => {
  if (!audioContext || !javaScriptHotelMusic) return;
  // Stop previous music if playing
  if (javaScriptHotelMusicSource) {
    javaScriptHotelMusicSource.stop();
  }
  // Create new source
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

// All locations music before entering

let healingMusic = null;
let healingMusicSource = null;

export const loadHealingMusic = async (url) => {
  if (!audioContext) {
    if (!initAudio()) return;
  }
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    healingMusic = audioBuffer;
    return true;
  } catch (error) {
    console.error("Error loading healing music:", error);
    return false;
  }
};

export const playHealingMusic = () => {
  if (!audioContext || !healingMusic) return;
  // Stop previous music if playing
  if (healingMusicSource) {
    healingMusicSource.stop();
  }
  // Create new source
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
