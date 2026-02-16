import { cn } from "@heroui/styles";
import {
  ChevronsDown,
  Activity,
  Calendar,
  MapPin,
  Award,
  type LucideProps,
} from "lucide-react";

type CareerCardNextIndicatorProps = {
  classNames?: {
    container?: React.ComponentPropsWithoutRef<"div">["className"];
    icon?: LucideProps["className"];
  };
};

type CareerCardDateProps = {
  children: React.ReactNode;
  classNames?: {
    container?: React.ComponentPropsWithoutRef<"div">["className"];
    icon?: LucideProps["className"];
  };
};

type CareerCardLocationProps = {
  children: React.ReactNode;
  classNames?: {
    container?: React.ComponentPropsWithoutRef<"div">["className"];
    icon?: LucideProps["className"];
  };
};

type CareerCardKeyAchievementsHeaderProps = {
  classNames?: {
    container?: React.ComponentPropsWithoutRef<"div">["className"];
    icon?: LucideProps["className"];
  };
};

type CareerCardTechnologiesHeaderProps = {
  classNames?: {
    container?: React.ComponentPropsWithoutRef<"div">["className"];
    icon?: LucideProps["className"];
  };
};

export const CareerCard = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "bg-default/40 border-custom-background relative overflow-hidden rounded-lg border p-5 pb-7",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const CareerCardNextIndicator = ({
  classNames,
}: CareerCardNextIndicatorProps) => {
  return (
    <div
      className={cn(
        "bg-accent text-background absolute -right-1.5 -bottom-1.5 rounded-xl p-1.5",
        classNames?.container,
      )}
    >
      <ChevronsDown
        className={cn("relative right-0.5 bottom-0.5", classNames?.icon)}
      />
    </div>
  );
};

const CareerCardContent = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("space-y-2.5", className)} {...rest}>
      {children}
    </div>
  );
};

const CareerCardTitle = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"p">) => {
  return (
    <p className={cn("text-lg font-bold", className)} {...rest}>
      {children}
    </p>
  );
};

const CareerCardContentHeader = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  );
};

const CareerCardDate = ({ children, classNames }: CareerCardDateProps) => {
  return (
    <div
      className={cn(
        "text-muted flex items-center gap-2.5 text-sm",
        classNames?.container,
      )}
    >
      <Calendar className={cn("h-[1.2em] w-[1.2em]", classNames?.icon)} />
      {children}
    </div>
  );
};

const CareerCardLocation = ({
  children,
  classNames,
}: CareerCardLocationProps) => {
  return (
    <div
      className={cn(
        "text-accent flex items-center gap-2.5 text-sm font-bold",
        classNames?.container,
      )}
    >
      <MapPin className={cn("h-[1.2em] w-[1.2em]", classNames?.icon)} />
      {children}
    </div>
  );
};

const CareerCardContentBody = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("space-y-2.5", className)} {...rest}>
      {children}
    </div>
  );
};

const CareerCardDescription = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"p">) => {
  return (
    <p className={cn("text-sm", className)} {...rest}>
      {children}
    </p>
  );
};

const CareerCardKeyAchievements = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("space-y-2", className)} {...rest}>
      {children}
    </div>
  );
};

const CareerCardKeyAchievementsHeader = ({
  classNames,
}: CareerCardKeyAchievementsHeaderProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 text-sm font-bold",
        classNames?.container,
      )}
    >
      <Award className={cn("h-[1.2em] w-[1.2em]", classNames?.icon)} />
      Key Achievements
    </div>
  );
};

const CareerCardKeyAchievementsList = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"ul">) => {
  return (
    <ul
      className={cn("text-muted list-disc ps-8 text-sm", className)}
      {...rest}
    >
      {children}
    </ul>
  );
};

const CareerCardKeyAchievementsListItem = ({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"li">) => {
  return <li {...rest}>{children}</li>;
};

const CareerCardTechnologies = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("space-y-2", className)} {...rest}>
      {children}
    </div>
  );
};

const CareerCardTechnologiesHeader = ({
  classNames,
}: CareerCardTechnologiesHeaderProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 text-sm font-bold",
        classNames?.container,
      )}
    >
      <Activity className={cn("h-[1.2em] w-[1.2em]", classNames?.icon)} />
      Technologies
    </div>
  );
};

const CareerCardTechnologiesList = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("flex flex-wrap gap-1 ps-8", className)} {...rest}>
      {children}
    </div>
  );
};

const CareerCardTechnologyChip = ({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "bg-custom-background h-full rounded-sm px-1 py-0.5 text-[0.6rem]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

CareerCard.NextIndicator = CareerCardNextIndicator;
CareerCard.Content = CareerCardContent;
CareerCard.Title = CareerCardTitle;
CareerCard.ContentHeader = CareerCardContentHeader;
CareerCard.Date = CareerCardDate;
CareerCard.Location = CareerCardLocation;
CareerCard.ContentBody = CareerCardContentBody;
CareerCard.Description = CareerCardDescription;
CareerCard.KeyAchievements = CareerCardKeyAchievements;
CareerCard.KeyAchievementsHeader = CareerCardKeyAchievementsHeader;
CareerCard.KeyAchievementsList = CareerCardKeyAchievementsList;
CareerCard.KeyAchievementsListItem = CareerCardKeyAchievementsListItem;
CareerCard.Technologies = CareerCardTechnologies;
CareerCard.TechnologiesHeader = CareerCardTechnologiesHeader;
CareerCard.TechnologiesList = CareerCardTechnologiesList;
CareerCard.TechnologyChip = CareerCardTechnologyChip;
