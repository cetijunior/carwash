export default function ContactSection() {
    return (
        <section id="contact" className="pb-24 bg-white px-6 text-center">
            <div className="max-w-2xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-4">
                    Get in Touch 📞
                </h2>

                {/* Subtitle */}
                <p className="text-gray-700 text-lg mb-10">
                    Quick question? Need a service? We're here to help.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <a
                        href="tel:+355696939405"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-200"
                    >
                        📱 Call Us at  <span className="underline">  +355 69 693 9405 </span>
                    </a>
                    <a
                        href="https://wa.me/355696939405"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition duration-200"
                    >
                        💬 WhatsApp
                    </a>
                </div>

                {/* Footer note */}
                <p className="mt-8 text-sm text-gray-500">
                    Prefer messaging? WhatsApp is usually fastest.
                </p>
            </div>
        </section>
    );
}
