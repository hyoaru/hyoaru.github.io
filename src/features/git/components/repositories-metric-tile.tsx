import { useSuspenseQuery } from "@tanstack/react-query";
import { gitApi } from "../api";
import { MetricCard } from "@/shared/components";

export const GitRepositoriesMetricTile = () => {
  const { data } = useSuspenseQuery(gitApi.query.user());

  return (
    <MetricCard>
      <MetricCard.Body>
        <MetricCard.Label
          classNames={{
            base: "text-xs sm:text-base",
            icon: "size-4 sm:size-5",
          }}
        >
          Repositories
        </MetricCard.Label>
        <MetricCard.Value>
          {data.user.publicRepositories.toLocaleString()}
        </MetricCard.Value>
      </MetricCard.Body>
    </MetricCard>
  );
};
