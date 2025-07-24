import { motion } from "framer-motion";

export default function MapSection() {
    return (
        <section id="map" className="py-24 bg-gradient-to-b from-gray-100 to-white px-4 md:px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-green-600 mb-4"
                >
                    Find Us in Zall Herr
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-600 text-lg mb-16"
                >
                    Just meters apart — one destination for all your essentials.
                </motion.p>

                {/* Locations */}
                <div className="grid md:grid-cols-2 gap-10">
                    {[{
                        title: "Market Lami",
                        icon: "🥕",
                        logo: "/MarketLogo.png",
                        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.7628358219836!2d19.833083299999984!3d41.3991424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350332e65b28bc5%3A0x533bb8fd85bf8a3b!2sMarket%20Lami!5e1!3m2!1sen!2s!4v1753296944333!5m2!1sen!2s"
                    }, {
                        title: "Car Wash Lami",
                        icon: "🧼",
                        logo: "/CarWashLogo.png",
                        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.1445682876351!2d19.83272770817385!3d41.39902644749268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350330058af455d%3A0x4cdca4b0cc24e347!2sCar%20Wash%20Lami!5e1!3m2!1sen!2s!4v1753296963654!5m2!1sen!2s"
                    }].map(({ title, icon, logo, map }, idx) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-6 hover:scale-[1.01] transition-transform"
                        >
                            <img
                                src={logo}
                                alt={`${title} Logo`}
                                className="w-28 h-auto mx-auto mb-4 rounded-xl shadow-md"
                            />
                            <h3 className="text-2xl font-bold text-green-500 mb-4">
                                {icon} {title}
                            </h3>
                            <div className="rounded-lg overflow-hidden border border-gray-300">
                                <iframe
                                    title={`${title} Map`}
                                    src={map}
                                    width="100%"
                                    height="350"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
