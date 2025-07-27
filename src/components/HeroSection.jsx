"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FaShoppingCart,
    FaShower,
    FaParking,
    FaWhatsapp,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaClock
} from "react-icons/fa";

export default function HeroSection() {
    const [currentService, setCurrentService] = useState(0);

    const services = [
        {
            icon: FaShoppingCart,
            name: "Market",
            color: "from-emerald-500 to-green-600",
            desc: "Quality groceries daily"
        },
        {
            icon: FaShower,
            name: "Car Wash",
            color: "from-cyan-500 to-blue-600",
            desc: "Premium car care"
        },
        {
            icon: FaParking,
            name: "Parking",
            color: "from-purple-500 to-indigo-600",
            desc: "Safe & convenient"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative  bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
            {/* Floating background lights */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    className="absolute -top-40  -right-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-300/20 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
            </div>

            <div className="relative top-5 z-10  mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-green-100">
                        <FaMapMarkerAlt className="text-green-600 text-sm" />
                        <span className="text-sm font-medium text-gray-700">Zall Herr, Tirana</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                        Welcome to,{" "}
                        <div>
                            <motion.span
                                key={currentService}
                                className={`bg-gradient-to-r ${services[currentService].color} bg-clip-text text-transparent`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                            >
                                {services[currentService].name}
                            </motion.span>
                            <span className="">
                                {" "} Lami
                            </span>
                        </div>
                    </h1>



                    <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                        Your one-stop destination in the heart of Zall Herr. From fresh groceries to premium car care — we’ve got everything covered.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#services"
                            className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-center"
                        >
                            Explore Our Services
                        </a>
                        <a
                            href="https://wa.me/355696939405"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-white border-2 border-green-500 text-green-600 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
                        >
                            <FaWhatsapp className="text-xl" />
                            Chat with Us
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                        <FaClock className="text-green-600" />
                        <span>Open daily • Quick service • Local favorite</span>
                    </div>
                </motion.div>

                {/* Icons / Service Cards */}
                <motion.div
                    className="grid grid-cols-2 gap-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`group p-6 rounded-3xl shadow-lg bg-white hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col items-center justify-center text-center border border-gray-100 ${index === 2 ? "col-span-2" : ""
                                }`}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setCurrentService(index)}
                        >
                            <div className={`p-4 rounded-full bg-gradient-to-br ${service.color}`}>
                                <service.icon className="text-white text-3xl" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800">{service.name}</h3>
                            <p className="text-gray-500 text-sm">{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
