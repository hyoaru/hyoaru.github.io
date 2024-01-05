export default async function getGithubBaseUserInformation() {
  const data = await fetch('https://api.github.com/users/hyoaru')
    .then((res) => res.json())

  return data
}
