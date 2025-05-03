import React, { useContext, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { CoachingExpert } from '@/services/Options'
import FeatureMotionWrapper from '@/app/components/FramerMotion/FeatureMotionWrapperMap'
import Image from 'next/image'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { LoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/app/_context/UserContext'



function UserInputDialog({ children, coachingOption }) {

    const [selectedExert, setSelectedExpert] = useState()
    const [topic, setTopic] = useState()
    const [loading, setLoading] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const router = useRouter()
    const { userData } = useContext(UserContext)

    const createDiscussionRoom = useMutation(api.DiscussionRoom.CreateNewRoom)

    const OnClickNext = async () => {
        setLoading(true)
        const result = await createDiscussionRoom({
            topic: topic,
            coachingOption: coachingOption?.name,
            expertName: selectedExert,
            uid: userData?._id
        })
        console.log("RESULT:", result)
        setLoading(false)
        setOpenDialog(false)
        router.push('/discussion-room/' + result)
    }


    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{coachingOption.name}</DialogTitle>
                    <DialogDescription asChild>
                        <div className='mt-3'>
                            <h2 className='text-yellow-300'>Enter A Topic To Master Your Skills In {coachingOption.name}</h2>
                            <Textarea
                                onChange={(e) => setTopic(e.target.value)}
                                placeholder="Enter Your Topic Here..." className="mt-2" />
                            <h2 className='text-yellow-300 mt-5'>Select Your Coaching Expert</h2>
                            <div className='grid grid-cols-3 md:grid-cols-5 gap-6 mt-3'>
                                {CoachingExpert.map((expert, index) => (
                                    <BlurFade key={expert.name} delay={0.25 + index * 0.05} inView>
                                        <FeatureMotionWrapper index={index} key={index}>
                                            <div
                                                onClick={() => setSelectedExpert(expert.name)}>
                                                <Image src={expert.avatar} alt='Expert' height={200} width={200}
                                                    className={`rounded-2xl h-[80px] w-[80px] object-cover hover:scale-105 transition-all cursor-pointer p-1 ${selectedExert == expert.name && 'border border-yellow-300 rounded-2xl'}`}
                                                />
                                                <h2 className='text-center'>{expert.name}</h2>
                                            </div>

                                        </FeatureMotionWrapper>
                                    </BlurFade>
                                ))}
                            </div>
                            <div className='flex gap-5 justify-end mt-5'>
                                <DialogClose asChild>
                                    <Button variant="sex1">Cancel</Button>
                                </DialogClose>

                                <Button
                                    onClick={OnClickNext}
                                    disabled={!topic || !selectedExert || loading} variant="sex2">
                                    {loading && <LoaderCircle className='animate-spin' />}
                                    Next</Button>
                            </div>

                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default UserInputDialog