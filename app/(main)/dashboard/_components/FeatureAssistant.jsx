"use client"
import FeatureMotionWrapper from '@/app/components/FramerMotion/FeatureMotionWrapperMap'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import { CoachingOptions } from '@/services/Options'
import { useUser } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'
import UserInputDialog from './UserInputDialog'
import ProfileDialog from './ProfileDialog'

function FeatureAssistants() {
    const user = useUser()

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='font-medium text-gray-200'>My WorkSpace</h2>
                    <h2 className='text-3xl font-bold'>Welcome Back {user?.displayName} </h2>
                </div>
                <ProfileDialog>
                    <Button variant='sex2'>Profile</Button>
                </ProfileDialog>

            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-10 '>
                {CoachingOptions.map((option, index) => (
                    <FeatureMotionWrapper index={index} key={index} >
                        <BlurFade key={option.icon} delay={0.25 + index * 0.05} inView>
                            <div className='p-3 bg-gradient-to-r from-indigo-900 via-teal-500 to-purple-900 rounded-3xl flex flex-col justify-center items-center hover:scale-105 transition-all'>
                                <UserInputDialog coachingOption={option}>
                                    <div className='flex flex-col'>
                                        <Image src={option.icon} alt='icon' height={150} width={150}
                                            className='h-[70px] w-[70px] hover:rotate-12 transition-all cursor-pointer' />
                                        <h2 className='mt-2'>{option.name}</h2>
                                    </div>
                                </UserInputDialog>
                            </div>
                        </BlurFade>
                    </FeatureMotionWrapper>
                ))}
            </div>
        </div>
    )
}

export default FeatureAssistants