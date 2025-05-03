

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { useGame } from "@/app/context/GameContext";
// import { hooksData } from "@/data/hooksData";
// import { motion } from "framer-motion";
// import ProfessorHeader from "./ProfessorHeader";
// import QuizFeedbackDialog from "./QuizFeedbackDialog";
// import {
//     initAudio,
//     loadClickSound,
//     playClickSound,
//     loadReactUniversityMusic,
//     playReactUniversityMusic,
//     stopReactUniversityMusic,
// } from "@/data/audioManager";

// const FlashCard = ({ frontContent, backContent, isFlipped, onClick }) => {
//     return (
//         <div
//             className="relative w-full h-[500px] cursor-pointer perspective-1000"
//             onClick={onClick}
//         >
//             <motion.div
//                 className="w-full h-full relative preserve-3d transition-all duration-500"
//                 animate={{ rotateY: isFlipped ? 180 : 0 }}
//                 transition={{ duration: 0.6 }}
//             >
//                 <div className="absolute w-full h-full backface-hidden bg-indigo-600 p-6 rounded-lg shadow-lg overflow-auto">
//                     <div className="text-white">{frontContent}</div>
//                 </div>
//                 <div className="absolute w-full h-full backface-hidden bg-purple-700 p-6 rounded-lg shadow-lg rotate-y-180 overflow-auto">
//                     <div className="text-white">{backContent}</div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default function University() {
//     const { state, dispatch } = useGame();
//     const { player } = state;
//     const [selectedHook, setSelectedHook] = useState(null);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [showQuiz, setShowQuiz] = useState(false);
//     const [quizAnswers, setQuizAnswers] = useState([]);
//     const [quizSubmitted, setQuizSubmitted] = useState(false);
//     const [quizScore, setQuizScore] = useState(0);
//     const [isCardFlipped, setIsCardFlipped] = useState(false);
//     const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
//     const pageRef = useRef(null);

//     // Add sound effect for clicks
//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     // Add music playback
//     useEffect(() => {
//         initAudio();
//         loadClickSound("/sounds/click.mp3").then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//         loadReactUniversityMusic("/sounds/healing.mp3").then(() => {
//             playReactUniversityMusic();
//         });
//         return () => {
//             stopReactUniversityMusic();
//         };
//     }, []);

//     const handleHookSelect = (hookName) => {
//         if (player.hooksMastered[hookName] >= 1) {
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: `${hooksData[hookName].title} already mastered!` },
//             });
//             return;
//         }
//         setSelectedHook(hookName);
//         setCurrentPage(0);
//         setShowQuiz(false);
//         setQuizAnswers([]);
//         setQuizSubmitted(false);
//         setIsCardFlipped(false);
//         setShowFeedbackDialog(false);
//         dispatch({
//             type: "SET_MESSAGE",
//             payload: { text: `Started studying ${hooksData[hookName].title}!` },
//         });
//     };

//     const handleNextPage = () => {
//         if (currentPage < hooksData[selectedHook].pages.length - 1) {
//             if (pageRef.current) {
//                 pageRef.current.classList.add("page-flip");
//                 setTimeout(() => {
//                     setCurrentPage(currentPage + 1);
//                     pageRef.current.classList.remove("page-flip");
//                     dispatch({
//                         type: "SET_MESSAGE",
//                         payload: { text: `Studied page ${currentPage + 2} of ${hooksData[selectedHook].title}.` },
//                     });
//                 }, 500);
//             } else {
//                 setCurrentPage(currentPage + 1);
//             }
//         } else {
//             setShowQuiz(true);
//             setQuizAnswers(new Array(hooksData[selectedHook].quiz.length).fill(null));
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: `Completed study for ${hooksData[selectedHook].title}. Time for the quiz!` },
//             });
//         }
//     };

//     const handlePrevPage = () => {
//         if (currentPage > 0) {
//             if (pageRef.current) {
//                 pageRef.current.classList.add("page-flip-reverse");
//                 setTimeout(() => {
//                     setCurrentPage(currentPage - 1);
//                     pageRef.current.classList.remove("page-flip-reverse");
//                 }, 500);
//             } else {
//                 setCurrentPage(currentPage - 1);
//             }
//         }
//     };

//     const handleAnswerSelect = (questionIndex, answerIndex) => {
//         const newAnswers = [...quizAnswers];
//         newAnswers[questionIndex] = answerIndex;
//         setQuizAnswers(newAnswers);
//     };

//     const handleSubmitQuiz = () => {
//         let score = 0;
//         const quizQuestions = hooksData[selectedHook].quiz;
//         const incorrectAnswers = [];

//         quizAnswers.forEach((answer, index) => {
//             if (answer === quizQuestions[index].answer) {
//                 score++;
//             } else {
//                 incorrectAnswers.push({
//                     question: quizQuestions[index].question,
//                     playerAnswer: quizQuestions[index].options[answer] || "No answer selected",
//                     correctAnswer: quizQuestions[index].options[quizQuestions[index].answer],
//                 });
//             }
//         });

//         const totalPoints = Math.round((score / quizQuestions.length) * 10);
//         setQuizScore(totalPoints);
//         setQuizSubmitted(true);
//         setShowFeedbackDialog(true);

//         const cashReward = score === quizQuestions.length ? 50 : score > 0 ? score * 15 : -20;
//         const isPerfectScore = score === quizQuestions.length;

//         dispatch({
//             type: "COMPLETE_QUIZ",
//             payload: {
//                 hook: selectedHook,
//                 pointsEarned: totalPoints,
//                 cashChange: cashReward,
//                 energySpent: 15,
//                 masteryEarned: isPerfectScore,
//             },
//         });

