import { ActivityTile } from "@/shared/components";
import { useSuspenseQuery } from "@tanstack/react-query";
import { listeningApi } from "../api";
import { cn } from "@heroui/styles";

const slots = {
  content: {
    variant: {
      compact: "items-center ",
      default: "items-start",
    },
  },
};

type ListeningRecentTrackTileProps = {
  variant?: "compact" | "default";
};

export const ListeningRecentTrackTile = ({
  variant = "default",
}: ListeningRecentTrackTileProps) => {
  const { data } = useSuspenseQuery(listeningApi.query.recentTrack());
  const isCompact = variant == "compact";

  return (
    <>
      <ActivityTile
        className={"relative bg-cover bg-center"}
        style={{ backgroundImage: `url(${data?.track.imageUrl})` }}
      >
        <div className="absolute inset-0 m-auto overflow-hidden opacity-90 backdrop-blur-[12px]"></div>

        {!isCompact && (
          <ActivityTile.Icon className="z-[10] h-full border border-none">
            <img
              src={data?.track.imageUrl}
              className="aspect-square h-full rounded-lg object-cover object-center"
              alt=""
            />
          </ActivityTile.Icon>
        )}

        <ActivityTile.Content
          className={cn(
            "text-background dark:text-foreground z-[2]",
            slots.content.variant[variant],
          )}
        >
          <ActivityTile.ContentHeader>
            {"Last.fm ･ listened to"}
          </ActivityTile.ContentHeader>
          <ActivityTile.ContentBody className="text-center sm:text-start">
            {data?.track.title}
          </ActivityTile.ContentBody>
          <ActivityTile.ContentFooter>
            {data?.track.artist}
          </ActivityTile.ContentFooter>
        </ActivityTile.Content>
      </ActivityTile>
    </>
  );
};
