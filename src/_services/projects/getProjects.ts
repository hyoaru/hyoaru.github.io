import { ProjectType } from "@constants/projects/types"

export default async function getProjects() {
  const filePath = 'projects.json'
  const data = await fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL}/${filePath}`)
    .then((res) => res.json() as Promise<ProjectType[]>)

  return data
}