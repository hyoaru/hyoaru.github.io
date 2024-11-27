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
      <div className="h-full rounded-xl bg-background p-[3px]">
        <LoadingTile />
      </div>
    );

  if (error)
    return (
      <div className="h-8 rounded-xl bg-background p-[3px]">
        <ErrorTile />
      </div>
    );

  return (
    <>
      <ActivityTile className="border border-primary">
        <ActivityTile.Body>
          <ActivityTile.Icon>
            <Github className="size-10 lg:size-6 xl:size-8" />
          </ActivityTile.Icon>
          <ActivityTile.Content>
            <ActivityTile.ContentHeader>
              {"Github ･ "}
              {formatDate({ date: data!.created_at })}
            </ActivityTile.ContentHeader>
            <ActivityTile.ContentBody>
              {data?.commit_message}
            </ActivityTile.ContentBody>
            <ActivityTile.ContentFooter>
              {data?.repository_name}
            </ActivityTile.ContentFooter>
          </ActivityTile.Content>
        </ActivityTile.Body>
      </ActivityTile>
    </>
  );
}
