import { cn } from "@heroui/styles";

type TechnologyBadgeProps = {
  className?: string;
  name: string;
  simpleIcon: string;
};

export const TechnologyBadge = ({
  className,
  name,
  simpleIcon,
}: TechnologyBadgeProps) => (
  <div
    className={cn(
      "bg-default flex h-full items-center justify-center gap-2 rounded-md px-4 text-sm font-bold",
      className,
    )}
  >
    <img
      width={14}
      height={14}
      src={`https://cdn.simpleicons.org/${simpleIcon}/000000/0070f0`}
    />
    {name}
  </div>
);
