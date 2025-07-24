export default function FooterSection() {
    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-green-500">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#home" className="hover:text-green-400">Home</a></li>
                        <li><a href="#services" className="hover:text-green-400">Services</a></li>
                        <li><a href="#gallery" className="hover:text-green-400">Gallery</a></li>
                        <li><a href="#prices" className="hover:text-green-400">Prices</a></li>
                        <li><a href="#map" className="hover:text-green-400">Locations</a></li>
                        <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
                    </ul>
                </div>

                {/* Info */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-green-500">Business Info</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>📍 Zall Herr, Albania</li>
                        <li>📞 <a href="https://wa.me/355696939405" className="text-green-400 hover:underline">+355 69 693 9405</a></li>
                        <li>🕒 Open 08:00 – 21:00 (Mon–Sun)</li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-green-500">About</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Market Lami & Car Wash Lami offer fresh groceries, parking, and car detailing — right next to each other, in one convenient spot.
                    </p>
                </div>
            </div>

            <hr className="my-8 border-gray-800" />

            {/* Copyright & CA Logo */}
            <div className="text-center text-sm text-gray-500 flex flex-col items-center gap-3">
                <span>© {new Date().getFullYear()} Market Lami. All rights reserved.</span>

                <a
                    href="https://ca-webservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:underline"
                >
                    <img
                        src="/CALogo.png"
                        alt="CA Web Services Logo"
                        className="size-12 animate-spin hover:animate-none object-contain"
                    />
                    Created by ca-webservices.com
                </a>
            </div>
        </footer>
    );
}
