"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const bannerImages = [
  { src: "/assets/gst-banner.jpg", url: "/services/gst" },
  { src: "/assets/itr-banner.jpg", url: "/services/itr" },
  { src: "/assets/rera-banner.jpg", url: "/services/rera" },
];

const MovingImages: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Fade-in animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    const container = containerRef.current;
    const items = container.querySelectorAll<HTMLAnchorElement>("a");

    if (items.length === 0) return;

    const totalWidth = Array.from(items)
      .slice(0, items.length / 2) // only count the original set (half of doubled array)
      .reduce((acc, item) => acc + item.offsetWidth + 32, 0); // 32 is approx gap (gap-8)

    let x = 0;

    const speed = 1; // px per tick (adjust this for scroll speed)

    const ticker = gsap.ticker.add(() => {
      x -= speed;
      if (-x >= totalWidth) x = 0;
      gsap.set(container, { x });
    });

    return () => {
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10 bg-gradient-to-br from-[#FFF8E1] to-[#FFDDA0] text-[#1D4ED8] text-center"
    >
      <div className="w-full overflow-hidden relative py-4 md:py-8">
        <div
          ref={containerRef}
          className="flex gap-8 w-max"
        >
          {[...bannerImages, ...bannerImages].map((banner, index) => (
            <a
              key={index}
              href={banner.url}
              className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[820px] aspect-[16/9] flex-shrink-0 overflow-hidden rounded-2xl transition-transform duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              target="_self"
            >
              <img
                src={banner.src}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#contact"
        className="minline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold font-poppins px-8 py-4 rounded-lg shadow-md transition transform hover:scale-105 mt-8"
      >
        Explore All Services & Get Started
      </a>
    </section>
  );
};

export default MovingImages;
