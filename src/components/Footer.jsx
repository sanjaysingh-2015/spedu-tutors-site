import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-indigo-700 text-white py-8 text-center">
      <p className="text-lg mb-2 text-white font-semibold">
        Ready to upskill?{" "}
        <Link
          to="/courses/contact-us"
          className="underline font-bold text-white hover:text-blue-200 hover:underline"
        >
          Contact us
        </Link>
      </p>
      <p className="text-sm">&copy; {new Date().getFullYear()} spEdu Tutors. All rights reserved.</p>
    </footer>
  );
}
