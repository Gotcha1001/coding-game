// "use client"
// import { Button } from '@/components/ui/button'
// import { api } from '@/convex/_generated/api'
// import { AIModel, ConvertTextToSpeech, getToken } from '@/services/GlobalServices'
// import { CoachingExpert } from '@/services/Options'
// import { UserButton } from '@stackframe/stack'
// import { RealtimeTranscriber } from 'assemblyai'
// import { useMutation, useQuery } from 'convex/react'
// import { Loader2Icon } from 'lucide-react'
// // import { s } from 'framer-motion/dist/types.d-DDSxwf0n'
// import dynamic from 'next/dynamic'
// import Image from 'next/image'
// import { useParams } from 'next/navigation'
// import React, { useContext, useEffect, useRef, useState } from 'react'
// import ChatBox from './_components/ChatBox'
// import { toast } from 'sonner'
// import { UserContext } from '@/app/_context/UserContext'

// // Import RecordRTC dynamically
// const RecordRTC = dynamic(() => import('recordrtc'), { ssr: false })

// function DiscussionRoom() {
//     const { roomid } = useParams()
//     const { userData, setUserData } = useContext(UserContext)
//     const DiscussionRoomData = useQuery(api.DiscussionRoom.GetDiscussionRoom, { id: roomid })
//     const [expert, setExpert] = useState()
//     const [enableMic, setEnableMic] = useState(false)
//     const realtimeTranscriber = useRef(null)
//     const recorder = useRef(null)
//     const streamRef = useRef(null) // Store stream for cleanup
//     const [transcribe, setTranscribe] = useState()
//     const [isResponding, setIsResponding] = useState(false)
//     const [conversation, setConversation] = useState([])
//     const [audioUrl, setAudioUrl] = useState()
//     const [loading, setLoading] = useState(false)
//     const [enableFeedbackNotes, setEnableFeedbackNotes] = useState(false)

//     const UpdateConversation = useMutation(api.DiscussionRoom.UpdateConversation)

//     const updateUserToken = useMutation(api.users.UpdateUserToken)

//     let silenceTimeout;
//     let texts = {}

//     useEffect(() => {
//         if (DiscussionRoomData) {
//             const Expert = CoachingExpert.find(item => item.name == DiscussionRoomData.expertName)
//             console.log("Expert:", Expert)
//             setExpert(Expert)
//         }
//     }, [DiscussionRoomData])

//     // AI response useEffect - triggers when conversation changes
//     useEffect(() => {
//         async function fetchAIResponse() {
//             const lastMessage = conversation[conversation.length - 1];
//             if (
//                 lastMessage &&
//                 lastMessage.role === "user" &&
//                 DiscussionRoomData &&
//                 !isResponding
//             ) {
//                 setIsResponding(true);
//                 try {
//                     const lastTwoMsg = conversation.slice(-2);
//                     console.log("Sending to AI model:", {
//                         topic: DiscussionRoomData.topic,
//                         coachingOption: DiscussionRoomData.coachingOption,
//                         lastTwoMsg,
//                         expertName: DiscussionRoomData.expertName,
//                     });

//                     const aiResp = await AIModel(
//                         DiscussionRoomData.topic,
//                         DiscussionRoomData.coachingOption,
//                         lastTwoMsg
//                     );
//                     console.log("Raw AI Response:", aiResp);

//                     const url = await ConvertTextToSpeech(aiResp, DiscussionRoomData.expertName);
//                     console.log("AUDIO URL:", url);
//                     if (!url) {
//                         console.error("Failed to generate audio URL for expertName:", DiscussionRoomData.expertName);
//                         // Optionally set a fallback message in conversation
//                         setConversation((prev) => [
//                             ...prev,
//                             {
//                                 role: "assistant",
//                                 content: "Sorry, I couldn't generate audio for my response. Here's my reply: " + aiResp,
//                             },
//                         ]);
//                     } else {
//                         setAudioUrl(url);
//                         setConversation((prev) => {
//                             if (prev[prev.length - 1]?.role === "user") {
//                                 return [...prev, { role: "assistant", content: aiResp }];
//                             }
//                             return prev;
//                         });
//                     }
//                 } catch (error) {
//                     console.error("Error getting AI response:", error);
//                     setConversation((prev) => [
//                         ...prev,
//                         {
//                             role: "assistant",
//                             content: "Sorry, I encountered an error processing your request.",
//                         },
//                     ]);
//                 } finally {
//                     setIsResponding(false);
//                 }
//             }
//         }

