import { Button, Chip, Modal, useOverlayState } from "@heroui/react";
import { Calendar, ExternalLink, Eye, FolderGit2, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  tags: string[];
};

export const ProjectCard = (props: ProjectCardProps) => {
  const modal = useOverlayState();

  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div
        onClick={() => modal.open()}
        className="group relative w-full cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 ease-in-out"
      >
        <div className="absolute inset-0 z-15 m-auto opacity-0 transition-all duration-300 ease-in-out group-hover:animate-pulse group-hover:opacity-100 group-hover:backdrop-blur-sm">
          <Eye className="absolute inset-0 m-auto" size={80} />
        </div>

        <img
          className="aspect-3/2 w-full scale-105 object-cover"
          src={props.imageUrl}
          alt={props.title}
        />

        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-1 bg-linear-to-t from-black/80 via-black/40 to-transparent p-3 pt-10">
          <p className="line-clamp-2 text-sm font-semibold text-white">
            {props.title}
          </p>
          <div className="flex items-center gap-1 text-xs text-white/80">
            <Calendar className="size-3" />
            {formattedDate}
          </div>
        </div>
      </div>

      <Modal.Backdrop
        className="bg-transparent backdrop-blur-xs"
        isOpen={modal.isOpen}
        onOpenChange={modal.setOpen}
      >
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-3xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FolderGit2 className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-xl sm:text-2xl">
                {props.title}
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p className="text-foreground text-xs sm:text-sm">
                {props.description}
              </p>
              <img
                className="mt-4 rounded-xl border object-cover"
                src={props.imageUrl}
                alt={props.title}
              />
              <div className="mt-4 flex flex-wrap items-center gap-1">
                {props.tags.map((tag) => (
                  <Chip
                    className="rounded-md"
                    key={`${props.title}-tag-${tag}`}
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="mr-auto flex flex-wrap items-center gap-1">
                <Chip className="gap-2 rounded-lg border px-2 py-1 text-xs sm:text-sm">
                  <Calendar className="size-4" />
                  {formattedDate}
                </Chip>
                {props.repositoryUrl && (
                  <a
                    href={props.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-default hover:text-accent-soft-foreground flex items-center gap-2 rounded-lg border px-2 py-1 text-xs transition-all duration-300 ease-in-out sm:text-sm"
                  >
                    <Github className="size-4" />
                    Repository
                  </a>
                )}
                {props.liveUrl && (
                  <a
                    href={props.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-default hover:text-accent-soft-foreground flex items-center gap-2 rounded-lg border px-2 py-1 text-xs transition-all duration-300 ease-in-out sm:text-sm"
                  >
                    <ExternalLink className="size-4" />
                    Live
                  </a>
                )}
              </div>
              <Button className="rounded-lg" slot="close">
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
};
