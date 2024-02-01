import { CertificationType } from "@constants/certifications/types"

export default async function getCertifications() {
  const filePath = 'certifications.json'
  const data = await fetch(`${import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL}/${filePath}`)
    .then((res) => res.json() as Promise<CertificationType[]>)

  return data
}