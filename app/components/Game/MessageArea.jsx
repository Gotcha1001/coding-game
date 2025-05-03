



import React, { useEffect, useState } from 'react';

export default function MessageArea({ message, className }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (message && !messages.includes(message)) {
            setMessages(prev => [message, ...prev].slice(0, 5));
            // Clear the message after 5 seconds
            const timeout = setTimeout(() => {
                setMessages(prev => prev.filter(m => m !== message));
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [message]);

    return (
        <div className={`bg-black/50 mb-4 rounded-lg p-3 text-center border border-yellow-500 ${className}`}>
            <p className="text-yellow-300">{messages[0] || 'No messages yet'}</p>
        </div>
    );
}