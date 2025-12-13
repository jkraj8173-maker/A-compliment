"use client"
import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"
import CuteButton from "@/components/CuteButton"

export default function IntroScreen({ onNext }) {

    return (
        <div>
            <div className="place-items-center max-w-3xl text-center">
                <motion.div
                    className="mb-8 relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                top: '50%',
                                left: '50%',
                            }}
                            animate={{
                                x: [0, Math.cos(i * 60 * Math.PI / 180) * 80],
                                y: [0, Math.sin(i * 60 * Math.PI / 180) * 80],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeOut"
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-pink-400" />
                        </motion.div>
                    ))}

                    <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-pink-700/15 to-rose-700/15 flex items-end justify-center border-2 border-pink-400/25 backdrop-blur-sm overflow-hidden">
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img loading="lazy" src="/gifs/waving.gif" className="h-28 -mb-2" alt="waving" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl w-full font-bold mb-4 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 bg-clip-text text-transparent font-dancing-script leading-tight"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Hey Aradhya
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-foreground/90 mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    There's something I want you to know.
                </motion.p>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <CuteButton onClick={onNext} icon={Heart}>
                        Open My Heart
                    </CuteButton>
                </motion.div>
            </div>
        </div>
    )
}
