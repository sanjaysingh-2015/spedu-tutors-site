// src/components/ContactUs.jsx
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-50 via-indigo-50 to-white py-16 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <img src={logo} alt="spEdu Tutors Logo" className="mx-auto h-20 mb-2 rounded-full" />
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Have a question or want to get in touch? We’d love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
          {/* Email */}
          <div className="bg-white shadow-lg p-6 rounded-xl w-full md:w-1/3 border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-blue-700 flex justify-center items-center gap-2">
              <MdEmail className="text-2xl text-blue-600" /> Email
            </h3>
            <a
              href="mailto:sanjay.s@speducation.co.in"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              sanjay.s@speducation.co.in
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-lg p-6 rounded-xl w-full md:w-1/3 border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-blue-700 flex justify-center items-center gap-2">
              <MdPhone className="text-2xl text-green-600" /> Phone
            </h3>
            <p className="text-gray-700 font-medium">+91 70489 55781</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white shadow-lg p-6 rounded-xl w-full md:w-1/3 border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-blue-700 flex justify-center items-center gap-2">
              <FaWhatsapp className="text-2xl text-green-500" /> WhatsApp
            </h3>
            <a
              href="https://wa.me/917048955781"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 transition font-medium"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white max-w-2xl mx-auto p-8 rounded-2xl shadow-md border border-gray-100 text-left">
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
