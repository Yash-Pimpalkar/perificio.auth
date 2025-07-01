"use client"
import React from 'react';
import Link from 'next/link';

const page = () => {
   const directTaxServices = [
     {
       title: 'Income Tax Return Filing',
       description: 'Hassle-free preparation and e-filing of ITRs.',
       icon: '📄', // Document icon
     },
     {
       title: 'Capital Gains Computation',
       description: 'Accurate calculation and advisory on capital gains.',
       icon: '📈', // Chart icon
     },
     {
       title: 'TDS Compliance (24Q, 26Q)',
       description: 'End-to-end support for TDS deductions and filings.',
       icon: '✔️', // Checkmark icon
     },
     {
       title: 'Advance Tax Management',
       description: 'Guidance on advance tax calculations and timely payments.',
       icon: '⏰',
     },
     {
       title: 'Tax Planning & Advisory',
       description: 'Strategic tax planning to minimize liabilities.',
       icon: '💡', // Lightbulb icon
     },
     {
       title: 'International Taxation & DTAA', // NEW SERVICE TAB
       description: 'Expert guidance on cross-border tax implications and Double Taxation Avoidance Agreements.',
       icon: '🌍', // Globe icon for international
     },
   ];

   return (
     // Main container with a suitable light orange background color
     <div className="min-h-screen bg-orange-50 font-inter text-gray-900 overflow-hidden">
       <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

         {/* Hero Section - Prominent orange gradient with blue header */}
         <section
           className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl"
           style={{
             background: 'linear-gradient(135deg, #FFF8E1 0%, #FFDDA0 100%)', // Soft orange gradient
           }}
         >
         
             <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 font-poppins leading-tight">
               Direct Taxation Services
             </h1>
           
         
         </section>

         {/* Highlighted Core Services List - Section with light orange gradient, cards with solid light orange */}
         <section id="services"
                  className="py-8 rounded-xl shadow-lg border border-orange-100"
                  style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}> {/* Section with a different orange gradient */}
           <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 font-poppins">
             Our Expertise Includes:
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
             {directTaxServices.map((service, index) => (
               <div
                 key={index}
                 className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200"
               >
                 <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                   {service.icon}
                 </div>
                 <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins">
                   {service.title}
                 </h3>
                 <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base">
                   {service.description}
                 </p>
               </div>
             ))}
           </div>
         </section>

         {/* Call to Action Section - Orange gradient background, blue header */}
     
       </main>

       {/* Global Font Imports */}
   
     </div>
   );
}

export default page;