import { lastFmService } from "@/services/lastFm";
import { useQuery } from "@tanstack/react-query";

export default function useLastFm() {
  const getRecentTrack = () =>
    useQuery({
      queryFn: lastFmService.getRecentTrack,
      queryKey: ["last_fm_recent_track"],
      staleTime: 60 * 1000 * 30,
    });

  return {
    getRecentTrack,
  };
}