//         fetchAIResponse();
//     }, [conversation, DiscussionRoomData, isResponding]);

//     const connectToServer = async () => {
//         setEnableMic(true)
//         setLoading(true)
//         toast.success("Conntected...")

//         try {
//             realtimeTranscriber.current = new RealtimeTranscriber({
//                 token: await getToken(),
//                 sampleRate: 16_000,
//                 encoding: "pcm_s16le", // Fix audio format
//                 endUtteranceSilenceThreshold: 2000 // Trigger FinalTranscript
//             })

//             realtimeTranscriber.current.on('transcript', async (transcript) => {
//                 console.log("Transcript:", transcript)
//                 //when it runs define a message here
//                 let msg = ''

//                 // for the final script
//                 if (transcript.message_type == 'FinalTranscript') {
//                     // Don't add empty transcripts
//                     if (transcript.text.trim()) {
//                         setConversation(prev => [...prev, {
//                             role: 'user',
//                             content: transcript.text
//                         }])
//                     }
//                     // AI model call is now handled by useEffect
//                 }

//                 if (transcript.message_type === "PartialTranscript") {
//                     console.log("Partial:", transcript.text)
//                 } else if (transcript.message_type === "FinalTranscript") {
//                     console.log("Final:", transcript.text)
//                 }

//                 // OUTPUT THE TEXT
//                 texts[transcript.audio_start] = transcript?.text;
//                 const keys = Object.keys(texts)
//                 keys.sort((a, b) => a - b);
//                 for (const key of keys) {
//                     if (texts[key]) {
//                         msg += `${texts[key]}`
//                     }
//                 }
//                 // save the messages in a state
//                 setTranscribe(msg)
//             })

//             await realtimeTranscriber.current.connect()

//             if (typeof window !== "undefined" && typeof navigator !== "undefined") {
//                 const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
//                 streamRef.current = stream
//                 const RecordRTCModule = (await import("recordrtc")).default
//                 recorder.current = new RecordRTCModule(stream, {
//                     type: 'audio',
//                     mimeType: 'audio/wav', // Fix audio format
//                     recorderType: RecordRTCModule.StereoAudioRecorder,
//                     timeSlice: 250,
//                     desiredSampRate: 16000,
//                     numberOfAudioChannels: 1,
//                     bufferSize: 4096,
//                     audioBitsPerSecond: 128000,
//                     ondataavailable: async (blob) => {
//                         if (!realtimeTranscriber.current) return
//                         clearTimeout(silenceTimeout)
//                         const buffer = await blob.arrayBuffer()
//                         realtimeTranscriber.current.sendAudio(buffer)
//                         silenceTimeout = setTimeout(() => {
//                             console.log("User Stopped Talking")
//                         }, 2000)
//                     }
//                 })
//                 recorder.current.startRecording()
//             }
//         } catch (error) {
//             console.error("Error connecting to server:", error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     const disconnect = async (e) => {
//         e.preventDefault()
//         setLoading(true)
//         try {
//             if (recorder.current) {
//                 recorder.current.stopRecording()
//                 recorder.current = null
//             }
//             if (streamRef.current) {
//                 streamRef.current.getTracks().forEach(track => track.stop())
//                 streamRef.current = null
//             }
//             if (realtimeTranscriber.current) {
//                 await realtimeTranscriber.current.close()
//                 realtimeTranscriber.current = null
//             }
//         } catch (error) {
//             console.error("Error disconnecting:", error)
//         } finally {
//             setEnableMic(false)
//             toast.success("Disconnected...")
//             await UpdateConversation({
//                 id: DiscussionRoomData._id,
//                 conversation: conversation
//             })

