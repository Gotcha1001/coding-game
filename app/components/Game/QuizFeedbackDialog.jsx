import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function QuizFeedbackDialog({ open, onOpenChange, feedback, onClose }) {
    if (!feedback) return null;

    const { score, totalQuestions, incorrectAnswers, mastered } = feedback;

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="bg-gray-800 text-white rounded-lg max-w-lg">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-bold">
                        {mastered ? 'Congratulations!' : 'Quiz Results'}
                    </AlertDialogTitle>
                    <AlertDialogDescription asChild className="text-gray-300">
                        {mastered ? (
                            <p>You mastered this topic with a perfect score!</p>
                        ) : (
                            <p>
                                You scored {score}/{totalQuestions} correct. You didn’t master this topic completely. Please try again to achieve a perfect score!
                            </p>
                        )}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                {incorrectAnswers.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-yellow-400">Incorrect Answers:</h3>
                        <ul className="mt-2 space-y-4">
                            {incorrectAnswers.map((item, index) => (
                                <li key={index} className="border-b border-gray-600 pb-2">
                                    <p className="font-medium">Question: {item.question}</p>
                                    <p className="text-red-400">Your Answer: {item.playerAnswer}</p>
                                    <p className="text-green-400">Correct Answer: {item.correctAnswer}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <AlertDialogFooter className="mt-6">
                    <AlertDialogAction
                        onClick={onClose}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
                    >
                        {mastered ? 'Study Another Topic' : 'Try Again'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}