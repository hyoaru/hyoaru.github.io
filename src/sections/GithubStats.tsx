import ErrorTile from "@/components/shared/ErrorTile";
import LoadingTile from "@/components/shared/LoadingTile";
import { MetricCard } from "@/components/ui/MetricCard";
import useGithub from "@/hooks/useGithub";
import { Github } from "lucide-react";

export default function GithubStats() {
  return (
    <div className="grid grid-cols-12 rounded-xl bg-background p-[3px]">
      <div className="col-span-2 hidden items-center justify-center sm:col-span-2 sm:flex lg:hidden 2xl:flex">
        <Github className="size-8" />
      </div>
      <div className="col-span-full sm:col-span-10 lg:col-span-full 2xl:col-span-10">
        <div className="grid h-full grid-cols-2 gap-1">
          <Repositories />
          <Contributions />
        </div>
      </div>
    </div>
  );
}

function Repositories() {
  const { getBaseUserInformation } = useGithub();
  const { data, isLoading, error } = getBaseUserInformation();

  if (isLoading) return <LoadingComponent />;

  if (error) return <ErrorComponent />;

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
}

function Contributions() {
  const { getContributionStats } = useGithub();
  const { data, isLoading, error } = getContributionStats();

  if (isLoading) return <LoadingComponent />;

  if (error) return <ErrorComponent />;

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
}

function ErrorComponent() {
  return <ErrorTile className="h-[5.5rem]" />;
}
function LoadingComponent() {
  return <LoadingTile className="h-[5.5rem]" />;
}
