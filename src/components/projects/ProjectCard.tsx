import { Project } from "@/types/core";
import { Image, Button, cn, ScrollShadow } from "@nextui-org/react";
import { Github, Globe, Settings2 } from "lucide-react";

type ProjectCardProps = {
  children: React.ReactNode;
  className?: string;
};

type ProjectCardImageViewProps = {
  className?: string;
  imageUrl: string;
};

type ProjectCardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

type ProjectCardContentProps = {
  children: React.ReactNode;
  className?: string;
};

type ProjectCardContentBodyProps = {
  children: React.ReactNode;
  className?: string;
};

type ProjectCardContentTagsProps = {
  tags: Project["tags"];
  className?: string;
};

type ProjectCardContentFooterProps = {
  children: React.ReactNode;
  className?: string;
};

type ProjectCardRepositoryButtonProps = {
  url: string | null;
  className?: string;
};
type ProjectCardProcessButtonProps = {
  url: string | null;
  className?: string;
};
type ProjectCardLiveButtonProps = {
  url: string | null;
  className?: string;
};

type ProjectCardImageProps = {
  imageUrl: string;
};

type ProjectCardTitleProps = {
  className?: string;
  title: string;
  year: number;
};

type ProjectCardDescriptionProps = {
  classNames?: {
    container?: string;
    description?: string;
  };
  children: React.ReactNode;
};

export const ProjectCard = ({ children, className }: ProjectCardProps) => (
  <div
    className={cn(
      "group relative overflow-hidden rounded-xl border bg-background transition-all duration-200 ease-in-out hover:border-primary hover:bg-primary/5 dark:border-default",
      className,
    )}
  >
    {children}
  </div>
);

const ProjectCardImageView = ({
  className,
  imageUrl,
}: ProjectCardImageViewProps) => (
  <div
    className={cn(
      `pointer-events-none absolute z-[5] h-full w-full rounded-xl bg-cover bg-center opacity-0 transition-all duration-300 ease-in-out`,
      className,
    )}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <Image
      radius={"none"}
      src={imageUrl}
      classNames={{
        wrapper:
          "object-scale-down h-full mx-auto rounded-xl backdrop-blur-[12px]",
        img: "object-scale-down h-full mx-auto rounded-xl backdrop-blur-[12px]",
      }}
    />
  </div>
);

const ProjectCardBody = ({ children, className }: ProjectCardBodyProps) => (
  <div className={cn("grid grid-cols-12", className)}>{children}</div>
);

const ProjectCardContent = ({
  children,
  className,
}: ProjectCardContentProps) => (
  <div
    className={cn(
      "col-span-12 flex h-full w-full flex-col p-6 sm:col-span-6",
      className,
    )}
  >
    {children}
  </div>
);

const ProjectCardContentBody = ({
  children,
  className,
}: ProjectCardContentBodyProps) => (
  <div className={cn("", className)}>{children}</div>
);

const ProjectCardContentTags = ({
  tags,
  className,
}: ProjectCardContentTagsProps) => (
  <div className={cn("flex flex-wrap items-center gap-1", className)}>
    {tags.map((tag, index) => (
      <div
        className="rounded-lg border border-default px-2 py-1"
        key={`ProjectTag-${tag}-${index}`}
      >
        <p className="text-xs">{tag}</p>
      </div>
    ))}
  </div>
);

const ProjectCardContentFooter = ({
  children,
  className,
}: ProjectCardContentFooterProps) => (
  <div className={cn("mt-auto flex flex-wrap gap-2", className)}>
    {children}
  </div>
);

const ProjectCardRepositoryButton = ({
  url,
  className,
}: ProjectCardRepositoryButtonProps) => {
  if (!url) return;
  return (
    <a href={url} target="_blank">
      <Button
        size="sm"
        color="primary"
        startContent={<Github size={15} />}
        className={cn("", className)}
      >
        See repository
      </Button>
    </a>
  );
};

const ProjectCardProcessButton = ({
  url,
  className,
}: ProjectCardProcessButtonProps) => {
  if (!url) return;
  return (
    <a href={url} target="_blank">
      <Button
        size="sm"
        variant="flat"
        startContent={<Settings2 size={15} />}
        className={cn("", className)}
      >
        See process
      </Button>
    </a>
  );
};

const ProjectCardLiveButton = ({
  url,
  className,
}: ProjectCardLiveButtonProps) => {
  if (!url) return;
  return (
    <a href={url} target="_blank">
      <Button
        size="sm"
        variant="flat"
        startContent={<Globe size={15} />}
        className={cn("", className)}
      >
        See live
      </Button>
    </a>
  );
};

const ProjectCardImage = ({ imageUrl }: ProjectCardImageProps) => (
  <div className={cn("relative col-span-12 sm:col-span-6")}>
    <div className="absolute inset-0 z-[15] flex transition-all duration-300 ease-in-out group-hover:bg-primary/5"></div>
    <Image
      radius={"none"}
      src={imageUrl}
      isBlurred
      classNames={{
        wrapper: "object-cover w-full sm:h-full sm:w-fit",
        img: "w-full sm:h-full sm:w-fit object-cover",
      }}
    />
  </div>
);

const ProjectCardTitle = ({
  title,
  year,
  className,
}: ProjectCardTitleProps) => (
  <p className={cn("mb-2 text-sm font-bold 2xl:text-base", className)}>
    {title} {"･"} {year}
  </p>
);

const ProjectCardDescription = ({
  children,
  classNames,
}: ProjectCardDescriptionProps) => (
  <ScrollShadow
    hideScrollBar
    size={50}
    className={cn("h-full text-xs lg:max-h-[80px] 2xl:text-base")}
  >
    <p className={cn("", classNames?.description)}>{children}</p>
  </ScrollShadow>
);

ProjectCard.ImageView = ProjectCardImageView;
ProjectCard.Body = ProjectCardBody;
ProjectCard.Content = ProjectCardContent;
ProjectCard.ContentBody = ProjectCardContentBody;
ProjectCard.ContentTags = ProjectCardContentTags;
ProjectCard.ContentFooter = ProjectCardContentFooter;
ProjectCard.RepositoryButton = ProjectCardRepositoryButton;
ProjectCard.ProcessButton = ProjectCardProcessButton;
ProjectCard.LiveButton = ProjectCardLiveButton;
ProjectCard.Image = ProjectCardImage;
ProjectCard.Title = ProjectCardTitle;
ProjectCard.Description = ProjectCardDescription;
