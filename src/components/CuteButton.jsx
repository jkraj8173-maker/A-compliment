"use client"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function CuteButton({ onClick, children, icon: Icon = Heart }) {
    return (
        <motion.button
            className="relative bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg flex items-center gap-2 border-2 border-white/20"
            onClick={onClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
                boxShadow: [
                    "0 4px 20px rgba(236, 72, 153, 0.4)",
                    "0 4px 30px rgba(236, 72, 153, 0.6)",
                    "0 4px 20px rgba(236, 72, 153, 0.4)"
                ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <span>{children}</span>
            <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            >
                <Icon size={18} className="fill-current" />
            </motion.span>
        </motion.button>
    )
}
