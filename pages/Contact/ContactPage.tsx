// Hypothetical Public-Facing Contact Page (ContactUs.tsx or similar)

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Example icons

export default function ContactUs() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form Section (if applicable) */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          {/* Your existing contact form JSX would go here */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Submit</button>
          </form>
        </div>

        {/* Contact Information Section (where the address would go) */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Details</h2>
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium">Office Address</h3>
                <p className="text-gray-700">
                  Office no 23/24 | A Wing <br />
                  Mezzanine Floor | Satyam Shopping Centre <br />
                  M.G.Road | Ghatkopar (East) <br />
                  Mumbai-400 077
                </p>
              </div>
            </div>

            {/* Example: Phone Number */}
            <div className="flex items-center">
              <FaPhone className="text-blue-600 text-2xl mr-3" />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-700">+91 12345 67890</p> {/* Replace with actual phone number */}
              </div>
            </div>

            {/* Example: Email Address */}
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 text-2xl mr-3" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-700">info@example.com</p> {/* Replace with actual email */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}