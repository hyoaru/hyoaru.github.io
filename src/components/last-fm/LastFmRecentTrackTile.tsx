import { formatDate } from "@/lib/utils";
import ErrorTile from "../shared/ErrorTile";
import LoadingTile from "../shared/LoadingTile";
import { Github } from "lucide-react";
import useLastFm from "@/hooks/useLastFm";

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
    <div
      className="w-full h-full p-[3px] rounded-lg bg-custom-secondary flex items-center justify-center bg-center bg-cover relative overflow-hidden"
      style={{ backgroundImage: `url(${data?.image_url})` }}
    >
      <div className="absolute w-full h-full backdrop-blur-[12px] opacity-90"></div>
      <div className="grid grid-cols-12 gap-4 w-full h-full">
        <div className="col-span-3 flex items-center justify-center bg-primary/5 border border-primary text-primary rounded-lg overflow-hidden h-full w-full">
          <img
            src={data?.image_url}
            className="object-fit object-center z-[1]"
            alt=""
          />
        </div>
        <div className="col-span-9 z-[2] flex flex-col justify-center text-background">
          <p className="text-xs truncate">{"Last.fm ･ listened to"}</p>
          <p className="text-xs truncate font-bold">{data?.title}</p>
          <p className="text-xs truncate">{data?.artist}</p>
        </div>
      </div>
    </div>
  );
}
