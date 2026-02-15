import { AsyncBoundary } from "@/shared/components";
import { ScrollShadow } from "@heroui/react";
import { GitActivityCalendar } from "./activity-calendar";

export const GitActivity = () => {
  return (
    <div
      className={`bg-background flex h-46 items-center overflow-x-scroll overflow-y-hidden rounded-xl p-1`}
    >
      <ScrollShadow
        orientation="horizontal"
        className="relative h-full w-full"
        size={100}
      >
        <AsyncBoundary>
          <GitActivityCalendar />
        </AsyncBoundary>
      </ScrollShadow>
    </div>
  );
};
