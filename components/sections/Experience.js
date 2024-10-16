export default function Experience() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Experience
        </h2>
        <div className="mb-6  pb-6 ">
          <div className="flex items-center justify-between mb-2 text-white">
            <span className="font-bold text-xl">Global Education Care</span>

            <span>2022 - Present</span>
          </div>
          <div className="flex items-center justify-between mb-4 text-white">
            <span className="text-indigo-300 font-bold">
              Full Stack Developer
            </span>

            <span>Atlanta</span>
          </div>

          <p className="mb-6 text-zinc-300 leading-relaxed max-w-2xl">
            I help build and scale Google Photos. Increased throughput of our
            primary services by 70%. Migrated backend service from Java to Go.
            Also helped make it look prettier.
          </p>

          <div className="flex flex-wrap gap-2 text-white">
            <span className="text-xs px-2 py-1 rounded bg-zinc-700">
              Angular
            </span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-700">
              Python
            </span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-700">GCP</span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-700">Git</span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-700">
              GitHub
            </span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-700">Java</span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-700">
              Golang
            </span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-700">K8s</span>
          </div>
        </div>
      </div>
    </section>
  );
}
