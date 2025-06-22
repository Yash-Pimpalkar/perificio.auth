"use client"
import React from 'react'
import Link from 'next/link';

const page = () => { // Make sure this line is exactly as written, with the curly brace {
   return (
     // Main container with a suitable light orange background color
     <div className="min-h-screen bg-orange-50 font-inter text-gray-900 overflow-hidden">
       <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

         {/* Hero Section - The MCA Hero with Orange Gradient Background and Blue Header */}
         <section className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl"
           style={{
             background: 'linear-gradient(135deg, #FFF8E1 0%, #FFDDA0 100%)', // Soft orange gradient
           }}>
           <div className="text-center relative z-10">
             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 font-poppins leading-tight">
               The <span className="text-blue-600">Ministry of Corporate Affairs</span>
             </h1>
             <p className="text-lg sm:text-xl text-gray-700 font-inter max-w-3xl mx-auto mb-8">
               Ensuring compliance, oversight, and regulatory integrity for corporate development in India.
             </p>
             <Link
               href="#areas-of-oversight"
               className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105"
             >
               Explore Key Functions
             </Link>
           </div>
         </section>

         {/* Our Mission & Key Responsibilities Section - With Orange Gradient Background and Blue Headers */}
         <section className="py-8 rounded-xl shadow-lg border border-orange-100"
                  style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-8">
             {/* Mission Card */}
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 🎯
               </div>
               <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3 font-poppins">
                 Our Mission
               </h2>
               <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base">
                 The Ministry of Corporate Affairs is dedicated to upholding corporate governance, fostering economic stability, and ensuring the protection of stakeholder interests through robust regulatory frameworks and diligent oversight. We strive for excellence in governance and transparency.
               </p>
             </div>
             {/* Responsibilities Card */}
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 ✅
               </div>
               <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3 font-poppins">
                 Key Responsibilities
               </h2>
               <ul className="list-none p-0 text-gray-700 space-y-2 text-sm sm:text-base text-left w-full">
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Policy formulation and implementation for corporate affairs.</li>
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Regulatory compliance monitoring and enforcement.</li>
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Administration of the Companies Act, 2013 and LLP Act, 2008.</li>
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Promotion of good corporate governance practices.</li>
                 <li className="flex items-start gap-2"><span className="text-blue-600 text-xl leading-none pt-0.5">▪</span> Investor protection and education.</li>
               </ul>
             </div>
           </div>
         </section>

         {/* Areas of Oversight Section - With Orange Gradient Background and Blue Headers */}
         <section id="areas-of-oversight" className="py-8 rounded-xl shadow-lg border border-orange-100"
                  style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}>
           <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 font-poppins">
             Areas of Oversight
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 🏢
               </div>
               <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins">Corporate Governance</h3>
               <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base">
                 Promoting transparent and ethical practices in corporate management and decision-making.
               </p>
             </div>
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 📈
               </div>
               <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins">Company & LLP Laws</h3>
               <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base">
                 Administering and enforcing the Companies Act and Limited Liability Partnership Act.
               </p>
             </div>
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 🛡️
               </div>
               <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins">Investor Protection</h3>
               <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base">
                 Safeguarding the interests of investors and promoting a fair investment environment.
               </p>
             </div>
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 📜
               </div>
               <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins">Legal & Statutory Compliance</h3>
               <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base">
                 Ensuring adherence to various legal and statutory requirements for businesses.
               </p>
             </div>
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 🤝
               </div>
               <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins">Stakeholder Engagement</h3>
               <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base">
                 Facilitating dialogue and collaboration with various corporate stakeholders.
               </p>
             </div>
             <div className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200">
               <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                 🌍
               </div>
               <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins">International Cooperation</h3>
               <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base">
                 Aligning Indian corporate practices with global best practices and standards.
               </p>
             </div>
           </div>
         </section>

         {/* Contact CTA Section - Orange Gradient Background and Blue Header */}
         <section className="p-8 sm:p-10 rounded-xl shadow-lg text-center"
           style={{ background: 'linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%)' }}>
           <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 font-poppins">
             Connect with the Ministry of Corporate Affairs
           </h2>
           <p className="text-gray-700 text-md sm:text-lg max-w-2xl mx-auto mb-8 font-inter">
             For official inquiries, guidance, or feedback, our team is ready to assist you.
           </p>
           <div className="flex justify-center">
             <Link
               href="/contact-mca"
               className="inline-block px-8 py-4 bg-red-600 text-white no-underline rounded-full font-bold
                 text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 hover:bg-red-700 shadow-lg"
             >
               Contact the MCA
             </Link>
           </div>
         </section>
       </main>

       {/* Global Font Imports */}
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
}

export default page;