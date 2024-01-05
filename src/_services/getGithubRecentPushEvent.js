export default async function getGithubRecentPushEvent() {
  const data = await fetch('https://api.github.com/users/hyoaru/events')
    .then((res) => res.json())
    .then((events) => events.filter((event) => event.type === 'PushEvent')?.[0])

  return data
}