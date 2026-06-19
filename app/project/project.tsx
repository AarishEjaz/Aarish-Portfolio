



import Image from "next/image";
import Link from "next/link";
import { projects } from "./info";



export default function ProjectsPage() {
  return (
    <main
      id="projects"
      className="min-h-screen scroll-mt-28 px-4 py-20 md:px-6 lg:px-8"
    >
      <div className="w-full">
        {/* Header */}
        <section className="mb-24 w-full">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Selected Work
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Projects built with product thinking and engineering discipline.
          </h1>

          <p className="mt-6 w-full text-base leading-7 text-gray-400 md:text-lg">
            A collection of full-stack projects where I worked on frontend
            interfaces, backend APIs, databases, authentication, deployment
            workflows, and real-world product features.
          </p>
        </section>

        {/* Projects List */}
        <section className="space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid grid-cols-1 items-center gap-10 border-t border-white/10 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
            >
              {/* Left Project Info */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
                  {project.category}
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  {project.title}
                </h2>

                <p className="mt-6 w-full text-base leading-7 text-gray-400">
                  {project.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-4 text-sm leading-6 text-gray-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-gray-500"
                    >
                      {tech}
                      <span className="mx-2 text-gray-700">/</span>
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex gap-6">
                  <Link
                    href={project.github}
                    className="text-sm font-semibold text-white underline underline-offset-8 transition hover:text-gray-300"
                  >
                    View Code
                  </Link>

                  <Link
                    href={project.live}
                    className="text-sm font-semibold text-gray-400 underline underline-offset-8 transition hover:text-white"
                  >
                    Live Preview
                  </Link>
                </div>
              </div>

              {/* Right Project Screenshot */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  {/* Background glow only, no card */}
                  <div className="absolute -inset-6 -z-10 bg-white/5 blur-3xl" />

                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
                    <span>{project.title}</span>
                    <span>Screenshot Preview</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
