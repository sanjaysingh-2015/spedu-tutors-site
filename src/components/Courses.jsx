// src/components/Courses.jsx
import React from "react";

const courses = [
  { title: "Java Mastery", desc: "Core to Advanced Java with real-world projects" },
  { title: "Spring Boot & Microservices", desc: "Build scalable backends with hands-on APIs" },
  { title: "Databases", desc: "Master SQL, performance tuning, and design in Oracle/MySQL" },
  { title: "Cloud Computing", desc: "AWS, Azure & GCP practical deployment guidance" },
];

export default function Courses() {
  return (
    <section id="courses" className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <div key={i} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
