import React from "react";
import { CloudSun, Droplets, Wind, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl p-10 md:p-16 text-gray-800">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            About <span className="text-blue-500">SkyNow</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Your reliable companion for accurate and real-time weather insights.
          </p>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>SkyNow</strong>, our mission is to empower people with
              accurate, real-time weather updates so they can plan their days
              smarter. From farmers and travelers to everyday users, we aim to
              deliver trusted insights powered by modern technology.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where weather forecasting is accessible,
              data-driven, and beautifully designed. Our platform leverages
              advanced APIs, global weather data, and AI-based predictions to
              make that vision a reality.
            </p>
          </div>

          {/* Right Side - Icons & Highlights */}
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="bg-blue-100 rounded-2xl p-6 hover:bg-blue-200 transition-all">
              <CloudSun className="mx-auto text-blue-600 w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg">Real-Time Updates</h3>
              <p className="text-sm text-gray-600 mt-2">
                Stay informed with the latest weather data for your exact
                location.
              </p>
            </div>

            <div className="bg-blue-100 rounded-2xl p-6 hover:bg-blue-200 transition-all">
              <Droplets className="mx-auto text-blue-600 w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg">Accurate Forecasts</h3>
              <p className="text-sm text-gray-600 mt-2">
                Our algorithms use trusted APIs for precision and reliability.
              </p>
            </div>

            <div className="bg-blue-100 rounded-2xl p-6 hover:bg-blue-200 transition-all">
              <Wind className="mx-auto text-blue-600 w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg">Air Quality Tracking</h3>
              <p className="text-sm text-gray-600 mt-2">
                Monitor AQI levels and get recommendations for healthier living.
              </p>
            </div>

            <div className="bg-blue-100 rounded-2xl p-6 hover:bg-blue-200 transition-all">
              <MapPin className="mx-auto text-blue-600 w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg">Global Coverage</h3>
              <p className="text-sm text-gray-600 mt-2">
                Whether you're home or traveling abroad, WeatherWise has you
                covered.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} SkyNow. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
