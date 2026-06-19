"use client";

import { animate, motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const fullName = "Aarish Ejaz";
const techStack = [
  "JavaScript", "TypeScript", "Python", "SQL",
  "Docker", "Jenkins", "Ansible", "AWS", "Terraform", "Git", "GitHub Actions",
  "Postman", "AI-assisted Debugging",
  "Next.js", "React.js", "Node.js", "Redux Toolkit", "Express.js",
];

const logo = "</>"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function HeroParticles() {
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

      const rows = 13;
      const cols = 26;
      const rowDenominator = Math.max(rows - 1, 1);
      const colDenominator = Math.max(cols - 1, 1);

      for (let row = 0; row < rows; row += 1) {
        const yRatio = row / rowDenominator;
        const yBase = height * (0.12 + yRatio * 0.76);
        const rowOffset = Math.sin(elapsed * 0.72 + row * 0.9) * 11;

        for (let col = 0; col < cols; col += 1) {
          const xRatio = col / colDenominator;
          const xBase = width * (0.06 + xRatio * 0.88);
          const drift = Math.cos(elapsed * 0.45 + row * 0.35 + col * 0.4) * 8;
          const yWave =
            Math.sin(elapsed * 1 + xRatio * Math.PI * 4 + row * 0.45) * 14;
          const radius = 1 + yRatio * 1.45;
          const alpha = 0.1 + yRatio * 0.16;

          context.beginPath();
          context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          context.arc(xBase + drift, yBase + rowOffset + yWave, radius, 0, Math.PI * 2);
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
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-95" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_55%,rgba(0,0,0,0.16)_100%)]" />
    </div>
  );
}

export default function HeroPage() {
  const [typedName, setTypedName] = useState("");
  const [techIndex, setTechIndex] = useState(0);
  const [typedTech, setTypedTech] = useState("");
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    const controls = animate(0, fullName.length, {
      duration: 1.6,
      ease: "easeInOut",
      onUpdate(latest) {
        setTypedName(fullName.slice(0, Math.round(latest)));
      },
    });

    return () => controls.stop();
  }, []);

  useEffect(() => {
    const currentTech = techStack[techIndex];
    const typingDuration = Math.max(currentTech.length * 0.08, 0.45);

    const controls = animate(0, currentTech.length, {
      duration: typingDuration,
      ease: "easeInOut",
      onUpdate(latest) {
        setTypedTech(currentTech.slice(0, Math.round(latest)));
      },
    });

    const switchTimer = window.setTimeout(() => {
      setTechIndex((current) => (current + 1) % techStack.length);
    }, typingDuration * 1000 + 1400);

    return () => {
      controls.stop();
      window.clearTimeout(switchTimer);
    };
  }, [techIndex]);

  return (
    <main
      id="home"
      className="relative min-h-screen scroll-mt-28 overflow-hidden py-8"
    >
      <HeroParticles />
      <div className="relative w-full">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed left-1/2 top-5 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-[1.75rem] border border-white/12 bg-white/8 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
        >
          <div className="absolute inset-x-0 top-0 h-px overflow-hidden rounded-t-[1.75rem] bg-white/8">
            <motion.div
              className="h-full origin-left bg-white/80"
              style={{ scaleX: progressScaleX }}
            />
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Link
              href="#home"
              className="pt-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/90"
            >
              {logo}
            </Link>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-transparent px-4 py-2 text-sm text-gray-300 transition hover:border-white/10 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.nav>

        <div className="flex min-h-[calc(85vh-72px)] items-center px-4 pt-28 md:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(360px,0.85fr)] lg:gap-4">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full space-y-7"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
            >
              Full-Stack Developer | MERN Stack | Backend & DevOps
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  {typedName}
                </span>
                <motion.span
                  aria-hidden="true"
                  className="ml-1 inline-block h-[0.9em] w-[2px] bg-white align-[-0.1em]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
                />
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
                className="text-xl font-medium text-gray-300 md:text-2xl"
              >
                I build modern, scalable and clean web applications.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="w-full text-base leading-7 text-gray-400 md:text-lg"
              >
                I&apos;m a full-stack developer who enjoys turning complex problems into clean, reliable, and usable products.
                I focus on building systems that solve real business needs, improve workflows, and create smooth user experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72, duration: 0.6, ease: "easeOut" }}
                className="flex min-h-8 items-center gap-2 text-sm text-gray-300 md:text-base"
              >
                <span className="text-gray-500 text-3xl">Tech stack:</span>
                <span className="font-medium text-white text-3xl">{typedTech}</span>
                <motion.span
                  aria-hidden="true"
                  className="inline-block h-[0.95em] w-[2px] bg-white/90"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/project"
                className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="flex gap-8 pt-4 text-sm text-gray-400"
            >
              <div>
                <p className="text-2xl font-bold text-white">5+</p>
                <p>Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">MERN</p>
                <p>Stack</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">DevOps</p>
                <p>Basics</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.75, ease: "easeOut" }}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="relative h-[380px] w-[300px] rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur md:h-[500px] md:w-[390px] lg:w-full lg:max-w-[430px]">
              {/* Glow Background */}
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-white/10 blur-2xl" />

              {/* Image Box */}
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-gray-800 to-black">
                <Image
                  src="/display.jpeg"
                  alt="Aarish Ejaz"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 text-center shadow-xl backdrop-blur">
                <p className="text-sm font-semibold text-white">
                  2+ Year Of Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </main>
  );
}
