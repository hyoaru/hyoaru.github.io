import ErrorTile from "../shared/ErrorTile";
import LoadingTile from "../shared/LoadingTile";
import useLastFm from "@/hooks/useLastFm";
import { ActivityTile } from "../ui/ActivityTile";

export default function LastFmRecentTrackTitle() {
  const { getRecentTrack } = useLastFm();
  const { data, isLoading, error } = getRecentTrack();

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
      <ActivityTile
        className={`relative border border-white bg-cover bg-center`}
        style={{ backgroundImage: `url(${data?.image_url})` }}
      >
        <div className="absolute h-full w-full opacity-90 backdrop-blur-[12px]"></div>
        <ActivityTile.Body>
          <ActivityTile.Icon className="z-[10] h-full overflow-hidden border-transparent object-cover">
            <img
              src={data?.image_url}
              className="h-full w-full object-cover object-center"
              alt=""
            />
          </ActivityTile.Icon>
          <ActivityTile.Content className="z-[2] text-background dark:text-foreground">
            <ActivityTile.ContentHeader>
              {"Last.fm ･ listened to"}
            </ActivityTile.ContentHeader>
            <ActivityTile.ContentBody>{data?.title}</ActivityTile.ContentBody>
            <ActivityTile.ContentFooter>
              {data?.artist}
            </ActivityTile.ContentFooter>
          </ActivityTile.Content>
        </ActivityTile.Body>
      </ActivityTile>
    </>
  );
}
