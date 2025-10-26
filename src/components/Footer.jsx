// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-indigo-700 text-white py-8 text-center">
      <p className="text-lg mb-2">
        Ready to upskill? <a href="mailto:info@spedu.in" className="underline">Contact Us</a>
      </p>
      <p className="text-sm">&copy; {new Date().getFullYear()} spEdu Tutors. All rights reserved.</p>
    </footer>
  );
}
