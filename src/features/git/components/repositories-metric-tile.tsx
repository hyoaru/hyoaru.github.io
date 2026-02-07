import { useSuspenseQuery } from "@tanstack/react-query";
import { gitApi } from "../api";
import { MetricCard } from "@/shared";

export const GitRepositoriesMetricTile = () => {
  const { data: userInformation } = useSuspenseQuery(
    gitApi.query.userInformation(),
  );

  return (
    <MetricCard>
      <MetricCard.Body>
        <MetricCard.Label>Repositories</MetricCard.Label>
        <MetricCard.Value>
          {userInformation.public_repos.toLocaleString()}
        </MetricCard.Value>
      </MetricCard.Body>
    </MetricCard>
  );
};
