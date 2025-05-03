// import axios from "axios"
// import OpenAI from "openai"
// import { CoachingOptions } from "./Options"

// export const getToken = async () => {
//     const result = await axios.get('/api/getToken')
//     return result.data
// }


// const openai = new OpenAI({
//     baseURL: "https://openrouter.ai/api/v1",
//     apiKey: process.env.NEXT_PUBLIC_AI_OPENROUTER,
//     dangerouslyAllowBrowser: true

// })

// export const AIModel = async (topic, coachingOption, msg) => {

//     const option = CoachingOptions.find((item) => item.name == coachingOption)
//     const PROMPT = (option.prompt).replace('{user_topic}', topic)

//     const completion = await openai.chat.completions.create({
//         model: "google/gemma-3-27b-it:free",
//         messages: [
//             { role: 'assistant', content: PROMPT },
//             { role: "user", content: msg }
//         ],
//     })
//     console.log(completion.choices[0].message)

// }








// import axios from "axios"
// import OpenAI from "openai"
// import { CoachingOptions } from "./Options"

// export const getToken = async () => {
//     const result = await axios.get('/api/getToken')
//     return result.data
// }

// const openai = new OpenAI({
//     baseURL: "https://openrouter.ai/api/v1",
//     apiKey: process.env.NEXT_PUBLIC_AI_OPENROUTER,
//     dangerouslyAllowBrowser: true
// })

// export const AIModel = async (topic, coachingOption, msg) => {
//     try {
//         // Find the coaching option from the imported CoachingOptions array
//         const option = CoachingOptions.find((item) => item.name === coachingOption)

//         // Check if option and option.prompt exist before using
//         if (!option || !option.prompt) {
//             console.error("Coaching option or prompt not found:", coachingOption)
//             return "Error: Coaching configuration not found"
//         }

//         const PROMPT = option.prompt.replace('{user_topic}', topic)

//         const completion = await openai.chat.completions.create({
//             model: "google/gemma-3-27b-it:free",
//             messages: [
//                 { role: 'assistant', content: PROMPT },
//                 { role: "user", content: msg }
//             ],
//         })

//         return completion.choices[0].message.content
//     } catch (error) {
//         console.error("Error in AIModel:", error)
//         return "Error processing your request"
//     }
// }



import axios from "axios";
import OpenAI from "openai";
import { CoachingOptions } from "./Options";
import { PollyClient, SynthesizeSpeechCommand, DescribeVoicesCommand } from "@aws-sdk/client-polly";

// Cache for valid VoiceIds to avoid repeated API calls
let cachedVoiceIds = null;

export const getToken = async () => {
    const result = await axios.get('/api/getToken');
    return result.data;
};

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.NEXT_PUBLIC_AI_OPENROUTER,
    dangerouslyAllowBrowser: true,
});

export const AIModel = async (topic, coachingOption, lastTwoConversation) => {
    try {
        const option = CoachingOptions.find((item) => item.name === coachingOption);
        if (!option || !option.prompt) {
            console.error("Coaching option or prompt not found:", coachingOption);
            return "Error: Coaching configuration not found";
        }

        const PROMPT = option.prompt.replace('{user_topic}', topic || "");
        const conversationHistory = Array.isArray(lastTwoConversation) ? lastTwoConversation : [];

        console.log("Sending request to OpenAI API with:", {
            model: "openai/gpt-3.5-turbo", // Changed model to a more widely supported one
            messagesCount: conversationHistory.length + 1
        });

        // Check API key
        if (!process.env.NEXT_PUBLIC_AI_OPENROUTER) {
            console.error("Missing OpenRouter API key");
            return "Error: API configuration is missing";
        }

        const completion = await openai.chat.completions.create({
            model: "openai/gpt-3.5-turbo", // Changed from Gemma to GPT
            messages: [
                { role: 'system', content: PROMPT }, // Changed from 'assistant' to 'system'
                ...conversationHistory,
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });

        console.log("API Response received:", completion);

        if (!completion) {
            console.error("Received null or undefined response");
            return "Error: No response received from the AI service";
        }

        if (typeof completion !== 'object') {
            console.error("Received non-object response:", completion);
            return "Error: Invalid response format from the AI service";
        }

        if (!completion.choices || !Array.isArray(completion.choices) || completion.choices.length === 0) {
            console.error("Response missing choices array:", completion);
            return "Error: The AI service returned an incomplete response";
        }

        const responseContent = completion.choices[0]?.message?.content;
        if (responseContent === undefined || responseContent === null || responseContent.trim() === "") {
            console.warn("AI model returned null, undefined or empty content");
            return "I'm sorry, I couldn't generate a proper response. Please try again.";
        }

        return String(responseContent);
    } catch (error) {
        console.error("Error in AIModel:", error);

        // More detailed error information
        if (error.response) {
            console.error("API error response:", {
                status: error.response.status,
                data: error.response.data
            });
        }

        // Provide a more specific error message based on the error
        if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
            return "Error: Unable to connect to the AI service. Please check your internet connection.";
        } else if (error.response && error.response.status === 401) {
            return "Error: Authentication failed. Please check your API key configuration.";
        } else if (error.response && error.response.status === 429) {
            return "Error: Rate limit exceeded. Please try again later.";
        } else if (error.message && error.message.includes("INVALID_ARGUMENT")) {
            return "Error: The model parameters are invalid. Using a different model might help.";
        }

        return "Error processing your request. Please try again later.";
    }
};

