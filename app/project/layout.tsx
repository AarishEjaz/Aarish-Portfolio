// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Projects | Aarish Ejaz",
//   description: "A collection of full-stack projects built by Aarish Ejaz.",
// };

// export default function ProjectsLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <section className="min-h-screen bg-black text-white">
//       {children}
//     </section>
//   );
// }



import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Aarish Ejaz",
  description:
    "Selected full-stack projects built by Aarish Ejaz using modern web technologies.",
};

export default function ProjectsLayout({
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