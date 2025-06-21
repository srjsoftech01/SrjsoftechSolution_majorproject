import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Actions = () => {
  const [showcard, setShowCard] = useState(false);
  const navigate = useNavigate();
  const cardRef = useRef(null); // 👉 to track the card

  const handleQuoteClick = () => {
    navigate("/contact_us");
  };

  const toggleCard = () => {
    setShowCard((prev) => !prev);
  };

  // 👉 Close card when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowCard(false);
      }
    }

    if (showcard) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showcard]);

  return (
    <div className="flex items-center space-x-3">
      <div className="relative" ref={cardRef}>
        {/* PHONE ICON */}
        <div
          className="p-4 font-bold rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white cursor-pointer"
          onClick={toggleCard}
        >
          <FaPhoneAlt />
        </div>

        {/* CONTACT CARD */}
        {showcard && (
          <div className="absolute right-0 mt-2 w-[280px] bg-white rounded-2xl shadow-lg z-50">
            <div className="px-4 py-2 border-b font-semibold text-gray-800">
              SRJ Softech Solutions
            </div>
            <div className="bg-blue-50 px-4 py-3 space-y-2">
              <div className="text-xs text-gray-500">FOR WEB</div>

              {/* PHONE LINK */}
              <a
                href="tel:09266594199"
                className="flex items-center space-x-2 text-black font-bold hover:underline"
              >
                <FaPhoneAlt className="text-green-500" />
                <span>09266594199</span>
              </a>

              {/* EMAIL LINK */}
              <a
                href="mailto:srjsoftechsolutions@gmail.com"
                className="flex items-center space-x-2 text-sm text-gray-600 hover:underline"
              >
                <FaEnvelope className="text-blue-600" />
                <span>srjsoftechsolutions@gmail.com</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* REQUEST A QUOTE BUTTON */}
      <button
        onClick={handleQuoteClick}
        className="px-4 py-4 rounded-4xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold"
      >
        Request A Quote
      </button>
    </div>
  );
};

export default Actions;
