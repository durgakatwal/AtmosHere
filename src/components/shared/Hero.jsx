import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-4 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center py-20">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200 shadow-sm mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-800">
                Live Weather Updates
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Know Before
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent">
                You Go!
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Get{" "}
              <span className="font-semibold text-blue-600">
                accurate, real-time
              </span>{" "}
              weather forecasts for any location worldwide. Plan your activities
              with confidence and stay informed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/weather" className="group">
              <Button
                text="Get Weather Forecast"
                className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
              />
            </Link>

            <Link to="/about">
              <button className="cursor-pointer px-8 py-4 text-lg font-semibold text-blue-600 border-2 border-blue-200 hover:border-blue-300 rounded-xl hover:bg-blue-50 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-md mx-auto lg:mx-0">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-600">10M+</div>
              <div className="text-sm text-gray-500">Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800">200+</div>
              <div className="text-sm text-gray-500">Countries</div>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
              alt="Modern weather dashboard showing real-time forecasts"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Floating Weather Card */}
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🌤️</div>
              <div>
                <div className="font-bold text-gray-800">24°C</div>
                <div className="text-sm text-gray-600">Partly Cloudy</div>
              </div>
            </div>
          </div>

          {/* Floating Location Card */}
          <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20">
            <div className="flex items-center gap-2">
              <div className="text-xl">📍</div>
              <div>
                <div className="font-semibold text-gray-800">Kathmandu</div>
                <div className="text-xs text-gray-600">Real-time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
