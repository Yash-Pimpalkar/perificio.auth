'use client';

import React, { useState } from 'react';

const QuickContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !mobile || !agreed) {
      setMessage('Please fill all required fields and agree to the terms.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: mobile,
          subject: 'Quick Contact',
          message: 'Quick inquiry from homepage',
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to submit form');

      setMessage('✅ Submitted successfully!');
      setName('');
      setMobile('');
      setEmail('');
      setAgreed(false);
    } catch (err: any) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="py-12 md:py-20 bg-[#F0F8FF]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-6xl">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold text-[#1D4ED8] leading-tight mb-4">
            <span className="block">GOT QUESTIONS?</span>
            <span className="block text-[#B91C1C]">LET'S TALK!</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-md mx-auto md:mx-0">
            Schedule a <span className="font-bold">FREE</span> call with our expert Financial Advisor and gain personalized insights today.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 w-full max-w-lg bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="flex justify-center mb-4 sm:mb-6">
            <img src="/logo.png" alt="Logo" className="h-8 sm:h-10" />
          </div>
          <hr className="mb-4 sm:mb-6" />

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name *</label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border border-gray-300 p-2 sm:p-3 rounded-md focus:ring-2 focus:ring-[#1D4ED8] outline-none text-sm"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block mb-1 text-sm font-medium text-gray-700">Mobile Number *</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2 sm:p-3">
                <span className="mr-2 text-base sm:text-xl">🇮🇳</span>
                <input
                  type="tel"
                  id="mobile"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your number"
                  className="w-full outline-none focus:ring-0 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border border-gray-300 p-2 sm:p-3 rounded-md focus:ring-2 focus:ring-[#1D4ED8] outline-none text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="terms" className="flex items-center text-xs sm:text-sm text-gray-700">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mr-2 accent-[#1D4ED8]"
                  required
                />
                I agree to the <a href="#" className="text-[#1D4ED8] underline ml-1">Terms & Conditions</a> and <a href="#" className="text-[#1D4ED8] underline ml-1">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 rounded-md transition"
            >
              {loading ? 'Submitting...' : 'Book Free Call'}
            </button>

            {message && (
              <p className={`text-sm mt-2 ${message.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickContactSection;
