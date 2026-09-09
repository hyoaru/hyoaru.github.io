import { useGitActions } from "@/infrastructure/hooks/git";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MetricCard } from "../ui";

export const GitRepositoriesMetricTile = () => {
  const { getUserInformation } = useGitActions();
  const { data } = useSuspenseQuery(
    getUserInformation(),
  );

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
          {data.publicRepositories.toLocaleString()}
        </MetricCard.Value>
      </MetricCard.Body>
    </MetricCard>
  );
};
