"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Sparkles, Star } from "lucide-react"

export default function FinalScreen() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full w-full text-center px-4 relative overflow-hidden"
        >
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.2, 0],
                        y: [0, -50],
                    }}
                    transition={{
                        duration: 4,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 3,
                    }}
                >
                    {i % 4 === 0 ? (
                        <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                    ) : i % 4 === 1 ? (
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                    ) : i % 4 === 2 ? (
                        <Star className="w-3 h-3 text-pink-300 fill-pink-300" />
                    ) : (
                        <span className="text-lg">✨</span>
                    )}
                </motion.div>
            ))}

            <motion.h1
                className="text-5xl md:text-7xl font-dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-yellow-200 font-bold mb-6"
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                style={{
                    textShadow: "0 0 40px rgba(236, 72, 153, 0.4)"
                }}
            >
                Thank You!
            </motion.h1>

            <motion.div
                className="relative mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 via-rose-500/30 to-pink-500/30 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative w-44 h-44 p-5 rounded-full bg-gradient-to-br from-pink-900/30 to-rose-900/30 border-2 border-pink-400/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <motion.div
                        animate={{ 
                            y: [0, -8, 0],
                            rotate: [-3, 3, -3],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Image
                            loading="lazy"
                            src='/gifs/cute.gif'
                            width={140}
                            height={140}
                            alt='cute gif'
                            className='object-contain'
                            unoptimized
                        />
                    </motion.div>
                </div>
            </motion.div>

            <motion.p
                className="text-xl md:text-2xl text-pink-100/90 mb-4 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                For being you
            </motion.p>

            <motion.div
                className="flex items-center gap-2 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ 
                            scale: [1, 1.3, 1],
                            y: [0, -5, 0],
                        }}
                        transition={{ 
                            duration: 1, 
                            delay: i * 0.15,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                        }}
                    >
                        <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                    </motion.div>
                ))}
            </motion.div>

            <motion.h2
                className="text-3xl md:text-4xl font-dancing-script text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-pink-200 font-medium leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
            >
                You'll always be special to me
            </motion.h2>

            <motion.div
                className="mt-8 flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.span
                    className="text-4xl"
                    animate={{ 
                        rotate: [-10, 10, -10],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    💖
                </motion.span>
                <motion.span
                    className="text-3xl"
                    animate={{ 
                        y: [0, -5, 0],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                >
                    ✨
                </motion.span>
                <motion.span
                    className="text-4xl"
                    animate={{ 
                        rotate: [10, -10, 10],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                    💖
                </motion.span>
            </motion.div>
        </motion.div>
    )
}
