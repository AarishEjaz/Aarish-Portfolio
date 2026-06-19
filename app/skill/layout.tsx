import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Aarish Ejaz",
  description: "Technical skills of Aarish Ejaz across frontend, backend, databases, DevOps, and programming languages.",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-black text-white">
      {children}
    </section>
  );
}