"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, MoveRight, Sparkles } from "lucide-react"
import CuteButton from "@/components/CuteButton"

const message = `I just wanted to tell you something... you really are special in a way that's hard to explain.

There's a softness in the way you talk, a sweetness in the way you smile, and something genuine about you that just feels good to be around.

You don't try to be anything extra, you're just you, and that's what makes you so lovely.

- Its your Dudu`

export default function MessageScreen({ onNext }) {
    const [displayedText, setDisplayedText] = useState("")
    const [isTypingComplete, setIsTypingComplete] = useState(false)
    const scrollRef = useRef(null)

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index < message.length) {
                setDisplayedText(message.slice(0, index + 1))
                index++
                if (scrollRef.current) {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
                }
            } else {
                clearInterval(timer)
                setIsTypingComplete(true)
            }
        }, 35)

        return () => clearInterval(timer)
    }, [])

    return (
        <motion.div
            className="flex flex-col items-center justify-center p-4 relative max-w-2xl mx-auto"
        >
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0],
                        y: [0, -30],
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 0.3,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2,
                    }}
                >
                    {i % 3 === 0 ? (
                        <Heart className="w-3 h-3 text-pink-400/50 fill-pink-400/50" />
                    ) : (
                        <Sparkles className="w-2 h-2 text-pink-300/40" />
                    )}
                </motion.div>
            ))}

            <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 font-bold">
                    From My Heart
                </h2>
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                    <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative w-full"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-pink-900/40 via-rose-900/30 to-pink-900/40 border border-pink-400/20 backdrop-blur-lg shadow-2xl">
                    <motion.div
                        className="absolute top-4 left-4"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <span className="text-3xl">💌</span>
                    </motion.div>
                    <motion.div
                        className="absolute top-4 right-4"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-2xl">✨</span>
                    </motion.div>

                    <div 
                        ref={scrollRef}
                        className="min-h-[220px] max-h-[320px] overflow-y-auto mt-6 scrollbar-thin scrollbar-thumb-pink-500/30 scrollbar-track-transparent"
                    >
                        <motion.p
                            className="whitespace-pre-wrap text-left leading-relaxed text-lg text-pink-50/90 font-light"
                            transition={{ duration: 0.35 }}
                        >
                            {displayedText}
                            {!isTypingComplete && (
                                <motion.span
                                    className="inline-block w-0.5 h-5 bg-pink-400 ml-1"
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                />
                            )}
                        </motion.p>
                    </div>

                    <motion.div
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <Heart 
                                key={i} 
                                className="w-4 h-4 text-pink-400 fill-pink-400" 
                                style={{ opacity: 0.6 + i * 0.2 }}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isTypingComplete && (
                    <motion.div
                        className="text-center relative z-10 mt-8"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                    >
                        <CuteButton onClick={onNext} icon={MoveRight}>
                            One more thing
                        </CuteButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
