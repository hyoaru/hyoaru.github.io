import { CoreService } from "@/services/core";

export const useCore = () => {
  const coreService = new CoreService();
  const technologies = coreService.getTechnologies();

  return { technologies };
};
