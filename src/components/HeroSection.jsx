"use client";

import { motion } from "framer-motion";
import RotatingText from "./RotatingText";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center bg-cover bg-center text-white px-4"
            style={{ backgroundImage: "url('/Banner.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 z-0" />

            {/* Content */}
            <motion.div
                className="relative top-[28%] sm:top z-10 text-center max-w-xl mx-auto flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Mobile-Optimized Heading */}
                <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 leading-snug sm:leading-tight">
                    <span className="block">Welcome to</span>
                    <span className="block">
                        <RotatingText
                            texts={["🥕 Market", "🧼 Car Wash", "🅿️ Parking"]}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            rotationInterval={2200}
                            staggerDuration={0.01}
                            staggerFrom="center"
                            mainClassName="inline-block text-green-400"
                            elementLevelClassName="text-green-400"
                            splitBy="characters"
                        />
                        <span className="text-white"> Lami</span>
                    </span>
                </h1>

                {/* Subheading */}
                <motion.p
                    className="text-base xs:text-lg sm:text-xl text-gray-200 mb-8 px-2 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Groceries, hand-wash, and safe parking — right here in Zall Herr.
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
                    <a
                        href="#services"
                        className="bg-white text-black w-full sm:w-auto px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition font-semibold text-sm sm:text-base text-center"
                    >
                        Explore Our Services
                    </a>
                    <a
                        href="https://wa.me/355696939405"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 w-full sm:w-auto px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition text-white font-semibold text-sm sm:text-base text-center"
                    >
                        WhatsApp Us
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
