"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/screens/IntroScreen";
import PreCutenessScreen from "@/components/screens/PreCutenessScreen";
import CutenessScreen from "@/components/screens/CutenessScreen";
import BalloonScreen from "@/components/screens/BalloonScreen";
import ComplimentsScreen from "@/components/screens/ComplimentsScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import FinalScreen from "@/components/screens/FinalScreen";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <IntroScreen key="intro" onNext={() => setCurrentScreen(1)} />,
    <PreCutenessScreen key="precute" onNext={() => setCurrentScreen(2)} />,
    <CutenessScreen key="cuteness" onNext={() => setCurrentScreen(3)} />,
    <BalloonScreen key="balloon" onNext={() => setCurrentScreen(4)} />,
    <ComplimentsScreen key="compliments" onNext={() => setCurrentScreen(5)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(6)} />,
    <FinalScreen key="final" />,
  ]

  return (
    <div className="min-h-screen overflow-hidden"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #050505 40%, #3f031cbb 100%)",
      }}>

      <MusicPlayer />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{ duration: 0.5 }}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
