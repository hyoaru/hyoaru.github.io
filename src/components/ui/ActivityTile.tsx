import { cn } from "@nextui-org/react";

type ActivityTileProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type ActivityTileBodyProps = {
  children: React.ReactNode;
  className?: string;
};

type ActivityTileIconProps = {
  children: React.ReactNode;
  className?: string;
};

type ActivityTileContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const ActivityTile = ({
  children,
  className,
  style,
}: ActivityTileProps) => (
  <div
    className={cn(
      "w-full h-full p-[3px] rounded-lg bg-custom-secondary flex items-center justify-center",
      className,
    )}
    style={style}
  >
    {children}
  </div>
);

const ActivityTileBody = ({ children, className }: ActivityTileBodyProps) => (
  <div className={cn("grid grid-cols-12 gap-4 w-full h-full", className)}>
    {children}
  </div>
);

const ActivityTileIcon = ({ children, className }: ActivityTileIconProps) => (
  <div
    className={cn(
      "col-span-3 flex items-center justify-center bg-primary/5 border border-primary text-primary rounded-lg h-full w-full",
      className,
    )}
  >
    {children}
  </div>
);

const ActivityTileContent = ({
  children,
  className,
}: ActivityTileContentProps) => (
  <div className={cn("col-span-9 flex flex-col justify-center", className)}>
    {children}
  </div>
);

ActivityTile.Body = ActivityTileBody;
ActivityTile.Icon = ActivityTileIcon;
ActivityTile.Content = ActivityTileContent;
