import React from "react";
import Button from "./Button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleContactClick = () => {
    alert("Please choose one of the contact options above to reach us!");
  };
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-500 via-blue-400 to-sky-400 text-white py-20 px-6 md:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch with <span className="text-yellow-300">AtmosHere</span>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-50">
          Have questions, suggestions, or feedback? We’d love to hear from you.
          Let’s make weather forecasting better together!
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mb-12 cursor-pointer">
        <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <Mail className="text-yellow-300 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-blue-100 mt-1">support@AtmosHere.com</p>
        </div>

        <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <Phone className="text-yellow-300 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold">Call Us</h3>
          <p className="text-blue-100 mt-1">+977 9816756849</p>
        </div>

        <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <MapPin className="text-yellow-300 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold">Visit Us</h3>
          <p className="text-blue-100 mt-1">Kathmandu, Nepal</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <p className="text-lg md:text-xl mb-6">
          Want to collaborate or learn more about AtmosHere?
        </p>
        <Button
          text="Contact Us"
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-xl"
          onClick={handleContactClick}
        />
      </div>

      {/* Footer Line */}
      <div className="mt-16 border-t border-blue-300/30 pt-6 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} AtmosHere. All rights reserved. <br />
        <span>Designed By: Durga Katwal</span>
      </div>
    </section>
  );
};

export default Contact;