//         dispatch({
//             type: "SET_QUIZ_FEEDBACK",
//             payload: {
//                 score,
//                 totalQuestions: quizQuestions.length,
//                 incorrectAnswers,
//                 mastered: isPerfectScore,
//             },
//         });

//         dispatch({
//             type: "SET_MESSAGE",
//             payload: {
//                 text: isPerfectScore
//                     ? `Mastered ${hooksData[selectedHook].title} with a perfect score! Earned $50!`
//                     : `Scored ${score}/${quizQuestions.length} on ${hooksData[selectedHook].title} quiz. ${score > 0 ? `Earned $${cashReward} cash!` : "Lost $20."
//                     }`,
//             },
//         });
//     };

//     const exitUniversity = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "location" } });
//         dispatch({
//             type: "SET_MESSAGE",
//             payload: { text: "Left React University." },
//         });
//     };

//     if (!selectedHook) {
//         return (
//             <div className="min-h-screen mx-auto p-6 bg-gradient-to-b from-indigo-500 via-purple-900 to-black rounded-lg shadow-lg">
//                 <div className="text-center mb-6">
//                     <ProfessorHeader />
//                     <h2 className="text-3xl font-bold text-white">React University</h2>
//                     <button
//                         onClick={withSound(exitUniversity)}
//                         className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-indigo-800 rounded-lg font-bold"
//                     >
//                         Exit University
//                     </button>
//                 </div>
//                 <p className="text-center mb-8 text-white">Select a React hook to study:</p>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {Object.keys(hooksData).map((hook, index) => (
//                         <motion.div
//                             key={hook}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                         >
//                             <button
//                                 onClick={withSound(() => handleHookSelect(hook))}
//                                 className={`w-full p-4 rounded-lg text-center transition text-white ${player.hooksMastered[hook] >= 1
//                                     ? "bg-gray-500 cursor-not-allowed"
//                                     : "bg-indigo-500 hover:bg-purple-900"
//                                     }`}
//                                 disabled={player.hooksMastered[hook] >= 1}
//                             >
//                                 <h3 className="text-xl font-bold mb-2">{hooksData[hook].title}</h3>
//                                 <p className="text-sm">{hooksData[hook].description}</p>
//                                 {player.hooksMastered[hook] >= 1 && (
//                                     <p className="text-xs text-green-300 mt-2">✓ Mastered</p>
//                                 )}
//                             </button>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }

//     const hookContent = hooksData[selectedHook];

//     if (showQuiz) {
//         return (
//             <div className="w-full min-h-screen p-6 bg-gradient-to-r from-indigo-600 via-purple-800 to-black rounded-lg shadow-lg">
//                 <ProfessorHeader />
//                 <h2 className="text-3xl font-bold mb-6 text-white">{hookContent.title} Quiz</h2>
//                 {quizSubmitted && (
//                     <QuizFeedbackDialog
//                         open={showFeedbackDialog}
//                         onOpenChange={setShowFeedbackDialog}
//                         feedback={state.quizFeedback}
//                         onClose={() => {
//                             setShowFeedbackDialog(false);
//                             setSelectedHook(null);
//                         }}
//                     />
//                 )}
//                 {!showFeedbackDialog && (
//                     <>
//                         <div className="space-y-8">
//                             {hookContent.quiz.map((q, qIndex) => (
//                                 <motion.div
//                                     key={qIndex}
//                                     className="p-4 bg-white rounded-lg text-black"
//                                     initial={{ opacity: 0, x: -20 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ duration: 0.3, delay: qIndex * 0.1 }}
//                                 >
//                                     <h4 className="font-bold mb-3">Question {qIndex + 1}: {q.question}</h4>
//                                     <div className="space-y-2">
//                                         {q.options.map((option, oIndex) => (
//                                             <motion.div
//                                                 key={oIndex}
//                                                 whileHover={{ scale: 1.02 }}
//                                                 className={`p-3 border rounded-lg cursor-pointer ${quizAnswers[qIndex] === oIndex
//                                                     ? "bg-yellow-400 border-yellow-400 text-black"
//                                                     : "border-gray-300 hover:bg-yellow-100"
//                                                     }`}
//                                                 onClick={withSound(() => handleAnswerSelect(qIndex, oIndex))}
//                                             >
//                                                 {option}
//                                             </motion.div>
//                                         ))}
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                         <div className="mt-6 flex justify-between">
//                             <button
//                                 onClick={withSound(() => setShowQuiz(false))}
//                                 className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
//                             >
//                                 Back to Study
//                             </button>
//                             <button
//                                 onClick={withSound(handleSubmitQuiz)}
//                                 disabled={quizAnswers.includes(null)}
//                                 className={`px-4 py-2 rounded-lg ${quizAnswers.includes(null)
//                                     ? "bg-gray-300 cursor-not-allowed"
//                                     : "bg-green-500 hover:bg-green-600 text-white"
//                                     }`}
//                             >
//                                 Submit Quiz
//                             </button>
//                         </div>
//                     </>
//                 )}
//             </div>
//         );
//     }

//     const pageContent = hookContent.pages[currentPage].content;
//     const explanationContent = pageContent
//         .split("\n")
//         .filter((line) => !line.includes("```"))
//         .filter((line) => line.trim())
//         .join("\n");

//     const codeExamples = pageContent
//         .split("```jsx")
//         .filter((_, i) => i > 0)
//         .map((block) => block.split("```")[0])
//         .join("\n");

