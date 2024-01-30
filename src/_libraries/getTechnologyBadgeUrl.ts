import { Theme } from "@constants/base/types"

type GetTechnologyBadgeUrlProps = {
  name: string
  logo: string
  themeState: Theme
}

export default function getTechnologyBadgeUrl({ name, logo, themeState } : GetTechnologyBadgeUrlProps) {
  const bgColor = themeState === 'light' ? 'ffffff' : 'ecedee'
  const logoColor = themeState === 'light' ? '000000' : '000000'
  const badgeUrl = `https://img.shields.io/badge/-${name}-%23${bgColor}?style=flat-square&logo=${logo}&logoColor=${logoColor}`

  return badgeUrl
}