// Also update AIModelToGenerateFeedbackAndNotes function
export const AIModelToGenerateFeedbackAndNotes = async (coachingOption, conversation) => {
    try {
        const option = CoachingOptions.find((item) => item.name === coachingOption);
        if (!option || !option.summeryPrompt) {
            console.error("Coaching option or summary prompt not found:", coachingOption);
            return { content: "Error: Coaching configuration not found" };
        }

        const PROMPT = option.summeryPrompt;

        console.log("Sending feedback request to OpenAI API");

        const completion = await openai.chat.completions.create({
            model: "openai/gpt-3.5-turbo", // Changed model
            messages: [
                ...conversation,
                { role: 'system', content: PROMPT }, // Changed role
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });

        console.log("Feedback API Response received:", completion);

        if (!completion || !completion.choices || !completion.choices.length) {
            console.error("Unexpected feedback API response structure:", completion);
            return { content: "Error: Received an unexpected response from the AI service" };
        }

        return completion.choices[0]?.message || { content: "No response generated" };
    } catch (error) {
        console.error("Error in AIModelToGenerateFeedbackAndNotes:", error);

        if (error.response) {
            console.error("API error response for feedback:", {
                status: error.response.status,
                data: error.response.data
            });
        }

        return { content: "Error processing your feedback request" };
    }
}









export const ListAvailableVoices = async () => {
    try {
        const pollyClient = new PollyClient({
            region: "eu-north-1",
            credentials: {
                accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
                secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY || "",
            },
        });

        const command = new DescribeVoicesCommand({
            Engine: "standard", // Check voices for the standard engine
            LanguageCode: "en-US", // Optional: filter by language, remove to get all
        });

        const response = await pollyClient.send(command);
        const voices = response.Voices || [];

        console.log("Available voices in eu-north-1 (standard engine):");
        voices.forEach((voice) => {
            console.log(`- VoiceId: ${voice.Id}, Language: ${voice.LanguageCode}, Name: ${voice.Name}, Gender: ${voice.Gender}`);
        });

        return voices.map((voice) => voice.Id);
    } catch (error) {
        console.error("Error listing available voices:", error);
        return [];
    }
};

export const ConvertTextToSpeech = async (text, expertName) => {
    try {
        if (!text || typeof text !== "string" || !text.trim()) {
            console.warn("ConvertTextToSpeech received invalid text:", text);
            return null;
        }

        if (!expertName || typeof expertName !== "string" || !expertName.trim()) {
            console.warn("ConvertTextToSpeech received invalid expertName:", expertName);
            return null;
        }

        // Fetch valid VoiceIds if not cached
        if (!cachedVoiceIds) {
            cachedVoiceIds = await ListAvailableVoices();
            if (!cachedVoiceIds.length) {
                console.error("No valid VoiceIds available, defaulting to Joanna");
                cachedVoiceIds = ["Joanna"]; // Fallback to Joanna
            }
        }

        // Map common typos to correct VoiceIds
        const voiceIdMap = {
            Mathew: "Matthew", // Handle typo
        };
        const normalizedVoiceId = voiceIdMap[expertName.trim()] || expertName.trim();
        const selectedVoiceId = cachedVoiceIds.includes(normalizedVoiceId) ? normalizedVoiceId : "Joanna";
        if (normalizedVoiceId !== selectedVoiceId) {
            console.warn(`Invalid VoiceId '${normalizedVoiceId}', defaulting to '${selectedVoiceId}'`);
        }

        console.log(`ConvertTextToSpeech: Using VoiceId '${selectedVoiceId}' for text: '${text.substring(0, 50)}...'`);

        const pollyClient = new PollyClient({
            region: "eu-north-1",
            credentials: {
                accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
                secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY || "",
            },
        });

        const command = new SynthesizeSpeechCommand({
            Text: text,
            OutputFormat: "mp3",
            VoiceId: selectedVoiceId,
            Engine: "standard",
        });

        const { AudioStream } = await pollyClient.send(command);

        if (!AudioStream) {
            console.error("No audio stream returned from Polly");
            return null;
        }

        const audioArrayBuffer = await AudioStream.transformToByteArray();
        const audioBlob = new Blob([audioArrayBuffer], { type: "audio/mp3" });
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log("ConvertTextToSpeech: Audio URL generated:", audioUrl);

        return audioUrl;
    } catch (error) {
        console.error("Error in ConvertTextToSpeech:", error);
        if (error.name === "ValidationException") {
            console.error("Validation error details:", error.message);
        }
        return null;
    }
};