//     return (
//         <div className="min-h-screen mx-auto p-6 bg-gradient-to-r from-indigo-500 via-purple-900 to-black rounded-lg shadow-lg">
//             <ProfessorHeader />
//             <h2 className="text-3xl font-bold mb-6 text-white">{hookContent.title}</h2>
//             <div ref={pageRef} className="transition-all duration-500">
//                 <FlashCard
//                     frontContent={
//                         <div>
//                             <h3 className="text-xl font-bold mb-4">{hookContent.pages[currentPage].title}</h3>
//                             <p className="text-sm mb-4">Click to see code examples</p>
//                             <div className="prose max-w-none">
//                                 {explanationContent.split("\n").map((line, i) => (
//                                     <p key={i}>{line}</p>
//                                 ))}
//                             </div>
//                         </div>
//                     }
//                     backContent={
//                         <div>
//                             <h3 className="text-xl font-bold mb-4">Code Examples</h3>
//                             <p className="text-sm mb-4">Click to return to explanation</p>
//                             <pre className="bg-gray-800 p-4 rounded-lg text-green-400 overflow-auto text-sm">
//                                 {codeExamples}
//                             </pre>
//                         </div>
//                     }
//                     isFlipped={isCardFlipped}
//                     onClick={withSound(() => setIsCardFlipped(!isCardFlipped))}
//                 />
//             </div>
//             <div className="mt-6 flex justify-between">
//                 <button
//                     onClick={withSound(currentPage > 0 ? handlePrevPage : () => setSelectedHook(null))}
//                     className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
//                 >
//                     {currentPage > 0 ? "Previous Page" : "Back to Hooks"}
//                 </button>
//                 <button
//                     onClick={withSound(handleNextPage)}
//                     className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
//                 >
//                     {currentPage < hookContent.pages.length - 1 ? "Next Page" : "Take Quiz"}
//                 </button>
//             </div>
//             <style jsx global>{`
//         ::-webkit-scrollbar {
//           width: 8px;
//           height: 8px;
//         }
//         ::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 4px;
//         }
//         ::-webkit-scrollbar-thumb {
//           background: #888;
//           border-radius: 4px;
//         }
//         ::-webkit-scrollbar-thumb:hover {
//           background: #555;
//         }
//         .stat {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           background: rgba(255, 255, 255, 0.2);
//           padding: 4px 12px;
//           border-radius: 8px;
//         }
//         .stat-label {
//           font-size: 12px;
//           opacity: 0.8;
//         }
//         .stat-value {
//           font-weight: bold;
//           font-size: 16px;
//         }
//       `}</style>
//         </div>
//     );
// }


// "use client";

// import { useState, useRef, useEffect } from "react";
// import { useGame } from "@/app/context/GameContext";
// import { hooksData } from "@/data/hooksData";
// import { motion } from "framer-motion";
// import ProfessorHeader from "./ProfessorHeader";
// import QuizFeedbackDialog from "./QuizFeedbackDialog";
// import {
//     initAudio,
//     loadClickSound,
//     playClickSound,
//     loadReactUniversityMusic,
//     playReactUniversityMusic,
//     stopReactUniversityMusic,
// } from "@/data/audioManager";

// const FlashCard = ({ frontContent, backContent, isFlipped, onClick }) => {
//     return (
//         <div
//             className="relative w-full h-[500px] cursor-pointer perspective-1000"
//             onClick={onClick}
//         >
//             <motion.div
//                 className="w-full h-full relative preserve-3d transition-all duration-500"
//                 animate={{ rotateY: isFlipped ? 180 : 0 }}
//                 transition={{ duration: 0.6 }}
//             >
//                 <div className="absolute w-full h-full backface-hidden bg-indigo-600 bg-opacity-90 p-6 rounded-lg shadow-lg overflow-auto">
//                     <div className="text-white">{frontContent}</div>
//                 </div>
//                 <div className="absolute w-full h-full backface-hidden bg-purple-700 bg-opacity-90 p-6 rounded-lg shadow-lg rotate-y-180 overflow-auto">
//                     <div className="text-white">{backContent}</div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default function University() {
//     const { state, dispatch } = useGame();
//     const { player } = state;
//     const [selectedHook, setSelectedHook] = useState(null);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [showQuiz, setShowQuiz] = useState(false);
//     const [quizAnswers, setQuizAnswers] = useState([]);
//     const [quizSubmitted, setQuizSubmitted] = useState(false);
//     const [quizScore, setQuizScore] = useState(0);
//     const [isCardFlipped, setIsCardFlipped] = useState(false);
//     const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
//     const pageRef = useRef(null);

//     // Add sound effect for clicks
//     const withSound = (handler) => (event) => {
//         playClickSound();
//         if (handler) {
//             handler(event);
//         }
//     };

//     // Add music playback
//     useEffect(() => {
//         initAudio();
//         loadClickSound("/sounds/click.mp3").then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//         loadReactUniversityMusic("/sounds/healing.mp3").then(() => {
//             playReactUniversityMusic();
//         });
//         return () => {
//             stopReactUniversityMusic();
//         };
//     }, []);

//     const handleHookSelect = (hookName) => {
//         if (player.hooksMastered[hookName] >= 1) {
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: `${hooksData[hookName].title} already mastered!` },
//             });
//             return;
//         }
//         setSelectedHook(hookName);
//         setCurrentPage(0);
//         setShowQuiz(false);
//         setQuizAnswers([]);
//         setQuizSubmitted(false);
//         setIsCardFlipped(false);
//         setShowFeedbackDialog(false);
//         dispatch({
//             type: "SET_MESSAGE",
//             payload: { text: `Started studying ${hooksData[hookName].title}!` },
//         });
//     };

