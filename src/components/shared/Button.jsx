import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="inline-block bg-purple-500 hover:bg-purple-700 cursor-pointer px-8 py-2 text-white rounded m-1"
    >
      {text}
    </div>
  );
};

export default Button;

// https://img.freepik.com/premium-photo/weather-forecast-banner-design-collage-with-different-elements_906149-63958.jpg
