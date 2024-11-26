import ErrorTile from "../shared/ErrorTile";
import LoadingTile from "../shared/LoadingTile";
import useLastFm from "@/hooks/useLastFm";
import { ActivityTile } from "../ui/ActivityTile";

export default function LastFmRecentTrackTitle() {
  const { getRecentTrack } = useLastFm();
  const { data, isLoading, error } = getRecentTrack();

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
      <ActivityTile
        className={`bg-center bg-cover relative overflow-hidden`}
        style={{ backgroundImage: `url(${data?.image_url})` }}
      >
        <div className="absolute w-full h-full backdrop-blur-[12px] opacity-90"></div>
        <ActivityTile.Body>
          <ActivityTile.Icon className="rounded-lg overflow-hidden h-full w-full">
            <img
              src={data?.image_url}
              className="object-fit object-center z-[1]"
              alt=""
            />
          </ActivityTile.Icon>
          <ActivityTile.Content className="text-background z-[2]">
            <p className="text-xs truncate">{"Last.fm ･ listened to"}</p>
            <p className="text-xs truncate font-bold">{data?.title}</p>
            <p className="text-xs truncate">{data?.artist}</p>
          </ActivityTile.Content>
        </ActivityTile.Body>
      </ActivityTile>
    </>
  );
}