//     const handleNextPage = () => {
//         if (currentPage < hooksData[selectedHook].pages.length - 1) {
//             if (pageRef.current) {
//                 pageRef.current.classList.add("page-flip");
//                 setTimeout(() => {
//                     setCurrentPage(currentPage + 1);
//                     pageRef.current.classList.remove("page-flip");
//                     dispatch({
//                         type: "SET_MESSAGE",
//                         payload: { text: `Studied page ${currentPage + 2} of ${hooksData[selectedHook].title}.` },
//                     });
//                 }, 500);
//             } else {
//                 setCurrentPage(currentPage + 1);
//             }
//         } else {
//             setShowQuiz(true);
//             setQuizAnswers(new Array(hooksData[selectedHook].quiz.length).fill(null));
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: `Completed study for ${hooksData[selectedHook].title}. Time for the quiz!` },
//             });
//         }
//     };

//     const handlePrevPage = () => {
//         if (currentPage > 0) {
//             if (pageRef.current) {
//                 pageRef.current.classList.add("page-flip-reverse");
//                 setTimeout(() => {
//                     setCurrentPage(currentPage - 1);
//                     pageRef.current.classList.remove("page-flip-reverse");
//                 }, 500);
//             } else {
//                 setCurrentPage(currentPage - 1);
//             }
//         }
//     };

//     const handleAnswerSelect = (questionIndex, answerIndex) => {
//         const newAnswers = [...quizAnswers];
//         newAnswers[questionIndex] = answerIndex;
//         setQuizAnswers(newAnswers);
//     };

//     const handleSubmitQuiz = () => {
//         let score = 0;
//         const quizQuestions = hooksData[selectedHook].quiz;
//         const incorrectAnswers = [];

//         quizAnswers.forEach((answer, index) => {
//             if (answer === quizQuestions[index].answer) {
//                 score++;
//             } else {
//                 incorrectAnswers.push({
//                     question: quizQuestions[index].question,
//                     playerAnswer: quizQuestions[index].options[answer] || "No answer selected",
//                     correctAnswer: quizQuestions[index].options[quizQuestions[index].answer],
//                 });
//             }
//         });

//         const totalPoints = Math.round((score / quizQuestions.length) * 10);
//         setQuizScore(totalPoints);
//         setQuizSubmitted(true);
//         setShowFeedbackDialog(true);

//         const cashReward = score === quizQuestions.length ? 50 : score > 0 ? score * 15 : -20;
//         const isPerfectScore = score === quizQuestions.length;

//         dispatch({
//             type: "COMPLETE_QUIZ",
//             payload: {
//                 hook: selectedHook,
//                 pointsEarned: totalPoints,
//                 cashChange: cashReward,
//                 energySpent: 15,
//                 masteryEarned: isPerfectScore,
//             },
//         });

//         dispatch({
//             type: "SET_QUIZ_FEEDBACK",
//             payload: {
//                 score,
//                 totalQuestions: quizQuestions.length,
//                 incorrectAnswers,
//                 mastered: isPerfectScore,
//             },
//         });

//         dispatch({
//             type: "SET_MESSAGE",
//             payload: {
//                 text: isPerfectScore
//                     ? `Mastered ${hooksData[selectedHook].title} with a perfect score! Earned $50!`
//                     : `Scored ${score}/${quizQuestions.length} on ${hooksData[selectedHook].title} quiz. ${score > 0 ? `Earned $${cashReward} cash!` : "Lost $20."}`,
//             },
//         });
//     };

//     const exitUniversity = () => {
//         dispatch({ type: "CHANGE_SCREEN", payload: { screen: "location" } });
//         dispatch({
//             type: "SET_MESSAGE",
//             payload: { text: "Left React University." },
//         });
//     };

//     if (!selectedHook) {
//         return (
//             <div className="relative min-h-full bg-transparent mx-auto p-6 rounded-lg shadow-lg">
//                 <style jsx>{`
//                     .background-video {
//                         position: absolute;
//                         inset: 0;
//                         width: 100%;
//                         height: 100%;
//                         object-fit: cover;
//                         z-index: 0;
//                     }
//                     .content-container {
//                         position: relative;
//                         z-index: 1;
//                         border-radius: 0.5rem;
//                         padding: 1rem;
//                     }
//                     .content-section {
//                         background-color: rgba(0, 0, 0, 0.5);
//                         border-radius: 0.5rem;
//                         padding: 1rem;
//                     }
//                 `}</style>
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="background-video"
//                     onError={(e) => {
//                         console.error("Failed to load background video:", e);
//                     }}
//                 >
//                     <source src="https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4" type="video/mp4" />
//                     <source src="/videos/devwork-bg.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="content-container">
//                     <div className="content-section text-center mb-6">
//                         <ProfessorHeader />
//                         <h2 className="text-3xl font-bold text-white">React University</h2>
//                         <button
//                             onClick={withSound(exitUniversity)}
//                             className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-indigo-800 rounded-lg font-bold"
//                         >
//                             Exit University
//                         </button>
//                     </div>
//                     <p className="text-center mb-8 text-white">Select a React hook to study:</p>
//                     <div className="content-section grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {Object.keys(hooksData).map((hook, index) => (
//                             <motion.div
//                                 key={hook}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                             >
//                                 <button
//                                     onClick={withSound(() => handleHookSelect(hook))}
//                                     className={`w-full p-4 rounded-lg text-center transition text-white ${player.hooksMastered[hook] >= 1
//                                         ? "bg-gray-500 cursor-not-allowed"
//                                         : "bg-indigo-500 hover:bg-purple-900"
//                                         }`}
//                                     disabled={player.hooksMastered[hook] >= 1}
//                                 >
//                                     <h3 className="text-xl font-bold mb-2">{hooksData[hook].title}</h3>
//                                     <p className="text-sm">{hooksData[hook].description}</p>
//                                     {player.hooksMastered[hook] >= 1 && (
//                                         <p className="text-xs text-indigo-300 mt-2">✓ Mastered</p>
//                                     )}
//                                 </button>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     const hookContent = hooksData[selectedHook];