//             setLoading(false)
//             setEnableFeedbackNotes(true)
//         }
//     }







//     return (
//         <div className='-mt-12'>
//             <h2 className='text-lg font-bold'>{DiscussionRoomData?.coachingOption}</h2>
//             <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
//                 <div className='lg:col-span-2'>
//                     <div className="h-[60vh] bg-secondary rounded-4xl border flex flex-col items-center justify-center relative">
//                         {expert?.avatar ? (
//                             <Image
//                                 src={expert.avatar}
//                                 alt='Avatar'
//                                 height={200}
//                                 width={200}
//                                 className='h-[80px] w-[80px] rounded-full object-cover animate-pulse'
//                             />
//                         ) : null}
//                         <h2>{expert?.name}</h2>
//                         <audio src={audioUrl} type="audio/mp3" autoPlay />
//                         <div className='p-5 bg-gray-200 px-10 rounded-lg absolute bottom-10 right-10'>
//                             <UserButton />
//                         </div>
//                     </div>
//                     <div className='mt-5 flex items-center justify-center'>
//                         {!enableMic ? (
//                             <Button onClick={connectToServer} disabled={loading} variant="sex">
//                                 {loading && <Loader2Icon className='animate-spin' />} Connect</Button>
//                         ) : (
//                             <Button onClick={disconnect} disabled={loading} variant="destructive">
//                                 {loading && <Loader2Icon className='animate-spin' />} Disconnect</Button>
//                         )}
//                     </div>
//                 </div>
//                 <div>
//                     <ChatBox conversation={conversation} enableFeedbackNotes={enableFeedbackNotes}
//                         coachingOption={DiscussionRoomData?.coachingOption}
//                     />
//                 </div>
//             </div>
//             <div>
//                 <h2 className='text-bold font-indigo-500'>{transcribe}</h2>
//             </div>
//         </div>
//     )
// }

// export default DiscussionRoom




"use client"
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { AIModel, ConvertTextToSpeech, getToken } from '@/services/GlobalServices'
import { CoachingExpert } from '@/services/Options'
import { UserButton } from '@stackframe/stack'
import { RealtimeTranscriber } from 'assemblyai'
import { useMutation, useQuery } from 'convex/react'
import { Loader2Icon } from 'lucide-react'
// import { s } from 'framer-motion/dist/types.d-DDSxwf0n'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatBox from './_components/ChatBox'
import { toast } from 'sonner'
import { UserContext } from '@/app/_context/UserContext'
import Webcam from 'react-webcam'

// Import RecordRTC dynamically
const RecordRTC = dynamic(() => import('recordrtc'), { ssr: false })

