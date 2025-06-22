// pages/fema.js OR components/FEMATab.js (depending on your routing structure)
'use client'; // This directive is crucial for client-side functionality

import React from 'react';
// import Head from 'next/head'; // Uncomment if this is a top-level page in `pages/`

const page = () => {
  // Define the key points about FEMA for customers
  const femaHighlights = [
    {
      title: 'Simplified Foreign Exchange',
      description: 'FEMA facilitates external trade and payments, making cross-border transactions smoother and more accessible for businesses and individuals.',
      icon: '🌐', // Globe/Network icon
    },
    {
      title: 'Current Account Transactions',
      description: 'Governs daily international transactions like payments for trade, services, interest, and remittances, generally permitted without restrictions.',
      icon: '💸', // Money wings icon
    },
    {
      title: 'Capital Account Transactions',
      description: 'Regulates cross-border investments such as Foreign Direct Investment (FDI), Overseas Direct Investment (ODI), and External Commercial Borrowings (ECBs).',
      icon: '📈', // Growth chart icon
    },
    {
      title: 'Resident vs. Non-Resident',
      description: 'Clearly defines categories of individuals and entities based on residency, impacting the applicability of various foreign exchange rules.',
      icon: '🏠', // House/Residency icon
    },
    {
      title: 'Authorized Persons',
      description: 'All foreign exchange transactions must be conducted through RBI-authorized entities like banks and money changers, ensuring proper oversight.',
      icon: '🤝', // Handshake icon
    },
    {
      title: 'Liberalized Remittance Scheme (LRS)',
      description: 'Allows resident individuals to remit funds abroad up to specified limits for various purposes like travel, education, and medical treatment.',
      icon: '✈️', // Airplane/Travel icon
    },
    {
      title: 'Compliance & Reporting',
      description: 'Mandates specific reporting requirements for foreign transactions to ensure transparency and prevent illegal activities like money laundering.',
      icon: '✅', // Checkmark/Compliance icon
    },
    {
      title: 'Advisory & Penalties',
      description: 'While generally civil in nature, non-compliance can lead to penalties and investigations, emphasizing the need for expert legal guidance.',
      icon: '⚖️', // Scales of justice icon
    },
  ];

  return (
    // Main container with a suitable light orange background color
    <div className="min-h-screen bg-orange-50 font-inter text-gray-900 overflow-hidden">
      {/* Head section for page metadata - uncomment if this is a top-level page */}
      {/* <Head>
        <title>FEMA Compliance & Foreign Exchange - Corporate Legal Services</title>
        <meta name="description" content="Understand the Foreign Exchange Management Act and its implications for individuals and businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* Hero Section for FEMA - Now with Orange Gradient Background */}
        <section className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #FFF8E1 0%, #FFDDA0 100%)', // Soft orange gradient
          }}>
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 font-poppins leading-tight"> {/* Deep blue header */}
              FEMA: Navigating <span className="text-blue-700">Foreign Exchange</span> with Ease
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-inter max-w-3xl mx-auto"> {/* Adjusted text color */}
              Facilitating global transactions, promoting external trade, and ensuring regulatory compliance.
            </p>
            <a href="#key-aspects" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold font-poppins px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105"> {/* Changed to blue button */}
              Discover Key Aspects
            </a>
          </div>
        </section>

        {/* Key Aspects Section - Now with Orange Gradient Background and Orange Cards */}
        <section id="key-aspects"
                 className="py-8 rounded-xl shadow-lg border border-orange-100" // Added orange border
                 style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }}> {/* Section with a different orange gradient */}
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 font-poppins"> {/* Deep blue header */}
            Understanding FEMA for Your Global Transactions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
            {femaHighlights.map((feature, index) => (
              <div
                key={index}
                className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200" // Light orange card background and border
              >
                <div className="text-5xl sm:text-6xl mb-4 text-blue-600"> {/* Blue icon */}
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins"> {/* Blue header */}
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base"> {/* Adjusted text color */}
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action / Consultation Section - Now with Orange Gradient Background */}
        <section className="p-8 sm:p-10 rounded-xl shadow-lg text-center"
          style={{ background: 'linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%)' }}> {/* Another orange gradient */}
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 font-poppins"> {/* Deep blue header */}
            Require Expert FEMA Advisory?
          </h2>
          <p className="text-gray-700 text-md sm:text-lg max-w-2xl mx-auto mb-8 font-inter"> {/* Adjusted text color */}
            Navigate the complexities of foreign exchange regulations with confidence. Our experts are here to assist.
          </p>
          <a href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105">
            Get FEMA Legal Assistance
          </a>
        </section>
      </main>

      {/* Global Font Imports (or define in styles/globals.css for better performance) */}
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