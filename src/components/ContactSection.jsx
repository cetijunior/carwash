export default function ContactSection() {
    return (
        <section id="contact" className="pb-24 bg-white px-6 text-center relative z-10">
            <div className="max-w-2xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-3">
                    Let’s Talk! 📞
                </h2>

                {/* Divider */}
                <div className="w-16 h-1 bg-green-500 mx-auto mb-4 rounded-full"></div>

                {/* Subtitle */}
                <p className="text-gray-700 text-lg mb-10 px-2">
                    Whether you're ready to book a service or just have a quick question — we’re always happy to help.
                </p>

                {/* CTA Text */}
                <p className="font-medium text-lg text-gray-800 mb-8">
                    Reach out to us today and let’s get you sorted! 🛠️🧼🚗
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <a
                        href="tel:+355696939405"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-200 shadow-md"
                    >
                        📱 Call Us: <span className="underline">+355 69 693 9405</span>
                    </a>
                    <a
                        href="https://wa.me/355696939405"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition duration-200 shadow-md"
                    >
                        💬 Chat on WhatsApp
                    </a>
                </div>

                {/* Footer note */}
                <p className="mt-10 text-sm text-gray-500">
                    We usually respond within minutes on WhatsApp.
                </p>
            </div>
        </section>
    );
}
