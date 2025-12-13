"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Music, Heart } from "lucide-react"

export default function MusicPlayer() {
    const [isMuted, setIsMuted] = useState(true)
    const [showPrompt, setShowPrompt] = useState(true)
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5
            audioRef.current.loop = true
        }
    }, [])

    const handlePlayMusic = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(() => {})
            audioRef.current.muted = false
            setIsMuted(false)
        }
        setShowPrompt(false)
    }

    const handleNoThanks = () => {
        setShowPrompt(false)
    }

    const toggleMute = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play().catch(() => {})
                audioRef.current.muted = false
            } else {
                audioRef.current.muted = true
            }
            setIsMuted(!isMuted)
        }
    }

    return (
        <>
            <audio ref={audioRef} src="/music.mp3" preload="auto" />
            
            <AnimatePresence>
                {showPrompt && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            className="bg-gradient-to-br from-pink-900/90 to-rose-900/90 border border-pink-400/30 rounded-3xl p-8 max-w-sm w-full text-center backdrop-blur-md shadow-2xl"
                        >
                            <motion.div
                                className="w-20 h-20 mx-auto mb-6 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Music className="w-10 h-10 text-pink-400" />
                            </motion.div>
                            
                            <h3 className="text-2xl font-dancing-script text-white mb-2">
                                Hey cutie! Want some music? 
                            </h3>
                            <p className="text-pink-200/70 text-sm mb-6">
                                It makes everything extra special~
                            </p>
                            
                            <div className="flex flex-col gap-3">
                                <motion.button
                                    onClick={handlePlayMusic}
                                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-6 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Heart className="w-5 h-5 fill-current" />
                                    Yes please!
                                </motion.button>
                                <motion.button
                                    onClick={handleNoThanks}
                                    className="w-full text-pink-300/70 py-2 text-sm hover:text-pink-200 transition-colors"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Maybe later~
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={toggleMute}
                className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/30 backdrop-blur-md flex items-center justify-center hover:bg-pink-500/30 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {isMuted ? (
                    <VolumeX size={20} className="text-pink-300" />
                ) : (
                    <Volume2 size={20} className="text-pink-300" />
                )}
            </motion.button>
        </>
    )
}
