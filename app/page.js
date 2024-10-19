import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Landing from "@/components/sections/Landing";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div>
      <Landing />

      <div className="bg-gray-800">
        <Projects />
      </div>
      <div>
        <Experience />
      </div>

      <Contact />
    </div>
  );
}
