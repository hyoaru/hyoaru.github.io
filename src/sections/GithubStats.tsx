import ErrorTile from "@/components/shared/ErrorTile";
import LoadingTile from "@/components/shared/LoadingTile";
import { MetricCard } from "@/components/ui/MetricCard";
import useGithub from "@/hooks/useGithub";
import { Github, Hash } from "lucide-react";

export default function GithubStats() {
  return (
    <div className="bg-background rounded-xl p-[3px] grid grid-cols-12">
      <div className="col-span-2 items-center flex justify-center ">
        <Github className="" />
      </div>
      <div className="col-span-10 ">
        <div className="grid grid-cols-2 h-full gap-1">
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
        <MetricCard.Icon>
          <Hash />
        </MetricCard.Icon>
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
        <MetricCard.Icon>
          <Hash />
        </MetricCard.Icon>
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
