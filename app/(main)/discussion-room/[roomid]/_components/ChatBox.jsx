
"use client"
import FeatureMotionWrapper from '@/app/components/FramerMotion/FeatureMotionWrapperMap'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { AIModelToGenerateFeedbackAndNotes } from '@/services/GlobalServices'
import { useMutation } from 'convex/react'
import { Loader2Icon } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

function ChatBox({ conversation, enableFeedbackNotes, coachingOption }) {

    const [loading, setLoading] = useState(false)

    const updateSummery = useMutation(api.DiscussionRoom.UpdateSummery)
    const { roomid } = useParams()

    const GenerateFeedbackNotes = async () => {
        setLoading(true)
        try {
            const result = await AIModelToGenerateFeedbackAndNotes(coachingOption, conversation)
            console.log("NOTES:", result.content)

            await updateSummery({
                id: roomid,
                summery: result.content
            })
            setLoading(false)
            toast.success("Feedback And Notes Saved")
        } catch (e) {
            setLoading(false)
            toast.error("Internal Server Error, Try Again...")
        }
    }
    return (
        <div>
            <div className="h-[60vh] bg-secondary rounded-xl border flex flex-col relative p-4 overflow-auto">
                {/* <div> */}
                {conversation.map((item, index) => (
                    <FeatureMotionWrapper index={index} key={index}>

                        <div className={`flex ${item.role == 'user' && 'justify-end'}`}>
                            {item.role == 'assistant' ?
                                <h2 className='p-1 px-2 bg-indigo-500 mt-2 text-white inline-block rounded-lg'>{item.content}</h2>
                                :
                                <h2 className='p-1 px-2 bg-gray-200 mt-2 text-black inline-block rounded-lg '>{item.content}</h2>
                            }

                        </div>
                    </FeatureMotionWrapper>

                ))}
                {/* </div> */}
            </div>
            {!enableFeedbackNotes ? <h2 className='text-center mt-5 text-sm'>

            </h2>
                : <Button className="mt-7 w-full" variant="sex1" onClick={GenerateFeedbackNotes} disabled={loading}>
                    {loading && <Loader2Icon className='animate-spin' />}
                    Generate Feedback/Notes</Button>}
        </div>

    )
}

export default ChatBox