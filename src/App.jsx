import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Courses from './components/Courses'
import Footer from './components/Footer'
import JavaMasteryCourse from './components/JavaMasteryCourse'
import SpringBootCourse from './components/SpringBootCourse'
import DatabaseCourse from'./components/DatabaseCourse'
import CloudComputing from "./components/CloudComputing"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <WhyChooseUs />
      <Courses />
      <Footer />
      <JavaMasteryCourse />
      <SpringBootCourse />
      <DatabaseCourse />
      <CloudComputing />
    </div>
  )
}

export default App
