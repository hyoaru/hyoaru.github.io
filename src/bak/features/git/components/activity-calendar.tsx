import { useSuspenseQuery } from "@tanstack/react-query";
import { gitApi } from "../api";
import { useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";

export const GitActivityCalendar = () => {
  const { data: contributionStats } = useSuspenseQuery(
    gitApi.query.contributionStats(),
  );

  const { theme } = useTheme();

  const [dates] = useState(() => ({
    now: Date.now(),
    startDate: new Date("2022-01-02").getTime(),
  }));

  const filteredContributions = contributionStats.contributions
    .map((c) => ({ ...c, timestamp: new Date(c.date).getTime() }))
    .filter((c) => c.timestamp >= dates.startDate && c.timestamp <= dates.now)
    .sort((a, b) => a.timestamp - b.timestamp);

  const customTheme = {
    light: ["hsl(0, 0%, 92%)", "#12181c"],
    dark: ["hsl(0, 0%, 8%)", "#0070f0"],
  };

  return (
    <>
      <div className="relative flex h-full w-max items-center rounded-lg p-3">
        <ActivityCalendar
          data={filteredContributions}
          theme={customTheme}
          colorScheme={theme as "light" | "dark"}
          fontSize={10}
          blockSize={10}
          showTotalCount={false}
        />
        <div className="absolute bottom-4 block text-[10px]">
          Github contributions from 2022 - Present
        </div>
      </div>
    </>
  );
};
