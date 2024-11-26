import useGithub from "@/hooks/useGithub";
import { formatDate } from "@/lib/utils";
import ErrorTile from "../shared/ErrorTile";
import LoadingTile from "../shared/LoadingTile";
import { Github } from "lucide-react";
import { ActivityTile } from "../ui/ActivityTile";

export default function GithubRecentCommitTile() {
  const { getRecentCommit } = useGithub();
  const { data, isLoading, error } = getRecentCommit();

  if (isLoading)
    return (
      <div className="h-full bg-background p-[3px] rounded-xl">
        <LoadingTile />
      </div>
    );

  if (error)
    return (
      <div className="h-8 bg-background p-[3px] rounded-xl">
        <ErrorTile />
      </div>
    );

  return (
    <>
      <ActivityTile>
        <ActivityTile.Body>
          <ActivityTile.Icon>
            <Github className="" size={40} />
          </ActivityTile.Icon>
          <ActivityTile.Content>
            <p className="text-xs truncate">
              {formatDate({ date: data!.created_at })}
            </p>
            <p className="text-xs truncate font-bold">{data?.commit_message}</p>
            <p className="text-xs truncate">{data?.repository_name}</p>
          </ActivityTile.Content>
        </ActivityTile.Body>
      </ActivityTile>
    </>
  );
}
