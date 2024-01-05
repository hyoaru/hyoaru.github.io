export default async function getGithubContributionStats() {
  const data = await fetch('https://github-contributions-api.jogruber.de/v4/hyoaru')
    .then((res) => res.json())
    .then((contributionStats) => {
      contributionStats.totalContribution = Object.values(contributionStats.total)
        .reduce((total, value) => total + value, 0)

      return contributionStats
    })
    
  return data
}