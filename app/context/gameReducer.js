// import { nextJsData } from "@/data/nextJsData";
// import initialState, { defaultPlayer } from "./initialState";
// import { cssData } from "@/data/cssData";
// import { pythonData } from "@/data/pythonData";
// import { javaScriptData } from "@/data/javaScriptData";
// import { typeScriptData } from "@/data/typeScriptData";
// import { expressData } from "@/data/expressData";
// import { cSharpData } from "@/data/cSharpData";
// import { reactNativeData } from "@/data/reactNativeData.";
// import { javaData } from "@/data/javaData";
// import { cppData } from "@/data/cppData";
// import { locations } from "@/data/locations";

// function gameReducer(state, action) {
//   switch (action.type) {
//     case "START_GAME":
//       return {
//         ...state,
//         isPlayerSelect: false,
//         player: {
//           ...defaultPlayer,
//           name: action.payload.player.name,
//           avatar: action.payload.player.avatar,
//           hooksMastered: {
//             useState: 0,
//             useEffect: 0,
//             useMemo: 0,
//             useContext: 0,
//             useReducer: 0,
//             useCallback: 0,
//             useCustomHook: 0,
//           },
//           nextJsMastered: {
//             serverComponents: 0,
//             appRouter: 0,
//             dataFetching: 0,
//             serverlessFunctions: 0,
//             routing: 0,
//             middleware: 0,
//             caching: 0,
//             deployment: 0,
//             redux: 0,
//             browserCompatability: 0,
//             unitTesting: 0,
//             dynamicImports: 0,
//             imageOptimization: 0,
//             errorHandling: 0,
//             pagination: 0,
//             fileuploads: 0,
//             apiOrganization: 0,
//             serverlessSecurity: 0,
//             advancedServerFunctions: 0,
//             serverFunctions: 0,
//             internationalization: 0,
//             edgeRuntime: 0,
//             serverActions: 0,
//             routeProtection: 0,
//           },
//           cssMastered: {
//             flexbox: 0,
//             tailwindUtilities: 0,
//           },
//           pythonMastered: {
//             lists: 0,
//             tuples: 0,
//           },
//           javaScriptMastered: {
//             arrays: 0,
//             objects: 0,
//           },
//           typeScriptMastered: {
//             interfaces: 0,
//             types: 0,
//           },
//           expressMastered: {
//             routes: 0,
//             middleware: 0,
//           },
//           cSharpMastered: {
//             classes: 0,
//             async: 0,
//           },
//           reactNativeMastered: {
//             components: 0,
//             navigation: 0,
//           },
//           javaMastered: {
//             classes: 0,
//           },
//           cppMastered: {
//             gameBasics: 0,
//           },
//         },
//         currentScreen: "map",
//       };

//     case "RESTART_GAME":
//       return {
//         ...initialState,
//         isPlayerSelect: true,
//         player: null,
//         locations, // Preserve locations data
//         gameEnded: false, // Reset gameEnded
//       };

//     case "RESET_GAME_WON":
//       return {
//         ...state,
//         gameWon: false,
//       };

//     case "SET_GAME_WON":
//       return {
//         ...state,
//         gameWon: true,
//         gameEnded: true, // Mark game as ended
//       };

//     case "BUY_MEAL":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           cash: state.player.cash - action.payload.cost,
//           energy: Math.min(state.player.energy + action.payload.energy, 100),
//           happiness: Math.min(
//             state.player.happiness + action.payload.happiness,
//             100
//           ),
//         },
//         message: `You enjoyed a ${action.payload.meal.name} for $${action.payload.cost}!`,
//       };

//     case "UPDATE_ENERGY":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           energy: Math.min(
//             100,
//             Math.max(0, state.player.energy + action.payload.amount)
//           ),
//         },
//       };
//     case "START_WALKING":
//       return {
//         ...state,
//         isWalking: true,
//         targetLocation: action.payload.locationId,
//       };
//     case "MOVE_TO_LOCATION":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           currentLocation: action.payload.locationId,
//         },
//         isWalking: false,
//         targetLocation: null,
//       };
//     case "CHANGE_SCREEN":
//       return {
//         ...state,
//         currentScreen: action.payload.screen,
//       };
//     case "LEARN_HOOK":
//       const { hook, pointsEarned, energySpent } = action.payload;
//       const updatedPlayerLearn = {
//         ...state.player,
//         points: state.player.points + pointsEarned,
//         energy: Math.max(0, state.player.energy - energySpent),
//         hooksMastered: {
//           ...state.player.hooksMastered,
//           [hook]: (state.player.hooksMastered[hook] || 0) + 1,
//         },
//       };
//       return {
//         ...state,
//         player: updatedPlayerLearn,
//       };
//     case "WORK_AT_HOOK":
//       const hookId = action.payload.hook;
//       const masteryLevel = state.player.hooksMastered[hookId] || 0;
//       const cashEarned = masteryLevel * 10;
//       const energySpentWork = 20;
//       if (state.player.energy >= energySpentWork) {
//         return {
//           ...state,
//           player: {
//             ...state.player,
//             cash: state.player.cash + cashEarned,
//             energy: state.player.energy - energySpentWork,
//           },
//         };
//       }
//       return state;
//     case "COMPLETE_QUIZ": {
//       const {
//         hook: quizTopic,
//         pointsEarned: quizPoints,
//         cashChange,
//         energySpent: quizEnergy,
//         masteryEarned,
//       } = action.payload;
//       const isNextJsTopic = Object.keys(nextJsData).includes(quizTopic);
//       const isCssTopic = Object.keys(cssData).includes(quizTopic);
//       const isPythonTopic = Object.keys(pythonData).includes(quizTopic);
//       const isJavaScriptTopic = Object.keys(javaScriptData).includes(quizTopic);
//       const isTypeScriptTopic = Object.keys(typeScriptData).includes(quizTopic);
//       const isExpressTopic = Object.keys(expressData).includes(quizTopic);
//       const isCSharpTopic = Object.keys(cSharpData).includes(quizTopic);
//       const isReactNativeTopic =
//         Object.keys(reactNativeData).includes(quizTopic);
//       const isJavaTopic = Object.keys(javaData).includes(quizTopic);
//       const isCppTopic = Object.keys(cppData).includes(quizTopic);
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           points: state.player.points + quizPoints,
//           cash: Math.max(0, state.player.cash + cashChange),
//           energy: Math.max(0, state.player.energy - quizEnergy),
//           ...(isNextJsTopic
//             ? {
//                 nextJsMastered: {
//                   ...state.player.nextJsMastered,
//                   ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                 },
//               }
//             : isCssTopic
//               ? {
//                   cssMastered: {
//                     ...state.player.cssMastered,
//                     ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                   },
//                 }
//               : isPythonTopic
//                 ? {
//                     pythonMastered: {
//                       ...state.player.pythonMastered,
//                       ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                     },
//                   }
//                 : isJavaScriptTopic
//                   ? {
//                       javaScriptMastered: {
//                         ...state.player.javaScriptMastered,
//                         ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                       },
//                     }
//                   : isCppTopic
//                     ? {
//                         cppMastered: {
//                           ...state.player.cppMastered,
//                           ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                         },
//                       }
//                     : isTypeScriptTopic
//                       ? {
//                           typeScriptMastered: {
//                             ...state.player.typeScriptMastered,
//                             ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                           },
//                         }
//                       : isExpressTopic
//                         ? {
//                             expressMastered: {
//                               ...state.player.expressMastered,
//                               ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                             },
//                           }
//                         : isCSharpTopic
//                           ? {
//                               cSharpMastered: {
//                                 ...state.player.cSharpMastered,
//                                 ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                               },
//                             }
//                           : isReactNativeTopic
//                             ? {
//                                 reactNativeMastered: {
//                                   ...state.player.reactNativeMastered,
//                                   ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                                 },
//                               }
//                             : isJavaTopic
//                               ? {
//                                   javaMastered: {
//                                     ...state.player.javaMastered,
//                                     ...(masteryEarned
//                                       ? { [quizTopic]: 1 }
//                                       : {}),
//                                   },
//                                 }
//                               : {
//                                   hooksMastered: {
//                                     ...state.player.hooksMastered,
//                                     ...(masteryEarned
//                                       ? { [quizTopic]: 1 }
//                                       : {}),
//                                   },
//                                 }),
//         },
//       };
//     }

