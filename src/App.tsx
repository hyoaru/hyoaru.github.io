import MainSection from "@sections/MainSection"
import ProjectsSection from "@sections/ProjectsSection"

export default function App() {
  return (
    <>
      <div className="space-y-44 mt-8">
        <MainSection />
        <ProjectsSection />
      </div>

      <p className="text-center font-bold opacity-50 mt-20">{'[ in progress ]'}</p>
      <div className="h-[100rem]"></div>
    </>
  )
}
