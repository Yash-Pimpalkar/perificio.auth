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
    ];

    return (
        // Main container with the light orange background from the previous page
        <div className="min-h-screen bg-orange-50 font-inter text-gray-900 overflow-hidden">
            {/* Main content wrapper for consistent spacing and max-width */}
            <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

                {/* Hero Section for Invest Page - Using the prominent orange gradient from the first page */}
                <section
                    className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl"
                    style={{
                        background: 'linear-gradient(135deg, #FFF8E1 0%, #FFDDA0 100%)', // Soft orange gradient
                    }}
                >
                    <div className="text-center relative z-10">
                        {/* Heading with blue-900 and font-poppins */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 font-poppins leading-tight">
                            Smart Investing Made <span className="text-red-600">Simple.</span>
                        </h1>
                        {/* Paragraph text with gray-700 and font-inter */}
                        <p className="text-lg sm:text-xl text-gray-700 font-inter max-w-3xl mx-auto mb-8">
                            Unlock your financial potential with Perficio&apos;s expert guidance and advanced investment tools.
                        </p>
                        {/* Button with blue-600 background and font-poppins */}
                        <Link
                            href="#features"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105"
                        >
                            Explore Our Features
                        </Link>
                    </div>
                </section>

                {/* Features Section - Using the lighter orange gradient for sections */}
                <section
                    id="features"
                    className="py-8 rounded-xl shadow-lg border border-orange-100" // Consistent border
                    style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Lighter orange gradient
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 font-poppins"> {/* Blue-800 heading with font-poppins */}
                        Why Choose Perficio for Your <span className="text-red-600">Investments?</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                // Card styling with bg-orange-50, border-orange-200, and hover effects
                                className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200"
                            >
                                {/* Icon color changed to blue-600 */}
                                <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                                    {feature.icon}
                                </div>
                                {/* Feature title with blue-700 and font-poppins */}
                                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins">
                                    {feature.title}
                                </h3>
                                {/* Description with gray-700 and font-inter */}
                                <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action/Contact Section - Using the tertiary orange gradient */}
                <section
                    className="p-8 sm:p-10 rounded-xl shadow-lg text-center"
                    style={{ background: 'linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%)' }} // Tertiary orange gradient
                >
                    {/* Heading with blue-800 and font-poppins */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 font-poppins">
                        Ready to Grow Your Wealth?
                    </h2>
                    {/* Paragraph with gray-700 and font-inter */}
                    <p className="text-gray-700 text-md sm:text-lg max-w-2xl mx-auto mb-8 font-inter">
                        Connect with our financial advisors to create a personalized investment plan that aligns with your goals.
                    </p>
                    {/* Button with red-600 background and font-poppins */}
                    <Link
                        href="/contact"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105"
                    >
                        Schedule a Consultation
                    </Link>
                </section>
            </main>

            {/* Global Font Imports - It's best to place this in your _app.js or layout.js for global application */}
            {/* If this is a standalone component or you prefer local imports, keep it here */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap');

                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default page;