import { motion } from "framer-motion";

export default function PricesSection() {
    return (
        <section id="prices" className="pb-10 px-6 bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-black mb-4">Our Prices</h2>
                <p className="text-gray-600 text-lg mb-12">
                    Simple, transparent, and cash-friendly. No hidden fees—just great service.
                </p>

                {/* Grid Section */}
                <div className="grid md:grid-cols-2 gap-10 text-left">
                    {/* Car Wash */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-8 border-t-4 hover:border-t-8 transition-all border-blue-600"
                    >
                        <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                            🚗 Car Wash
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex justify-between border-b pb-2">
                                <span className="font-medium">Quick Rinse</span>
                                <span className="text-lg font-bold text-gray-900">€2 / 200 LEK</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span className="font-medium">Exterior Wash</span>
                                <span className="text-lg font-bold text-gray-900">€4 / 400 LEK</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span className="font-medium">Interior + Exterior</span>
                                <span className="text-lg font-bold text-gray-900">€6 / 600 LEK</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">Full Detail</span>
                                <span className="text-lg font-bold text-gray-900">€20 / 2000 LEK</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Parking */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-8 border-t-4 hover:border-t-8 transition-all border-yellow-500"
                    >
                        <h3 className="text-2xl font-bold text-yellow-600 mb-6 flex items-center gap-2">
                            🅿️ Parking
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex justify-between border-b pb-2">
                                <span className="font-medium">1 - 3 Hours</span>
                                <span className="text-lg font-bold text-gray-900">€2 / 200 LEK</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span className="font-medium">4 - 6 Hours</span>
                                <span className="text-lg font-bold text-gray-900">€5 / 500 LEK</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span className="font-medium">24 Hours</span>
                                <span className="text-lg font-bold text-gray-900">€10 / 1000 LEK</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">While Shopping</span>
                                <span className="text-lg font-bold text-yellow-600">Free</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Cash Notice */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-yellow-100 border border-yellow-300 rounded-xl p-6 max-w-2xl mx-auto"
                >
                    <p className="text-yellow-900 font-semibold text-lg leading-relaxed">
                        💵 We kindly ask all customers to pay <u>in cash</u>, preferably in <strong>Albanian LEK</strong>.
                        We also accept Euros. <br />
                        <span className="text-red-600">We do <strong>not accept cards or digital payments</strong> at this time.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
