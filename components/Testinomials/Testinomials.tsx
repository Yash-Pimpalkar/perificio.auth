'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const testimonials = [
  {
    quote: "Their team helped me structure my term and health cover optimally—saved tax and gave peace of mind.",
    author: "Arjun S.",
    role: "Entrepreneur",
  },
  {
    quote: "Comprehensive wealth management with a focus on tax efficiency. Exactly what I needed!",
    author: "Priya M.",
    role: "Senior Executive",
  },
  {
    quote: "The best part is their unbiased approach. They truly put their clients' interests first.",
    author: "Rahul K.",
    role: "Business Owner",
  },
];

const Testinomials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2;

    const animation = gsap.to(slider, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1D4ED8] font-montserrat">
          What Our <span className="text-[#B91C1C]">Clients Say</span>
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 w-max"
            ref={sliderRef}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition relative"
              >
                <div className="absolute top-3 right-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    alt="Google"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EFF6FF] text-[#1D4ED8] font-bold flex items-center justify-center mr-3 text-sm sm:text-base">
                    {testimonial.author
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testinomials;
