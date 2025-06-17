export default function AboutDetail() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            About Us | Leading Website Development Agency in Noida, India
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            Our site developers give master web application advancement and website architecture
            administrations to our clients. SRJ Softech Solutions offers an assortment of web composition and
            improvement administrations, from making portable web advancement arrangements and
            responsive web architectures, to building custom web based business and intranet
            encounters utilizing the most recent and demonstrated web innovations.
            <br /><br />
            With up to 85% of customers visiting a company's or specialist co-op's site prior to making
            a buy, an ever increasing number of buyers settle on choices in light of their internet based
            insight: the appearance, ease of use and openness of your site is a higher priority than any
            time in recent memory, particularly in an undeniably aggressive market.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/contact_us"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/153/370/non_2x/3d-web-development-illustration-png.png"
            alt="Web Development Illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
