import Link from "next/link";

export default function ExperienceTabContent() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white">Experience</h2>

      <ol className="relative border-l border-neutral-700 mt-6 ml-4">
        {/* Timeline Item: Full Stack Web Developer */}
        <li className="mb-10 ml-4">
          {/* Decorative Dot */}
          <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -left-1.5 border border-neutral-900"></div>

          {/* Date Range */}
          <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
            August 2024 - Present
          </time>

          {/* Position & Company */}
          <h3 className="text-xl font-semibold text-white">
            Full Stack Developer
          </h3>

          <Link href="https://gecare.co.uk" passHref legacyBehavior>
            <a
              className="text-sm text-brand-400 hover:text-brand-500"
              target="_blank"
            >
              Global Education Care
            </a>
          </Link>

          {/* Short Job Description */}
          <p className="mt-3 text-neutral-300 leading-relaxed max-w-3xl">
            During my tenure at Global Education Care, I designed and built
            feature-rich, scalable web solutions using modern frameworks and
            best practices. Collaborating with cross-functional teams, I
            optimized performance, ensured responsive UIs, and delivered a
            seamless user experience.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Tailwindcss",
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-700 text-gray-100 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </li>

        {/* Timeline Item #2: Full Stack Developer (Freelance) */}
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -left-1.5 border border-neutral-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-brand-400">
            (Freelance)
          </time>
          <h3 className="text-xl font-semibold text-white">
            Full Stack Developer
          </h3>
          <Link href="https://anpropertybd.com" passHref legacyBehavior>
            <a
              className="text-sm text-brand-400 hover:text-brand-500"
              target="_blank"
            >
              ANProperty
            </a>
          </Link>
          <p className="mt-3 text-neutral-300 leading-relaxed max-w-3xl">
            Developed a bilingual real estate platform with advanced search and
            filtering, responsive design, and a custom admin panel for managing
            listings. Optimized performance and ensured seamless multi-language
            support.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Tailwindcss", "React", "Next.js", "Django", "Postgresql"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-700 text-gray-100 rounded-lg text-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </li>
      </ol>
    </div>
  );
}
