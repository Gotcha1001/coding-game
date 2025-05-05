// "use client";

// import { useState, useRef, useEffect } from "react";
// import { useGame } from "@/app/context/GameContext";
// import { cssData } from "@/data/cssData";
// import { motion } from "framer-motion";
// import ProfessorHeader from "./ProfessorHeader";
// import QuizFeedbackDialog from "./QuizFeedbackDialog";
// import {
//     initAudio,
//     loadClickSound,
//     loadCssHotelMusic,
//     playCssHotelMusic,
//     stopCssHotelMusic,
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
//                 <div className="absolute w-full h-full backface-hidden bg-blue-700 p-6 rounded-lg shadow-lg rotate-y-180 overflow-auto">
//                     <div className="text-white">{backContent}</div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default function CssHotel() {
//     const { state, dispatch } = useGame();
//     const { player } = state;
//     const [selectedTopic, setSelectedTopic] = useState(null);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [showQuiz, setShowQuiz] = useState(false);
//     const [quizAnswers, setQuizAnswers] = useState([]);
//     const [quizSubmitted, setQuizSubmitted] = useState(false);
//     const [quizScore, setQuizScore] = useState(0);
//     const [isCardFlipped, setIsCardFlipped] = useState(false);
//     const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
//     const pageRef = useRef(null);

//     // Initialize and play music on component mount, stop on unmount
//     useEffect(() => {
//         initAudio();
//         loadClickSound("/sounds/click.mp3").then((success) => {
//             if (!success) {
//                 console.warn("Failed to load click sound");
//             }
//         });
//         loadCssHotelMusic("/sounds/healing.mp3").then(() => {
//             playCssHotelMusic();
//         });
//         return () => {
//             stopCssHotelMusic();
//         };
//     }, []);

//     const handleTopicSelect = (topicName) => {
//         if (player.cssMastered[topicName] >= 1) {
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: `${cssData[topicName].title} already mastered!` },
//             });
//             return;
//         }
//         setSelectedTopic(topicName);
//         setCurrentPage(0);
//         setShowQuiz(false);
//         setQuizAnswers([]);
//         setQuizSubmitted(false);
//         setIsCardFlipped(false);
//         setShowFeedbackDialog(false);
//         dispatch({
//             type: "SET_MESSAGE",
//             payload: { text: `Started studying ${cssData[topicName].title}!` },
//         });
//     };

//     const handleNextPage = () => {
//         if (currentPage < cssData[selectedTopic].pages.length - 1) {
//             if (pageRef.current) {
//                 pageRef.current.classList.add("page-flip");
//                 setTimeout(() => {
//                     setCurrentPage(currentPage + 1);
//                     pageRef.current.classList.remove("page-flip");
//                     dispatch({
//                         type: "SET_MESSAGE",
//                         payload: { text: `Studied page ${currentPage + 2} of ${cssData[selectedTopic].title}.` },
//                     });
//                 }, 500);
//             } else {
//                 setCurrentPage(currentPage + 1);
//             }
//         } else {
//             setShowQuiz(true);
//             setQuizAnswers(new Array(cssData[selectedTopic].quiz.length).fill(null));
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: `Completed study for ${cssData[selectedTopic].title}. Time for the quiz!` },
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
//         const quizQuestions = cssData[selectedTopic].quiz;
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
//                 hook: selectedTopic,
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
//                     ? `Mastered ${cssData[selectedTopic].title} with a perfect score! Earned $50!`
//                     : `Scored ${score}/${quizQuestions.length} on ${cssData[selectedTopic].title} quiz. ${score > 0 ? `Earned $${cashReward} cash!` : "Lost $20."}`,
//             },
//         });
//     };

//     const exitCssHotel = () => {
//         // Wrap dispatch calls in a block to clarify intentional side effects
//         {
//             dispatch({ type: "CHANGE_SCREEN", payload: { screen: "location" } });
//             dispatch({
//                 type: "SET_MESSAGE",
//                 payload: { text: "Left CSS Hotel." },
//             });
//         }
//     };

