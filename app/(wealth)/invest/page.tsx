'use client'; // This directive is crucial for using React Hooks like useEffect and useState in Next.js

import React from 'react';
import Link from 'next/link'; // Ensure Link is imported if used for navigation

const page = () => {
    // Define the features data, now with only 6 features
    const features = [
        {
            icon: '📊', // You can use actual SVG/React Icons here if preferred
            title: 'Research You Can Rely On',
            description: 'Get access to innovative AI-Based investment guidance tools that give you in-depth insights, live data and live portfolio tracking to leave the guesswork out and help you make a wise investment decision.'
        },
        {
            icon: '⭐', // Changed to a star icon
            title: 'Invest In The Best',
            description: 'Choose from the top-performing mutual funds verified by recognized and reliable institutions like Morningstar and CRISIL.'
        },
        {
            icon: '💸', // Changed to money wings icon
            title: 'Invest At Zero Commission',
            description: 'The direct mutual fund service enables you to invest in 2500+ mutual funds across all the sectors at absolutely 0% commission.'
        },
        {
            icon: '📈', // Changed to a chart icon
            title: 'Portfolio Analysis Report',
            description: 'A reliable report that gives you complete clarity about the current performance of your portfolio along with its expected future performance.'
        },
        {
            icon: '🎯', // Target/Bullseye icon
            title: 'Goal-Based Portfolio',
            description: 'A customised combination of different funds curated to achieve your specific goals within the expected tenure.'
        },
        {
            icon: '🔄', // Refresh/Circular arrows icon
            title: 'Rebalancing and Restructuring',
            description: 'Constantly monitoring the performance of your investments and whenever required, making the necessary changes to ensure optimum performance.'
        },
        // Removed the 7th feature: "Choose The One That Meets Your Needs"
    ];

    return (
        // Main container with a subtle SOLID light yellow background
        <div className="min-h-screen bg-amber-50 font-inter text-gray-900 overflow-hidden">
            {/* Hero Section for Invest Page - Now with a defined yellow gradient */}
            <section className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl mx-auto max-w-7xl mt-8"
                style={{
                    background: 'linear-gradient(135deg, #FFFBEB 0%, #FDE68A 100%)', // Light yellow gradient
                }}>
                <div className="text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold leading-tight mb-4 max-w-4xl mx-auto text-amber-900"> {/* Deep yellow header */}
                        Smart Investing Made <span className="text-red-600">Simple.</span> {/* Keeping red accent for strong contrast */}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-800 max-w-3xl mx-auto mb-8"> {/* Darker yellow for paragraph text */}
                        Unlock your financial potential with Perficio's expert guidance and advanced investment tools.
                    </p>
                    <Link href="#features" className="inline-block bg-red-600 hover:bg-red-700 text-white font-montserrat font-semibold px-8 py-4 rounded-lg shadow-xl transition transform hover:scale-105 text-lg md:text-xl"> {/* Keeping red button */}
                        Explore Our Features
                    </Link>
                </div>
            </section>

            {/* Features Section - Now with a lighter yellow gradient background */}
            <section id="features" className="py-12 md:py-20 bg-gradient-to-br from-white to-amber-100 rounded-xl shadow-lg border border-amber-200 mx-auto max-w-7xl mt-8"> {/* Light yellow gradient and border */}
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold text-amber-900 text-center mb-12"> {/* Deep yellow header */}
                        Why Choose Perficio for Your <span className="text-red-600">Investments?</span> {/* Keeping red accent */}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-amber-200 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-start text-left hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-5xl sm:text-6xl text-amber-600 mb-4"> {/* Yellow icon color */}
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-amber-800 mb-3"> {/* Yellow header */}
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-inter">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action/Contact Section - Now with a stronger yellow gradient */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl shadow-lg text-center mx-auto max-w-7xl mt-8 mb-8"> {/* Stronger yellow gradient */}
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-white mb-4"> {/* White text for contrast */}
                        Ready to Grow Your Wealth?
                    </h2>
                    <p className="text-base sm:text-lg text-amber-100 max-w-2xl mx-auto mb-8"> {/* Light yellow for paragraph */}
                        Connect with our financial advisors to create a personalized investment plan that aligns with your goals.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-amber-700 hover:bg-gray-100 font-montserrat font-semibold px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105 text-base md:text-lg"> {/* White button with yellow text */}
                        Schedule a Consultation
                    </Link>
                </div>
            </section>

            {/* Tailwind CSS Font Imports */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Montserrat:wght@700;800;900&display=swap');

                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                .font-montserrat {
                    font-family: 'Montserrat', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default page;