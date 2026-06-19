import HeroPage from "./hero/heropage";
import AboutPage from "./about/about";
import ProjectsPage from "./project/project";
import SkillsPage from "./skill/skill";
import ContactPage from "./contact/contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroPage />
      <AboutPage />
      <ProjectsPage />
      <SkillsPage /> 
      <ContactPage />
    </div>
  );
}
