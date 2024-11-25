import { core } from "@/services/core";
import { useQuery } from "@tanstack/react-query";

export default function useCore() {
  const getProjects = () => (
    useQuery({
      queryFn: core.getProjects,
      queryKey: ["projects"],
    })
  )

  const getCertifications = () => (
    useQuery({
      queryFn: core.getCertifications,
      queryKey: ["certifications"]
    })
  )

  return {
    getProjects,
    getCertifications
  }
}
