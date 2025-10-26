// src/components/WhyChooseUs.jsx
import React from "react";

const reasons = [
  "Personalized mentorship by industry experts",
  "Real-world project-based learning",
  "Flexible learning schedules",
  "Career guidance and interview prep",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose spEdu Tutors?</h2>
      <ul className="max-w-4xl mx-auto text-lg grid gap-4 md:grid-cols-2">
        {reasons.map((r, i) => (
          <li
            key={i}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            {r}
          </li>
        ))}
      </ul>
    </section>
  );
}
