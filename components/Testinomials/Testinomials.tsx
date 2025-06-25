'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    quote:
      "Their team helped me structure my term and health cover optimally—saved tax and gave peace of mind.",
    author: "Arjun S.",
    role: "Entrepreneur",
  },
  {
    quote:
      "Comprehensive wealth management with a focus on tax efficiency. Exactly what I needed!",
    author: "Priya M.",
    role: "Senior Executive",
  },
  {
    quote:
      "The best part is their unbiased approach. They truly put their clients' interests first.",
    author: "Rahul K.",
    role: "Business Owner",
  },
];

const Testinomials = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    // Duplicate content for seamless looping
    const totalWidth = content.scrollWidth / 2;

    const anim = gsap.to(content, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    animRef.current = anim;

    // Pause/resume on hover
    const pause = () => anim.pause();
    const resume = () => anim.resume();

    wrapper.addEventListener("mouseenter", pause);
    wrapper.addEventListener("mouseleave", resume);

    return () => {
      anim.kill();
      wrapper.removeEventListener("mouseenter", pause);
      wrapper.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1D4ED8] font-montserrat">
          What Our <span className="text-[#B91C1C]">Clients Say</span>
        </h2>

        <div className="overflow-hidden" ref={wrapperRef}>
          <div
            className="flex gap-6 w-max cursor-pointer"
            ref={contentRef}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition relative"
              >
                <div className="absolute top-3 right-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-[#1D4ED8]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h.01M15 12h.01M9 16h6m-7.5 3a9 9 0 1115.732-6.897"
                    />
                  </svg>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EFF6FF] text-[#1D4ED8] font-bold flex items-center justify-center mr-3 text-sm sm:text-base">
                    {testimonial.author
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
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
