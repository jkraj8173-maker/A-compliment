"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Sparkles, Heart, Zap } from "lucide-react"
import CuteButton from "@/components/CuteButton"

export default function CutenessScreen({ onNext }) {
    const [percentage, setPercentage] = useState(0)
    const [hasBurst, setHasBurst] = useState(false)
    const [showParticles, setShowParticles] = useState(false)
    const [shake, setShake] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 250) {
                    clearInterval(timer)
                    setHasBurst(true)
                    setShowParticles(true)
                    return 250
                }
                if (prev >= 180) {
                    setShake(true)
                }
                const increment = prev < 100 ? 3 : prev < 150 ? 2 : prev < 200 ? 1.5 : 1
                return Math.min(prev + increment, 250)
            })
        }, 50)

        return () => clearInterval(timer)
    }, [])

    const getWarningText = () => {
        if (percentage < 100) return "Scanning..."
        if (percentage < 150) return "HIGH CUTENESS DETECTED"
        if (percentage < 200) return "WARNING: CUTENESS OVERLOAD"
        return "DANGER: TOO CUTE TO HANDLE!"
    }

    const getProgressColor = () => {
        if (percentage < 100) return "from-pink-500 to-rose-500"
        if (percentage < 150) return "from-rose-500 to-orange-500"
        if (percentage < 200) return "from-orange-500 to-red-500"
        return "from-red-500 to-red-600"
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full w-full text-center px-4 relative overflow-hidden"
        >
            <AnimatePresence>
                {showParticles && (
                    <>
                        {[...Array(40)].map((_, i) => (
                            <motion.div
                                key={`particle-${i}`}
                                className="fixed pointer-events-none z-50"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                }}
                                initial={{
                                    x: 0,
                                    y: 0,
                                    scale: 0,
                                    opacity: 1
                                }}
                                animate={{
                                    x: (Math.random() - 0.5) * 800,
                                    y: (Math.random() - 0.5) * 800,
                                    scale: [0, 2, 1.5, 0],
                                    opacity: [1, 1, 0.8, 0],
                                    rotate: Math.random() * 720 - 360
                                }}
                                transition={{
                                    duration: 2,
                                    delay: Math.random() * 0.5,
                                    ease: "easeOut"
                                }}
                            >
                                {i % 4 === 0 ? (
                                    <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
                                ) : i % 4 === 1 ? (
                                    <Sparkles className="w-6 h-6 text-yellow-400" />
                                ) : i % 4 === 2 ? (
                                    <span className="text-3xl">💖</span>
                                ) : (
                                    <span className="text-3xl">✨</span>
                                )}
                            </motion.div>
                        ))}

                        <motion.div
                            className="fixed inset-0 bg-pink-500/30 z-40 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.5 }}
                        />
                    </>
                )}
            </AnimatePresence>

            <motion.h2
                className="text-3xl md:text-4xl font-dancing-script text-zinc-50 font-semibold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Measuring your cuteness...
            </motion.h2>

            <motion.div
                className="relative w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: shake && !hasBurst ? [0, -5, 5, -5, 5, 0] : 0,
                    rotate: shake && !hasBurst ? [0, -1, 1, -1, 1, 0] : 0
                }}
                transition={{ 
                    duration: shake ? 0.3 : 0.5, 
                    delay: shake ? 0 : 0.3,
                    repeat: shake && !hasBurst ? Infinity : 0
                }}
            >
                <div className={`relative p-8 rounded-2xl bg-white/5 border ${hasBurst ? 'border-pink-500/50' : 'border-pink-500/20'} backdrop-blur-md overflow-visible`}>
                    {hasBurst && (
                        <>
                            <motion.div
                                className="absolute -top-4 -left-4 text-4xl"
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                💥
                            </motion.div>
                            <motion.div
                                className="absolute -top-4 -right-4 text-4xl"
                                initial={{ scale: 0, rotate: 45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.4, type: "spring" }}
                            >
                                💥
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-4 -left-4 text-4xl"
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.5, type: "spring" }}
                            >
                                💥
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-4 -right-4 text-4xl"
                                initial={{ scale: 0, rotate: 45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.6, type: "spring" }}
                            >
                                💥
                            </motion.div>
                        </>
                    )}

                    <motion.div
                        className={`text-6xl md:text-7xl font-bold mb-6 ${hasBurst ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-pink-400' : 'text-pink-400'}`}
                        animate={hasBurst ? {
                            scale: [1, 1.5, 1.2],
                            textShadow: ["0 0 20px rgba(236, 72, 153, 0.5)", "0 0 60px rgba(236, 72, 153, 1)", "0 0 40px rgba(236, 72, 153, 0.8)"]
                        } : {
                            scale: percentage > 200 ? [1, 1.08, 1] : 1
                        }}
                        transition={{
                            duration: hasBurst ? 0.6 : 0.2,
                            repeat: hasBurst ? 0 : (percentage > 200 ? Infinity : 0)
                        }}
                    >
                        {Math.round(percentage)}%
                    </motion.div>

                    <div className="w-full h-8 bg-zinc-800/50 rounded-full overflow-hidden border border-pink-500/20 relative">
                        <motion.div
                            className={`h-full bg-gradient-to-r ${getProgressColor()} rounded-full relative`}
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                            animate={percentage > 180 ? {
                                boxShadow: ["0 0 10px rgba(239, 68, 68, 0.5)", "0 0 30px rgba(239, 68, 68, 1)", "0 0 10px rgba(239, 68, 68, 0.5)"]
                            } : {}}
                            transition={{ duration: 0.3, repeat: Infinity }}
                        >
                            {percentage > 100 && (
                                <motion.div 
                                    className="absolute right-0 top-0 h-full flex items-center"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 0.1, repeat: Infinity }}
                                >
                                    <Zap className="w-5 h-5 text-yellow-300 -mr-2" />
                                </motion.div>
                            )}
                        </motion.div>
                    </div>

                    <motion.div
                        className={`mt-4 flex items-center justify-center gap-2 ${percentage > 150 ? 'text-red-400' : 'text-yellow-400'}`}
                        animate={percentage > 180 && !hasBurst ? { 
                            scale: [1, 1.15, 1],
                            color: ["#f87171", "#fbbf24", "#f87171"]
                        } : {}}
                        transition={{ duration: 0.2, repeat: percentage > 180 && !hasBurst ? Infinity : 0 }}
                    >
                        <AlertTriangle size={20} className={percentage > 180 ? "animate-pulse" : ""} />
                        <span className="font-bold text-sm">{getWarningText()}</span>
                    </motion.div>

                    {hasBurst && (
                        <motion.div
                            className="mt-6 text-pink-300 text-xl font-dancing-script"
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                        >
                            💥 BOOM! Instrument exploded! 💥
                            <br />
                            <span className="text-yellow-300">You're off the charts cute!</span>
                        </motion.div>
                    )}
                </div>
            </motion.div>

            <AnimatePresence>
                {hasBurst && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 2, type: "spring" }}
                        className="mt-8"
                    >
                        <CuteButton onClick={onNext} icon={Sparkles}>
                            Continue
                        </CuteButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
