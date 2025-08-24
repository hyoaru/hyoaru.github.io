import type { ICoreService } from "./interface";
// import certifications from "@/assets/portfolio-resources/data/certifications.json";
import technologies from "@/assets/portfolio-resources/data/technologies.json";
import socials from "@/assets/portfolio-resources/data/socials.json";
import type { Social, Technology } from "./types";

export class CoreService implements ICoreService {
  constructor() {
    this.getTechnologies = this.getTechnologies.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.getCertifications = this.getCertifications.bind(this);
    this.getResumeUrl = this.getResumeUrl.bind(this);
    this.getSocials = this.getSocials.bind(this);
  }

  getTechnologies(): ReturnType<ICoreService["getTechnologies"]> {
    return technologies as Technology[];
  }

  getSocials(): ReturnType<ICoreService["getSocials"]> {
    return socials as Social[];
  }

  getProjects(): ReturnType<ICoreService["getProjects"]> {}
  getCertifications(): ReturnType<ICoreService["getCertifications"]> {}
  getResumeUrl(): ReturnType<ICoreService["getResumeUrl"]> {}
  downloadResume(): ReturnType<ICoreService["downloadResume"]> {}
}
