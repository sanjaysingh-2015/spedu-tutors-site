// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-indigo-600 text-gray-900 min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
      {/* Logo */}
      <img
        src={logo}
        alt="spEdu Tutors Logo"
        className="w-32 mb-4 rounded-full shadow-lg z-10"
      />

      <h1 className="text-5xl font-bold mb-3 text-white">SP Education</h1>
      <p className="text-xl mb-6 text-white">
        Empowering Learners | Enabling Tutors | Enriching Futures
      </p>

      {/* 🔹 Career Guidance Highlight */}
      <div className="bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg mb-6 animate-pulse hover:animate-none hover:scale-105 transition transform max-w-md">
        🎯 Now Introducing —{" "}
        <Link
          to="/courses/career-guidance"
          className="text-blue-700 hover:text-blue-900 underline font-bold"
        >
          Career Guidance & Counselling
        </Link>{" "}
        for Final Year Students & Job Seekers!
      </div>

      {/* Explore Button */}
      <a
        href="#courses"
        className="mb-4 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
      >
        Explore Courses
      </a>

      {/* ✅ Responsive Portal Links */}
      <div className="text-white mt-6 md:mt-0 md:absolute md:top-6 md:right-6 flex flex-col md:items-end items-center gap-3">
        {/* Tutor Section */}
        <div className="flex flex-col text-center md:text-right">
          <span className="font-semibold text-sm mb-1">
            👨‍🏫 Are you a tutor or want to become one?
          </span>
          <a
            href="https://tutor.speducation.co.in"
            className="bg-blue-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Join as Tutor
          </a>
        </div>

        {/* Student Section */}
        <div className="flex flex-col text-center md:text-right">
          <span className="font-semibold text-sm mb-1">
            🎓 Are you a student who wants to learn?
          </span>
          <a
            href="https://student.speducation.co.in/"
            className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Join as Student
          </a>
        </div>
      </div>

      {/* Footer link */}
      <p className="text-lg mt-10 text-white font-semibold">
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
