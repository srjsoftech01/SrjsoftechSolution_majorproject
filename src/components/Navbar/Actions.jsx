import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Actions = () => {
  const [showcard, setShowCard] = useState(false);
  const navigate = useNavigate(); // 👈 Initialize useNavigate

  const handleQuoteClick = () => {
    navigate("/contact_us"); // 👈 Navigate to /quote page
  };

  return (
    <div className="flex items-center space-x-3">
      <div
        className="relative"
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
      >
        <div className="p-4 font-bold rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white">
          <FaPhoneAlt />
        </div>

        {showcard && (
          <div className="absolute right-0 mt-2 w-[280px] bg-white rounded-2xl shadow-lg z-50">
            <div className="px-4 py-2 border-b font-semibold text-gray-800">
              Srj Softech Solutions Contacts
            </div>
            <div className="bg-blue-50 px-4 py-3 space-y-2">
              <div className="text-xs text-gray-500">FOR WEB</div>
              <div className="flex items-center space-x-2 text-black font-bold">
                <FaPhoneAlt className="text-green-500" />
                <span>09266594199</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <FaEnvelope className="text-blue-600" />
                <span>srjsoftechsolutions@gmail.com</span>
              </div>
            </div>
          </div>
        )}
      </div>

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
