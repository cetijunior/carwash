export default function ServicesSection() {
    const services = [
        {
            title: "Mini Market",
            icon: "🥕",
            image: "/images/Store1.jpg",
            desc: "We stock all the essentials — fruits, vegetables, dairy, drinks, snacks, bread, cleaning products, and more. It's small, but it's filled with love, and we restock often to keep everything fresh. Perfect for daily needs or a quick top-up.",
        },
        {
            title: "Car Wash",
            icon: "🧼",
            image: "/images/Carwash.jpg",
            desc: "We wash every car like it’s our own. Whether it's a quick rinse or a full scrub inside and out, we do it all by hand — no machines, just water, soap, and elbow grease. Affordable, friendly, and always done with care.",
        },
        {
            title: "Parking Space",
            icon: "🅿️",
            image: "/images/Parking.jpg",
            desc: "If you're passing by or need a simple place to park, we’ve got a few spots out front. No gates, no tickets — just leave your car and enjoy the market or car wash while you're here. Clean, open, and easy.",
        },
    ];

    return (
        <section id="services" className="bg-gradient-to-b from-white to-gray-100 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-600 mb-6">What We Offer</h2>
                <p className="text-gray-600 text-lg mb-16">One location, three great services — all designed to make your day smoother.</p>

                <div className="grid gap-12 md:grid-cols-3">
                    {services.map(({ title, icon, desc, image }) => (
                        <div
                            key={title}
                            className="relative group rounded-xl shadow-lg overflow-hidden transition transform hover:scale-[1.02] hover:shadow-2xl bg-white"
                        >
                            {/* Background Image with Overlay Title */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover group-hover:brightness-90 transition duration-300"
                                />
                                <div className="absolute top-3 left-3 bg-white/80 text-green-600 font-bold px-3 py-1 text-sm rounded-full shadow">
                                    {icon} {title}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4 text-left">
                                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                                <button className="text-green-600 text-sm font-medium hover:underline">See more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
