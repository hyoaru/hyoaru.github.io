import { coreService } from "@/services/core";
import { useQuery } from "@tanstack/react-query";

export default function useCore() {
  const getTechnologies = () =>
    useQuery({
      queryFn: coreService.getTechnologies,
      queryKey: ["technologies"],
    });

  const getProjects = () =>
    useQuery({
      queryFn: coreService.getProjects,
      queryKey: ["projects"],
    });

  const getCertifications = () =>
    useQuery({
      queryFn: coreService.getCertifications,
      queryKey: ["certifications"],
    });

  const getSocials = () =>
    useQuery({
      queryFn: coreService.getSocials,
      queryKey: ["socials"],
    });

  return {
    getTechnologies,
    getProjects,
    getCertifications,
    getSocials,
  };
}
