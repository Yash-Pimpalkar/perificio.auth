// pages/about-us.js OR components/AboutUsPage.js (depending on your routing structure)
'use client'; // This directive is crucial for client-side functionality

import React from 'react';
import Link from 'next/link'; // Import Link for navigation
// import Head from 'next/head'; // Uncomment if this is a top-level page in `pages/`

const AboutUsPage = () => {
  const coreValues = [
    {
      icon: '🛡️', // Shield for Integrity
      title: 'Unwavering Integrity',
      description: 'Upholding the highest ethical standards and transparency in all our dealings to build enduring trust.',
    },
    {
      icon: '🎯', // Target for Precision
      title: 'Commitment to Precision',
      description: 'Delivering accurate and meticulously crafted financial solutions, ensuring compliance and clarity.',
    },
    {
      icon: '🤝', // Handshake for Client-Centricity
      title: 'Client-Centric Approach',
      description: 'Prioritizing our clients\' needs, providing personalized advice and fostering strong, collaborative relationships.',
    },
    {
      icon: '💡', // Lightbulb for Innovation
      title: 'Continuous Innovation',
      description: 'Embracing modern practices and advanced technologies to offer efficient and forward-thinking solutions.',
    },
  ];

  const whyChooseUs = [
    {
      icon: '👩‍💼👨‍💼', // Professional Expertise
      title: 'Professional Expertise',
      description: 'Our team comprises CAs, CFPs, and insurance specialists with deep industry-specific knowledge.',
    },
    {
      icon: '💻', // Technology-Driven
      title: 'Technology-Driven',
      description: 'Leveraging AI-powered tax optimization, mobile apps, and secure digital platforms for efficient service.',
    },
    {
      icon: '📜', // Regulatory Compliance
      title: 'Regulatory Compliance',
      title: 'Regulatory Compliance',
      description: 'As a SEBI-registered RIA, IRDAI-licensed, and ICAI member, we ensure full regulatory adherence.',
    },
    {
      icon: '🌍', // Global Reach
      title: 'Global Reach',
      description: 'Serving a diverse clientele across India, Middle East, Asia-Pacific, Europe, and North America.',
    },
    {
      icon: '🌟', // Client-Centric
      title: 'Client-Centric',
      description: 'Enjoy dedicated relationship managers, 24/7 support, and multilingual services tailored to your needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 font-inter text-gray-900 overflow-hidden">
      {/* Head section for page metadata - uncomment if this is a top-level page */}
      {/* <Head>
        <title>About Perficio - Your Trusted Partner for Tax, Health & Wealth</title>
        <meta name="description" content="Perficio Advisory Services Private Limited: Accomplishing excellence in Health, Wealth, and Taxation Planning." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* Hero Section - Matched to previous page's hero gradient and blue header */}
        <section
          className="relative w-full py-20 px-6 rounded-xl overflow-hidden shadow-xl" // shadow-xl instead of shadow-2xl for consistency
          style={{
            background: 'linear-gradient(135deg, #FFF8E1 0%, #FFDDA0 100%)', // Soft orange gradient
          }}
        >
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 font-poppins leading-tight">
              About <span className="text-red-600">Perficio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-inter max-w-3xl mx-auto">
              Your Trusted Partner for Tax, Health & Wealth Solutions.
              <br />
              <span className="font-semibold italic">"Perficio – To Accomplish with Excellence"</span>
            </p>
            {/* Added a button here consistent with previous page's hero button */}
            <Link
              href="#our-journey" // Link to the next section
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105 mt-8"
            >
              Discover Our Story
            </Link>
          </div>
        </section>

        {/* Introduction / Our Story - Matched to previous page's section gradient */}
        <section
          id="our-journey"
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Matched gradient
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 font-poppins text-center"> {/* Centered and text-blue-800 for consistency */}
            Our Journey of Excellence
          </h2>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto font-inter">
            Perficio Advisory Services Private Limited, incorporated in 2023 and headquartered in Mumbai, is a forward-thinking advisory firm. Our foundation is built on the principle of accomplishing excellence in every aspect of Health, Wealth, and Taxation Planning. The name "Perficio," derived from Latin, signifies “to accomplish,” “to complete,” or “to bring to perfection,” reflecting our dedication to delivering thorough and transformative outcomes.
          </p>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto mt-4 font-inter">
            We believe that true success is found at the intersection of financial discipline, physical well-being, and regulatory compliance. At Perficio, we provide integrated advisory solutions that are customized, compliant, and aligned with the evolving needs of individuals, professionals, and businesses. We don’t just advise — we accomplish, perfect, and deliver.
          </p>
        </section>

        {/* The Founders Section - Matched to previous page's section gradient and card backgrounds */}
        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Matched gradient
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 font-poppins"> {/* text-blue-800 for consistency */}
            Meet Our Visionary Founders
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex flex-col items-center text-center p-6 sm:p-7 bg-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1 border border-orange-200"> {/* Matched card styles */}
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600">🩺</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins"> {/* text-blue-700 for consistency */}
                UK-qualified Physiotherapist
              </h3>
              <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base"> {/* text-sm/base for consistency */}
                With a Masters in Advanced Physiotherapy (UK), she brings extensive experience in preventive healthcare, lifestyle-linked financial planning, and rehabilitative support. Her expertise ensures our financial advisory is informed by holistic health insights, creating strategies that support both financial freedom and physical well-being.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 sm:p-7 bg-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1 border border-orange-200"> {/* Matched card styles */}
              <div className="text-5xl sm:text-6xl mb-4 text-blue-600">⚖️</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins"> {/* text-blue-700 for consistency */}
                Chartered Accountant & Legal Expert
              </h3>
              <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base"> {/* text-sm/base for consistency */}
                Holding a Masters in International Trade Laws (Switzerland), she has a strong foundation in direct and indirect taxation, international structuring, and compliance advisory. Her expertise drives our core financial and regulatory service verticals, offering clients actionable, ethical, and globally aligned solutions.
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto mt-8 text-center font-inter">
            Together, these two dynamic women professionals bring a multidimensional approach to advisory services, making Perficio a one-of-its-kind platform that integrates fiscal strength with lifestyle resilience.
          </p>
        </section>

        {/* Strategic Partnership - Matched to previous page's section gradient */}
        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Matched gradient
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 font-poppins text-center"> {/* text-blue-800 and centered for consistency */}
            Empowered by Strategic Partnership
          </h2>
          <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-4xl mx-auto font-inter">
            Perficio is proudly backed by the capabilities of its Principal Consultant — a reputed Chartered Accountancy firm with over 20 years of extensive experience. This partnership brings a highly capable team of qualified and semi-qualified professionals, enabling us to deliver technically robust, compliant, and insight-driven services across all verticals.
          </p>
        </section>

        {/* Why Choose Us - Matched to previous page's section gradient and card backgrounds */}
        <section
          className="py-8 rounded-xl shadow-lg border border-orange-100"
          style={{ background: 'linear-gradient(to right, #FFF3E0 0%, #FFECB3 100%)' }} // Matched gradient
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-10 font-poppins"> {/* text-blue-800 for consistency */}
            Why Choose Perficio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-orange-50 p-6 sm:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-orange-200" // Matched card styles
              >
                <div className="text-5xl sm:text-6xl mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 font-poppins"> {/* text-blue-700 for consistency */}
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-inter text-sm sm:text-base"> {/* text-gray-700 and text-sm/base for consistency */}
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission/Vision Statement - This section remains dark for strong contrast and visual break */}
        <section className="bg-gray-800 text-white p-8 sm:p-10 rounded-xl shadow-lg text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold italic max-w-3xl mx-auto leading-relaxed">
            "We would like to be known as people who add meaningful value to the financial lives of our clients. To be respected as a company which is known for its high moral standards."
          </p>
          <p className="text-md sm:text-lg md:text-xl font-medium text-red-400 mt-4">
            That’s why we come to work every day.
          </p>
        </section>

        {/* Call to Action - Matched to previous page's call to action gradient and button styling */}
        <section
          className="p-8 sm:p-10 rounded-xl shadow-lg text-center" // shadow-lg for consistency
          style={{ background: 'linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%)' }} // Matched gradient
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 font-poppins"> {/* text-blue-800 for consistency */}
            Ready to Accomplish Your Financial Goals with Excellence?
          </h2>
          <p className="text-gray-700 text-md sm:text-lg max-w-2xl mx-auto mb-8 font-inter"> {/* text-gray-700 for consistency */}
            Connect with Perficio today for integrated advisory solutions tailored to your unique health, wealth, and taxation needs.
          </p>
          <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105"> {/* Matched button color */}
            Schedule a Consultation
          </Link>
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

export default AboutUsPage;