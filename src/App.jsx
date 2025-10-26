import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

import JavaMasteryCourse from "./components/JavaMasteryCourse";
import SpringBootCourse from "./components/SpringBootCourse";
import DatabaseCourse from "./components/DatabaseCourse";
import CloudComputing from "./components/CloudComputing";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <WhyChooseUs />
              <Courses />
              <Footer />
            </>
          }
        />

        {/* Individual Course Pages */}
        <Route path="/courses/java-mastery" element={<JavaMasteryCourse />} />
        <Route path="/courses/spring-boot" element={<SpringBootCourse />} />
        <Route path="/courses/databases" element={<DatabaseCourse />} />
        <Route path="/courses/cloud-computing" element={<CloudComputing />} />
        <Route path="/courses/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
