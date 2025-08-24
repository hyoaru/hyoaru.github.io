/* eslint-disable react-hooks/rules-of-hooks */
import { CoreService } from "@/services/core";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCore = () => {
  const coreService = new CoreService();
  const technologies = coreService.getTechnologies();
  const socials = coreService.getSocials();
  const resumeUrl = coreService.getResumeUrl();

  const queryProjects = () =>
    useQuery({
      queryFn: coreService.getProjects,
      queryKey: ["projects"],
    });

  const downloadResumeMutation = useMutation({
    mutationFn: coreService.downloadResume,
  });

  return {
    queryProjects,
    technologies,
    socials,
    resumeUrl,
    downloadResumeMutation,
  };
};