//     if (showQuiz) {
//         return (
//             <div className="relative min-h-full bg-transparent w-full p-6 rounded-lg shadow-lg">
//                 <style jsx>{`
//                     .background-video {
//                         position: absolute;
//                         inset: 0;
//                         width: 100%;
//                         height: 100%;
//                         object-fit: cover;
//                         z-index: 0;
//                     }
//                     .content-container {
//                         position: relative;
//                         z-index: 1;
//                         border-radius: 0.5rem;
//                         padding: 1rem;
//                     }
//                     .content-section {
//                         background-color: rgba(0, 0, 0, 0.5);
//                         border-radius: 0.5rem;
//                         padding: 1rem;
//                     }
//                 `}</style>
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="background-video"
//                     onError={(e) => {
//                         console.error("Failed to load background video:", e);
//                     }}
//                 >
//                     <source src="https://cdn.pixabay.com/video/2023/08/20/176897-856259092_tiny.mp4" type="video/mp4" />
//                     <source src="/videos/devwork-bg.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="content-container">
//                     <div className="content-section">
//                         <ProfessorHeader />
//                         <h2 className="text-3xl font-bold mb-6 text-white">{hookContent.title} Quiz</h2>
//                         {quizSubmitted && (
//                             <QuizFeedbackDialog
//                                 open={showFeedbackDialog}
//                                 onOpenChange={setShowFeedbackDialog}
//                                 feedback={state.quizFeedback}
//                                 onClose={() => {
//                                     setShowFeedbackDialog(false);
//                                     setSelectedHook(null);
//                                 }}
//                             />
//                         )}
//                         {!showFeedbackDialog && (
//                             <>
//                                 <div className="space-y-8">
//                                     {hookContent.quiz.map((q, qIndex) => (
//                                         <motion.div
//                                             key={qIndex}
//                                             className="p-4 bg-white rounded-lg text-black"
//                                             initial={{ opacity: 0, x: -20 }}
//                                             animate={{ opacity: 1, x: 0 }}
//                                             transition={{ duration: 0.3, delay: qIndex * 0.1 }}
//                                         >
//                                             <h4 className="font-bold mb-3">Question {qIndex + 1}: {q.question}</h4>
//                                             <div className="space-y-2">
//                                                 {q.options.map((option, oIndex) => (
//                                                     <motion.div
//                                                         key={oIndex}
//                                                         whileHover={{ scale: 1.02 }}
//                                                         className={`p-3 border rounded-lg cursor-pointer ${quizAnswers[qIndex] === oIndex
//                                                             ? "bg-indigo-400 border-indigo-400 text-black"
//                                                             : "border-gray-300 hover:bg-indigo-100"
//                                                             }`}
//                                                         onClick={withSound(() => handleAnswerSelect(qIndex, oIndex))}
//                                                     >
//                                                         {option}
//                                                     </motion.div>
//                                                 ))}
//                                             </div>
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                                 <div className="mt-6 flex justify-between">
//                                     <button
//                                         onClick={withSound(() => setShowQuiz(false))}
//                                         className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
//                                     >
//                                         Back to Study
//                                     </button>
//                                     <button
//                                         onClick={withSound(handleSubmitQuiz)}
//                                         disabled={quizAnswers.includes(null)}
//                                         className={`px-4 py-2 rounded-lg ${quizAnswers.includes(null)
//                                             ? "bg-gray-300 cursor-not-allowed"
//                                             : "bg-indigo-500 hover:bg-indigo-600 text-white"
//                                             }`}
//                                     >
//                                         Submit Quiz
//                                     </button>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     const pageContent = hookContent.pages[currentPage]?.content || "";
//     let explanationContent = "";
//     let codeExamples = "";

//     try {
//         explanationContent = pageContent
//             .split("\n")
//             .filter((line) => !line.includes("```"))
//             .filter((line) => line.trim())
//             .join("\n");
//         codeExamples = pageContent
//             .split("```jsx")
//             .filter((_, i) => i > 0)
//             .map((block) => block.split("```")[0] || "")
//             .join("\n")
//             .trim();
//     } catch (error) {
//         console.error("Error parsing page content:", error);
//         dispatch({
//             type: "SET_MESSAGE",
//             payload: { text: "Error loading study content. Please try another hook." },
//         });
//         setSelectedHook(null);
//         return null;
//     }

