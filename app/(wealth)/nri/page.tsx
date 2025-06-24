'use client'; // This directive is crucial for using React Hooks like useEffect and useState in Next.js

import React from 'react';
import Link from 'next/link'; // Ensure Link is imported if used for navigation

const page = () => {
    // Define the features data for NRI services
    const features = [
        {
            icon: '🌍', // Globe icon
            title: 'Global Financial Planning',
            description: 'Comprehensive financial planning services tailored for NRIs, covering investments, repatriation, and international tax considerations.'
        },
        {
            icon: '🏡', // House icon
            title: 'Real Estate Advisory (NRI)',
            description: 'Expert guidance for NRIs on buying, selling, and managing properties in India, including legal formalities and rental management.'
        },
        {
            icon: '💼', // Briefcase/Tax icon
            title: 'NRI Taxation & Compliance',
            description: 'Specialized income tax, GST, and international tax advisory services to ensure NRIs comply with Indian tax laws efficiently.'
        },
        {
            icon: '📈', // Growth chart icon
            title: 'Investment Opportunities in India',
            description: 'Identify and invest in the best-performing Indian mutual funds, stocks, and other asset classes suitable for NRI portfolios.'
        },
        {
            icon: '🛡️', // Shield/Insurance icon
            title: 'Insurance Solutions for NRIs',
            description: 'Advisory on term and health insurance policies suitable for NRIs, covering both India and international healthcare needs.'
        },
        {
            icon: '📊', // Chart/Reporting icon
            title: 'Repatriation & Remittance Guidance',
            description: 'Assistance with understanding regulations and procedures for repatriating funds from India and managing international remittances.'
        },
    ];

    return (
        // Main container with the consistent light orange background
        <div className="min-h-screen bg-orange-50 font-inter text-gray-900 overflow-hidden">
            {/* Main content wrapper for consistent spacing and max-width */}
            <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

                {/* Hero Section for NRI Page - Using the prominent orange gradient from the first page */}
                <section
                    className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl" // Adjust padding to match if desired
                    style={{
                        background: 'linear-gradient(135deg, #FFF8E1 0%, #FFDDA0 100%)', // Soft orange gradient
                    }}
                >
                    <div className="text-center relative z-10">
                        {/* Heading with blue-900 and font-poppins */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 font-poppins leading-tight">
                            Your Financial Bridge to <span className="text-red-600">India.</span> {/* Retaining red accent for emphasis */}
                        </h1>
                        {/* Paragraph text with gray-700 and font-inter */}
                        <p className="text-lg sm:text-xl text-gray-700 font-inter max-w-3xl mx-auto mb-8">
                            Specialized financial and advisory services for Non-Resident Indians, making your journey seamless.
                        </p>
                        {/* Button with blue-600 background and font-poppins (matching primary CTA) */}
                        <Link
                            href="#nri-features"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105"
                        >
                            Explore NRI Services
                        </Link>
                    </div>
                </section>

                {/* Features Section for NRI Services - Using the lighter orange gradient for sections */}
                <section
                    id="nri-features"
                    className="py-8 rounded-xl shadow-lg border border-orange-100" // Consistent border
                    style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Lighter orange gradient
                >
                    <div className="container mx-auto px-4">
                        {/* Heading with blue-800 and font-poppins */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 font-poppins">
                            Comprehensive Services for <span className="text-red-600">NRIs</span> {/* Retaining red accent */}
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
                    </div>
                </section>

                {/* Call to Action/Contact Section - Using the tertiary orange gradient */}
                <section
                    className="p-8 sm:p-10 rounded-xl shadow-lg text-center"
                    style={{ background: 'linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%)' }} // Tertiary orange gradient
                >
                    {/* Heading with blue-800 and font-poppins */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 font-poppins">
                        Seamlessly Manage Your Finances in India.
                    </h2>
                    {/* Paragraph with gray-700 and font-inter */}
                    <p className="text-gray-700 text-md sm:text-lg max-w-2xl mx-auto mb-8 font-inter">
                        Connect with our NRI desk for personalized advice and support.
                    </p>
                    {/* Button with red-600 background and font-poppins (matching secondary CTA) */}
                    <Link
                        href="/contact"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105"
                    >
                        Contact NRI Desk
                    </Link>
                </section>
            </main>

            {/* Tailwind CSS Font Imports (ensure these are in your global CSS or in a <style> block for global use) */}
            {/* It's recommended to move this <style jsx global> block to your _app.js or layout.js file */}
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