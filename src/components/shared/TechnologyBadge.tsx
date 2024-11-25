import { cn, Image } from "@nextui-org/react";

type TechnologyBadgeProps = {
  children: React.ReactNode;
  className?: string;
}

type TechnologyBadgeLogoProps = {
  logo: string;
}

export const TechnologyBadge = ({ children, className }: TechnologyBadgeProps) => (
  <div className={cn("rounded-lg bg-custom-background px-4 py-2 font-bold flex items-center gap-2", className)} >
    {children}
  </div>
)

const TechnologyBadgeLogo = ({ logo }: TechnologyBadgeLogoProps) => (
  <Image width={14} height={14} src={`https://cdn.simpleicons.org/${logo}/000000/0070f0`} />
)

TechnologyBadge.Logo = TechnologyBadgeLogo