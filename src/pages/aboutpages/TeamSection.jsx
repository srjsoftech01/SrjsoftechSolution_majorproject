// components/About/TeamSection.jsx
const team = [
  { name: "Ajay Sharma", role: "Founder & CEO", img: "/images/team1.jpg" },
  { name: "Neha Verma", role: "UI/UX Designer", img: "/images/team2.jpg" },
  { name: "Ravi Patel", role: "Lead Developer", img: "/images/team3.jpg" },
  { name: "Sara Khan", role: "Marketing Head", img: "/images/team4.jpg" },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">
          Experts behind our successful services and solutions.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
