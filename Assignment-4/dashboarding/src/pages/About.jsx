import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About RideX Rentals</h1>
      <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
        At <span className="font-semibold text-black">RideX Rentals</span>, we are dedicated to making your travel convenient, affordable, and memorable. 
        Whether you're looking to ride through the city on a bike or enjoy the comfort of a car for long drives, we’ve got you covered!
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To offer reliable and flexible rental options for every customer – from solo riders to family road trips.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-yellow-600 mb-2">Why Choose Us</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Wide selection of bikes and cars</li>
            <li>Affordable pricing – starting at ₹350/day</li>
            <li>Easy booking process</li>
            <li>24/7 customer support</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become India’s most loved and trusted bike & car rental platform by delivering excellence and ease.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-700 text-md">
          <strong>Serving Happy Customers Across the City Since 2023</strong>
        </p>
        <p className="text-gray-600 mt-2">
          Want to know more or start your journey today?{' '}
          <a href="/contact" className="text-blue-500 hover:underline">Contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
