import type { ProfileRepository } from "@/application/ports/profile-repository";
import type { Certification, Experience, Project } from "@/domain/entities";
import { logger } from "@/infrastructure/logger";

export class LoggingProfileRepository implements ProfileRepository {
  private inner: ProfileRepository;

  public constructor(inner: ProfileRepository) {
    this.inner = inner;
  }

  public async getCareerHistory(): Promise<Experience[]> {
    try {
      logger.debug(`Fetching career history`);
      const careerHistory = await this.inner.getCareerHistory();
      logger.info(`Successfully fetched career history`);
      return careerHistory;
    } catch (error) {
      logger.warn(`Error fetching career history`);
      throw error;
    }
  }

  public async getCertifications(): Promise<Certification[]> {
    try {
      logger.debug(`Fetching certifications`);
      const certifications = await this.inner.getCertifications();
      logger.info(`Successfully fetched certifications`);
      return certifications;
    } catch (error) {
      logger.warn(`Error fetching certifications`);
      throw error;
    }
  }

  public async getProjects(): Promise<Project[]> {
    try {
      logger.debug(`Fetching projects`);
      const projects = await this.inner.getProjects();
      logger.info(`Successfully fetched projects`);
      return projects;
    } catch (error) {
      logger.warn(`Error fetching projects`);
      throw error;
    }
  }

  public async getTechnologies(): Promise<string[]> {
    try {
      logger.debug(`Fetching technologies`);
      const technologies = await this.inner.getTechnologies();
      logger.info(`Successfully fetched technologies`);
      return technologies;
    } catch (error) {
      logger.warn(`Error fetching technologies`);
      throw error;
    }
  }
}
