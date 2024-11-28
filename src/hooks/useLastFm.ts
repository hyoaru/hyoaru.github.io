import { lastFmService } from "@/services/lastFm";
import { useQuery } from "@tanstack/react-query";

export default function useLastFm() {
  const getRecentTrack = () =>
    useQuery({
      queryFn: lastFmService.getRecentTrack,
      queryKey: ["last_fm_recent_track"],
      refetchInterval: 60 * 1000 * 1.5,
    });

  return {
    getRecentTrack,
  };
}
