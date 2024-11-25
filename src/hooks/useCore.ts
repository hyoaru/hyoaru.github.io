import { core } from "@/services/core";
import { useQuery } from "@tanstack/react-query";

export default function useCore() {
  const getTechnologies = () => (
    useQuery({
      queryFn: core.getTechnologies,
      queryKey: ["technologies"],
    })
  )

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
    getTechnologies,
    getProjects,
    getCertifications,
  }
}
