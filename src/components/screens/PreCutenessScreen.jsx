"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Sparkles } from "lucide-react"
import CuteButton from "@/components/CuteButton"

const messages = [
    "Do you know how cute you are?",
    "Let's find out...",
    "Okay... now bring your phone's camera closer to your face..."
]

export default function PreCutenessScreen({ onNext }) {
    const [currentMessage, setCurrentMessage] = useState(0)
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        if (currentMessage < messages.length - 1) {
            const timer = setTimeout(() => {
                setCurrentMessage(prev => prev + 1)
            }, 2500)
            return () => clearTimeout(timer)
        } else {
            const timer = setTimeout(() => {
                setShowButton(true)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [currentMessage])

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full w-full text-center px-4"
        >
            <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-400/30 flex items-center justify-center backdrop-blur-md mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
            >
                <Camera className="w-10 h-10 text-pink-400" />
            </motion.div>

            <div className="min-h-[120px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.h2
                        key={currentMessage}
                        className="text-2xl md:text-4xl font-dancing-script text-zinc-50 font-semibold leading-relaxed max-w-md"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        {messages[currentMessage]}
                    </motion.h2>
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {showButton && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="mt-8"
                    >
                        <CuteButton onClick={onNext} icon={Sparkles}>
                            I'm ready!
                        </CuteButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
