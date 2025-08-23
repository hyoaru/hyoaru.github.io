import { MetricCard } from "@/components/ui/metric-card";
import useGithub from "@/hooks/use-github";
import { ErrorMetricTile } from "./error-metric-tile";
import { LoadingMetricTile } from "./loading-metric-tile";

export const RepositoriesMetricTile = () => {
  const { queryBaseUserInformation } = useGithub();
  const { data, isLoading, error } = queryBaseUserInformation();

  if (isLoading) return <LoadingMetricTile />;
  if (error) return <ErrorMetricTile />;

  return (
    <MetricCard>
      <MetricCard.Header>
        <MetricCard.Label>Repositories</MetricCard.Label>
      </MetricCard.Header>
      <MetricCard.Value>
        {data?.public_repos?.toLocaleString()}
      </MetricCard.Value>
    </MetricCard>
  );
};
