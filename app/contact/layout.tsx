import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aarish Ejaz",
  description:
    "Get in touch with Aarish Ejaz for full-stack development opportunities, collaborations, or project discussions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="min-h-screen bg-black text-white">{children}</section>;
}