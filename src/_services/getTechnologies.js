export default async function getTechnologies() {
  const filePath = 'technologies.json'
  const data = await fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL}/${filePath}`)
    .then((res) => res.json())

  return data
}