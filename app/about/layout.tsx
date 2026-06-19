import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Aarish Ejaz",
  description: "About Aarish Ejaz - Full-stack developer and problem solver.",
};

export default function AboutLayout({
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