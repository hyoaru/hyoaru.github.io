import React, { useMemo } from "react";
import ActivityCalendar from "react-activity-calendar";
import { Tooltip } from "@nextui-org/react";
import { memo } from "react";
import useGithub from "@/hooks/useGithub";
import { useThemeContext } from "@/context/ThemeContext";
import ErrorTile from "@/components/shared/ErrorTile";
import LoadingTile from "@/components/shared/LoadingTile";

const GithubActivityCalendar = memo(function _GithubActivityCalendar() {
  const { theme } = useThemeContext();

  const { getContributionStats } = useGithub();
  const {
    data: { contributions } = {},
    isLoading,
    error,
  } = getContributionStats();

  const filteredContributions = useMemo(() => {
    return contributions
      ?.filter((contribution) => {
        const currentDate = new Date();
        const startDate = new Date("2022-01-02");
        const contributionDate = new Date(contribution.date);
        return contributionDate >= startDate && contributionDate <= currentDate;
      })
      ?.sort((a, b) => (new Date(a.date) as any) - (new Date(b.date) as any));
  }, [contributions]);

  const customTheme = {
    light: ["hsl(0, 0%, 92%)", "#12181c"],
    dark: ["hsl(0, 0%, 8%)", "#0070f0"],
  };

  function renderBlock(block: React.ReactNode, activity: any) {
    return (
      <Tooltip
        content={`${activity.count} activities on ${activity.date}`}
        classNames={{ content: "text-xs" }}
        delay={0}
        closeDelay={0}
        showArrow
      >
        {block}
      </Tooltip>
    );
  }

  if (isLoading)
    return (
      <div className="h-40 bg-background p-[3px] rounded-xl">
        <LoadingTile />
      </div>
    );

  if (error)
    return (
      <div className="h-40 bg-background p-[3px] rounded-xl">
        <ErrorTile />
      </div>
    );

  return (
    <>
      <div className={`rounded-xl bg-background p-4`}>
        <div className="relative">
          {filteredContributions && (
            <>
              <ActivityCalendar
                data={filteredContributions}
                theme={customTheme}
                colorScheme={theme}
                renderBlock={renderBlock}
                fontSize={10}
                blockSize={10}
                hideTotalCount
              />
              <div className="absolute bottom-0 text-[10px] hidden sm:block md:bottom-0">
                Github contributions from 2022-01-01 - Present
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
});

export default GithubActivityCalendar;
