import { useState } from "react";
import JsFileDownloader from "js-file-downloader";

export default function useDownloadResume() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const resumeFilePath = 'assets/documents/resume.pdf'

  async function downloadResume() {
    let response: any = { data: null, error: null }

    setIsLoading(true)
    new JsFileDownloader({
      url: `${import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL}/${resumeFilePath}`,
      filename: 'RESUME_CABRERA-JENJADE.pdf',
      method: 'GET'
    })
      .then(() => {
        response.data = { message: 'success' }
      })
      .catch((error) => {
        response.error = error
      });
    setIsLoading(false)

    return response
  }

  return { downloadResume, isLoading }
}