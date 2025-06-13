import React from 'react';

const WhatsAppChatButton = () => {
  const phoneNumber = '9220578799'; // Replace with your WhatsApp number
  const message = 'Hi, I need help with your services.'; // Replace with your message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-green-600 hover:bg-green-800 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-white"
      title="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        width="28px"
        height="28px"
      >
        <path d="M12.04 2.002a9.984 9.984 0 0 0-8.475 15.2L2 22l4.882-1.54A9.983 9.983 0 1 0 12.04 2.002zm.001 18.002a7.963 7.963 0 0 1-4.08-1.14l-.291-.176-2.896.913.96-2.83-.189-.29a7.962 7.962 0 1 1 6.496 3.523zm4.348-5.57c-.238-.119-1.408-.695-1.628-.773-.219-.079-.379-.119-.538.12s-.618.773-.758.932c-.14.159-.279.179-.517.06-.238-.119-1.004-.369-1.914-1.176-.707-.63-1.185-1.409-1.325-1.647-.14-.239-.015-.368.104-.487.107-.106.238-.278.357-.417.12-.14.159-.239.238-.398.079-.159.04-.299-.02-.417-.06-.119-.538-1.299-.738-1.779-.194-.465-.392-.403-.538-.412l-.457-.008a.883.883 0 0 0-.637.298 2.674 2.674 0 0 0-.84 1.996c0 1.177.839 2.318.957 2.478.119.159 1.653 2.558 4.01 3.582.561.242.997.386 1.337.494.562.179 1.074.154 1.478.093.451-.067 1.408-.575 1.606-1.13.199-.555.199-1.03.14-1.13-.06-.1-.218-.159-.456-.278z" />
      </svg>
    </a>
  );
};

export default WhatsAppChatButton;
