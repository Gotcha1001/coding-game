"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

export default function PCWorkspace({ onClose }) {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

    const handleSearch = async () => {
        if (!query.trim()) {
            toast.error("Please enter a search query");
            return;
        }

        setIsLoading(true);
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = `As a coding expert, help me with this programming question: ${query}. Provide a detailed explanation with code examples if applicable.`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            setResponse(text);
            setSearchHistory(prev => [...prev, { query, response: text }]);
            toast.success("Search completed!");
        } catch (error) {
            console.error('Error:', error);
            toast.error("Failed to get response from AI");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50"
        >
            <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-[#0a0a0a] rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-[#ff00ff]/20 shadow-[0_0_15px_rgba(255,0,255,0.3)] relative"
            >
                {/* Cyberpunk grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <motion.div
                    className="p-4 border-b border-[#ff00ff]/20 flex justify-between items-center bg-black/80 backdrop-blur-sm relative"
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.9)" }}
                >
                    <motion.h2
                        className="text-xl font-bold text-transparent text-white bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#9d00ff] to-[#00ffff] animate-pulse"
                        whileHover={{ scale: 1.05 }}
                    >
                        PC Workspace
                    </motion.h2>
                    <motion.button
                        onClick={onClose}
                        className="text-[#ff00ff] hover:text-[#00ffff] transition-colors"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ✕
                    </motion.button>
                </motion.div>

                <div className="p-4">
                    <div className="flex gap-2 mb-4">
                        <motion.input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ask a coding question..."
                            className="flex-1 bg-black/80 text-[#00ffff] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff00ff] border border-[#ff00ff]/20 placeholder-[#ff00ff]/50"
                            whileFocus={{ scale: 1.02 }}
                        />
                        <motion.button
                            onClick={handleSearch}
                            disabled={isLoading}
                            className="bg-gradient-to-r from-[#ff00ff] via-[#9d00ff] to-[#00ffff] hover:from-[#ff00ff]/80 hover:to-[#00ffff]/80 text-black font-bold px-6 py-2 rounded-lg disabled:opacity-50 transition-all duration-200 shadow-[0_0_10px_rgba(255,0,255,0.5)]"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,0,255,0.7)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isLoading ? 'Searching...' : 'Search'}
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            className="bg-black/80 rounded-lg p-4 h-[60vh] overflow-y-auto border border-[#ff00ff]/20 backdrop-blur-sm relative"
                            whileHover={{ borderColor: "rgba(255,0,255,0.4)" }}
                        >
                            <motion.h3
                                className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#9d00ff] to-[#00ffff] mb-2"
                                whileHover={{ scale: 1.02 }}
                            >
                                Current Response
                            </motion.h3>
                            <AnimatePresence mode="wait">
                                {response ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="prose prose-invert max-w-none"
                                    >
                                        <pre className="whitespace-pre-wrap text-sm text-[#00ffff] bg-black/50 p-4 rounded-lg border border-[#ff00ff]/20">
                                            {response}
                                        </pre>
                                    </motion.div>
                                ) : (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-[#ff00ff]/50"
                                    >
                                        Your search results will appear here...
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <motion.div
                            className="bg-black/80 rounded-lg p-4 h-[60vh] overflow-y-auto border border-[#ff00ff]/20 backdrop-blur-sm relative"
                            whileHover={{ borderColor: "rgba(255,0,255,0.4)" }}
                        >
                            <motion.h3
                                className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#9d00ff] to-[#00ffff] mb-2"
                                whileHover={{ scale: 1.02 }}
                            >
                                Search History
                            </motion.h3>
                            <AnimatePresence mode="wait">
                                {searchHistory.length > 0 ? (
                                    <motion.div
                                        className="space-y-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {searchHistory.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="border-b border-[#ff00ff]/20 pb-4"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ x: 5 }}
                                            >
                                                <p className="text-[#ff00ff] font-medium mb-2">Q: {item.query}</p>
                                                <p className="text-[#00ffff]/80 text-sm line-clamp-3 bg-black/50 p-3 rounded-lg border border-[#ff00ff]/10">
                                                    {item.response}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-[#ff00ff]/50"
                                    >
                                        No search history yet...
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
} 