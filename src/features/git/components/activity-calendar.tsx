import { useSuspenseQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { gitApi } from "../api";
import { TimestampToMonthYear } from "@/shared/infrastructure/formatters";

export const GitActivityCalendar = () => {
  const { data } = useSuspenseQuery(gitApi.query.contributions());

  const { theme } = useTheme();

  const [dates] = useState(() => {
    const now = Date.now();
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 2);

    return {
      now,
      startDate: oneYearAgo.getTime(),
    };
  });

  const startDateFormatted = new TimestampToMonthYear(
    new Date(dates.startDate),
  ).format();

  const filteredContributions = data.contributions
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
          Git contributions from {startDateFormatted} - Present
        </div>
      </div>
    </>
  );
};
