import { FieldInterestType } from "@constants/main/types"

export default async function getFieldInterests() {
  const filePath = 'interests.json'
  const data = await fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL}/${filePath}`)
    .then((res) => res.json() as Promise<FieldInterestType[]>)

  return data
}