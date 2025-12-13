"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, MoveRight, Sparkles } from "lucide-react"
import CuteButton from "@/components/CuteButton"

const compliments = [
    "You're truly amazing",
    "You deserve all the happiness",
    "Your smile lights up my world",
    "You make everything beautiful",
    "You're one in a million",
]

function Firefly({ color, delay, x, y }) {
    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1.2, 0],
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
            }}
            transition={{
                duration: 2,
                delay: delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
            }}
        >
            <div 
                className={`w-2 h-2 rounded-full ${color === 'pink' ? 'bg-pink-400' : 'bg-white'} blur-[2px]`}
                style={{
                    boxShadow: color === 'pink' 
                        ? '0 0 10px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.4)' 
                        : '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)'
                }}
            />
        </motion.div>
    )
}

function Card({ text, index, onReveal, isRevealed }) {
    const [fireflies] = useState(() => 
        [...Array(12)].map((_, i) => ({
            color: i % 2 === 0 ? 'pink' : 'white',
            delay: Math.random() * 0.5,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`
        }))
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
            className="relative px-6 py-4 rounded-2xl bg-white/5 border border-pink-500/15 text-foreground text-base md:text-lg shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-hidden cursor-pointer"
            onClick={() => !isRevealed && onReveal(index)}
            whileHover={!isRevealed ? { scale: 1.02 } : {}}
            whileTap={!isRevealed ? { scale: 0.98 } : {}}
        >
            {!isRevealed && (
                <>
                    {fireflies.map((fly, i) => (
                        <Firefly key={i} {...fly} />
                    ))}
                </>
            )}

            <motion.div
                className="relative z-10"
                animate={{
                    filter: isRevealed ? 'blur(0px)' : 'blur(8px)',
                }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-center">{text}</p>
            </motion.div>

            <AnimatePresence>
                {!isRevealed && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center z-20"
                        initial={{ opacity: 1 }}
                        exit={{ 
                            opacity: 0,
                            scale: 1.5
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex items-center gap-2 text-pink-300 text-sm"
                        >
                            <Sparkles size={16} />
                            <span>Tap to reveal</span>
                            <Sparkles size={16} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isRevealed && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{
                                    left: '50%',
                                    top: '50%'
                                }}
                                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                                animate={{
                                    x: (Math.random() - 0.5) * 150,
                                    y: (Math.random() - 0.5) * 80,
                                    scale: [0, 1.5, 0],
                                    opacity: [1, 1, 0]
                                }}
                                transition={{ duration: 0.8, delay: i * 0.05 }}
                            >
                                {i % 2 === 0 ? (
                                    <Sparkles className="w-4 h-4 text-yellow-400" />
                                ) : (
                                    <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function ComplimentsScreen({ onNext }) {
    const [revealed, setRevealed] = useState([])
    const allRevealed = revealed.length === compliments.length

    const handleReveal = (index) => {
        if (!revealed.includes(index)) {
            setRevealed([...revealed, index])
        }
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full w-full text-center"
        >
            <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-6">
                <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500/15 to-rose-500/15 border border-pink-400/30 flex items-center justify-center backdrop-blur-md relative"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Heart className="w-12 h-12 text-pink-400 fill-pink-400" />
                    </motion.div>
                </motion.div>

                <div>
                    <motion.h2
                        className="text-4xl md:text-5xl font-dancing-script text-zinc-50 font-semibold leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        Just for you
                    </motion.h2>
                    <motion.p
                        className="text-pink-300/70 text-sm mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Touch each card to reveal your compliment
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 gap-3 w-full px-4"
                >
                    {compliments.map((line, index) => (
                        <Card
                            key={index}
                            text={line}
                            index={index}
                            onReveal={handleReveal}
                            isRevealed={revealed.includes(index)}
                        />
                    ))}
                </motion.div>

                <AnimatePresence>
                    {allRevealed && (
                        <motion.div
                            initial={{ y: 40, opacity: 0, scale: 0.8 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                        >
                            <CuteButton onClick={onNext} icon={MoveRight}>
                                See more
                            </CuteButton>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}
