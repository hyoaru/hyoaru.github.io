import { ActivityTile } from "@/shared/components";
import { useSuspenseQuery } from "@tanstack/react-query";
import { listeningApi } from "../api";

export const RecentTrackTile = () => {
  const { data } = useSuspenseQuery(listeningApi.query.recentTrack());

  return (
    <>
      <ActivityTile
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.track.imageUrl})` }}
      >
        <div className="absolute h-full w-full overflow-hidden rounded-xl opacity-90 backdrop-blur-[12px]"></div>
        <ActivityTile.Icon className="z-[10] h-full overflow-hidden border-none">
          <img
            src={data?.track.imageUrl}
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </ActivityTile.Icon>
        <ActivityTile.Content className="text-background dark:text-foreground z-[2]">
          <ActivityTile.ContentHeader>
            {"Last.fm ･ listened to"}
          </ActivityTile.ContentHeader>
          <ActivityTile.ContentBody>
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
