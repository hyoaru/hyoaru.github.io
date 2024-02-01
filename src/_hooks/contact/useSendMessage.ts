import { useState } from "react";

export default function useSendMessage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function sendMessage(data: { email: string, name: string, message: string }) {
    let response: any = { data: null, error: null }

    setIsLoading(true)
    await fetch('https://formsubmit.co/ajax/jjcabreraaaa@gmail.com', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then((data) => { response.data = data })
      .catch((error) => { response.error = error })
    setIsLoading(false)

    return response
  }

  return { sendMessage, isLoading }
}