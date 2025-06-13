import {
  FaGem,
  FaStopwatch,
  FaHandHoldingHeart,
  FaHeart,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaGem />,
      title: "High Quality",
      description:
        "We provide top-notch services and solutions with precision and quality.",
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
    },
    {
      icon: <FaStopwatch />,
      title: "Timely Delivery",
      description: "Our projects are always delivered on time, every time.",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Customer Support",
      description:
        "We offer dedicated support that listens and responds promptly.",
      color: "bg-gradient-to-br from-teal-400 to-cyan-500",
    },
    {
      icon: <FaHeart />,
      title: "Trusted Team",
      description:
        "Our team is trusted by clients worldwide for their reliability and integrity.",
      color: "bg-gray-500",
    },
  ];

  return (
    <section className="flex justify-center items-center py-16 px-4 bg-white overflow-hidden">
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center lg:justify-center md:pl-25 lg:pl-50 gap-10 lg:gap-0">
        {/* Circles container */}
        <div className="relative flex-shrink-0 md:ml-8 lg:ml-16">
          {/* Light Purple Circle */}
          <div className="w-[300px] h-[300px] md:w-[360px] md:h-[360px] bg-purple-100 rounded-full flex items-center justify-center shadow-md relative mx-auto md:pl-10 lg:mx-0">
            {/* Text inside grey circle */}
            <div className="text-center px-6 text-gray-700 text-[14px] md:text-[15px]">
              <p>
                We deliver high-quality software solutions tailored to your business needs.
              </p>
              <p className="mt-3">
                Our team ensures timely delivery and exceptional support at every stage.
              </p>
            </div>

            {/* Purple Circle (main title) */}
            <div className="absolute -left-28 top-1/2 transform -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 bg-gradient-to-br from-purple-600 to-indigo-500 text-white rounded-full flex flex-col items-center justify-center shadow-xl text-center font-bold z-10">
              <span className="text-lg md:text-xl">WHY</span>
              <span>CHOOSE</span>
              <span>US</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-6 w-full max-w-md lg:max-w-2xl">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div
                className={`w-12 h-12 ${feature.color} rounded-full text-white flex items-center justify-center shadow-md shrink-0`}
              >
                {feature.icon}
              </div>
              {/* Text */}
              <div>
                <h4 className="text-sm md:text-base font-semibold text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
