import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import JavaMasteryCourse from "./components/JavaMasteryCourse.jsx";
import SpringBootCourse from "./components/SpringBootCourse.jsx";
import DatabaseCourse from "./components/DatabaseCourse.jsx";
import CloudComputing from "./components/CloudComputing.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/courses/java-mastery" element={<JavaMasteryCourse />} />
        <Route path="/courses/spring-boot" element={<SpringBootCourse />} />
        <Route path="/courses/databases" element={<DatabaseCourse />} />
        <Route path="/courses/cloud-computing" element={<CloudComputing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