//     if (!selectedTopic) {
//         return (
//             <div className="min-h-screen mx-auto p-6 bg-gradient-to-b from-indigo-500 via-blue-900 to-black rounded-lg shadow-lg">
//                 <div className="text-center mb-6">
//                     <ProfessorHeader />
//                     <h2 className="text-3xl font-bold text-white">CSS Hotel</h2>
//                     <button
//                         onClick={exitCssHotel}
//                         className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-indigo-800 rounded-lg font-bold"
//                     >
//                         Exit CSS Hotel
//                     </button>
//                 </div>
//                 <p className="text-center mb-8 text-white">Select a CSS or Tailwind topic to study:</p>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {Object.keys(cssData).map((topic, index) => (
//                         <motion.div
//                             key={topic}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                         >
//                             <button
//                                 onClick={() => handleTopicSelect(topic)}
//                                 className={`w-full p-4 rounded-lg text-center transition text-white ${player.cssMastered[topic] >= 1
//                                     ? 'bg-gray-500 cursor-not-allowed'
//                                     : 'bg-indigo-500 hover:bg-blue-900'
//                                     }`}
//                                 disabled={player.cssMastered[topic] >= 1}
//                             >
//                                 <h3 className="text-xl font-bold mb-2">{cssData[topic].title}</h3>
//                                 <p className="text-sm">{cssData[topic].description}</p>
//                                 {player.cssMastered[topic] >= 1 && (
//                                     <p className="text-xs text-green-300 mt-2">✓ Mastered</p>
//                                 )}
//                             </button>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }

//     const topicContent = cssData[selectedTopic];

//     if (showQuiz) {
//         return (
//             <div className="w-full min-h-screen p-6 bg-gradient-to-r from-indigo-600 via-blue-800 to-black rounded-lg shadow-lg">
//                 <ProfessorHeader />
//                 <h2 className="text-3xl font-bold mb-6 text-white">{topicContent.title} Quiz</h2>
//                 {quizSubmitted && (
//                     <QuizFeedbackDialog
//                         open={showFeedbackDialog}
//                         onOpenChange={setShowFeedbackDialog}
//                         feedback={state.quizFeedback}
//                         onClose={() => {
//                             setShowFeedbackDialog(false);
//                             setSelectedTopic(null);
//                         }}
//                     />
//                 )}
//                 {!showFeedbackDialog && (
//                     <>
//                         <div className="space-y-8">
//                             {topicContent.quiz.map((q, qIndex) => (
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
//                                                     ? 'bg-yellow-400 border-yellow-400 text-black'
//                                                     : 'border-gray-300 hover:bg-yellow-100'
//                                                     }`}
//                                                 onClick={() => handleAnswerSelect(qIndex, oIndex)}
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
//                                 onClick={() => setShowQuiz(false)}
//                                 className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
//                             >
//                                 Back to Study
//                             </button>
//                             <button
//                                 onClick={handleSubmitQuiz}
//                                 disabled={quizAnswers.includes(null)}
//                                 className={`px-4 py-2 rounded-lg ${quizAnswers.includes(null)
//                                     ? 'bg-gray-300 cursor-not-allowed'
//                                     : 'bg-green-500 hover:bg-green-600 text-white'
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

//     const pageContent = topicContent.pages[currentPage].content;
//     const explanationContent = pageContent
//         .split('\n')
//         .filter(line => !line.includes('```'))
//         .filter(line => line.trim())
//         .join('\n');
//     const codeExamples = pageContent
//         .split('```css')
//         .filter((_, i) => i > 0)
//         .map(block => block.split('```')[0])
//         .join('\n')
//         .replace(/```html/g, '')
//         .replace(/```js/g, '');

