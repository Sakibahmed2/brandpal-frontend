import React from "react";

const OfferSection = () => {
  return (
    <div className="mt-16">
      <div className="container mx-auto">
        {/* <h1 className="text-2xl lg:text-3xl mb-8 text-center">
        Special Offers
      </h1> */}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
            Don&rsquo;t Miss Out!
          </h2>
          <p className="text-lg mb-6 text-gray-400 w-full max-w-[500px] mx-auto">
            Take advantage of these special offers before they are gone. Enhance
            your experience with our premium services.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Offer Card 1 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
            <div className="bg-purple-700 text-center p-4">
              <h2 className="text-xl lg:text-2xl text-white">
                Limited Time Offer
              </h2>
            </div>
            <div className="p-6">
              <p className="text-lg ">
                Get a 50% discount on our premium plan! Enjoy exclusive benefits
                and top-notch support.
              </p>
              <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition">
                Claim Now
              </button>
            </div>
          </div>

          {/* Offer Card 2 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
            <div className="bg-indigo-700 text-center p-4">
              <h2
                className="text-xl lg:text-2xl text-white
              "
              >
                Free Trial
              </h2>
            </div>
            <div className="p-6">
              <p className="text-lg">
                Sign up today and get a 30-day free trial of our services. No
                credit card required!
              </p>
              <button className="mt-4 bg-indigo-700 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 transition">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Offer Card 3 */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
            <div className="bg-pink-700 text-center p-4">
              <h2 className="text-xl lg:text-2xl text-white">Bundle Deal</h2>
            </div>
            <div className="p-6">
              <p className="text-lg">
                Purchase our service bundle and save 30%! Get access to all our
                premium features.
              </p>
              <button className="mt-4 bg-pink-700 text-white py-2 px-4 rounded-lg hover:bg-pink-800 transition">
                View Bundle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
