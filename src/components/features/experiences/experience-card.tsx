import { Chip } from "@heroui/react";
import { cn } from "@heroui/theme";
import { ArrowUpLeft } from "lucide-react";

type ExperienceCardProps = {
  children: React.ReactNode;
  isMostRecent?: boolean;
};

type ExperienceCardOverflowIconProps = {
  children: React.ReactNode;
};

type ExperienceCardBodyProps = {
  children: React.ReactNode;
};

type ExperienceCardContentProps = {
  children: React.ReactNode;
};

type ExperienceCardContentHeaderProps = {
  children: React.ReactNode;
};

type ExperienceCardPositionProps = {
  children: React.ReactNode;
};

type ExperienceCardContentSubHeaderProps = {
  children: React.ReactNode;
};

type ExperienceCardCompanyProps = {
  children: React.ReactNode;
};

type ExperienceCardLocationProps = {
  children: React.ReactNode;
};

type ExperienceCardContentBodyProps = {
  children: React.ReactNode;
};

type ExperienceCardDateProps = {
  children: React.ReactNode;
};

type ExperienceCardHighlightsProps = {
  highlights: string[];
};

export const ExperienceCard = (props: ExperienceCardProps) => (
  <div
    className={cn(
      "border-default hover:border-primary hover:bg-primary/5 relative rounded-xl border p-[3px] transition-all duration-200 ease-in-out sm:p-0",
      props?.isMostRecent && "bg-primary/5",
    )}
  >
    {props.children}
  </div>
);

const ExperienceCardOverflowIcon = (props: ExperienceCardOverflowIconProps) => (
  <div className="absolute top-[-10px] right-2 z-20">
    <div className="relative">
      <div className="border-primary dark:border-foreground absolute inset-0 flex h-full w-full animate-ping rounded-full border"></div>
      <div className="border-primary bg-background text-primary rounded-full border">
        {props.children}
      </div>
    </div>
  </div>
);

const ExperienceCardBody = (props: ExperienceCardBodyProps) => (
  <div className="rounded-xl p-6 px-8 text-xs sm:text-base xl:text-sm 2xl:text-base">
    {props.children}
  </div>
);

const ExperienceCardContent = (props: ExperienceCardContentProps) => (
  <div className="space-y-2">{props.children}</div>
);

const ExperienceCardContentHeader = (
  props: ExperienceCardContentHeaderProps,
) => <div>{props.children}</div>;

const ExperienceCardPosition = (props: ExperienceCardPositionProps) => (
  <p className="text-lg font-bold">{props.children}</p>
);

const ExperienceCardContentSubHeader = (
  props: ExperienceCardContentSubHeaderProps,
) => <div className="flex items-center gap-2">{props.children}</div>;

const ExperienceCardCompany = (props: ExperienceCardCompanyProps) => (
  <p className="text-primary">{props.children}</p>
);

const ExperienceCardLocation = (props: ExperienceCardLocationProps) => (
  <Chip size="sm" radius="sm" className="bg-custom-secondary text-xs">
    {props.children}
  </Chip>
);

const ExperienceCardContentBody = (props: ExperienceCardContentBodyProps) => (
  <div>{props.children}</div>
);

const ExperienceCardDate = (props: ExperienceCardDateProps) => (
  <p className="text-sm font-bold">{props.children}</p>
);

const ExperienceCardHighlights = (props: ExperienceCardHighlightsProps) => (
  <ul className="list-disc ps-4 text-sm">
    {props.highlights.map((highlight) => (
      <li key={highlight}>{highlight}</li>
    ))}
  </ul>
);

ExperienceCard.OverflowIcon = ExperienceCardOverflowIcon;
ExperienceCard.Body = ExperienceCardBody;
ExperienceCard.Content = ExperienceCardContent;
ExperienceCard.ContentHeader = ExperienceCardContentHeader;
ExperienceCard.Position = ExperienceCardPosition;
ExperienceCard.ContentSubHeader = ExperienceCardContentSubHeader;
ExperienceCard.Company = ExperienceCardCompany;
ExperienceCard.Location = ExperienceCardLocation;
ExperienceCard.ContentBody = ExperienceCardContentBody;
ExperienceCard.Date = ExperienceCardDate;
ExperienceCard.Highlights = ExperienceCardHighlights;
