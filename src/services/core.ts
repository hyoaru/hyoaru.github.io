import { Certification, Project, Social, Technology } from "@/types/core";
import axios from "axios";

const CORE_API_URL = import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: CORE_API_URL,
});

export const coreService = {
  getTechnologies: async (): Promise<Technology[]> => {
    const endPoint = "/technologies.json";
    return await axiosInstance
      .get<Technology[]>(endPoint)
      .then((response) => response.data);
  },

  getProjects: async (): Promise<Project[]> => {
    const endPoint = "/projects.json";
    return await axiosInstance
      .get<Project[]>(endPoint)
      .then((response) => response.data);
  },

  getCertifications: async (): Promise<Certification[]> => {
    const endPoint = "/certifications.json";
    return await axiosInstance
      .get<Certification[]>(endPoint)
      .then((response) => response.data);
  },

  getMainImageUrl: (): string => {
    const endPoint = "/assets/images/main_image_v3.jpg";
    return `${axiosInstance.defaults.baseURL}${endPoint}`;
  },

  getSocials: async (): Promise<Social[]> => {
    const endPoint = "/socials.json";
    return await axiosInstance
      .get<Social[]>(endPoint)
      .then((response) => response.data);
  },
};