//     case "REST":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           energy: 100,
//         },
//       };

//     case "RENT_APARTMENT":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           cash: state.player.cash - action.payload.deposit,
//           rental: {
//             ...state.player.rental,
//             hasApartment: true,
//             lastPaidWeek: state.player.week,
//             rentAmount: action.payload.rentAmount,
//             rentDue: false,
//             missedPayments: 0,
//           },
//         },
//         message: `You rented an apartment for $${action.payload.rentAmount} per month with a $${action.payload.deposit} deposit.`,
//       };
//     case "PAY_RENT":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           cash: state.player.cash - state.player.rental.rentAmount,
//           rental: {
//             ...state.player.rental,
//             lastPaidWeek: state.player.week,
//             rentDue: false,
//             missedPayments: 0,
//           },
//         },
//         message: `You paid your rent of $${state.player.rental.rentAmount}.`,
//       };
//     case "UPGRADE_APARTMENT":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           cash: state.player.cash - action.payload.upgradeFee,
//           rental: {
//             ...state.player.rental,
//             rentAmount: action.payload.rentAmount,
//             lastPaidWeek: state.player.week,
//             rentDue: false,
//           },
//         },
//         message: `You upgraded to a new apartment for $${action.payload.rentAmount} per month.`,
//       };
//     case "CHECK_RENT_DUE":
//       const weeksSinceLastPayment = state.player.rental.lastPaidWeek
//         ? state.player.week - state.player.rental.lastPaidWeek
//         : 0;
//       if (state.player.rental.hasApartment && weeksSinceLastPayment >= 4) {
//         return {
//           ...state,
//           player: {
//             ...state.player,
//             rental: {
//               ...state.player.rental,
//               rentDue: true,
//               missedPayments: (state.player.rental.missedPayments || 0) + 1,
//             },
//             happiness: Math.max(state.player.happiness - 15, 0),
//           },
//           message: "Your rent is due! Visit the Rental Office to pay.",
//         };
//       }
//       return state;
//     case "USE_TIME":
//       const newWeek =
//         state.player.week + Math.floor(action.payload.amount / 100);
//       const checkRent =
//         newWeek > state.player.week && state.player.rental.hasApartment;
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           week: newWeek,
//         },
//         ...(checkRent
//           ? { message: "A new week has started. Check your rent status." }
//           : {}),
//       };
//     case "SET_MESSAGE":
//       return {
//         ...state,
//         message: action.payload.text,
//       };
//     case "SET_QUIZ_FEEDBACK":
//       return {
//         ...state,
//         quizFeedback: {
//           score: action.payload.score,
//           totalQuestions: action.payload.totalQuestions,
//           incorrectAnswers: action.payload.incorrectAnswers,
//           mastered: action.payload.mastered,
//         },
//       };
//     case "ADVANCE_WEEK_AND_REST": {
//       const newState = {
//         ...state,
//         player: {
//           ...state.player,
//           week: state.player.week + 1,
//           energy: 100,
//         },
//         currentScreen: "map", // Navigate to map
//         message: "Energy too low! Advanced to next week and restored energy.",
//       };

//       // Check rent if player has an apartment
//       if (newState.player.rental.hasApartment) {
//         const weeksSinceLastPayment = newState.player.rental.lastPaidWeek
//           ? newState.player.week - newState.player.rental.lastPaidWeek
//           : 0;
//         if (weeksSinceLastPayment >= 4) {
//           return {
//             ...newState,
//             player: {
//               ...newState.player,
//               rental: {
//                 ...newState.player.rental,
//                 rentDue: true,
//                 missedPayments:
//                   (newState.player.rental.missedPayments || 0) + 1,
//               },
//               happiness: Math.max(newState.player.happiness - 15, 0),
//             },
//             currentScreen: "map", // Ensure map navigation even with rent due
//             message: "Energy too low! Advanced to next week. Your rent is due!",
//           };
//         }
//       }
//       return newState;
//     }
//     default:
//       return state;
//   }
// }

