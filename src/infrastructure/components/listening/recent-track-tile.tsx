import { useListeningActions } from "@/infrastructure/hooks";
import { cn } from "@heroui/styles";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ActivityTile } from "../ui";

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
  const { getRecentTrack } = useListeningActions();
  const { data } = useSuspenseQuery(getRecentTrack());
  const isCompact = variant == "compact";

  return (
    <>
      <ActivityTile
        className={"relative bg-cover bg-center"}
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="absolute inset-0 m-auto overflow-hidden opacity-90 backdrop-blur-md"></div>

        {!isCompact && (
          <ActivityTile.Icon className="z-10 h-full border border-none">
            <img
              src={data?.imageUrl}
              className="aspect-square h-full rounded-lg object-cover object-center"
              alt=""
            />
          </ActivityTile.Icon>
        )}

        <ActivityTile.Content
          className={cn(
            "text-background dark:text-foreground z-2",
            slots.content.variant[variant],
          )}
        >
          <ActivityTile.ContentHeader>
            {"Last.fm ･ listened to"}
          </ActivityTile.ContentHeader>
          <ActivityTile.ContentBody className="text-center sm:text-start">
            {data?.title}
          </ActivityTile.ContentBody>
          <ActivityTile.ContentFooter>
            {data?.artist}
          </ActivityTile.ContentFooter>
        </ActivityTile.Content>
      </ActivityTile>
    </>
  );
};
