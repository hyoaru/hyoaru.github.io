import { useSuspenseQuery } from "@tanstack/react-query";
import { gitApi } from "../api";
import { MetricCard } from "@/shared";

export const GitContributionsMetricTile = () => {
  const { data: contributionStats } = useSuspenseQuery(
    gitApi.query.contributionStats(),
  );

  return (
    <MetricCard>
      <MetricCard.Body>
        <MetricCard.Label>Contributions</MetricCard.Label>
        <MetricCard.Value>
          {contributionStats.totalContribution.toLocaleString()}
        </MetricCard.Value>
      </MetricCard.Body>
    </MetricCard>
  );
};
