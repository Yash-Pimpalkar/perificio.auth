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
        <div className="min-h-screen bg-orange-50  text-gray-900 overflow-hidden">
            {/* Main content wrapper for consistent spacing and max-width */}
            <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

                {/* Hero Section for Invest Page - Using the prominent orange gradient from the first page */}
    
                
                        {/* Heading with blue-900 and  */}
                        <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-extrabold text-blue-900   leading-tight mb-8
                        ">
                            Smart Investing Made <span className="text-red-600">Simple.</span>
                        </h1>
                        {/* Paragraph text with gray-700 and  */}
            
                        {/* Button with blue-600 background and  */}
                      
               
           

                {/* Features Section - Using the lighter orange gradient for sections */}
           
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 "> {/* Blue-800 heading with  */}
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
                                {/* Feature title with blue-700 and  */}
                                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 ">
                                    {feature.title}
                                </h3>
                                {/* Description with gray-700 and  */}
                                <p className="text-gray-700 leading-relaxed  text-sm sm:text-base text-justify">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
           

                {/* Call to Action/Contact Section - Using the tertiary orange gradient */}
            
            </main>

            {/* Global Font Imports - It's best to place this in your _app.js or layout.js for global application */}
            {/* If this is a standalone component or you prefer local imports, keep it here */}

        </div>
    );
};

export default page;