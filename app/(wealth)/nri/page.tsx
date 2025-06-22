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
        // Main container with a subtle SOLID light yellow background (consistent with page pattern)
        <div className="min-h-screen bg-amber-50 font-inter text-gray-900 overflow-hidden">
            {/* Hero Section for NRI Page - Now with a yellow gradient */}
            <section className="relative w-full py-16 md:py-24 text-center rounded-xl overflow-hidden shadow-xl mx-auto max-w-7xl mt-8"
                style={{
                    background: 'linear-gradient(135deg, #FFFBEB 0%, #FDE68A 100%)', // Light yellow gradient
                }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold leading-tight mb-4 max-w-4xl mx-auto text-amber-900"> {/* Deep yellow header */}
                        Your Financial Bridge to <span className="text-[#B91C1C]">India.</span> {/* Retaining red accent */}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-800 max-w-3xl mx-auto mb-8"> {/* Darker yellow for paragraph text */}
                        Specialized financial and advisory services for Non-Resident Indians, making your journey seamless.
                    </p>
                    <Link href="#nri-features" className="inline-block bg-[#B91C1C] hover:bg-[#DC2626] text-white font-montserrat font-semibold px-8 py-4 rounded-lg shadow-xl transition transform hover:scale-105 text-lg md:text-xl"> {/* Retaining red button */}
                        Explore NRI Services
                    </Link>
                </div>
            </section>

            {/* Features Section for NRI Services - Now with a lighter yellow background/gradient */}
            <section id="nri-features" className="py-12 md:py-20 bg-gradient-to-br from-white to-amber-100 rounded-xl shadow-lg border border-amber-200 mx-auto max-w-7xl mt-8"> {/* Light yellow gradient and border */}
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold text-amber-900 text-center mb-12"> {/* Deep yellow header */}
                        Comprehensive Services for <span className="text-[#B91C1C]">NRIs</span> {/* Retaining red accent */}
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
                        Seamlessly Manage Your Finances in India.
                    </h2>
                    <p className="text-base sm:text-lg text-amber-100 max-w-2xl mx-auto mb-8"> {/* Light yellow for paragraph */}
                        Connect with our NRI desk for personalized advice and support.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-amber-700 hover:bg-gray-100 font-montserrat font-semibold px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105 text-base md:text-lg"> {/* White button with yellow text */}
                        Contact NRI Desk
                    </Link>
                </div>
            </section>

            {/* Tailwind CSS Font Imports (ensure these are in your global CSS or in a <style> block) */}
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