// export default gameReducer;

// import { nextJsData } from "@/data/nextJsData";
// import initialState, { defaultPlayer } from "./initialState";
// import { cssData } from "@/data/cssData";
// import { pythonData } from "@/data/pythonData";
// import { javaScriptData } from "@/data/javaScriptData";
// import { typeScriptData } from "@/data/typeScriptData";
// import { expressData } from "@/data/expressData";
// import { cSharpData } from "@/data/cSharpData";

// import { javaData } from "@/data/javaData";
// import { cppData } from "@/data/cppData";
// import { locations } from "@/data/locations";
// import { reactNativeData } from "@/data/reactNativeData.";

// function gameReducer(state, action) {
//   switch (action.type) {
//     case "START_GAME":
//       return {
//         ...state,
//         isPlayerSelect: false,
//         player: {
//           ...defaultPlayer,
//           name: action.payload.player.name,
//           avatar: action.payload.player.avatar,
//           hooksMastered: {
//             useState: 0,
//             useEffect: 0,
//             useMemo: 0,
//             useContext: 0,
//             useReducer: 0,
//             useCallback: 0,
//             useCustomHook: 0,
//           },
//           nextJsMastered: {
//             serverComponents: 0,
//             appRouter: 0,
//             dataFetching: 0,
//             serverlessFunctions: 0,
//             routing: 0,
//             middleware: 0,
//             caching: 0,
//             deployment: 0,
//             redux: 0,
//             browserCompatability: 0,
//             unitTesting: 0,
//             dynamicImports: 0,
//             imageOptimization: 0,
//             errorHandling: 0,
//             pagination: 0,
//             fileuploads: 0,
//             apiOrganization: 0,
//             serverlessSecurity: 0,
//             advancedServerFunctions: 0,
//             serverFunctions: 0,
//             internationalization: 0,
//             edgeRuntime: 0,
//             serverActions: 0,
//             routeProtection: 0,
//           },
//           cssMastered: {
//             flexbox: 0,
//             tailwindUtilities: 0,
//           },
//           pythonMastered: {
//             lists: 0,
//             tuples: 0,
//           },
//           javaScriptMastered: {
//             arrays: 0,
//             objects: 0,
//           },
//           typeScriptMastered: {
//             interfaces: 0,
//             types: 0,
//           },
//           expressMastered: {
//             routes: 0,
//             middleware: 0,
//           },
//           cSharpMastered: {
//             classes: 0,
//             async: 0,
//           },
//           reactNativeMastered: {
//             components: 0,
//             navigation: 0,
//           },
//           javaMastered: {
//             classes: 0,
//           },
//           cppMastered: {
//             gameBasics: 0,
//           },
//         },
//         currentScreen: "map",
//       };

//     case "RESTART_GAME":
//       return {
//         ...initialState,
//         isPlayerSelect: true,
//         player: null,
//         locations,
//         gameEnded: false,
//       };

//     case "RESET_GAME_WON":
//       return {
//         ...state,
//         gameWon: false,
//       };

//     case "SET_GAME_WON":
//       return {
//         ...state,
//         gameWon: true,
//         gameEnded: true,
//       };

//     case "BUY_ITEM":
//       const item = action.payload.item;
//       if (state.player.cash < item.price || state.player.energy < 5) {
//         return {
//           ...state,
//           message:
//             state.player.cash < item.price
//               ? `Not enough cash to buy ${item.name}!`
//               : "Not enough energy to shop!",
//         };
//       }
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           cash: state.player.cash - item.price,
//           energy: state.player.energy - 5,
//           happiness: Math.min(
//             state.player.happiness + (item.happiness || 0),
//             100
//           ),
//           possessions: [...state.player.possessions, item.id],
//         },
//         message: `You bought a ${item.name} for $${item.price}!`,
//       };

//     case "BUY_MEAL":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           cash: state.player.cash - action.payload.cost,
//           energy: Math.min(state.player.energy + action.payload.energy, 100),
//           happiness: Math.min(
//             state.player.happiness + action.payload.happiness,
//             100
//           ),
//         },
//         message: `You enjoyed a ${action.payload.meal.name} for $${action.payload.cost}!`,
//       };

//     case "UPDATE_ENERGY":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           energy: Math.min(
//             100,
//             Math.max(0, state.player.energy + action.payload.amount)
//           ),
//         },
//       };

//     case "START_WALKING":
//       return {
//         ...state,
//         isWalking: true,
//         targetLocation: action.payload.locationId,
//       };

//     case "MOVE_TO_LOCATION":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           currentLocation: action.payload.locationId,
//         },
//         isWalking: false,
//         targetLocation: null,
//       };

//     case "CHANGE_SCREEN":
//       return {
//         ...state,
//         currentScreen: action.payload.screen,
//       };

//     case "LEARN_HOOK":
//       const { hook, pointsEarned, energySpent } = action.payload;
//       const updatedPlayerLearn = {
//         ...state.player,
//         points: state.player.points + pointsEarned,
//         energy: Math.max(0, state.player.energy - energySpent),
//         hooksMastered: {
//           ...state.player.hooksMastered,
//           [hook]: (state.player.hooksMastered[hook] || 0) + 1,
//         },
//       };
//       return {
//         ...state,
//         player: updatedPlayerLearn,
//       };

//     case "WORK_AT_HOOK":
//       const hookId = action.payload.hook;
//       const masteryLevel = state.player.hooksMastered[hookId] || 0;
//       const cashEarned = masteryLevel * 10;
//       const energySpentWork = 20;
//       if (state.player.energy >= energySpentWork) {
//         return {
//           ...state,
//           player: {
//             ...state.player,
//             cash: state.player.cash + cashEarned,
//             energy: state.player.energy - energySpentWork,
//           },
//         };
//       }
//       return state;

