import { TechnologyType } from "@constants/main/types"

export default async function getTechnologies() {
  const filePath = 'technologies.json'
  const data = await fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL}/${filePath}`)
    .then((res) => res.json() as Promise<TechnologyType[]>)

  return data
}