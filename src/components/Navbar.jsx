"use client";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaShower, FaParking } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentLogo, setCurrentLogo] = useState(0);

    const navLinksLeft = [
        { id: "services", label: "Services", icon: "🛠️" },
        { id: "prices", label: "Prices", icon: "💵" }
    ];

    const navLinksRight = [
        { id: "map", label: "Location", icon: "🗺️" },
        { id: "contact", label: "Contact", icon: "📞" }
    ];

    const allLinks = [...navLinksLeft, ...navLinksRight];

    const logos = [
        { src: "/MarketLogo.png", icon: FaShoppingCart, color: "from-blue-500 to-green-600" },
        { src: "/CarWashLogo.png", icon: FaShower, color: "from-emerald-500 to-blue-600" },
        { src: "/ParkingLogo.png", icon: FaParking, color: "from-blue-500 to-yellow-600" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLogo((prev) => (prev + 1) % logos.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleNavClick = (id) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const LogoIcon = logos[currentLogo].icon;

    return (
        <>
            <motion.nav className="fixed top-0 w-full z-50 bg-gradient-to-tr from-emerald-500 via-blue-400 to-yellow-500 text-white transition-all duration-500 shadow-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinksLeft.map(({ id, label, icon }) => (
                                <motion.button
                                    key={id}
                                    onClick={() => handleNavClick(id)}
                                    className="group flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm text-white hover:text-green-300 hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{icon}</span>
                                    <span className="font-semibold tracking-wide">{label.toUpperCase()}</span>
                                </motion.button>
                            ))}
                        </div>

                        <motion.div className="relative" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                            <button onClick={() => handleNavClick('home')} className="relative group">
                                <motion.div
                                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${logos[currentLogo].color} opacity-20 blur-lg`}
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div className="relative border rounded-full p-1 shadow-2xl ">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentLogo}
                                            className={`w-full h-full rounded-full bg-gradient-to-r ${logos[currentLogo].color} flex items-center justify-center shadow-lg`}
                                            initial={{ opacity: 0, rotateY: -180, scale: 0.8 }}
                                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                            exit={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                        >
                                            <img
                                                src={logos[currentLogo].src}
                                                alt="Lami Logo"
                                                onClick={() => handleNavClick('hero')}
                                                className="w-12 h-12 lg:w-12 lg:h-12 rounded-full object-contain"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                {/* <motion.div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold tracking-widest text-white" animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                    LAMI
                                </motion.div> */}
                            </button>
                        </motion.div>

                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinksRight.map(({ id, label, icon }) => (
                                <motion.button
                                    key={id}
                                    onClick={() => handleNavClick(id)}
                                    className="group flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm text-white hover:text-green-300 hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{icon}</span>
                                    <span className="font-semibold tracking-wide">{label.toUpperCase()}</span>
                                </motion.button>
                            ))}
                        </div>

                        <motion.button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div key={menuOpen ? 'close' : 'menu'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setMenuOpen(false)} />
                        <motion.div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black z-50 shadow-2xl lg:hidden" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}>
                            <div className={`relative h-32 bg-gradient-to-br ${logos[currentLogo].color} flex items-center justify-center`}>
                                <div className="text-center">
                                    <div className="size-28 mx-auto mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <img
                                            src={logos[currentLogo].src}
                                            alt="Lami Logo"
                                            className="size-24 rounded-full object-contain"
                                        />                                    </div>
                                    {/* <h2 className="text-white font-bold text-xl tracking-wide">LAMI</h2> */}
                                </div>
                                <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors duration-200">
                                    <FaTimes size={20} />
                                </button>
                            </div>
                            <div className="px-6 py-8 space-y-2">
                                {allLinks.map(({ id, label, icon }, index) => (
                                    <motion.button key={id} onClick={() => handleNavClick(id)} className="w-full text-left p-4 rounded-xl hover:bg-white/10 transition-colors duration-200 flex items-center space-x-4 group text-white" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{icon}</span>
                                        <span className="font-semibold text-lg">{label.toUpperCase()}</span>
                                    </motion.button>
                                ))}
                            </div>
                            <motion.div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
                                <div className="text-center text-sm">
                                    <p className="mb-2">Zall Herr, Tirana</p>
                                    <p>Powered by <a href="https://www.ca-webservices.com" target="_blank" rel="noopener noreferrer" className="text-green-300 font-semibold hover:underline">ca-webservices.com</a></p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
