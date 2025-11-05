import React from "react";
import { Link } from "react-router-dom";

const courses = [
  { title: "Career Guidance", desc: "Tailored career coaching for final-year students and job seekers", path: "/courses/career-guidance" },
  { title: "Java Mastery", desc: "Core to Advanced Java with real-world projects", path: "/courses/java-mastery" },
  { title: "Spring Boot & Microservices", desc: "Build scalable backends with hands-on APIs", path: "/courses/spring-boot" },
  { title: "ReactJs Mastery", desc: "Build modern, high-performance web apps using React", path: "/courses/react-mastery" },
  { title: "Databases", desc: "Master SQL, performance tuning, and design in Oracle/MySQL", path: "/courses/databases" },
  { title: "Cloud Computing", desc: "AWS, Azure & GCP practical deployment guidance", path: "/courses/cloud-computing" },
];

export default function Courses() {
  return (
    <section id="courses" className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-gradient-to-br from-slate-50 to-white"
          >
            {course.path ? (
              <Link to={course.path}>
                <h3 className="text-xl font-semibold mb-2 text-blue-700 hover:underline">
                  {course.title}
                </h3>
              </Link>
            ) : (
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            )}
            <p className="text-gray-600">{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
