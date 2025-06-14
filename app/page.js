import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Landing from "@/components/sections/Landing";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div>
      <div name="home" className="bg-gray-900">
        <Landing />
      </div>

      <div name="projects" className="bg-gray-800">
        <Projects />
      </div>

      <div name="about" className="bg-gray-900">
        <About />
      </div>

      <div name="contact" className="bg-gray-800">
        <Contact />
      </div>
    </div>
  );
}