function DiscussionRoom() {
    const { roomid } = useParams()
    const { userData, setUserData } = useContext(UserContext)
    const DiscussionRoomData = useQuery(api.DiscussionRoom.GetDiscussionRoom, { id: roomid })
    const [expert, setExpert] = useState()
    const [enableMic, setEnableMic] = useState(false)
    const realtimeTranscriber = useRef(null)
    const recorder = useRef(null)
    const streamRef = useRef(null) // Store stream for cleanup
    const [transcribe, setTranscribe] = useState()
    const [isResponding, setIsResponding] = useState(false)
    const [conversation, setConversation] = useState([])
    const [audioUrl, setAudioUrl] = useState()
    const [loading, setLoading] = useState(false)
    const [enableFeedbackNotes, setEnableFeedbackNotes] = useState(false)

    const UpdateConversation = useMutation(api.DiscussionRoom.UpdateConversation)
    const updateUserToken = useMutation(api.users.UpdateUserToken)

    let silenceTimeout;
    let texts = {}

    useEffect(() => {
        if (DiscussionRoomData) {
            const Expert = CoachingExpert.find(item => item.name == DiscussionRoomData.expertName)
            console.log("Expert:", Expert)
            setExpert(Expert)
        }
    }, [DiscussionRoomData])

    // AI response useEffect - triggers when conversation changes
    useEffect(() => {
        async function fetchAIResponse() {
            const lastMessage = conversation[conversation.length - 1];
            if (
                lastMessage &&
                lastMessage.role === "user" &&
                DiscussionRoomData &&
                !isResponding
            ) {
                setIsResponding(true);
                try {
                    const lastTwoMsg = conversation.slice(-2);
                    console.log("Sending to AI model:", {
                        topic: DiscussionRoomData.topic,
                        coachingOption: DiscussionRoomData.coachingOption,
                        lastTwoMsg,
                        expertName: DiscussionRoomData.expertName,
                    });

                    const aiResp = await AIModel(
                        DiscussionRoomData.topic,
                        DiscussionRoomData.coachingOption,
                        lastTwoMsg
                    );
                    console.log("Raw AI Response:", aiResp);

                    const url = await ConvertTextToSpeech(aiResp, DiscussionRoomData.expertName);
                    console.log("AUDIO URL:", url);
                    if (!url) {
                        console.error("Failed to generate audio URL for expertName:", DiscussionRoomData.expertName);
                        // Optionally set a fallback message in conversation
                        setConversation((prev) => [
                            ...prev,
                            {
                                role: "assistant",
                                content: "Sorry, I couldn't generate audio for my response. Here's my reply: " + aiResp,
                            },
                        ]);
                    } else {
                        setAudioUrl(url);
                        setConversation((prev) => {
                            if (prev[prev.length - 1]?.role === "user") {
                                return [...prev, { role: "assistant", content: aiResp }];
                            }
                            return prev;
                        });
                    }
                } catch (error) {
                    console.error("Error getting AI response:", error);
                    setConversation((prev) => [
                        ...prev,
                        {
                            role: "assistant",
                            content: "Sorry, I encountered an error processing your request.",
                        },
                    ]);
                } finally {
                    setIsResponding(false);
                }
                await updateUserTokenMethod(aiResp) // update AI generated token
            }
        }

        fetchAIResponse();
    }, [conversation, DiscussionRoomData, isResponding]);

    const connectToServer = async () => {
        setEnableMic(true)
        setLoading(true)
        toast.success("Connected...")

        try {
            realtimeTranscriber.current = new RealtimeTranscriber({
                token: await getToken(),
                sampleRate: 16_000,
                encoding: "pcm_s16le", // Fix audio format
                endUtteranceSilenceThreshold: 2000 // Trigger FinalTranscript
            })

            realtimeTranscriber.current.on('transcript', async (transcript) => {
                console.log("Transcript:", transcript)
                //when it runs define a message here
                let msg = ''

                // for the final script
                if (transcript.message_type == 'FinalTranscript') {
                    // Don't add empty transcripts
                    if (transcript.text.trim()) {
                        setConversation(prev => [...prev, {
                            role: 'user',
                            content: transcript.text
                        }])
                    }
                    await updateUserTokenMethod(transcript.text) // Update user generated Token

                }

                if (transcript.message_type === "PartialTranscript") {
                    console.log("Partial:", transcript.text)
                } else if (transcript.message_type === "FinalTranscript") {
                    console.log("Final:", transcript.text)
                }

                // OUTPUT THE TEXT
                texts[transcript.audio_start] = transcript?.text;
                const keys = Object.keys(texts)
                keys.sort((a, b) => a - b);
                for (const key of keys) {
                    if (texts[key]) {
                        msg += `${texts[key]}`
                    }
                }
                // save the messages in a state
                setTranscribe(msg)
            })

            await realtimeTranscriber.current.connect()

            if (typeof window !== "undefined" && typeof navigator !== "undefined") {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
                streamRef.current = stream
                const RecordRTCModule = (await import("recordrtc")).default
                recorder.current = new RecordRTCModule(stream, {
                    type: 'audio',
                    mimeType: 'audio/wav', // Fix audio format
                    recorderType: RecordRTCModule.StereoAudioRecorder,
                    timeSlice: 250,
                    desiredSampRate: 16000,
                    numberOfAudioChannels: 1,
                    bufferSize: 4096,
                    audioBitsPerSecond: 128000,
                    ondataavailable: async (blob) => {
                        if (!realtimeTranscriber.current) return
                        clearTimeout(silenceTimeout)
                        const buffer = await blob.arrayBuffer()
                        realtimeTranscriber.current.sendAudio(buffer)
                        silenceTimeout = setTimeout(() => {
                            console.log("User Stopped Talking")
                        }, 2000)
                    }
                })
                recorder.current.startRecording()
            }
        } catch (error) {
            console.error("Error connecting to server:", error)
        } finally {
            setLoading(false)
        }
    }

    const disconnect = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (recorder.current) {
                recorder.current.stopRecording()
                recorder.current = null
            }
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop())
                streamRef.current = null
            }
            if (realtimeTranscriber.current) {
                await realtimeTranscriber.current.close()
                realtimeTranscriber.current = null
            }
        } catch (error) {
            console.error("Error disconnecting:", error)
        } finally {
            setEnableMic(false)
            toast.success("Disconnected...")

            await UpdateConversation({
                id: DiscussionRoomData._id,
                conversation: conversation
            })

            setLoading(false)
            setEnableFeedbackNotes(true)
        }
    }

    // const updateUserTokenMethod = async (text) => {
    //     const tokenCount = text.trim() ? text.trim().slice(/\s+/).length : 0
    //     const result = await updateUserToken({

    //         id: userData._id,
    //         credits: Number(userData.credits) - Number(tokenCount)
    //     })
    //     setUserData(prev => ({
    //         ...prev,
    //         credits: Number(userData.credits) - Number(tokenCount)
    //     }))
    // }



    const updateUserTokenMethod = async (text) => {
        if (!text || !text.trim()) return; // Skip if no text

        const tokenCount = text.trim().split(/\s+/).length; // Fixed split instead of slice

        try {
            const result = await updateUserToken({
                id: userData._id,
                credits: Number(userData.credits) - Number(tokenCount)
            });

            // Update local state based on the returned result
            if (result) {
                setUserData(prev => ({
                    ...prev,
                    credits: result.credits || (Number(prev.credits) - Number(tokenCount))
                }));
            }
        } catch (error) {
            console.error("Error updating tokens:", error);
        }
    }


    return (
        <div className='-mt-12'>
            <h2 className='text-lg font-bold'>{DiscussionRoomData?.coachingOption}</h2>
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='lg:col-span-2'>
                    <div className="h-[60vh] bg-secondary rounded-4xl border flex flex-col items-center justify-center relative">
                        {expert?.avatar ? (
                            <Image
                                src={expert.avatar}
                                alt='Avatar'
                                height={200}
                                width={200}
                                className='h-[80px] w-[80px] rounded-full object-cover animate-pulse'
                            />
                        ) : null}
                        <h2>{expert?.name}</h2>
                        <audio src={audioUrl} type="audio/mp3" autoPlay />
                        {/* <div className='p-5 bg-gray-200 px-10 rounded-lg absolute bottom-10 right-10'>
                            <UserButton />
                        </div> */}
                        <div className='absolute bottom-5 right-5'>
                            <Webcam height={100} width={150} className='rounded-2xl' />
                        </div>
                    </div>
                    <div className='mt-5 flex items-center justify-center'>
                        {!enableMic ? (
                            <Button onClick={connectToServer} disabled={loading} variant="sex">
                                {loading && <Loader2Icon className='animate-spin' />} Connect</Button>
                        ) : (
                            <Button onClick={disconnect} disabled={loading} variant="destructive">
                                {loading && <Loader2Icon className='animate-spin' />} Disconnect</Button>
                        )}
                    </div>
                </div>
                <div>
                    <ChatBox conversation={conversation} enableFeedbackNotes={enableFeedbackNotes}
                        coachingOption={DiscussionRoomData?.coachingOption}
                    />
                </div>
            </div>
            <div>
                <h2 className='text-bold font-indigo-500'>{transcribe}</h2>
            </div>
        </div>
    )
}

export default DiscussionRoom