//     return (
//         <div className="relative min-h-full bg-transparent mx-auto p-6 rounded-lg shadow-lg">
//             <style jsx>{`
//                 .background-video {
//                     position: absolute;
//                     inset: 0;
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                     z-index: 0;
//                 }
//                 .content-container {
//                     position: relative;
//                     z-index: 1;
//                     border-radius: 0.5rem;
//                     padding: 1rem;
//                 }
//                 .content-section {
//                     background-color: rgba(0, 0, 0, 0.5);
//                     border-radius: 0.5rem;
//                     padding: 1rem;
//                 }
//             `}</style>
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="background-video"
//                 onError={(e) => {
//                     console.error("Failed to load background video:", e);
//                 }}
//             >
//                 <source src="https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4" type="video/mp4" />
//                 <source src="/videos/devwork-bg.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="content-container">
//                 <div className="content-section">
//                     <ProfessorHeader />
//                     <h2 className="text-3xl font-bold mb-6 text-white">{hookContent.title}</h2>
//                     <div ref={pageRef} className="transition-all duration-500">
//                         <FlashCard
//                             frontContent={
//                                 <div>
//                                     <h3 className="text-xl font-bold mb-4">{hookContent.pages[currentPage].title}</h3>
//                                     <p className="text-sm mb-4">Click to see code examples</p>
//                                     <div className="prose max-w-none">
//                                         {explanationContent.split("\n").map((line, i) => (
//                                             <p key={i}>{line}</p>
//                                         ))}
//                                     </div>
//                                 </div>
//                             }
//                             backContent={
//                                 <div>
//                                     <h3 className="text-xl font-bold mb-4">Code Examples</h3>
//                                     <p className="text-sm mb-4">Click to return to explanation</p>
//                                     <pre className="bg-gray-800 p-4 rounded-lg text-indigo-400 overflow-auto text-sm">
//                                         {codeExamples || "No code examples available."}
//                                     </pre>
//                                 </div>
//                             }
//                             isFlipped={isCardFlipped}
//                             onClick={withSound(() => setIsCardFlipped(!isCardFlipped))}
//                         />
//                     </div>
//                     <div className="mt-6 flex justify-between">
//                         <button
//                             onClick={withSound(currentPage > 0 ? handlePrevPage : () => setSelectedHook(null))}
//                             className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
//                         >
//                             {currentPage > 0 ? "Previous Page" : "Back to Hooks"}
//                         </button>
//                         <button
//                             onClick={withSound(handleNextPage)}
//                             className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg"
//                         >
//                             {currentPage < hookContent.pages.length - 1 ? "Next Page" : "Take Quiz"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <style jsx global>{`
//                 ::-webkit-scrollbar {
//                     width: 8px;
//                     height: 8px;
//                 }
//                 ::-webkit-scrollbar-track {
//                     background: #f1f1f1;
//                     border-radius: 4px;
//                 }
//                 ::-webkit-scrollbar-thumb {
//                     background: #888;
//                     border-radius: 4px;
//                 }
//                 ::-webkit-scrollbar-thumb:hover {
//                     background: #555;
//                 }
//                 .stat {
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     background: rgba(255, 255, 255, 0.2);
//                     padding: 4px 12px;
//                     border-radius: 8px;
//                 }
//                 .stat-label {
//                     font-size: 12px;
//                     opacity: 0.8;
//                 }
//                 .stat-value {
//                     font-weight: bold;
//                     font-size: 16px;
//                 }
//             `}</style>
//         </div>
//     );
// }



"use client";

import { useState, useRef, useEffect } from "react";
import { useGame } from "@/app/context/GameContext";
import { hooksData } from "@/data/hooksData";
import { motion } from "framer-motion";
import ProfessorHeader from "./ProfessorHeader";
import QuizFeedbackDialog from "./QuizFeedbackDialog";
import {
    initAudio,
    loadClickSound,
    playClickSound,
    loadReactUniversityMusic,
    playReactUniversityMusic,
    stopReactUniversityMusic,
} from "@/data/audioManager";

const FlashCard = ({ frontContent, backContent, isFlipped, onClick }) => {
    return (
        <div
            className="relative w-full h-[500px] cursor-pointer perspective-1000"
            onClick={onClick}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="absolute w-full h-full backface-hidden bg-indigo-600 bg-opacity-90 p-6 rounded-lg shadow-lg overflow-auto">
                    <div className="text-white">{frontContent}</div>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-purple-700 bg-opacity-90 p-6 rounded-lg shadow-lg rotate-y-180 overflow-auto">
                    <div className="text-white">{backContent}</div>
                </div>
            </motion.div>
        </div>
    );
};

