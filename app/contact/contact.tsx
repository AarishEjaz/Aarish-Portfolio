"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const contactLinks = [
  {
    label: "Email",
    value: "aarishejaz@gmail.com",
    href: "mailto:aarishejaz@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin",
    href: "https://www.linkedin.com/in/aarish-ejaz-22b158200/",
  },
  {
    label: "GitHub",
    value: "github.com/aarishejaz",
    href: "https://github.com/aarishejaz",
  },
];

function MatrixGradientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.045),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_52%)]" />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_0.5px,transparent_0.5px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_0.5px,transparent_0.5px)] bg-[size:42px_42px]"
        animate={{ opacity: [0.28, 0.42, 0.28] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.72)_18%,rgba(0,0,0,0.35)_48%,rgba(0,0,0,0.16)_72%,rgba(0,0,0,0.06)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(to_top,rgba(255,255,255,0.085),rgba(255,255,255,0.035)_34%,rgba(255,255,255,0)_100%)]" />

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[24%] h-px bg-white/8"
        animate={{ opacity: [0.08, 0.18, 0.08], scaleX: [0.97, 1, 0.97] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_44%,rgba(0,0,0,0.3)_100%)]" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <main
      id="contact"
      className="relative min-h-screen scroll-mt-28 overflow-hidden px-4 py-20 md:px-6 lg:px-8"
    >
      <MatrixGradientBackdrop />

      <div className="relative z-10 w-full">
        <div className="mb-20 w-full">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Contact
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Let&apos;s build something meaningful together.
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-400 md:text-lg">
            I&apos;m open to full-stack development roles, freelance projects,
            collaborations, and product-focused engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Get in touch
            </h2>

            <p className="mt-4 w-full leading-7 text-gray-400">
              Have an opportunity, idea, or project in mind? Send me a message
              and I&apos;ll get back to you.
            </p>

            <div className="mt-10 space-y-7">
              {contactLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block"
                >
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="mt-1 break-all text-base font-medium text-gray-300 transition group-hover:text-white">
                    {item.value}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-12 border-l border-white/10 pl-5">
              <p className="text-sm text-gray-500">Availability</p>
              <p className="mt-1 text-base font-medium text-white">
                Open for full-stack developer opportunities
              </p>
            </div>
          </section>

          <section>
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border-b border-white/10 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-white/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border-b border-white/10 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-white/40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-3 block text-sm font-medium text-gray-400"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project, opportunity, collaboration..."
                  className="w-full border-b border-white/10 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-white/40"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full resize-none border-b border-white/10 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-white/40"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
