import { GetCareerHistory } from "@/application/use-cases/get-career-history";
import { GetCertifications } from "@/application/use-cases/get-certifications";
import { GetGitContributions } from "@/application/use-cases/get-git-contributions";
import { GetGitRecentCommit } from "@/application/use-cases/get-git-recent-commit";
import { GetGitUserInformation } from "@/application/use-cases/get-git-user-information";
import { GetRecentListeningTrack } from "@/application/use-cases/get-recent-listening-track";
import {
  DecoratedGitRepository,
  GithubGitRepository,
} from "./adapters/git-repository";
import {
  DecoratedListeningRepository,
  LastfmListeningRepository,
} from "./adapters/listening-repository";
import {
  DecoratedProfileRepository,
  LocalProfileRepository,
} from "./adapters/profile-repository";
import { HttpGithubClient } from "./external/github-client";
import { HttpLastfmClient } from "./external/lastfm-client";

const gitRepository = new DecoratedGitRepository(
  new GithubGitRepository(new HttpGithubClient()),
);

const listeningRepository = new DecoratedListeningRepository(
  new LastfmListeningRepository(
    new HttpLastfmClient(import.meta.env.VITE_LAST_FM_API_KEY),
  ),
);

const profileRepository = new DecoratedProfileRepository(
  new LocalProfileRepository(),
);

const getGitRecentCommit = new GetGitRecentCommit({ gitRepository });
const getGitUserInformation = new GetGitUserInformation({ gitRepository });
const getGitContributions = new GetGitContributions({ gitRepository });

const getRecentListeningTrack = new GetRecentListeningTrack({
  listeningRepository,
});

const getCareerHistory = new GetCareerHistory({ profileRepository });
const getCertifications = new GetCertifications({ profileRepository });

export const container = {
  git: {
    getRecentCommit: getGitRecentCommit,
    getUserInformation: getGitUserInformation,
    getContributions: getGitContributions,
  },
  listening: {
    getRecentTrack: getRecentListeningTrack,
  },
  profile: {
    getCareerHistory,
    getCertifications,
  },
};
