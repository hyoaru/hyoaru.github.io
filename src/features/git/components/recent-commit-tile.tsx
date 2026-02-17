import { ActivityTile } from "@/shared/components";
import { TimestampToMonthYear } from "@/shared/infrastructure/formatters";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Github } from "lucide-react";
import { gitApi } from "../api";
import { cn } from "@heroui/styles";

const slots = {
  content: {
    variant: {
      compact: "items-center ",
      default: "items-start",
    },
  },
};

type GitRecentCommitTileProps = {
  variant?: "compact" | "default";
};

export const GitRecentCommitTile = ({
  variant = "default",
}: GitRecentCommitTileProps) => {
  const { data } = useSuspenseQuery(gitApi.query.recentCommit());
  const isCompact = variant == "compact";

  return (
    <>
      <ActivityTile className="bg-accent/[8%] relative">
        {isCompact && (
          <div className="absolute inset-0 m-auto overflow-hidden opacity-20">
            <Github className="text-accent absolute -bottom-4 left-2 size-24" />
          </div>
        )}

        {!isCompact && (
          <ActivityTile.Icon className="bg-primary/5 text-accent bg-accent/[10%] border-transparent">
            <Github className="size-10 lg:size-6 xl:size-8" />
          </ActivityTile.Icon>
        )}
        <ActivityTile.Content className={cn(slots.content.variant[variant])}>
          <ActivityTile.ContentHeader>
            {"Github ･ recent commit"}
          </ActivityTile.ContentHeader>
          <ActivityTile.ContentBody>
            {data.recentCommit.repository}
          </ActivityTile.ContentBody>
          <ActivityTile.ContentFooter>
            {new TimestampToMonthYear(data.recentCommit.createdAt).format()}
          </ActivityTile.ContentFooter>
        </ActivityTile.Content>
      </ActivityTile>
    </>
  );
};
