import { SocialType } from "@constants/main/types"

export default async function getSocials() {
  const filePath = 'socials.json'
  const data = await fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL}/${filePath}`)
    .then((res) => res.json() as Promise<SocialType[]>)

  return data
}