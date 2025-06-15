import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>

      <p className="text-center text-gray-700 text-lg mb-12">
        Have a question, need help with booking, or want to share feedback? We’d love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">RideX Rentals</h2>
          <p className="text-gray-600 mb-2">📍 Location: Ambala, Haryana, India</p>
          <p className="text-gray-600 mb-2">📞 Phone: +91 98765 43210</p>
          <p className="text-gray-600 mb-2">✉️ Email: support@ridexrentals.com</p>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Follow Us</h3>
            <div className="flex gap-4 text-xl text-blue-600">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
