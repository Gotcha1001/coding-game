import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionWrapperDelay from "./components/FramerMotion/MotionWrapperDelay";
import SmokeEffect from "./components/SmokeEffects/SmokeEffect";
import VortexMandalas from "./components/Mandalas/VortexManadalas";
import DiamondMandalas from "./components/Mandalas/DiamondMandalas";



export default function Home() {
  return (
    <div className="min-h-screen">

      <SmokeEffect isVisible={true} />
      {/* <VortexMandalas />
      <DiamondMandalas /> */}
      <section className="container mx-auto py-10 sm:py-20 text-center px-4">
        <MotionWrapperDelay
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col items-center">
            Learn React Hooks <br /> In a Real-Life Simulation Game!
            <span className="flex flex-col items-center justify-center gap-2 sm:gap-4 w-full mt-4">
              <span className="text-2xl sm:text-6xl">Experience. Learn. Earn.</span>
              <MotionWrapperDelay
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Image
                  src={"/logo3.png"}
                  alt="React Hooks Game Logo"
                  width={1000}
                  height={400}
                  className="h-32 sm:h-48 md:h-64 w-auto object-contain horizontal-rotate my-2"
                />
              </MotionWrapperDelay>
              <span className="text-2xl sm:text-6xl -mt-2 mb-6">
                Master React While Living Your Best Virtual Life
              </span>
            </span>
          </h1>

        </MotionWrapperDelay>



        <MotionWrapperDelay
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-base sm:text-xl gradient-background2 rounded-lg p-2 text-gray-300 mb-6 sm:mb-10 max-w-3xl mx-auto">
            Welcome to the ultimate React Hooks learning experience — where coding meets real-life decisions.

            Dive into a gamified world where you're not just studying React... you're living it.

            Earn virtual money by completing React quiz challenges, then use your earnings to pay rent, buy groceries, upgrade your apartment, or shop at the mall.

            Plan your weekly schedule: study React, rest, or socialize. Every choice matters — manage your time wisely to balance learning and life.

            Key Features:

            - Real-life scenarios to apply useState, useEffect, useContext, and more
            - Interactive quizzes with real-time rewards
            - Rent and shopping systems powered by your progress
            - Weekly time manager to build routines
            - Apartment upgrades and items that boost your learning stats
            - Fun, engaging simulations to reinforce coding logic

            Learn, earn, and grow — both as a developer and a digital citizen in your own React-powered world.
          </p>

        </MotionWrapperDelay>


        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* <Link href="/dashboard" className="w-full sm:w-auto">
            <Button variant="sex1" size="lg" className="w-full sm:w-auto mr-2">
              Dashboard <ChevronRight size={18} className="ml-1" />
            </Button>
          </Link> */}
          {/* <Link href="#features" className="w-full sm:w-auto">
            <Button variant="sex" size="lg" className="w-full sm:w-auto">
              Learn More <ChevronRight size={18} className="ml-1" />
            </Button>
          </Link> */}
          <Link href="/hooks-game" className="w-full sm:w-auto">
            <Button variant="sex" size="lg" className="w-full sm:w-auto">
              Coding Game <ChevronRight size={18} className="ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
