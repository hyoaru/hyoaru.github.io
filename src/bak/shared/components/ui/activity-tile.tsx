import { cn } from "@heroui/styles";

export const ActivityTile = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn(
      "bg-custom-secondary/40 border-default flex h-full w-full items-center gap-3.5 overflow-hidden rounded-lg border p-1",
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);

const ActivityTileIcon = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn(
      "border-default bg-custom-secondary/60 text-foreground flex h-full w-20 items-center justify-center rounded-md border",
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);

const ActivityTileContent = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn("flex flex-col items-start justify-center", className)}
    {...rest}
  >
    {children}
  </div>
);

const ActivityTileContentHeader = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <p className={cn("truncate text-[0.67rem]", className)} {...rest}>
    {children}
  </p>
);

const ActivityTileContentBody = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <p className={cn("truncate text-xs font-bold", className)} {...rest}>
    {children}
  </p>
);

const ActivityTileContentFooter = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => (
  <p className={cn("truncate text-[0.67rem]", className)} {...rest}>
    {children}
  </p>
);

ActivityTile.Icon = ActivityTileIcon;
ActivityTile.Content = ActivityTileContent;
ActivityTile.ContentHeader = ActivityTileContentHeader;
ActivityTile.ContentBody = ActivityTileContentBody;
ActivityTile.ContentFooter = ActivityTileContentFooter;
