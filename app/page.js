import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Landing from "@/components/sections/Landing";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div>
      <div name="home" className="bg-gray-900 relative">
        <Landing />
      </div>

      <div name="about" className="bg-gray-800 relative">
        <div className="custom-shape-divider-top-1735541384">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <About />
      </div>

      <div name="projects" className="bg-gray-900 relative">
        <div className="custom-shape-divider-top-1735528947">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Projects />
      </div>

      <div name="contact" className="bg-gray-800 relative">
        <div className="custom-shape-divider-top-1735541384">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Contact />
      </div>
    </div>
  );
}