//     return (
//         <div className="min-h-screen mx-auto p-6 bg-gradient-to-r from-indigo-500 via-blue-900 to-black rounded-lg shadow-lg">
//             <ProfessorHeader />
//             <h2 className="text-3xl font-bold mb-6 text-white">{topicContent.title}</h2>
//             <div ref={pageRef} className="transition-all duration-500">
//                 <FlashCard
//                     frontContent={
//                         <div>
//                             <h3 className="text-xl font-bold mb-4">{topicContent.pages[currentPage].title}</h3>
//                             <p className="text-sm mb-4">Click to see code examples</p>
//                             <div className="prose max-w-none">
//                                 {explanationContent.split('\n').map((line, i) => (
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
//                     onClick={() => setIsCardFlipped(!isCardFlipped)}
//                 />
//             </div>
//             <div className="mt-6 flex justify-between">
//                 <button
//                     onClick={currentPage > 0 ? handlePrevPage : () => setSelectedTopic(null)}
//                     className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
//                 >
//                     {currentPage > 0 ? 'Previous Page' : 'Back to Topics'}
//                 </button>
//                 <button
//                     onClick={handleNextPage}
//                     className="px-4 py-2 bg-indigo-500 hover:bg-blue-600 text-white rounded-lg"
//                 >
//                     {currentPage < topicContent.pages.length - 1 ? 'Next Page' : 'Take Quiz'}
//                 </button>
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
import { cssData } from "@/data/cssData";
import { motion } from "framer-motion";
import ProfessorHeader from "./ProfessorHeader";
import QuizFeedbackDialog from "./QuizFeedbackDialog";
import {
    initAudio,
    loadClickSound,
    loadCssHotelMusic,
    playClickSound,
    playCssHotelMusic,
    stopCssHotelMusic,
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
                <div className="absolute w-full h-full backface-hidden bg-blue-700 bg-opacity-90 p-6 rounded-lg shadow-lg rotate-y-180 overflow-auto">
                    <div className="text-white">{backContent}</div>
                </div>
            </motion.div>
        </div>
    );
};

