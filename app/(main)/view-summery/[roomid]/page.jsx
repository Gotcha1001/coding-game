"use client"
import { api } from '@/convex/_generated/api'
import { CoachingOptions } from '@/services/Options'
import { useQuery } from 'convex/react'
import moment from 'moment'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import ChatBox from '../../discussion-room/[roomid]/_components/ChatBox'
import SummeryBox from '../_components/SummeryBox'


function ViewSummery() {
    const { roomid } = useParams()

    const discussionRoomData = useQuery(api.DiscussionRoom.GetDiscussionRoom, { id: roomid })
    console.log("DisccussionRoom:", discussionRoomData)

    const getAbstractImages = (option) => {
        const coachingOption = CoachingOptions.find((item) => item.name === option)
        return coachingOption?.abstract ?? '/ab1.png'
    }

    // Handle loading state
    if (!discussionRoomData) {
        return <div>Loading...</div>
    }

    return (
        <div className='-mt-10'>
            <div className='flex justify-between items-end'>
                <div className='flex gap-7 items-center'>
                    <Image
                        src={getAbstractImages(discussionRoomData.coachingOption)}
                        alt='abstract'
                        width={100}
                        height={100}
                        className='w-[70px] h-[70px] rounded-full'
                    />
                    <div>
                        <h2 className='font-bold text-lg'>{discussionRoomData?.topic}</h2>
                        <h2 className='text-gray-400'>{discussionRoomData?.coachingOption}</h2>

                    </div>

                </div>
                <h2 className='text-gray-400'>{moment(discussionRoomData?._creationTime).fromNow()}</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5'>
                <div className='col-span-3'>
                    <h2 className='font-bold text-3xl mb-4 text-indigo-500'>Summery Of Your Conversation</h2>
                    <SummeryBox summery={discussionRoomData.summery} />
                </div>
                <div className='col-span-2'>
                    <h2 className='font-bold text-3xl mb-4 text-indigo-500'>Your Conversation</h2>
                    {discussionRoomData?.conversation && <ChatBox conversation={discussionRoomData?.conversation}
                        coachingOption={discussionRoomData?.coachingOption}
                        enableFeedbackNotes={false}
                    />}
                </div>
            </div>
        </div>

    )
}

export default ViewSummery