//     case "COMPLETE_QUIZ": {
//       const {
//         hook: quizTopic,
//         pointsEarned: quizPoints,
//         cashChange,
//         energySpent: quizEnergy,
//         masteryEarned,
//       } = action.payload;
//       const isNextJsTopic = Object.keys(nextJsData).includes(quizTopic);
//       const isCssTopic = Object.keys(cssData).includes(quizTopic);
//       const isPythonTopic = Object.keys(pythonData).includes(quizTopic);
//       const isJavaScriptTopic = Object.keys(javaScriptData).includes(quizTopic);
//       const isTypeScriptTopic = Object.keys(typeScriptData).includes(quizTopic);
//       const isExpressTopic = Object.keys(expressData).includes(quizTopic);
//       const isCSharpTopic = Object.keys(cSharpData).includes(quizTopic);
//       const isReactNativeTopic =
//         Object.keys(reactNativeData).includes(quizTopic);
//       const isJavaTopic = Object.keys(javaData).includes(quizTopic);
//       const isCppTopic = Object.keys(cppData).includes(quizTopic);

//       return {
//         ...state,
//         player: {
//           ...state.player,
//           points: state.player.points + quizPoints,
//           cash: Math.max(0, state.player.cash + cashChange),
//           energy: Math.max(0, state.player.energy - quizEnergy),
//           ...(isNextJsTopic
//             ? {
//                 nextJsMastered: {
//                   ...state.player.nextJsMastered,
//                   ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                 },
//               }
//             : isCssTopic
//               ? {
//                   cssMastered: {
//                     ...state.player.cssMastered,
//                     ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                   },
//                 }
//               : isPythonTopic
//                 ? {
//                     pythonMastered: {
//                       ...state.player.pythonMastered,
//                       ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                     },
//                   }
//                 : isJavaScriptTopic
//                   ? {
//                       javaScriptMastered: {
//                         ...state.player.javaScriptMastered,
//                         ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                       },
//                     }
//                   : isCppTopic
//                     ? {
//                         cppMastered: {
//                           ...state.player.cppMastered,
//                           ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                         },
//                       }
//                     : isTypeScriptTopic
//                       ? {
//                           typeScriptMastered: {
//                             ...state.player.typeScriptMastered,
//                             ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                           },
//                         }
//                       : isExpressTopic
//                         ? {
//                             expressMastered: {
//                               ...state.player.expressMastered,
//                               ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                             },
//                           }
//                         : isCSharpTopic
//                           ? {
//                               cSharpMastered: {
//                                 ...state.player.cSharpMastered,
//                                 ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                               },
//                             }
//                           : isReactNativeTopic
//                             ? {
//                                 reactNativeMastered: {
//                                   ...state.player.reactNativeMastered,
//                                   ...(masteryEarned ? { [quizTopic]: 1 } : {}),
//                                 },
//                               }
//                             : isJavaTopic
//                               ? {
//                                   javaMastered: {
//                                     ...state.player.javaMastered,
//                                     ...(masteryEarned
//                                       ? { [quizTopic]: 1 }
//                                       : {}),
//                                   },
//                                 }
//                               : {
//                                   hooksMastered: {
//                                     ...state.player.hooksMastered,
//                                     ...(masteryEarned
//                                       ? { [quizTopic]: 1 }
//                                       : {}),
//                                   },
//                                 }),
//         },
//       };
//     }

//     case "REST":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           energy: 100,
//         },
//       };

//     case "RENT_APARTMENT":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           cash: state.player.cash - action.payload.deposit,
//           rental: {
//             ...state.player.rental,
//             hasApartment: true,
//             lastPaidWeek: state.player.week,
//             rentAmount: action.payload.rentAmount,
//             rentDue: false,
//             missedPayments: 0,
//             apartmentTier: action.payload.apartmentTier || "Basic",
//           },
//         },
//         message: `You rented an apartment for $${action.payload.rentAmount} per month with a $${action.payload.deposit} deposit.`,
//       };

//     case "PAY_RENT":
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           cash: state.player.cash - state.player.rental.rentAmount,
//           rental: {
//             ...state.player.rental,
//             lastPaidWeek: state.player.week,
//             rentDue: false,
//             missedPayments: 0,
//           },
//         },
//         message: `You paid your rent of $${state.player.rental.rentAmount}.`,
//       };

//     case "UPGRADE_APARTMENT":
//       const { upgradeFee, rentAmount, apartmentTier } = action.payload;
//       if (state.player.cash < upgradeFee) {
//         return {
//           ...state,
//           message: `Not enough cash to upgrade to ${apartmentTier} apartment!`,
//         };
//       }
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           cash: state.player.cash - upgradeFee,
//           rental: {
//             ...state.player.rental,
//             rentAmount,
//             apartmentTier,
//             lastPaidWeek: state.player.week,
//             rentDue: false,
//           },
//         },
//         message: `You upgraded to a ${apartmentTier} apartment for $${rentAmount} per month!`,
//       };

//     case "CHECK_RENT_DUE":
//       const weeksSinceLastPayment = state.player.rental.lastPaidWeek
//         ? state.player.week - state.player.rental.lastPaidWeek
//         : 0;
//       if (state.player.rental.hasApartment && weeksSinceLastPayment >= 4) {
//         return {
//           ...state,
//           player: {
//             ...state.player,
//             rental: {
//               ...state.player.rental,
//               rentDue: true,
//               missedPayments: (state.player.rental.missedPayments || 0) + 1,
//             },
//             happiness: Math.max(state.player.happiness - 15, 0),
//           },
//           message: "Your rent is due! Visit the Rental Office to pay.",
//         };
//       }
//       return state;

//     case "USE_TIME":
//       const newWeek =
//         state.player.week + Math.floor(action.payload.amount / 100);
//       const checkRent =
//         newWeek > state.player.week && state.player.rental.hasApartment;
//       return {
//         ...state,
//         player: {
//           ...state.player,
//           week: newWeek,
//         },
//         ...(checkRent
//           ? { message: "A new week has started. Check your rent status." }
//           : {}),
//       };

//     case "SET_MESSAGE":
//       return {
//         ...state,
//         message: action.payload.text,
//       };