export default function CssHotel() {
    const { state, dispatch } = useGame();
    const { player } = state;
    const [selectedTopic, setSelectedTopic] = useState(null);
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

    // Initialize and play music on component mount, stop on unmount
    useEffect(() => {
        loadClickSound("/sounds/click.mp3").then((success) => {
            if (!success) {
                console.warn("Failed to load click sound");
            }
        });
    }, []);

    const handleTopicSelect = (topicName) => {
        if (player.cssMastered[topicName] >= 1) {
            dispatch({
                type: "SET_MESSAGE",
                payload: { text: `${cssData[topicName].title} already mastered!` },
            });
            return;
        }
        setSelectedTopic(topicName);
        setCurrentPage(0);
        setShowQuiz(false);
        setQuizAnswers([]);
        setQuizSubmitted(false);
        setIsCardFlipped(false);
        setShowFeedbackDialog(false);
        dispatch({
            type: "SET_MESSAGE",
            payload: { text: `Started studying ${cssData[topicName].title}!` },
        });
    };

    const handleNextPage = () => {
        if (currentPage < cssData[selectedTopic].pages.length - 1) {
            if (pageRef.current) {
                pageRef.current.classList.add("page-flip");
                setTimeout(() => {
                    setCurrentPage(currentPage + 1);
                    pageRef.current.classList.remove("page-flip");
                    dispatch({
                        type: "SET_MESSAGE",
                        payload: { text: `Studied page ${currentPage + 2 | 0} of ${cssData[selectedTopic].title}.` },
                    });
                }, 500);
            } else {
                setCurrentPage(currentPage + 1);
            }
        } else {
            setShowQuiz(true);
            setQuizAnswers(new Array(cssData[selectedTopic].quiz.length).fill(null));
            dispatch({
                type: "SET_MESSAGE",
                payload: { text: `Completed study for ${cssData[selectedTopic].title}. Time for the quiz!` },
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
        const quizQuestions = cssData[selectedTopic].quiz;
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
                hook: selectedTopic,
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
                    ? `Mastered ${cssData[selectedTopic].title} with a perfect score! Earned $50!`
                    : `Scored ${score}/${quizQuestions.length} on ${cssData[selectedTopic].title} quiz. ${score > 0 ? `Earned $${cashReward} cash!` : "Lost $20."}`,
            },
        });
    };

    const exitCssHotel = () => {
        dispatch({ type: "CHANGE_SCREEN", payload: { screen: "location" } });
        dispatch({
            type: "SET_MESSAGE",
            payload: { text: "Left CSS Hotel." },
        });
    };

    if (!selectedTopic) {
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
                    <source src="https://cdn.pixabay.com/video/2016/09/21/5364-183788428_tiny.mp4" type="video/mp4" />
                    <source src="/videos/devwork-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content-container">
                    <div className="content-section text-center mb-6">
                        <ProfessorHeader />
                        <h2 className="text-3xl font-bold text-white">CSS Hotel</h2>
                        <button
                            onClick={withSound(exitCssHotel)}
                            className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-indigo-800 rounded-lg font-bold"
                        >
                            Exit CSS Hotel
                        </button>
                    </div>
                    <p className="text-center mb-8 text-white">Select a CSS or Tailwind topic to study:</p>
                    <div className="content-section grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.keys(cssData).map((topic, index) => (
                            <motion.div
                                key={topic}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <button
                                    onClick={withSound(() => handleTopicSelect(topic))}
                                    className={`w-full p-4 rounded-lg text-center transition text-white ${player.cssMastered[topic] >= 1
                                        ? "bg-gray-500 cursor-not-allowed"
                                        : "bg-indigo-500 hover:bg-blue-900"
                                        }`}
                                    disabled={player.cssMastered[topic] >= 1}
                                >
                                    <h3 className="text-xl font-bold mb-2">{cssData[topic].title}</h3>
                                    <p className="text-sm">{cssData[topic].description}</p>
                                    {player.cssMastered[topic] >= 1 && (
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

    const topicContent = cssData[selectedTopic];

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
                    <source src="https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4" type="video/mp4" />
                    <source src="/videos/devwork-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content-container">
                    <div className="content-section">
                        <ProfessorHeader />
                        <h2 className="text-3xl font-bold mb-6 text-white">{topicContent.title} Quiz</h2>
                        {quizSubmitted && (
                            <QuizFeedbackDialog
                                open={showFeedbackDialog}
                                onOpenChange={setShowFeedbackDialog}
                                feedback={state.quizFeedback}
                                onClose={() => {
                                    setShowFeedbackDialog(false);
                                    setSelectedTopic(null);
                                }}
                            />
                        )}
                        {!showFeedbackDialog && (
                            <>
                                <div className="space-y-8">
                                    {topicContent.quiz.map((q, qIndex) => (
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

    const pageContent = topicContent.pages[currentPage]?.content || "";
    let explanationContent = "";
    let codeExamples = "";

    try {
        explanationContent = pageContent
            .split("\n")
            .filter((line) => !line.includes("```"))
            .filter((line) => line.trim())
            .join("\n");
        codeExamples = pageContent
            .split("```css")
            .filter((_, i) => i > 0)
            .map((block) => block.split("```")[0] || "")
            .join("\n")
            .replace(/```html/g, "")
            .replace(/```js/g, "")
            .trim();
    } catch (error) {
        console.error("Error parsing page content:", error);
        dispatch({
            type: "SET_MESSAGE",
            payload: { text: "Error loading study content. Please try another topic." },
        });
        setSelectedTopic(null);
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
                <source src="https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4" type="video/mp4" />
                <source src="/videos/devwork-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-container">
                <div className="content-section">
                    <ProfessorHeader />
                    <h2 className="text-3xl font-bold mb-6 text-white">{topicContent.title}</h2>
                    <div ref={pageRef} className="transition-all duration-500">
                        <FlashCard
                            frontContent={
                                <div>
                                    <h3 className="text-xl font-bold mb-4">{topicContent.pages[currentPage].title}</h3>
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
                            onClick={withSound(currentPage > 0 ? handlePrevPage : () => setSelectedTopic(null))}
                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                        >
                            {currentPage > 0 ? "Previous Page" : "Back to Topics"}
                        </button>
                        <button
                            onClick={withSound(handleNextPage)}
                            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg"
                        >
                            {currentPage < topicContent.pages.length - 1 ? "Next Page" : "Take Quiz"}
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