// import React from 'react';
// import { Link } from 'react-router-dom';

// const ServiceCard = ({ image, title, description, path }) => {
//   return (
//     <Link to={path || "#"}>
//       <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 border border-white/20">
//         {image && (
//           <div className="w-24 h-24 mb-4">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-full object-contain animate-spin-slow hover:animate-none"
//             />
//           </div>
//         )}
//         <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">{title}</h3>
//         <p className="text-gray-200 text-sm md:text-base mb-4 transition-all duration-300 hover:text-gray-100">
//           {description}
//         </p>
//         <button className="text-blue-400 font-semibold hover:underline transition-all duration-300">
//           Learn More ➜
//         </button>
//       </div>
//     </Link>
//   );
// };

// export default ServiceCard;

import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, title, description, path }) => {
  return (
    <Link to={path || "#"}>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500 border border-white/20">
        {image && (
          <div className="w-24 h-24 mb-4">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain animate-spin-slow hover:animate-none transition-transform"
            />
          </div>
        )}
        <h3 className=" bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text text-xl font-semibold mb-2 drop-shadow">
          {title}
        </h3>
        <p className="text-gray-200 text-sm md:text-base mb-4 leading-relaxed transition-all duration-300 hover:text-gray-100">
          {description}
        </p>
        <button onClick={()=> Navigate()} className="text-green-500 font-medium hover:text-blue-300 hover:underline transition-all duration-300">
          Learn More ➜
        </button>
      </div>
    </Link>
  );
};


export default ServiceCard;

