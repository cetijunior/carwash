export default function AboutSection() {
    return (
        <section id="about" className="bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

                {/* Block 1: Intro */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-600">Welcome to Market Lami</h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        We’re a small family-run business in Zall Herr — offering fresh groceries, a hand-wash car wash, and a peaceful place to park.
                        Everything here is handled with care and a warm welcome.
                    </p>
                </div>

                {/* Market Section */}
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-semibold text-green-500">🥕 Our Little Market</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We stock the basics — fruits, veggies, milk, bread, drinks, and snacks.
                            Small in size, big in heart. You’ll always find something fresh and useful on our shelves.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <img
                            src="/images/Store1.jpg"
                            alt="Market interior"
                            className="rounded-xl shadow-lg w-full h-80 object-cover border border-gray-200"
                        />
                    </div>
                </div>

                {/* Car Wash Section */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-semibold text-green-500">🧼 Car Wash with Care</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            No machines here. Just a hose, soap, and elbow grease. We wash every car like it’s our own — inside and out, rain or shine.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <img
                            src="/images/Carwash.jpg"
                            alt="Car wash"
                            className="rounded-xl shadow-lg w-full h-80 object-cover border border-gray-200"
                        />
                    </div>
                </div>

                {/* Parking Section */}
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-semibold text-green-500">🅿️ Simple Parking Space</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Pull in, park, and take your time. Whether you’re shopping or getting a car wash, we’ve got space for you.
                            Clean, simple, no stress.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <img
                            src="/images/Parking.jpg"
                            alt="Parking"
                            className="rounded-xl shadow-lg w-full h-80 object-cover border border-gray-200"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
