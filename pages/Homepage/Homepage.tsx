import React from 'react'
import ViewBlogs from '@/components/Blogs/ViewBlogs';
import AnimatedSection from '@/components/AnimatedComponent/AnimatedSection';
import { TPost } from '@/types';
import MovingImages from '@/components/HeroContainer/MovingImages';
import PdfCard from '@/components/Blogs/pdfs';
import MappedPdf from '@/components/Blogs/MappedPdf';
import QuickContactSection from '@/components/QuickContact/Quickcontact';

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


  const testimonials = [
    {
      quote: "Their team helped me structure my term and health cover optimally—saved tax and gave peace of mind.",
      author: "Arjun S.",
      role: "Entrepreneur"
    },
    {
      quote: "Comprehensive wealth management with a focus on tax efficiency. Exactly what I needed!",
      author: "Priya M.",
      role: "Senior Executive"
    },
    {
      quote: "The best part is their unbiased approach. They truly put their clients' interests first.",
      author: "Rahul K.",
      role: "Business Owner"
    }
  ];

  const services = [
    {
      title: 'Insurance Advisory',
      description: 'Term & Health Insurance | Tax-Benefit Focused',
      icon: '🏥'
    },
    {
      title: 'Taxation Services',
      description: 'Income Tax | GST | International Tax | Tools',
      icon: '📊'
    },
    {
      title: 'Wealth Management',
      description: 'Investments | Retirement | Estate | NRI Desk',
      icon: '💰'
    }
  ];


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
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-8 md:mb-12 text-[#1D4ED8]">
              What Our <span className="text-[#B91C1C]">Clients Say</span>
            </h2>

            <div className="overflow-x-auto hide-scrollbar">
              {/* Added group-hover to the parent of the scrolling div */}
              <div className="flex gap-4 md:gap-6 min-w-max px-2 sm:px-4 md:px-8 animate-scroll group-hover:[animation-play-state:paused]"
                style={{ animation: 'scroll 60s linear infinite' }}>
                {testimonials.concat(testimonials).map((testimonial, index) => (
                  <div key={index} className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition relative">
                    <div className="absolute top-3 right-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EFF6FF] text-[#1D4ED8] font-bold flex items-center justify-center mr-3 text-sm sm:text-base">
                        {testimonial.author.split(' ').map(word => word[0]).join('').toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{testimonial.quote}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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