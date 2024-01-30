import { GithubContributionStatsType } from "@constants/main/types"

export default async function getGithubContributionStats() {
  const data = await fetch('https://github-contributions-api.jogruber.de/v4/hyoaru')
    .then((res) => res.json() as Promise<GithubContributionStatsType>)
    .then((contributionStats) => {
      contributionStats.totalContribution = Object.values(contributionStats.total)
        .reduce((total: number, value: number) => total + value, 0)

      return contributionStats
    })
    
  return data
}