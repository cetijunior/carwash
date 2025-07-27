"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [logo, setLogo] = useState("/MarketLogo.png");
    const [logoIndex, setLogoIndex] = useState(0);

    const navLinksLeft = [
        { id: "services", label: "Services", emoji: "🛠️" },
        { id: "prices", label: "Prices", emoji: "💵" }
    ];

    const navLinksRight = [
        { id: "map", label: "Map", emoji: "🗺️" },
        { id: "contact", label: "Contact", emoji: "📞" },
        // { id: "gallery", label: "Gallery", emoji: "📸" }
    ];

    const allLinks = [...navLinksLeft, ...navLinksRight];
    const logos = ["/MarketLogo.png", "/CarWashLogo.png", "/ParkingLogo.png"];

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Logo auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (logoIndex + 1) % logos.length;
            setLogoIndex(newIndex);
            setLogo(logos[newIndex]);
        }, 15000);
        return () => clearInterval(interval);
    }, [logoIndex]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 ease-in-out ${scrolled ? "bg-white shadow text-black" : "bg-transparent text-white"}`}>
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
                {/* Left Nav */}
                <div className="hidden md:flex gap-6 font-medium text-sm lg:text-base">
                    {navLinksLeft.map(({ id, label, emoji }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="transition hover:text-green-500 flex items-center gap-1"
                        >
                            <span>{emoji}</span> {label.toUpperCase()}
                        </a>
                    ))}
                </div>

                {/* Center Logo (Animated & Glowing) */}
                <a href="#home" className="shrink-0 relative z-50">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={logo}
                            src={logo}
                            alt="Lami Logo"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6 }}
                            className={`rounded-full size-12 sm:size-14 md:size-16 border-2 ${scrolled ? "border-black" : "border-white"} shadow-2xl transition-all duration-500 animate-colorPulse`}
                        />
                    </AnimatePresence>
                </a>

                {/* Right Nav */}
                <div className="hidden md:flex gap-6 font-medium text-sm lg:text-base">
                    {navLinksRight.map(({ id, label, emoji }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="transition hover:text-green-500 flex items-center gap-1"
                        >
                            <span>{emoji}</span> {label.toUpperCase()}
                        </a>
                    ))}
                </div>

                {/* Burger Icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl z-[60]"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FaTimes className="text-black drop-shadow" /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
                    <div className="absolute top-0 right-0 h-full w-4/5 sm:w-2/3 bg-white text-black shadow-2xl rounded-l-2xl z-50 p-6 pt-24 flex flex-col justify-between">
                        {/* Close Button */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-4 right-4 text-black text-3xl z-[60]"
                            aria-label="Close Menu"
                        >
                            <FaTimes />
                        </button>

                        {/* Menu Content */}
                        <div className="flex flex-col items-center gap-6 font-semibold text-lg mt-6">
                            {allLinks.map(({ id, label, emoji }, idx) => (
                                <div key={id} className="w-full text-center">
                                    <a
                                        href={`#${id}`}
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-2 text-xl hover:text-green-500 transition flex items-center justify-center gap-2"
                                    >
                                        <span>{emoji}</span> {label.toUpperCase()}
                                    </a>
                                    {idx !== allLinks.length - 1 && (
                                        <hr className="w-3/4 mx-auto border-t border-gray-300" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="text-center mt-10 text-sm text-gray-500 border-t pt-4 border-gray-300">
                            Powered by{" "}
                            <a
                                href="https://www.ca-webservices.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 font-semibold hover:underline"
                            >
                                ca-webservices.com
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
