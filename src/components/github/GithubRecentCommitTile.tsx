import useGithub from "@/hooks/useGithub";
import { formatDate } from "@/lib/utils";
import ErrorTile from "../shared/ErrorTile";
import LoadingTile from "../shared/LoadingTile";
import { Github } from "lucide-react";

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
    <div className="w-full h-full p-[3px] rounded-lg bg-custom-secondary flex items-center justify-center">
      <div className="grid grid-cols-12 gap-4 w-full h-full">
        <div className="col-span-3 flex items-center justify-center bg-primary/5 border border-primary text-primary rounded-lg h-full w-full">
          <Github className="" size={40} />
        </div>
        <div className="col-span-9 flex flex-col justify-center">
          <p className="text-xs truncate">
            {formatDate({ date: data!.created_at })}
          </p>
          <p className="text-xs truncate font-bold">{data?.commit_message}</p>
          <p className="text-xs truncate">{data?.repository_name}</p>
        </div>
      </div>
    </div>
  );
}
