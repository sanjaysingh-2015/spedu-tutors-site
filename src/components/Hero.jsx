// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-indigo-600 text-gray-900 min-h-screen flex flex-col justify-center items-center text-center px-4">
      <img src={logo} alt="spEdu Tutors Logo" className="w-32 mb-4 rounded-full shadow-lg" />
      <h1 className="text-5xl font-bold mb-3">spEdu Tutors</h1>
      <p className="text-xl mb-6">
        Empowering Learners | Enabling Tutors | Enriching Futures
      </p>
      <a
        href="#courses"
        className="mb-4 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
      >
        Explore Courses
      </a>

      {/* Portal Links */}
      <div className="absolute top-6 right-6 flex gap-4">
        <a
          href="https://spedu-student-ui-436077983835.asia-south2.run.app/"
          className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition"
        >
          🎓 Student
        </a>
        <a
          href="https://spedu-tutor-ui-436077983835.asia-south2.run.app/"
          className="bg-blue-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
        >
          👨‍🏫 Tutor
        </a>
      </div>

      <p className="text-lg mb-2 text-white font-semibold">
        Ready to upskill?{" "}
        <Link
          to="/courses/contact-us"
          className="underline font-bold text-white hover:text-blue-200 hover:underline"
        >
          Contact us
        </Link>
      </p>
    </section>
  );
}
