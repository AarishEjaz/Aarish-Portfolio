"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Redux Toolkit",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "Authentication",
      "Nodemailer",
      "BullMQ",
      "Redis",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    title: "DevOps",
    skills: [
      "Docker",
      "GitHub Actions",
      "AWS",
      "Terraform",
      "Ansible",
      "Git",
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "C++",
      "Java",
      "SQL",
    ],
  },
];

const matrixColumns = ["0101", "STACK", "1010", "BUILD", "0011", "FLOW"];
const fallingPixels = Array.from({ length: 32 }, (_, index) => ({
  left: 2 + index * 3.05,
  size: index % 3 === 0 ? 3 : 2,
  duration: 7 + (index % 5),
  delay: index * 0.24,
  opacity: 0.14 + (index % 4) * 0.05,
}));

export default function SkillsPage() {
  return (
    <main
      id="skills"
      className="relative min-h-screen scroll-mt-28 overflow-hidden px-4 py-20 md:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_26%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_48%)]" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.11)_0.5px,transparent_0.5px),linear-gradient(to_bottom,rgba(255,255,255,0.11)_0.5px,transparent_0.5px)] bg-[size:40px_40px]"
          animate={{ opacity: [0.34, 0.5, 0.34] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0">
          {fallingPixels.map((pixel, index) => (
            <motion.span
              key={`pixel-${pixel.left}-${index}`}
              aria-hidden="true"
              className="absolute top-0 block bg-white"
              style={{
                left: `${pixel.left}%`,
                width: `${pixel.size}px`,
                height: `${pixel.size * 3}px`,
                opacity: pixel.opacity,
              }}
              animate={{ y: ["-10%", "112vh"], opacity: [0, pixel.opacity, pixel.opacity, 0] }}
              transition={{
                duration: pixel.duration,
                delay: pixel.delay,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-[32%] md:block">
          {matrixColumns.map((column, index) => (
            <motion.div
              key={`${column}-${index}`}
              initial={{ y: "-10%", opacity: 0 }}
              animate={{ y: ["-10%", "104%"], opacity: [0, 0.07, 0.04, 0] }}
              transition={{
                duration: 11 + index,
                delay: index * 0.5,
                ease: "linear",
                repeat: Infinity,
              }}
              className="absolute top-0 text-[10px] leading-4 tracking-[0.35em] text-white/20"
              style={{ left: `${8 + index * 14}%` }}
            >
              {Array.from({ length: 18 }, (_, row) => (
                <span key={`${column}-${row}`} className="block">
                  {column}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Technical Stack
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Skills
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map((category, index) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05, duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%,transparent_70%,rgba(255,255,255,0.035))] opacity-0 transition duration-300 group-hover:opacity-100" />
              <motion.div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-white/12"
                animate={{ opacity: [0.16, 0.32, 0.16] }}
                transition={{ duration: 3.4, delay: index * 0.18, repeat: Infinity }}
              />

              <div className="relative z-10 space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {category.title}
                </h2>

                <ul className="space-y-2 text-base leading-7 text-gray-300 md:text-lg">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      whileHover={{ x: 4, color: "#ffffff" }}
                      className="transition-colors"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
