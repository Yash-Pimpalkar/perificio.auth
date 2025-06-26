import React from 'react'
import ViewBlogs from '@/components/Blogs/ViewBlogs';
import AnimatedSection from '@/components/AnimatedComponent/AnimatedSection';
import { TPost } from '@/types';
import MovingImages from '@/components/HeroContainer/MovingImages';
import MappedPdf from '@/components/Blogs/MappedPdf';
import QuickContactSection from '@/components/QuickContact/Quickcontact';
import Testinomials from '@/components/Testinomials/Testinomials';

const Homepage = () => {


  // State for chatbot visibility

  // Define your new banner image path here
  const headerBanner = '/assets/topp-banner.jpg'; // Path to your main header banner

  // Path to the new image you uploaded (assuming it's in your public/assets folder)


  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter relative">

      {/* Header Banner */}
      <section className="w-full">
        <img
          src={headerBanner}
          alt="Main Header Banner" // Changed alt text for clarity
          className="w-full h-auto object-cover" // object-cover ensures it fills the space
        />
      </section>

      {/* New Section with "Living well today..." */}
<section className="h-100 w-full bg-gradient-to-br from-[#FFE0B2] to-[#FFCC80] py-10 flex items-center justify-center relative overflow-hidden font-inter">
  {/* Content container */}
  <div className="relative z-10 text-center p-4">
    <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-800 leading-tight">
      {/* First part of the text in blue */}
      HELPING YOU GROW,{' '}
      {/* The word "protect," in red and underlined, also serves as a line break point */}
      <span className="underline decoration-red-500 decoration-2 text-red-600">
        PROTECT,
      </span>{' '}
      <br className="sm:hidden" /> {/* Line break for smaller screens */}
      {/* The rest of the text in blue */}
      <br />AND ENJOY YOUR WEALTH.
    </p>
  </div>
</section>



      {/* Added relative for chatbot positioning */}
      {/* Dynamic Services Advertising Banner with Rolling Cards   */}

      <section className="">
        <MovingImages />
      </section>
      <AnimatedSection>
        {/* Testimonials Section */}
      <section>
       <Testinomials />
      </section>
      </AnimatedSection>

      {/* Blog/Knowledge Base Section */}

      <section>
        <ViewBlogs />
      </section>

        

      <section className="py-12 md:py-20 px md:px-6 sm:px-4 bg-orange-50">
        <MappedPdf />
      </section>

      {/* Contact Section */}
      <section id="contact">
        {/* Alice Blue background */}
        <QuickContactSection />
      </section>

      {/* Floating Help Button */}

    </div>

  );
}

export default Homepage