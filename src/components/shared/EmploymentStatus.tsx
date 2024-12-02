import useGithub from "@/hooks/useGithub";

export default function EmploymentStatus() {
  const { getBaseUserInformation } = useGithub();
  const { data, isLoading, error } = getBaseUserInformation();

  if (isLoading || error) return <></>;

  return (
    <>
      <div className="flex items-center gap-4 font-mono text-xs text-background dark:text-foreground lg:text-[10px]">
        {data?.hireable ? (
          <>
            <div className="relative">
              <div className="flex-inset-0 absolute h-full w-full animate-ping rounded-full border border-success"></div>
              <div className="size-3 rounded-full bg-success" />
            </div>
            <p>Seeking opportunities</p>
          </>
        ) : (
          <>
            <div className="relative">
              <div className="flex-inset-0 absolute h-full w-full rounded-full border border-custom-secondary dark:bg-primary"></div>
              <div className="size-3 rounded-full bg-custom-secondary dark:bg-primary" />
            </div>
            <p>Committed fulltime</p>
          </>
        )}
      </div>
    </>
  );
}
