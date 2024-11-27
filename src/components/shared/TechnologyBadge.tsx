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
      "rounded-lg bg-custom-secondary px-4 font-bold h-full min-h-[2.3rem] flex items-center gap-2 text-sm 2xl:text-base",
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
