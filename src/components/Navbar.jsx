import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [logo, setLogo] = useState("/MarketLogo.png");
    const navLinksLeft = ["about", "services", "gallery"];
    const navLinksRight = ["prices", "map", "contact"];
    const allLinks = [...navLinksLeft, ...navLinksRight];

    // Scroll + Section Based Logo
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);

            if (isScrolled) {
                const sections = ["about", "services", "gallery", "prices", "map", "contact"];
                for (let section of sections) {
                    const el = document.getElementById(section);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        const inView = rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3;

                        if (inView) {
                            const newLogo = ["map", "contact"].includes(section)
                                ? "/CarWashLogo.png"
                                : "/MarketLogo.png";
                            setLogo((prev) => (prev !== newLogo ? newLogo : prev));
                            return;
                        }
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // Logo Auto-Rotation (Only When Not Scrolled)
    useEffect(() => {
        if (scrolled) return;

        const logos = ["/MarketLogo.png", "/CarWashLogo.png", "/ParkingLogo.png"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % logos.length;
            setLogo(logos[index]);
        }, 5000);

        return () => clearInterval(interval);
    }, [scrolled]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 ease-in-out ${scrolled ? "bg-white shadow text-black" : "bg-transparent text-white"}`}>
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
                {/* Left Nav */}
                <div className="hidden md:flex gap-6 font-medium text-sm lg:text-base">
                    {navLinksLeft.map((section) => (
                        <a key={section} href={`#${section}`} className="transition hover:text-green-500">
                            {section.toUpperCase()}
                        </a>
                    ))}
                </div>

                {/* Center Logo */}
                <a href="#home" className="shrink-0">
                    <img
                        src={logo}
                        alt="Lami Logo"
                        className={`rounded-full border shadow size-12 sm:size-14 md:size-16 transition-all duration-500 ${scrolled ? "border-black" : "border-white"}`}
                    />
                </a>

                {/* Right Nav */}
                <div className="hidden md:flex gap-6 font-medium text-sm lg:text-base">
                    {navLinksRight.map((section) => (
                        <a key={section} href={`#${section}`} className="transition hover:text-green-500">
                            {section.toUpperCase()}
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

            {/* Mobile Slide Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
                    <div className="absolute top-0 right-0 h-full w-4/5 sm:w-2/3 bg-white text-black shadow-2xl rounded-l-2xl z-50 p-6 pt-24 transition-transform duration-300 ease-in-out">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-4 right-4 text-black text-3xl z-[60]"
                            aria-label="Close Menu"
                        >
                            {/* <FaTimes /> */}
                        </button>
                        <div className="flex flex-col items-center gap-6 font-semibold text-lg mt-6">
                            {allLinks.map((section) => (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-green-500 text-xl transition-all"
                                >
                                    {section.toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
