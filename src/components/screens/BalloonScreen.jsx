"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MoveRight } from "lucide-react"
import CuteButton from "@/components/CuteButton"

const balloonData = [
    { mainColor: "#ec4899", darkColor: "#be185d", highlightColor: "rgba(255,255,255,0.4)" },
    { mainColor: "#a855f7", darkColor: "#7c3aed", highlightColor: "rgba(255,255,255,0.4)" },
    { mainColor: "#22c55e", darkColor: "#16a34a", highlightColor: "rgba(255,255,255,0.4)" },
    { mainColor: "#f59e0b", darkColor: "#d97706", highlightColor: "rgba(255,255,255,0.4)" },
]

const cuteMessages = ["You", "are", "a", "Cutiee"]
const messageColors = ["#f59e0b", "#ec4899", "#a855f7", "#22c55e"]

function CuteBalloon({ data, index, onPop, isPopped, message }) {
    return (
        <motion.div
            className="relative flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 100 }}
        >
            <AnimatePresence mode="wait">
                {!isPopped ? (
                    <motion.div
                        key="balloon"
                        className="relative"
                        onClick={() => onPop(index)}
                        whileHover={{ scale: 1.08, y: -10 }}
                        whileTap={{ scale: 0.95 }}
                        exit={{
                            scale: [1, 1.4, 0],
                            opacity: [1, 0.8, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.25 }}
                    >
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, -12, 0],
                                rotate: [-2, 2, -2],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.4,
                                ease: "easeInOut",
                            }}
                        >
                            <svg
                                width="70"
                                height="90"
                                viewBox="0 0 70 90"
                                className="drop-shadow-lg md:w-[85px] md:h-[110px]"
                            >
                                <defs>
                                    <radialGradient id={`balloonGrad${index}`} cx="30%" cy="30%" r="70%">
                                        <stop offset="0%" stopColor={data.highlightColor} />
                                        <stop offset="30%" stopColor={data.mainColor} />
                                        <stop offset="100%" stopColor={data.darkColor} />
                                    </radialGradient>
                                    <filter id={`glow${index}`}>
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                                
                                <ellipse
                                    cx="35"
                                    cy="38"
                                    rx="30"
                                    ry="36"
                                    fill={`url(#balloonGrad${index})`}
                                    filter={`url(#glow${index})`}
                                />
                                
                                <ellipse
                                    cx="24"
                                    cy="26"
                                    rx="8"
                                    ry="12"
                                    fill="rgba(255,255,255,0.25)"
                                    transform="rotate(-30 24 26)"
                                />
                                
                                <ellipse
                                    cx="22"
                                    cy="22"
                                    rx="3"
                                    ry="5"
                                    fill="rgba(255,255,255,0.4)"
                                    transform="rotate(-30 22 22)"
                                />
                                
                                <polygon
                                    points="35,74 31,80 39,80"
                                    fill={data.darkColor}
                                />
                                
                                <path
                                    d="M 35 80 Q 33 85, 35 90 Q 37 95, 34 100"
                                    stroke={data.mainColor}
                                    strokeWidth="1.5"
                                    fill="none"
                                    opacity="0.7"
                                />
                            </svg>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="message"
                        className="h-[90px] md:h-[110px] flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
                    >
                        <motion.span
                            className="text-3xl md:text-4xl font-dancing-script font-bold"
                            style={{ color: messageColors[index] }}
                            animate={{ 
                                scale: [1, 1.1, 1],
                                textShadow: [
                                    `0 0 10px ${messageColors[index]}40`,
                                    `0 0 20px ${messageColors[index]}60`,
                                    `0 0 10px ${messageColors[index]}40`
                                ]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            {message}
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <AnimatePresence>
                {isPopped && (
                    <>
                        {[...Array(16)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute pointer-events-none"
                                style={{ top: "40%" }}
                                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                                animate={{
                                    x: (Math.random() - 0.5) * 200,
                                    y: (Math.random() - 0.5) * 200,
                                    scale: 0,
                                    opacity: 0,
                                    rotate: Math.random() * 360,
                                }}
                                transition={{ duration: 0.7, delay: i * 0.02 }}
                            >
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ background: data.mainColor }}
                                />
                            </motion.div>
                        ))}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={`sparkle-${i}`}
                                className="absolute pointer-events-none text-xl"
                                style={{ top: "40%" }}
                                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                                animate={{
                                    x: (Math.random() - 0.5) * 150,
                                    y: (Math.random() - 0.5) * 150,
                                    scale: [0, 1.5, 0],
                                    opacity: [1, 1, 0],
                                }}
                                transition={{ duration: 0.6, delay: i * 0.03 }}
                            >
                                ✨
                            </motion.div>
                        ))}
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function BalloonScreen({ onNext }) {
    const [popped, setPopped] = useState([])
    const allPopped = popped.length === balloonData.length

    const handlePop = (index) => {
        if (!popped.includes(index)) {
            setPopped([...popped, index])
        }
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full w-full text-center px-4"
        >
            <motion.h2
                className="text-4xl md:text-6xl font-dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 font-bold mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    textShadow: "0 0 30px rgba(236, 72, 153, 0.3)"
                }}
            >
                Pop the Balloons!
            </motion.h2>

            <motion.p
                className="text-pink-200/80 text-base mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Tap each balloon to pop it!
            </motion.p>

            <div className="flex items-end justify-center gap-4 md:gap-8 mb-12">
                {balloonData.map((data, index) => (
                    <CuteBalloon
                        key={index}
                        data={data}
                        index={index}
                        onPop={handlePop}
                        isPopped={popped.includes(index)}
                        message={cuteMessages[index]}
                    />
                ))}
            </div>

            <AnimatePresence>
                {allPopped && (
                    <motion.div
                        className="flex flex-col items-center gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        <CuteButton onClick={onNext} icon={MoveRight}>
                            Next
                        </CuteButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