export default function University() {
    const { state, dispatch } = useGame();
    const { player } = state;
    const [selectedHook, setSelectedHook] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState([]);
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizScore, setQuizScore] = useState(0);
    const [isCardFlipped, setIsCardFlipped] = useState(false);
    const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
    const pageRef = useRef(null);

    // Add sound effect for clicks
    const withSound = (handler) => (event) => {
        playClickSound();
        if (handler) {
            handler(event);
        }
    };

    // Add music playback
    useEffect(() => {
        initAudio();
        loadClickSound("/sounds/click.mp3").then((success) => {
            if (!success) {
                console.warn("Failed to load click sound");
            }
        });
        loadReactUniversityMusic("/sounds/healing.mp3").then(() => {
            playReactUniversityMusic();
        });
        return () => {
            stopReactUniversityMusic();
        };
    }, []);

    const handleHookSelect = (hookName) => {
        if (player.hooksMastered[hookName] >= 1) {
            dispatch({
                type: "SET_MESSAGE",
                payload: { text: `${hooksData[hookName].title} already mastered!` },
            });
            return;
        }
        setSelectedHook(hookName);
        setCurrentPage(0);
        setShowQuiz(false);
        setQuizAnswers([]);
        setQuizSubmitted(false);
        setIsCardFlipped(false);
        setShowFeedbackDialog(false);
        dispatch({
            type: "SET_MESSAGE",
            payload: { text: `Started studying ${hooksData[hookName].title}!` },
        });
    };

    const handleNextPage = () => {
        if (currentPage < hooksData[selectedHook].pages.length - 1) {
            if (pageRef.current) {
                pageRef.current.classList.add("page-flip");
                setTimeout(() => {
                    setCurrentPage(currentPage + 1);
                    pageRef.current.classList.remove("page-flip");
                    dispatch({
                        type: "SET_MESSAGE",
                        payload: { text: `Studied page ${currentPage + 2} of ${hooksData[selectedHook].title}.` },
                    });
                }, 500);
            } else {
                setCurrentPage(currentPage + 1);
            }
        } else {
            setShowQuiz(true);
            setQuizAnswers(new Array(hooksData[selectedHook].quiz.length).fill(null));
            dispatch({
                type: "SET_MESSAGE",
                payload: { text: `Completed study for ${hooksData[selectedHook].title}. Time for the quiz!` },
            });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            if (pageRef.current) {
                pageRef.current.classList.add("page-flip-reverse");
                setTimeout(() => {
                    setCurrentPage(currentPage - 1);
                    pageRef.current.classList.remove("page-flip-reverse");
                }, 500);
            } else {
                setCurrentPage(currentPage - 1);
            }
        }
    };

    const handleAnswerSelect = (questionIndex, answerIndex) => {
        const newAnswers = [...quizAnswers];
        newAnswers[questionIndex] = answerIndex;
        setQuizAnswers(newAnswers);
    };

    const handleSubmitQuiz = () => {
        let score = 0;
        const quizQuestions = hooksData[selectedHook].quiz;
        const incorrectAnswers = [];

        quizAnswers.forEach((answer, index) => {
            if (answer === quizQuestions[index].answer) {
                score++;
            } else {
                incorrectAnswers.push({
                    question: quizQuestions[index].question,
                    playerAnswer: quizQuestions[index].options[answer] || "No answer selected",
                    correctAnswer: quizQuestions[index].options[quizQuestions[index].answer],
                });
            }
        });

        const totalPoints = Math.round((score / quizQuestions.length) * 10);
        setQuizScore(totalPoints);
        setQuizSubmitted(true);
        setShowFeedbackDialog(true);

        const cashReward = score === quizQuestions.length ? 50 : score > 0 ? score * 15 : -20;
        const isPerfectScore = score === quizQuestions.length;

        dispatch({
            type: "COMPLETE_QUIZ",
            payload: {
                hook: selectedHook,
                pointsEarned: totalPoints,
                cashChange: cashReward,
                energySpent: 15,
                masteryEarned: isPerfectScore,
            },
        });

        dispatch({
            type: "SET_QUIZ_FEEDBACK",
            payload: {
                score,
                totalQuestions: quizQuestions.length,
                incorrectAnswers,
                mastered: isPerfectScore,
            },
        });

        dispatch({
            type: "SET_MESSAGE",
            payload: {
                text: isPerfectScore
                    ? `Mastered ${hooksData[selectedHook].title} with a perfect score! Earned $50!`
                    : `Scored ${score}/${quizQuestions.length} on ${hooksData[selectedHook].title} quiz. ${score > 0 ? `Earned $${cashReward} cash!` : "Lost $20."}`,
            },
        });
    };

    const exitUniversity = () => {
        dispatch({ type: "CHANGE_SCREEN", payload: { screen: "location" } });
        dispatch({
            type: "SET_MESSAGE",
            payload: { text: "Left React University." },
        });
    };

    if (!selectedHook) {
        return (
            <div className="relative min-h-full bg-transparent mx-auto p-6 rounded-lg shadow-lg">
                <style jsx>{`
                    .background-video {
                        position: absolute;
                        inset: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        z-index: 0;
                    }
                    .content-container {
                        position: relative;
                        z-index: 1;
                        border-radius: 0.5rem;
                        padding: 1rem;
                    }
                    .content-section {
                        background-color: rgba(0, 0, 0, 0.5);
                        border-radius: 0.5rem;
                        padding: 1rem;
                    }
                `}</style>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="background-video"
                    onError={(e) => {
                        console.error("Failed to load background video:", e);
                    }}
                >
                    <source src="https://cdn.pixabay.com/video/2023/08/24/177572-857741629_tiny.mp4" type="video/mp4" />
                    <source src="/videos/devwork-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content-container">
                    <div className="content-section text-center mb-6">
                        <ProfessorHeader />
                        <h2 className="text-3xl font-bold text-white">React University</h2>
                        <button
                            onClick={withSound(exitUniversity)}
                            className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-indigo-800 rounded-lg font-bold"
                        >
                            Exit University
                        </button>
                    </div>
                    <p className="text-center mb-8 text-white">Select a React hook to study:</p>
                    <div className="content-section grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.keys(hooksData).map((hook, index) => (
                            <motion.div
                                key={hook}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <button
                                    onClick={withSound(() => handleHookSelect(hook))}
                                    className={`w-full p-4 rounded-lg text-center transition text-white ${player.hooksMastered[hook] >= 1
                                        ? "bg-gray-500 cursor-not-allowed"
                                        : "bg-indigo-500 hover:bg-purple-900"
                                        }`}
                                    disabled={player.hooksMastered[hook] >= 1}
                                >
                                    <h3 className="text-xl font-bold mb-2">{hooksData[hook].title}</h3>
                                    <p className="text-sm">{hooksData[hook].description}</p>
                                    {player.hooksMastered[hook] >= 1 && (
                                        <p className="text-xs text-indigo-300 mt-2">✓ Mastered</p>
                                    )}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const hookContent = hooksData[selectedHook];

    if (showQuiz) {
        return (
            <div className="relative min-h-full bg-transparent w-full p-6 rounded-lg shadow-lg">
                <style jsx>{`
                    .background-video {
                        position: absolute;
                        inset: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        z-index: 0;
                    }
                    .content-container {
                        position: relative;
                        z-index: 1;
                        border-radius: 0.5rem;
                        padding: 1rem;
                    }
                    .content-section {
                        background-color: rgba(0, 0, 0, 0.5);
                        border-radius: 0.5rem;
                        padding: 1rem;
                    }
                `}</style>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="background-video"
                    onError={(e) => {
                        console.error("Failed to load background video:", e);
                    }}
                >
                    <source src="https://cdn.pixabay.com/video/2023/08/24/177572-857741629_tiny.mp4" type="video/mp4" />
                    <source src="/videos/devwork-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content-container">
                    <div className="content-section">
                        <ProfessorHeader />
                        <h2 className="text-3xl font-bold mb-6 text-white">{hookContent.title} Quiz</h2>
                        {quizSubmitted && (
                            <QuizFeedbackDialog
                                open={showFeedbackDialog}
                                onOpenChange={setShowFeedbackDialog}
                                feedback={state.quizFeedback}
                                onClose={() => {
                                    setShowFeedbackDialog(false);
                                    setSelectedHook(null);
                                }}
                            />
                        )}
                        {!showFeedbackDialog && (
                            <>
                                <div className="space-y-8">
                                    {hookContent.quiz.map((q, qIndex) => (
                                        <motion.div
                                            key={qIndex}
                                            className="p-4 bg-white rounded-lg text-black"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: qIndex * 0.1 }}
                                        >
                                            <h4 className="font-bold mb-3">Question {qIndex + 1}: {q.question}</h4>
                                            <div className="space-y-2">
                                                {q.options.map((option, oIndex) => (
                                                    <motion.div
                                                        key={oIndex}
                                                        whileHover={{ scale: 1.02 }}
                                                        className={`p-3 border rounded-lg cursor-pointer ${quizAnswers[qIndex] === oIndex
                                                            ? "bg-indigo-400 border-indigo-400 text-black"
                                                            : "border-gray-300 hover:bg-indigo-100"
                                                            }`}
                                                        onClick={withSound(() => handleAnswerSelect(qIndex, oIndex))}
                                                    >
                                                        {option}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-6 flex justify-between">
                                    <button
                                        onClick={withSound(() => setShowQuiz(false))}
                                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                                    >
                                        Back to Study
                                    </button>
                                    <button
                                        onClick={withSound(handleSubmitQuiz)}
                                        disabled={quizAnswers.includes(null)}
                                        className={`px-4 py-2 rounded-lg ${quizAnswers.includes(null)
                                            ? "bg-gray-300 cursor-not-allowed"
                                            : "bg-indigo-500 hover:bg-indigo-600 text-white"
                                            }`}
                                    >
                                        Submit Quiz
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    const pageContent = hookContent.pages[currentPage]?.content || "";
    let explanationContent = "";
    let codeExamples = "";

    try {
        explanationContent = pageContent
            .split("\n")
            .filter((line) => !line.includes("```"))
            .filter((line) => line.trim())
            .join("\n");
        codeExamples = pageContent
            .split("```jsx")
            .filter((_, i) => i > 0)
            .map((block) => block.split("```")[0] || "")
            .join("\n")
            .trim();
    } catch (error) {
        console.error("Error parsing page content:", error);
        dispatch({
            type: "SET_MESSAGE",
            payload: { text: "Error loading study content. Please try another hook." },
        });
        setSelectedHook(null);
        return null;
    }

    return (
        <div className="relative min-h-full bg-transparent mx-auto p-6 rounded-lg shadow-lg">
            <style jsx>{`
                .background-video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }
                .content-container {
                    position: relative;
                    z-index: 1;
                    border-radius: 0.5rem;
                    padding: 1rem;
                }
                .content-section {
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 0.5rem;
                    padding: 1rem;
                }
            `}</style>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="background-video"
                onError={(e) => {
                    console.error("Failed to load background video:", e);
                }}
            >
                <source src="https://cdn.pixabay.com/video/2023/08/24/177572-857741629_tiny.mp4" type="video/mp4" />
                <source src="/videos/devwork-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-container">
                <div className="content-section">
                    <ProfessorHeader />
                    <h2 className="text-3xl font-bold mb-6 text-white">{hookContent.title}</h2>
                    <div ref={pageRef} className="transition-all duration-500">
                        <FlashCard
                            frontContent={
                                <div>
                                    <h3 className="text-xl font-bold mb-4">{hookContent.pages[currentPage].title}</h3>
                                    <p className="text-sm mb-4">Click to see code examples</p>
                                    <div className="prose max-w-none">
                                        {explanationContent.split("\n").map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            }
                            backContent={
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Code Examples</h3>
                                    <p className="text-sm mb-4">Click to return to explanation</p>
                                    <pre className="bg-gray-800 p-4 rounded-lg text-indigo-400 overflow-auto text-sm">
                                        {codeExamples || "No code examples available."}
                                    </pre>
                                </div>
                            }
                            isFlipped={isCardFlipped}
                            onClick={withSound(() => setIsCardFlipped(!isCardFlipped))}
                        />
                    </div>
                    <div className="mt-6 flex justify-between">
                        <button
                            onClick={withSound(currentPage > 0 ? handlePrevPage : () => setSelectedHook(null))}
                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                        >
                            {currentPage > 0 ? "Previous Page" : "Back to Hooks"}
                        </button>
                        <button
                            onClick={withSound(handleNextPage)}
                            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg"
                        >
                            {currentPage < hookContent.pages.length - 1 ? "Next Page" : "Take Quiz"}
                        </button>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                ::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
                .stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.2);
                    padding: 4px 12px;
                    border-radius: 8px;
                }
                .stat-label {
                    font-size: 12px;
                    opacity: 0.8;
                }
                .stat-value {
                    font-weight: bold;
                    font-size: 16px;
                }
            `}</style>
        </div>
    );
}