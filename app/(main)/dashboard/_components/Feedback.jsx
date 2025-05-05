"use client"
import { UserContext } from '@/app/_context/UserContext'
import FeatureMotionWrapper from '@/app/components/FramerMotion/FeatureMotionWrapperMap'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { CoachingOptions } from '@/services/Options'
import { useConvex } from 'convex/react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

function Feedback() {
    const convex = useConvex()
    const { userData } = useContext(UserContext)
    const [discussionRoomList, setDiscussionRoomList] = useState([])

    useEffect(() => {
        userData && GetDiscussionRooms()
    }, [userData])

    const GetDiscussionRooms = async () => {
        const result = await convex.query(api.DiscussionRoom.GetAllDiscussionRoom, {
            uid: userData?._id
        })
        console.log("ALL DISCUSSIONS:", result)
        setDiscussionRoomList(result)
    }



    const GetAbstractImages = (option) => {
        const coachingOption = CoachingOptions.find((item) => item.name == option)
        return coachingOption?.abstract ?? '/ab1.png'
    }

    return (
        <div className='gradient-background2 p-2 rounded-lg'>
            <h2 className='font-bold text-xl '>Feedback</h2>
            {discussionRoomList?.length == 0 && <h2 className=''>You Dont Have Any Previous Feedback</h2>}



            <div className='mt-5'>
                {discussionRoomList.map((item, index) => (item.coachingOption == 'Mock Interview' || item.coachingOption == 'Ques Ans Prep') && (
                    <FeatureMotionWrapper index={index} key={index}>

                        <div className='border-b-[1px] pb-3 mb-4 group flex justify-between items-center cursor-pointer'>
                            <div className='flex gap-7 items-center'>
                                <Image src={GetAbstractImages(item.coachingOption)} alt='abstract' height={70} width={70} className='rounded-full h-[70px] w-[70px]' />

                                <div>
                                    <h2 className='font-bold'>{item.topic}</h2>
                                    <h2 className='text-gray-400'>{item.coachingOption}</h2>
                                    <h2 className='text-gray-400 text-sm'>{moment(item._creationTime).fromNow()}</h2>
                                </div>
                            </div>
                            <Link href={'/view-summery/' + item._id}>
                                <Button variant="sex2" className="invisible group-hover:visible">View Feedback</Button>
                            </Link>

                        </div>
                    </FeatureMotionWrapper>

                ))}
            </div>

        </div>
    )
}

export default Feedback