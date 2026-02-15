import { useSuspenseQuery } from "@tanstack/react-query";
import { gitApi } from "../api";
import { MetricCard } from "@/shared/components";

export const GitContributionsMetricTile = () => {
  const { data } = useSuspenseQuery(gitApi.query.contributions());

  return (
    <MetricCard>
      <MetricCard.Body>
        <MetricCard.Label>Contributions</MetricCard.Label>
        <MetricCard.Value>{data.total.toLocaleString()}</MetricCard.Value>
      </MetricCard.Body>
    </MetricCard>
  );
};
