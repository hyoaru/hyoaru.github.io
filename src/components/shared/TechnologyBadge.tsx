import { cn, Image } from "@nextui-org/react";

type TechnologyBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

type TechnologyBadgeLogoProps = {
  logo: string;
};

export const TechnologyBadge = ({
  children,
  className,
}: TechnologyBadgeProps) => (
  <div
    className={cn(
      "flex h-full min-h-[2.3rem] items-center gap-2 rounded-lg border border-transparent bg-custom-secondary px-4 text-sm font-bold dark:border-default dark:bg-transparent 2xl:text-base",
      className,
    )}
  >
    {children}
  </div>
);

const TechnologyBadgeLogo = ({ logo }: TechnologyBadgeLogoProps) => (
  <Image
    width={14}
    height={14}
    src={`https://cdn.simpleicons.org/${logo}/000000/0070f0`}
  />
);

TechnologyBadge.Logo = TechnologyBadgeLogo;
