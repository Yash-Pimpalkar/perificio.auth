import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";
import {
  RiMoneyDollarCircleFill,
  RiBuilding2Fill,
  RiLinkM,
  RiNewspaperFill
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="relative bg-[#032a5b] text-white px-6 md:px-20 pt-16 pb-20 text-sm font-inter overflow-hidden">
      {/* Optional: Subtle top border with a gradient for a premium feel */}
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 z-10 relative">
        {/* Column 1: Logo, Contact & Social */}
        <div className="space-y-4 ">
          <Image
            src="/logo.png"
            alt="Perificio Logo"
            width={144}
            height={40}
            className="w-36 mb-2 rounded-xl"
            priority
          />
          {/* The detailed description was moved to the bottom section as per your last request */}

          <div className="flex items-center gap-3 text-white/90 mt-6">
            {" "}
            {/* Adjusted margin-top */}
            <FaPhoneAlt className="text-blue-300 text-lg" />
            <a
              href="tel:+919699800600"
              className="hover:text-white transition-colors duration-200"
            >
              +91-9699 800 600
            </a>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <FaEnvelope className="text-blue-300 text-lg" />
            <a
              href="mailto:online@perificio.com"
              className="hover:text-white transition-colors duration-200"
            >
              online@perificio.com
            </a>
          </div>

          <div className="flex gap-3 mt-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/19KDXFYx5x/?mibextid=wwXIfr" // UPDATED FACEBOOK LINK
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            {/* LinkedIn (assuming you want to keep the placeholder for now) */}
            <a
              href="https://www.linkedin.com" // You might want to update this with your actual LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-blue-700 text-white hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/perficioadvisory?igsh=MTNnZ2Rnc2FrOGR0cQ==" // UPDATED INSTAGRAM LINK
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Our Services (Combined Taxation & Wealth) */}
        <div>
          <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-blue-300">
            <RiMoneyDollarCircleFill className="text-2xl" /> Our Services
          </h3>
          <ul className="space-y-3 text-white/80 text-base">
            <li>
              <a
                href="direct-tax"
                className="hover:text-white transition-colors duration-200"
              >
                Direct Tax Consulting
              </a>
            </li>
            <li>
              <a
                href="indirect-tax"
                className="hover:text-white transition-colors duration-200"
              >
                Indirect Tax Solutions
              </a>
            </li>
            <li>
              <a
                href="mca"
                className="hover:text-white transition-colors duration-200"
              >
                MCA Services
              </a>
            </li>
            <li>
              <a
                href="rera"
                className="hover:text-white transition-colors duration-200"
              >
                RERA Advisory
              </a>
            </li>
            <li>
              <a
                href="fema"
                className="hover:text-white transition-colors duration-200"
              >
                International Taxation
              </a>
            </li>
            <li>
              <a
                href="insurance"
                className="hover:text-white transition-colors duration-200"
              >
                Insurance
              </a>
            </li>
            <li>
              <a
                href="invest"
                className="hover:text-white transition-colors duration-200"
              >
                Investment Planning
              </a>
            </li>
            <li>
              <a
                href="real-estate"
                className="hover:text-white transition-colors duration-200"
              >
                Real Estate Guidance
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-blue-300">
            <span className="flex items-start justify-start gap-2 ">
              <RiLinkM className="text-2xl" /> Important Links
            </span>
          </h3>
          <ul className="space-y-3 text-white/80 text-base">
            <li>
              <a
                href="all-blogs"
                className="hover:text-white transition-colors duration-200"
              >
                Blog & Insights
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: About Us, Newsletter & Location */}
        <div>
          <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-blue-300">
            <RiBuilding2Fill className="text-2xl" /> About Us
          </h3>
          <ul className="space-y-3 text-white/80 text-base mb-6">
            <li>
              <a
                href="about"
                className="hover:text-white transition-colors duration-200"
              >
                About Perificio
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-white/90">
            <RiNewspaperFill className="text-xl" /> Stay Updated
          </h4>
          <p className="text-white/70 mb-4 text-sm">
            Join our newsletter for expert insights and financial updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors duration-200 text-sm"
              aria-label="Enter your email for newsletter"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-1 rounded-md transition-colors duration-300 text-sm shadow-md"
            >
              Subscribe
            </button>
          </form>

          <h4 className="text-lg font-semibold mt-8 mb-3 flex items-center gap-2 text-white/90">
            <FaMapMarkerAlt className="text-xl" /> Our Location
          </h4>
          <address className="text-white/70 not-italic text-sm">
            123 Financial Tower, <br />
            Business District, <br />
            Mumbai, Maharashtra, India - 400001
          </address>
        </div>
      </div>

      {/* Disclaimer & Copyright - MODIFIED */}
      {/* <div className=" bottom-0  sticky border-t border-white/20 mt-16 pt-8 text-xs text-white/60 z-0 text-center"> */}
      {/* Expanded description about Perficio */}
      {/* <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-5xl mx-auto">
          Perficio Advisory Services, established in Mumbai in 2023 , is a
          forward-thinking firm dedicated to accomplishing excellence in Health,
          Wealth, and Taxation Planning. We offer integrated, tailored advisory
          solutions , believing true success lies at the intersection of
          financial discipline, physical well-being, and regulatory compliance.
          Our commitment is to add meaningful value to our clients&apos;
          financial lives with high moral standards.
        </p> */}

      {/* Original Disclaimer */}
      {/* <p className="mb-4 leading-relaxed max-w-4xl mx-auto">
          Perificio Wealth Private Limited makes no warranties or
          representations on services provided. Investments are subject to
          market risk. Consult a certified financial advisor before acting on
          any information.
        </p> */}
      {/* <p className="text-white/40">
          &copy; {new Date().getFullYear()} Perificio. All rights reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
