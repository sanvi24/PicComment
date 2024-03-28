import React, { useState } from "react";

const Description = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div>
      <div className={`overflow-hidden ${!showFullText ? "h-12" : "auto"}`}>
        <p className="whitespace-pre-line">
          {!showFullText ? truncatedText : text.trim()}
        </p>
      </div>
      {text.length > maxLength && (
        <button
          className="text-pink-700 hover:text-pink-900"
          onClick={toggleFullText}
        >
          {showFullText ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Description;
