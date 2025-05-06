import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function ImageGenerator({ onClose }) {
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedImage, setGeneratedImage] = useState(null);

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            toast.error('Please enter a prompt');
            return;
        }

        setIsGenerating(true);
        try {
            const response = await fetch('/api/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate image');
            }

            if (!data.imageUrl) {
                throw new Error('No image URL received from the server');
            }

            setGeneratedImage(data.imageUrl);
            toast.success('Image generated successfully!');
        } catch (error) {
            console.error('Error generating image:', error);
            toast.error(error.message || 'Failed to generate image. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleDownload = async () => {
        try {
            const response = await fetch(generatedImage);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `generated-image-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            toast.success('Image downloaded successfully!');
        } catch (error) {
            console.error('Error downloading image:', error);
            toast.error('Failed to download image');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        >
            <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">AI Image Generator</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe the image you want to generate..."
                        className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="flex justify-center gap-4 mb-4">
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className={`px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2 ${isGenerating
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-purple-600 hover:bg-purple-700'
                            }`}
                    >
                        {isGenerating ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Generating...</span>
                            </>
                        ) : (
                            'Generate Image'
                        )}
                    </button>
                    {generatedImage && (
                        <button
                            onClick={handleDownload}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Download
                        </button>
                    )}
                </div>

                {generatedImage && (
                    <div className="mt-4">
                        <img
                            src={generatedImage}
                            alt="Generated"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                )}

                <div className="mt-4 text-sm text-gray-400">
                    <p>Powered by Stable Diffusion. Generate unique images based on your descriptions!</p>
                    <p className="mt-1">Tip: Be specific in your descriptions for better results.</p>
                    <p className="mt-1 text-amber-400">Note: This model has limitations with face generation and requires a Replicate API key. Free tier includes ~150-200 images per month. For best results, focus on landscapes, objects, or scenes without people.</p>
                </div>
            </div>
        </motion.div>
    );
} 