// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
// import { encouragementQuotes } from "@/data/encouragementQuotes";


// export default function EncouragementModal({ open, onOpenChange }) {
//     // Select a random quote
//     const randomQuote =
//         encouragementQuotes[Math.floor(Math.random() * encouragementQuotes.length)];

//     return (
//         <AlertDialog open={open} onOpenChange={onOpenChange}>
//             <AlertDialogContent>
//                 <AlertDialogHeader>
//                     <AlertDialogTitle>A Moment of Inspiration</AlertDialogTitle>
//                     <AlertDialogDescription className="text-lg text-gray-200">
//                         {randomQuote}
//                     </AlertDialogDescription>
//                 </AlertDialogHeader>
//                 <AlertDialogFooter>
//                     <AlertDialogAction>Close</AlertDialogAction>
//                 </AlertDialogFooter>
//             </AlertDialogContent>
//         </AlertDialog>
//     );
// }




import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { encouragementQuotes } from "@/data/encouragementQuotes";
import { motion } from "framer-motion";

export default function EncouragementModal({ open, onOpenChange }) {
    // Select a random quote
    const randomQuote =
        encouragementQuotes[Math.floor(Math.random() * encouragementQuotes.length)];

    // Animation variants for the modal content
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2, ease: "easeIn" } },
    };

    // Animation variants for the quote
    const quoteVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } },
    };

    // Animation variants for the button
    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.3 } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <AlertDialogContent className="bg-gradient-to-br from-purple-900 to-blue-800 border-none rounded-lg shadow-2xl max-w-md">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl font-bold text-yellow-400 text-center">
                            A Moment of Inspiration
                        </AlertDialogTitle>
                        <motion.div variants={quoteVariants} initial="hidden" animate="visible">
                            <AlertDialogDescription className="text-lg text-gray-100 font-medium text-center italic">
                                "{randomQuote}"
                            </AlertDialogDescription>
                        </motion.div>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="mt-6">
                        <motion.div
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <AlertDialogAction className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-semibold py-2 px-6 rounded-full transition-colors">
                                Close
                            </AlertDialogAction>
                        </motion.div>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </motion.div>
        </AlertDialog>
    );
}