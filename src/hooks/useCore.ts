import { coreService } from "@/services/core";
import { useMutation, useQuery } from "@tanstack/react-query";

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

  const downloadResumeMutation = useMutation({
    mutationFn: coreService.downloadResume,
  });

  return {
    getTechnologies,
    getProjects,
    getCertifications,
    getSocials,
    downloadResumeMutation,
  };
}
