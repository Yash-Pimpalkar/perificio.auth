import React from 'react'
import ViewBlogs from '@/components/Blogs/ViewBlogs';
import AnimatedSection from '@/components/AnimatedComponent/AnimatedSection';
import { TPost } from '@/types';
import MovingImages from '@/components/HeroContainer/MovingImages';
import PdfCard from '@/components/Blogs/pdfs';
import MappedPdf from '@/components/Blogs/MappedPdf';
import QuickContactSection from '@/components/QuickContact/Quickcontact';
import Testinomials from '@/components/Testinomials/Testinomials';

interface MarketDataItem {
  name: string;
  price: number;
}

type MarketScrollerType = 'price' | 'custom';

interface MarketScrollerProps {
  data: MarketDataItem[];
  animationSpeed: number; // In seconds
  type: MarketScrollerType;
}
const getPosts = async (): Promise<TPost[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "no-store",
    });

    if (res.ok) {
      const posts = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};


const Homepage = () => {


  // State for chatbot visibility



  const bannerImages = [
    { src: '/assets/gst-banner.png', url: '/services/gst' },
    { src: '/assets/itr-banner.png', url: '/services/itr' },
    { src: '/assets/rera-banner.png', url: '/services/rera' },
  ];

  // Define your new banner image path here
  const headerBanner = '/assets/Header-banner.png'; // Path to your main header banner


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

      {/* The section for the three sub-banners has been removed */}

      {/* Added relative for chatbot positioning */}
      {/* Dynamic Services Advertising Banner with Rolling Cards  */}

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

      <section className="py-12 md:py-20 bg-orange-50">
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