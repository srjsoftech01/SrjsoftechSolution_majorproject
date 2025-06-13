
export default function CompanyStatus() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          What We've Achieved
        </h2>
        <p className="text-gray-600 mb-12">
          Driving success through strategy, design, and digital expertise.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl font-bold text-purple-700">300+</p>
            <p className="text-gray-700">Clients Worldwide</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-700">180+</p>
            <p className="text-gray-700">Successful Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-700">10+</p>
            <p className="text-gray-700">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-700">50+</p>
            <p className="text-gray-700">Skilled Experts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
