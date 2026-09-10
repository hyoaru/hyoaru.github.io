import { useGitActions } from "@/infrastructure/hooks/git";
import { useTheme } from "next-themes";
import { useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useSuspenseQuery } from "@tanstack/react-query";

export const GitActivityCalendar = () => {
  const { getContributions } = useGitActions();
  const { data } = useSuspenseQuery(getContributions());

  const { resolvedTheme } = useTheme();
  const colorScheme = (resolvedTheme ?? "dark") as "light" | "dark";

  const [dates] = useState(() => {
    const now = Date.now();
    const twoYearsAgo = new Date(now);
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

    return {
      now,
      startDate: twoYearsAgo.getTime(),
    };
  });

  const startDateFormatted = new Date(dates.startDate).toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" },
  );

  const filteredContributions = data.contributions
    .map((c) => ({ ...c, timestamp: new Date(c.date).getTime() }))
    .filter((c) => c.timestamp >= dates.startDate && c.timestamp <= dates.now)
    .sort((a, b) => a.timestamp - b.timestamp);

  const customTheme = {
    light: ["hsl(0, 0%, 92%)", "#12181c"],
    dark: ["hsl(0, 0%, 8%)", "#0070f0"],
  };

  return (
    <div className="relative flex h-full w-max items-center rounded-lg sm:p-3">
      <ActivityCalendar
        data={filteredContributions}
        theme={customTheme}
        colorScheme={colorScheme}
        fontSize={10}
        blockSize={10}
        showTotalCount={false}
      />
      <div className="text-2xs absolute bottom-0 block sm:bottom-4">
        Git contributions from {startDateFormatted} - Present
      </div>
    </div>
  );
};
