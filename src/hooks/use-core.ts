import { CoreService } from "@/services/core";
import { useMutation } from "@tanstack/react-query";

export const useCore = () => {
  const coreService = new CoreService();
  const technologies = coreService.getTechnologies();
  const socials = coreService.getSocials();
  const resumeUrl = coreService.getResumeUrl();

  const downloadResumeMutation = useMutation({
    mutationFn: coreService.downloadResume,
  });

  return { technologies, socials, resumeUrl, downloadResumeMutation };
};
