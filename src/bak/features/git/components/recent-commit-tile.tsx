import { ActivityTile } from "@/shared";
import { Datetime } from "@/shared/utilities";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Github } from "lucide-react";
import { gitApi } from "../api";

export const GitRecentCommitTile = () => {
  const { data } = useSuspenseQuery(gitApi.query.recentCommit());

  return (
    <>
      <ActivityTile className="bg-accent/[8%]">
        <ActivityTile.Icon className="bg-primary/5 text-accent bg-accent/[10%] border-transparent">
          <Github className="size-10 lg:size-6 xl:size-8" />
        </ActivityTile.Icon>
        <ActivityTile.Content>
          <ActivityTile.ContentHeader>
            {"Github ･ recent commit"}
          </ActivityTile.ContentHeader>
          <ActivityTile.ContentBody>{data.repository}</ActivityTile.ContentBody>
          <ActivityTile.ContentFooter>
            {Datetime.format(data.created_at)}
          </ActivityTile.ContentFooter>
        </ActivityTile.Content>
      </ActivityTile>
    </>
  );
};