//     case "SET_QUIZ_FEEDBACK":
//       return {
//         ...state,
//         quizFeedback: {
//           score: action.payload.score,
//           totalQuestions: action.payload.totalQuestions,
//           incorrectAnswers: action.payload.incorrectAnswers,
//           mastered: action.payload.mastered,
//         },
//       };

//     case "ADVANCE_WEEK_AND_REST": {
//       const newState = {
//         ...state,
//         player: {
//           ...state.player,
//           week: state.player.week + 1,
//           energy: 100,
//         },
//         currentScreen: "map",
//         message: "Energy too low! Advanced to next week and restored energy.",
//       };

//       if (newState.player.rental.hasApartment) {
//         const weeksSinceLastPayment = newState.player.rental.lastPaidWeek
//           ? newState.player.week - newState.player.rental.lastPaidWeek
//           : 0;
//         if (weeksSinceLastPayment >= 4) {
//           return {
//             ...newState,
//             player: {
//               ...newState.player,
//               rental: {
//                 ...newState.player.rental,
//                 rentDue: true,
//                 missedPayments:
//                   (newState.player.rental.missedPayments || 0) + 1,
//               },
//               happiness: Math.max(newState.player.happiness - 15, 0),
//             },
//             currentScreen: "map",
//             message: "Energy too low! Advanced to next week. Your rent is due!",
//           };
//         }
//       }
//       return newState;
//     }

//     default:
//       return state;
//   }
// }

// export default gameReducer;

import { nextJsData } from "@/data/nextJsData";
import initialState, { defaultPlayer } from "./initialState";
import { cssData } from "@/data/cssData";
import { pythonData } from "@/data/pythonData";
import { javaScriptData } from "@/data/javaScriptData";
import { typeScriptData } from "@/data/typeScriptData";
import { expressData } from "@/data/expressData";
import { cSharpData } from "@/data/cSharpData";

import { javaData } from "@/data/javaData";
import { cppData } from "@/data/cppData";
import { locations } from "@/data/locations";
import { reactNativeData } from "@/data/reactNativeData.";

