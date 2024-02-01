import MainSection from "@sections/MainSection"
import ProjectsSection from "@sections/ProjectsSection"
import AboutSection from "@sections/AboutSection"

export default function App() {
  return (
    <>
      <div className="space-y-44 mt-8">
        <MainSection />
        <ProjectsSection />
        <AboutSection />
      </div>

      <p className="text-center font-bold opacity-50 mt-20">{'[ in progress ]'}</p>
      <div className="h-[100rem]"></div>
    </>
  )
}
