import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aarish Ejaz | Portfolio",
  description: "Full-stack developer portfolio built with Next.js",
};

export default function HeroLayout({
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