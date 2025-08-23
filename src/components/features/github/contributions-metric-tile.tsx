import { MetricCard } from "@/components/ui/metric-card";
import useGithub from "@/hooks/use-github";
import { ErrorMetricTile } from "./error-metric-tile";
import { LoadingMetricTile } from "./loading-metric-tile";

export const ContributionsMetricTile = () => {
  const { queryContributionStats } = useGithub();
  const { data, isLoading, error } = queryContributionStats();

  if (isLoading) return <LoadingMetricTile />;
  if (error) return <ErrorMetricTile />;

  return (
    <MetricCard>
      <MetricCard.Header>
        <MetricCard.Label>Contributions</MetricCard.Label>
      </MetricCard.Header>
      <MetricCard.Value>
        {data?.totalContribution?.toLocaleString()}
      </MetricCard.Value>
    </MetricCard>
  );
};
