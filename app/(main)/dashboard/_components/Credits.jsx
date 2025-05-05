import { UserContext } from '@/app/_context/UserContext'
import { useUser } from '@stackframe/stack'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'
import { Wallet } from 'lucide-react'

function Credits() {
    const { userData } = useContext(UserContext)
    const user = useUser()
    const [progressValue, setProgressValue] = useState(0)

    // Calculate and set the progress value when userData changes
    useEffect(() => {
        if (userData) {
            const calculatedProgress = calculateProgress() || 0
            // Set a small delay to ensure component is mounted and for animation
            const timer = setTimeout(() => {
                setProgressValue(calculatedProgress)
            }, 100)

            return () => clearTimeout(timer)
        }
    }, [userData])

    const calculateProgress = () => {
        if (userData?.subscriptionId) {
            return Number(userData.credits / 50000) * 100
        } else if (userData?.credits) {
            // For free plan, calculate based on 5000 tokens
            return Number(userData.credits / 5000) * 100
        }
        return 0
    }

    return (
        <div className="w-full p-4">
            <div className='flex gap-5 items-center'>
                <Image
                    src={user?.profileImageUrl || "/api/placeholder/60/60"}
                    alt='User'
                    height={60}
                    width={60}
                    className='rounded-full'
                />
                <div>
                    <h2 className='text-lg font-bold'>{user?.displayName || "User Name"}</h2>
                    <h2 className='text-gray-500'>{user?.primaryEmail || "user@example.com"}</h2>
                </div>
            </div>
            <hr className='my-3' />
            <div className="w-full">
                <h2 className='font-bold mb-2'>Token Usage</h2>
                <div className="flex justify-between mb-2">
                    <h2>{userData?.credits || 0}/{userData?.subscriptionId ? '50,000' : '5,000'}</h2>
                    <span className="text-sm text-gray-500">{Math.round(progressValue)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progressValue}%` }}
                    ></div>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <h2 className='font-bold'>Current Plan</h2>
                    <h2 className='p-1 bg-indigo-500 rounded-lg px-2'>
                        {userData?.subscriptionId ? 'Pro Plan' : 'Free Plan'}
                    </h2>
                </div>
                <div className='mt-5 p-5 border rounded-2xl gradient-background2'>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='font-bold'>Pro Plan</h2>
                            <h2>50,000 Tokens</h2>
                        </div>
                        <h2 className='font-bold'>R20/Month</h2>
                    </div>
                    <hr className='my-3' />
                    <Button className="w-full" variant="sex2">
                        <Wallet className="mr-2" />Upgrade R20
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Credits