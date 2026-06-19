"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frameId = 0;
    let width = 0;
    let height = 0;
    let startTime = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }

      width = parent.clientWidth;
      height = parent.clientHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = (timestamp - startTime) / 1000;
      context.clearRect(0, 0, width, height);

      const horizonY = height * 0.14;
      const rows = 18;
      const cols = 34;
      const rowDenominator = Math.max(rows - 1, 1);
      const colDenominator = Math.max(cols - 1, 1);

      for (let row = 0; row < rows; row += 1) {
        const depth = row / rowDenominator;
        const perspective = Math.pow(depth, 1.65);
        const yBase = horizonY + perspective * height * 0.88;
        const spread = 0.1 + perspective * 0.96;
        const amplitude = 6 + perspective * 26;
        const radius = 0.6 + perspective * 1.8;
        const alpha = 0.16 + perspective * 0.5;
        const phaseOffset = elapsed * 1.7 + row * 0.32;

        for (let col = 0; col < cols; col += 1) {
          const columnRatio = col / colDenominator;
          const x =
            width * 0.5 +
            (columnRatio - 0.5) * width * spread +
            Math.sin(phaseOffset + col * 0.28) * (1 + perspective * 7);
          const wave =
            Math.sin(columnRatio * Math.PI * 3.4 + phaseOffset) * amplitude;
          const y = yBase + wave;

          context.beginPath();
          context.fillStyle = `rgba(201, 221, 228, ${alpha})`;
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fill();
        }
      }

      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    frameId = window.requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement as Element);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-90"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main
      id="about"
      className="relative min-h-screen scroll-mt-28 overflow-hidden bg-black px-4 py-16 md:px-6 lg:px-8"
    >
      <ParticleWave />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        variants={sectionVariants}
        className="relative z-10 w-full"
      >
        {/* Top Label */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
        >
          About Me
        </motion.div>

        {/* Heading */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-8">
          <motion.div
            variants={itemVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl text-white font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            >
              Engineer by mindset,{" "}
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                problem solver by habit.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 w-full text-base leading-7 text-gray-400 md:text-lg"
            >
              I enjoy turning ideas into practical digital products that are
              clean, scalable, and useful in the real world.
            </motion.p>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-base leading-8 text-gray-300 md:text-lg"
            >
              I&apos;m Aarish Ejaz, a full-stack developer who likes building
              applications from the ground up — from designing the frontend
              experience to creating backend APIs, managing databases, and
              deploying projects with proper workflows.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-8 text-gray-400 md:text-lg"
            >
              My approach is simple: understand the actual problem first, break
              it into smaller parts, and then build a solution that feels easy
              to use and reliable to maintain. I focus on writing clean code,
              creating structured systems, and improving every project with each
              iteration.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-8 text-gray-400 md:text-lg"
            >
              I have worked on projects like CRM systems, productivity apps,
              AI-powered chat interfaces, job portals, and real-time chat
              applications. These projects helped me understand how frontend,
              backend, database, authentication, deployment, and user experience
              work together in a complete product.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <Link
                href="/projects"
                className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Personal Style Section */}

      </motion.section>
    </main>
  );
}
