import { useSuspenseQuery } from "@tanstack/react-query";
import { gitApi } from "../api";
import { MetricCard } from "@/shared/components";

export const GitContributionsMetricTile = () => {
  const { data } = useSuspenseQuery(gitApi.query.contributions());

  return (
    <MetricCard>
      <MetricCard.Body>
        <MetricCard.Label
          classNames={{
            base: "text-xs sm:text-base",
            icon: "size-4 sm:size-5",
          }}
        >
          Contributions
        </MetricCard.Label>
        <MetricCard.Value>{data.total.toLocaleString()}</MetricCard.Value>
      </MetricCard.Body>
    </MetricCard>
  );
};