function gameReducer(state, action) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        isPlayerSelect: false,
        player: {
          ...defaultPlayer,
          name: action.payload.player.name,
          avatar: action.payload.player.avatar,
          hooksMastered: {
            useState: 0,
            useEffect: 0,
            useRef: 0,
            useContext: 0,
            useReducer: 0,
            useCallback: 0,
            useMemo: 0,
            useTransition: 0,
            customHooks: 0,
            useId: 0,
            useLayoutEffect: 0,
            useDeferredValue: 0,
            useSyncExternalStore: 0,
            useImperativeHandle: 0,
          },
          nextJsMastered: {
            serverComponents: 0,
            appRouter: 0,
            dataFetching: 0,
            serverlessFunctions: 0,
            routing: 0,
            middleware: 0,
            caching: 0,
            deployment: 0,
            redux: 0,
            browserCompatability: 0,
            unitTesting: 0,
            dynamicImports: 0,
            imageOptimization: 0,
            errorHandling: 0,
            pagination: 0,
            fileUploads: 0,
            apiOrganization: 0,
            serverlessSecurity: 0,
            advancedServerFunctions: 0,
            serverFunctions: 0,
            internationalization: 0,
            edgeRuntime: 0,
            serverActions: 0,
            routeProtection: 0,
          },
          cssMastered: {
            flexbox: 0,
            tailwindUtilities: 0,
            cssGrid: 0,
            animations: 0,
            responsiveDesign: 0,
            cssVariables: 0,
            pseudoClassesElements: 0,
            tailwindResponsiveUtilities: 0,
            tailwindComponents: 0,
            cssTransforms: 0,
            cssFilters: 0,
            cssClipPath: 0,
            cssBackgrounds: 0,
            cssTypography: 0,
          },
          pythonMastered: {
            lists: 0,
            tuples: 0,
            dictionaries: 0,
            functions: 0,
            loops: 0,
            conditionals: 0,
            classes: 0,
            sets: 0,
            strings: 0,
            exceptions: 0,
            modules: 0,
            decorators: 0,
            fileHandling: 0,
            iteratorsGenerators: 0,
            contextManagers: 0,
            regularExpressions: 0,
            multithreading: 0,
          },
          javaScriptMastered: {
            arrays: 0,
            objects: 0,
            functions: 0,
            loops: 0,
            conditionals: 0,
            promises: 0,
            asyncAwait: 0,
            destructuring: 0,
            modules: 0,
            closures: 0,
            prototypes: 0,
            asyncIterators: 0,
            strings: 0,
            templateLiterals: 0,
            eventLoop: 0,
            weakMapWeakSet: 0,
            proxies: 0,
          },
          typeScriptMastered: {
            interfaces: 0,
            types: 0,
            basicTypes: 0,
            functions: 0,
            enums: 0,
            generics: 0,
            typeAssertions: 0,
            typeNarrowing: 0,
            advancedTypes: 0,
            modules: 0,
            tuples: 0,
            decorators: 0,
            typeGuards: 0,
            declarationFiles: 0,
          },
          expressMastered: {
            routes: 0,
            middleware: 0,
            templating: 0,
            staticFiles: 0,
            authentication: 0,
            databaseIntegration: 0,
            restfulApis: 0,
            websockets: 0,
            requestHandling: 0,
            responseFormatting: 0,
            sessionManagement: 0,
            fileUploads: 0,
            securityPractices: 0,
          },
          cSharpMastered: {
            classes: 0,
            async: 0,
            interfaces: 0,
            delegates: 0,
            linq: 0,
            generics: 0,
            events: 0,
            dependencyInjection: 0,
            attributes: 0,
            reflection: 0,
            nullable: 0,
            patternMatching: 0,
            recordTypes: 0,
            stringHandling: 0,
            extensionMethods: 0,
            entityFrameworkCore: 0,
            taskParallelLibrary: 0,
          },
          reactNativeMastered: {
            components: 0,
            navigation: 0,
            lists: 0,
            touchables: 0,
            platform: 0,
            asyncStorage: 0,
            gestures: 0,
            animations: 0,
            redux: 0,
            typescript: 0,
            imageHandling: 0,
            networking: 0,
            pushNotifications: 0,
            performanceOptimization: 0,
          },
          javaMastered: {
            classes: 0,
            encapsulation: 0,
            interfaces: 0,
            arrays: 0,
            collections: 0,
            exceptions: 0,
            generics: 0,
            streams: 0,
            multithreading: 0,
            lambda: 0,
            annotations: 0,
            stringHandling: 0,
            fileIO: 0,
            jdbc: 0,
            reflection: 0,
            concurrencyUtilities: 0,
          },
          cppMastered: {
            gameBasics: 0,
            physicsSimulation: 0, // New subject
            inputHandling: 0, // New subject
            collisionDetection: 0, // New subject
            variables: 0,
            functions: 0,
            classes: 0,
            pointers: 0,
            dynamicMemory: 0,
            templates: 0,
            stateManagement: 0,
            animation: 0,
            audioHandling: 0,
            textRendering: 0,
            particleSystems: 0,
            sceneManagement: 0,
          },
        },
        currentScreen: "map",
      };

    case "RESTART_GAME":
      return {
        ...initialState,
        isPlayerSelect: true,
        player: null,
        locations,
        gameEnded: false,
      };

    case "RESET_GAME_WON":
      return {
        ...state,
        gameWon: false,
      };

    case "SET_GAME_WON":
      return {
        ...state,
        gameWon: true,
        gameEnded: true,
      };

    case "BUY_ITEM":
      const item = action.payload.item;
      if (state.player.cash < item.price || state.player.energy < 5) {
        return {
          ...state,
          message:
            state.player.cash < item.price
              ? `Not enough cash to buy ${item.name}!`
              : "Not enough energy to shop!",
        };
      }
      return {
        ...state,
        player: {
          ...state.player,
          cash: state.player.cash - item.price,
          energy: state.player.energy - 5,
          happiness: Math.min(
            state.player.happiness + (item.happiness || 0),
            100
          ),
          possessions: [...state.player.possessions, item.id],
        },
        message: `You bought a ${item.name} for $${item.price}!`,
      };

    case "BUY_MEAL":
      return {
        ...state,
        player: {
          ...state.player,
          cash: state.player.cash - action.payload.cost,
          energy: Math.min(state.player.energy + action.payload.energy, 100),
          happiness: Math.min(
            state.player.happiness + action.payload.happiness,
            100
          ),
        },
        message: `You enjoyed a ${action.payload.meal.name} for $${action.payload.cost}!`,
      };

    case "SAVE_GAME":
      const saveSuccess = saveGame(state);
      return {
        ...state,
        message: saveSuccess
          ? "Game saved successfully!"
          : "Failed to save the game.",
      };

    case "LOAD_GAME":
      const savedGame = action.payload.savedGame;
      if (!savedGame) {
        return {
          ...state,
          message: "No saved game found or error loading game.",
        };
      }
      return {
        ...savedGame,
        player: {
          ...savedGame.player,
          cash: savedGame.player.cash ?? 12000,
          hooksMastered:
            savedGame.player.hooksMastered ?? defaultPlayer.hooksMastered,
          nextJsMastered:
            savedGame.player.nextJsMastered ?? defaultPlayer.nextJsMastered,
          cssMastered:
            savedGame.player.cssMastered ?? defaultPlayer.cssMastered,
          pythonMastered:
            savedGame.player.pythonMastered ?? defaultPlayer.pythonMastered,
          javaScriptMastered:
            savedGame.player.javaScriptMastered ??
            defaultPlayer.javaScriptMastered,
          typeScriptMastered:
            savedGame.player.typeScriptMastered ??
            defaultPlayer.typeScriptMastered,
          expressMastered:
            savedGame.player.expressMastered ?? defaultPlayer.expressMastered,
          cSharpMastered:
            savedGame.player.cSharpMastered ?? defaultPlayer.cSharpMastered,
          reactNativeMastered:
            savedGame.player.reactNativeMastered ??
            defaultPlayer.reactNativeMastered,
          javaMastered:
            savedGame.player.javaMastered ?? defaultPlayer.javaMastered,
          cppMastered:
            savedGame.player.cppMastered ?? defaultPlayer.cppMastered,
          relationship:
            savedGame.player.relationship ?? defaultPlayer.relationship,
          rental: savedGame.player.rental ?? defaultPlayer.rental,
          possessions:
            savedGame.player.possessions ?? defaultPlayer.possessions,
        },
        locations: savedGame.locations ?? locations,
        message: "Game loaded successfully!",
      };

    case "HYDRATE_STATE":
      return {
        ...action.payload,
        player: {
          ...action.payload.player,
          cash: action.payload.player.cash ?? 12000,
          hooksMastered:
            action.payload.player.hooksMastered ?? defaultPlayer.hooksMastered,
          nextJsMastered:
            action.payload.player.nextJsMastered ??
            defaultPlayer.nextJsMastered,
          cssMastered:
            action.payload.player.cssMastered ?? defaultPlayer.cssMastered,
          pythonMastered:
            action.payload.player.pythonMastered ??
            defaultPlayer.pythonMastered,
          javaScriptMastered:
            action.payload.player.javaScriptMastered ??
            defaultPlayer.javaScriptMastered,
          typeScriptMastered:
            action.payload.player.typeScriptMastered ??
            defaultPlayer.typeScriptMastered,
          expressMastered:
            action.payload.player.expressMastered ??
            defaultPlayer.expressMastered,
          cSharpMastered:
            action.payload.player.cSharpMastered ??
            defaultPlayer.cSharpMastered,
          reactNativeMastered:
            action.payload.player.reactNativeMastered ??
            defaultPlayer.reactNativeMastered,
          javaMastered:
            action.payload.player.javaMastered ?? defaultPlayer.javaMastered,
          cppMastered:
            action.payload.player.cppMastered ?? defaultPlayer.cppMastered,
          relationship:
            action.payload.player.relationship ?? defaultPlayer.relationship,
          rental: action.payload.player.rental ?? defaultPlayer.rental,
          possessions:
            action.payload.player.possessions ?? defaultPlayer.possessions,
        },
        locations: action.payload.locations ?? locations,
      };

    case "UPDATE_ENERGY":
      return {
        ...state,
        player: {
          ...state.player,
          energy: Math.min(
            100,
            Math.max(0, state.player.energy + action.payload.amount)
          ),
        },
      };

    case "START_WALKING":
      return {
        ...state,
        isWalking: true,
        targetLocation: action.payload.locationId,
      };

    case "MOVE_TO_LOCATION":
      return {
        ...state,
        player: {
          ...state.player,
          currentLocation: action.payload.locationId,
        },
        isWalking: false,
        targetLocation: null,
      };

    case "CHANGE_SCREEN":
      return {
        ...state,
        currentScreen: action.payload.screen,
      };

    case "LEARN_HOOK":
      const { hook, pointsEarned, energySpent } = action.payload;
      const updatedPlayerLearn = {
        ...state.player,
        points: state.player.points + pointsEarned,
        energy: Math.max(0, state.player.energy - energySpent),
        hooksMastered: {
          ...state.player.hooksMastered,
          [hook]: (state.player.hooksMastered[hook] || 0) + 1,
        },
      };
      return {
        ...state,
        player: updatedPlayerLearn,
      };

    case "WORK_AT_DEV":
      // Add defensive check for payload
      if (!action.payload || typeof action.payload !== "object") {
        console.error("Invalid WORK_AT_DEV payload:", action.payload);
        return {
          ...state,
          message: "Error: Invalid work action.",
        };
      }

      const { jobType, cashEarned, workEnergySpent, timeSpent } =
        action.payload;

      // Verify all required fields
      if (
        !jobType ||
        cashEarned === undefined ||
        workEnergySpent === undefined
      ) {
        console.error("Missing fields in WORK_AT_DEV payload:", action.payload);
        return {
          ...state,
          message: "Error: Incomplete work action data.",
        };
      }

      if (state.player.energy < workEnergySpent) {
        return {
          ...state,
          message: "Not enough energy to work!",
        };
      }

      return {
        ...state,
        player: {
          ...state.player,
          cash: state.player.cash + cashEarned,
          energy: state.player.energy - workEnergySpent,
        },
        message: `You worked as a ${jobType} and earned $${cashEarned}!`,
      };

    case "COMPLETE_QUIZ": {
      const {
        hook: quizTopic,
        pointsEarned: quizPoints,
        cashChange,
        energySpent: quizEnergy,
        masteryEarned,
      } = action.payload;
      const isNextJsTopic = Object.keys(nextJsData).includes(quizTopic);
      const isCssTopic = Object.keys(cssData).includes(quizTopic);
      const isPythonTopic = Object.keys(pythonData).includes(quizTopic);
      const isJavaScriptTopic = Object.keys(javaScriptData).includes(quizTopic);
      const isTypeScriptTopic = Object.keys(typeScriptData).includes(quizTopic);
      const isExpressTopic = Object.keys(expressData).includes(quizTopic);
      const isCSharpTopic = Object.keys(cSharpData).includes(quizTopic);
      const isReactNativeTopic =
        Object.keys(reactNativeData).includes(quizTopic);
      const isJavaTopic = Object.keys(javaData).includes(quizTopic);
      const isCppTopic = Object.keys(cppData).includes(quizTopic);

      return {
        ...state,
        player: {
          ...state.player,
          points: state.player.points + quizPoints,
          cash: Math.max(0, state.player.cash + cashChange),
          energy: Math.max(0, state.player.energy - quizEnergy),
          ...(isNextJsTopic
            ? {
                nextJsMastered: {
                  ...state.player.nextJsMastered,
                  ...(masteryEarned ? { [quizTopic]: 1 } : {}),
                },
              }
            : isCssTopic
              ? {
                  cssMastered: {
                    ...state.player.cssMastered,
                    ...(masteryEarned ? { [quizTopic]: 1 } : {}),
                  },
                }
              : isPythonTopic
                ? {
                    pythonMastered: {
                      ...state.player.pythonMastered,
                      ...(masteryEarned ? { [quizTopic]: 1 } : {}),
                    },
                  }
                : isJavaScriptTopic
                  ? {
                      javaScriptMastered: {
                        ...state.player.javaScriptMastered,
                        ...(masteryEarned ? { [quizTopic]: 1 } : {}),
                      },
                    }
                  : isCppTopic
                    ? {
                        cppMastered: {
                          ...state.player.cppMastered,
                          ...(masteryEarned ? { [quizTopic]: 1 } : {}),
                        },
                      }
                    : isTypeScriptTopic
                      ? {
                          typeScriptMastered: {
                            ...state.player.typeScriptMastered,
                            ...(masteryEarned ? { [quizTopic]: 1 } : {}),
                          },
                        }
                      : isExpressTopic
                        ? {
                            expressMastered: {
                              ...state.player.expressMastered,
                              ...(masteryEarned ? { [quizTopic]: 1 } : {}),
                            },
                          }
                        : isCSharpTopic
                          ? {
                              cSharpMastered: {
                                ...state.player.cSharpMastered,
                                ...(masteryEarned ? { [quizTopic]: 1 } : {}),
                              },
                            }
                          : isReactNativeTopic
                            ? {
                                reactNativeMastered: {
                                  ...state.player.reactNativeMastered,
                                  ...(masteryEarned ? { [quizTopic]: 1 } : {}),
                                },
                              }
                            : isJavaTopic
                              ? {
                                  javaMastered: {
                                    ...state.player.javaMastered,
                                    ...(masteryEarned
                                      ? { [quizTopic]: 1 }
                                      : {}),
                                  },
                                }
                              : {
                                  hooksMastered: {
                                    ...state.player.hooksMastered,
                                    ...(masteryEarned
                                      ? { [quizTopic]: 1 }
                                      : {}),
                                  },
                                }),
        },
      };
    }

    case "START_RELATIONSHIP":
      return {
        ...state,
        player: {
          ...state.player,
          relationship: {
            ...state.player.relationship,
            isDating: true,
            partner: action.payload.partner,
            dateCount: 1,
            happiness: 30,
            health: state.player.relationship?.health || 80,
          },
        },
        message: `You've started dating ${action.payload.partner.name}!`,
      };

    case "GO_ON_DATE":
      return {
        ...state,
        player: {
          ...state.player,
          cash: (state.player.cash || 0) - action.payload.cost,
          happiness: Math.min(
            (state.player.happiness || 0) + action.payload.happinessBoost,
            100
          ),
          relationship: {
            ...state.player.relationship,
            dateCount: state.player.relationship.dateCount + 1,
            happiness: Math.min(
              (state.player.relationship.happiness || 0) + 15,
              100
            ),
            health: Math.min(
              (state.player.relationship.health || 80) +
                action.payload.healthBoost,
              100
            ),
          },
        },
        message: `You had a wonderful date with ${action.payload.partner.name} and your relationship grew stronger!`,
      };

    case "BREAK_UP":
      const partnerName =
        state.player.relationship.partner?.name || "your partner";
      return {
        ...state,
        player: {
          ...state.player,
          happiness: Math.max((state.player.happiness || 0) - 15, 0),
          relationship: {
            isDating: false,
            partner: null,
            dateCount: 0,
            happiness: 0,
            health: state.player.relationship?.health || 80,
          },
        },
        message: `You broke up with ${partnerName}. It's for the best, but it still hurts.`,
      };

    case "REST":
      return {
        ...state,
        player: {
          ...state.player,
          energy: 100,
        },
      };

    case "RENT_APARTMENT":
      return {
        ...state,
        player: {
          ...state.player,
          cash: state.player.cash - action.payload.deposit,
          rental: {
            ...state.player.rental,
            hasApartment: true,
            lastPaidWeek: state.player.week,
            rentAmount: action.payload.rentAmount,
            rentDue: false,
            missedPayments: 0,
            apartmentTier: action.payload.apartmentTier || "Basic",
          },
        },
        message: `You rented an apartment for $${action.payload.rentAmount} per month with a $${action.payload.deposit} deposit.`,
      };

    case "PAY_RENT":
      return {
        ...state,
        player: {
          ...state.player,
          cash: state.player.cash - state.player.rental.rentAmount,
          rental: {
            ...state.player.rental,
            lastPaidWeek: state.player.week,
            rentDue: false,
            missedPayments: 0,
          },
        },
        message: `You paid your rent of $${state.player.rental.rentAmount}.`,
      };

    case "UPGRADE_APARTMENT":
      const { upgradeFee, newRentAmount } = action.payload;
      const apartmentTier =
        newRentAmount === 200
          ? "Luxury"
          : newRentAmount === 100
            ? "Standard"
            : "Basic";
      if (state.player.cash < upgradeFee) {
        return {
          ...state,
          message: `Not enough cash to upgrade to ${apartmentTier} apartment!`,
        };
      }
      return {
        ...state,
        player: {
          ...state.player,
          cash: state.player.cash - upgradeFee,
          rental: {
            ...state.player.rental,
            rentAmount: newRentAmount,
            apartmentTier, // Use computed tier
            lastPaidWeek: state.player.week,
            rentDue: false,
          },
        },
        message: `You upgraded to a ${apartmentTier} apartment for $${newRentAmount} per month!`,
      };

    case "CHECK_RENT_DUE":
      const weeksSinceLastPayment = state.player.rental.lastPaidWeek
        ? state.player.week - state.player.rental.lastPaidWeek
        : 0;
      if (state.player.rental.hasApartment && weeksSinceLastPayment >= 4) {
        return {
          ...state,
          player: {
            ...state.player,
            rental: {
              ...state.player.rental,
              rentDue: true,
              e: true,
              missedPayments: (state.player.rental.missedPayments || 0) + 1,
            },
            happiness: Math.max(state.player.happiness - 15, 0),
          },
          message: "Your rent is due! Visit the Rental Office to pay.",
        };
      }
      return state;

    case "USE_TIME":
      const newWeek =
        state.player.week + Math.floor(action.payload.amount / 100);
      const checkRent =
        newWeek > state.player.week && state.player.rental.hasApartment;
      return {
        ...state,
        player: {
          ...state.player,
          week: newWeek,
        },
        ...(checkRent
          ? { message: "A new week has started. Check your rent status." }
          : {}),
      };

    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload.text,
      };

    case "SET_QUIZ_FEEDBACK":
      return {
        ...state,
        quizFeedback: {
          score: action.payload.score,
          totalQuestions: action.payload.totalQuestions,
          incorrectAnswers: action.payload.incorrectAnswers,
          mastered: action.payload.mastered,
        },
      };
    case "DO_LEISURE_ACTIVITY":
      return {
        ...state,
        player: {
          ...state.player,
          cash: (state.player.cash || 0) - action.payload.cost,
          happiness: Math.min(
            (state.player.happiness || 0) + action.payload.happiness,
            100
          ),
          energy: (state.player.energy || 0) - action.payload.energy,
        },
      };

    case "ADVANCE_WEEK_AND_REST": {
      const newState = {
        ...state,
        player: {
          ...state.player,
          week: state.player.week + 1,
          energy: 100,
        },
        currentScreen: "map",
        message: "Energy too low! Advanced to next week and restored energy.",
      };

      if (newState.player.rental.hasApartment) {
        const weeksSinceLastPayment = newState.player.rental.lastPaidWeek
          ? newState.player.week - newState.player.rental.lastPaidWeek
          : 0;
        if (weeksSinceLastPayment >= 4) {
          return {
            ...newState,
            player: {
              ...newState.player,
              rental: {
                ...newState.player.rental,
                rentDue: true,
                missedPayments:
                  (newState.player.rental.missedPayments || 0) + 1,
              },
              happiness: Math.max(newState.player.happiness - 15, 0),
            },
            currentScreen: "map",
            message: "Energy too low! Advanced to next week. Your rent is due!",
          };
        }
      }
      return newState;
    }

    default:
      return state;
  }
}

export default gameReducer;
