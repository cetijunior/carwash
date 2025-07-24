import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import RotatingText from "./RotatingText";

export default function GallerySection() {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const galleryImages = [
        { src: "/images/Store1.jpg", category: "Market" },
        { src: "/images/StoreInside.jpg", category: "Market" },
        { src: "/images/Store.jpg", category: "Market" },
        { src: "/images/Carwash.jpg", category: "Car Wash" },
        { src: "/images/Carwash(2).jpg", category: "Car Wash" },
        { src: "/images/CarwashInside.jpg", category: "Car Wash" },
        { src: "/images/Parking.jpg", category: "Parking" },
        { src: "/images/Entrance.jpg", category: "Parking" },
    ];

    return (
        <section id="gallery" className="py-2 bg-gradient-to-b from-white to-gray-50 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-green-600 text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Work in Action
                </motion.h2>
                <h1 className="text-sm md:text-2xl mb-2 drop-shadow-md flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
                    <span>Explore our daily grind at{" "}</span>
                    <RotatingText
                        texts={["🛒 Market", "🚗 Car Wash", "🅿️ Parking"]}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        rotationInterval={2200}
                        staggerDuration={0.02}
                        staggerFrom="center"
                        mainClassName="inline-block text-green-500 font-semibold"
                        elementLevelClassName={["text-green-500", "text-blue-500", "text-yellow-500"]}
                        splitBy="characters"
                    />
                    <span className="">Lami</span>
                </h1>

                {["Market", "Car Wash", "Parking"].map((category, catIndex) => {
                    const filtered = galleryImages.filter((img) => img.category === category);
                    return (
                        <div key={category} className="mb-16">
                            <motion.h3
                                className="text-2xl font-semibold text-green-500 mb-6"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: catIndex * 0.2 }}
                                viewport={{ once: true }}
                            >
                                {category}
                            </motion.h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                {filtered.map((img, index) => {
                                    const overallIndex = galleryImages.findIndex((g) => g.src === img.src);
                                    return (
                                        <motion.div
                                            key={img.src}
                                            className="relative group overflow-hidden rounded-xl shadow-md"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4 }}
                                            viewport={{ once: true }}
                                        >
                                            <img
                                                src={img.src}
                                                alt={category}
                                                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                                                onClick={() => {
                                                    setSelectedIndex(overallIndex);
                                                    setOpen(true);
                                                }}
                                            />
                                            <div
                                                onClick={() => {
                                                    setSelectedIndex(overallIndex);
                                                    setOpen(true);
                                                }}
                                                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center cursor-pointer"
                                            >
                                                <FaSearchPlus className="text-white text-2xl" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={selectedIndex}
                    slides={galleryImages.map((img) => ({ src: img.src }))}
                />
            </div>
        </section>
    );
}
