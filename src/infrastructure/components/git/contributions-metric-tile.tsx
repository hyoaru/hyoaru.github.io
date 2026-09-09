import { useGitActions } from "@/infrastructure/hooks/git";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MetricCard } from "../ui";

export const GitContributionsMetricTile = () => {
  const { getContributions } = useGitActions();
  const { data } = useSuspenseQuery(getContributions());

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
