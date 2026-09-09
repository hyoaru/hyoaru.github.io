import { Button, Chip, Modal, useOverlayState } from "@heroui/react";
import { BookOpenText, Eye } from "lucide-react";

type CertificationCardProps = {
  title: string;
  imageUrl?: string;
  issuer: string;
  issuedAt: string;
  tags: string[];
};

export const CertificationCard = (props: CertificationCardProps) => {
  const modal = useOverlayState();

  return (
    <>
      <div
        onClick={() => modal.open()}
        className="group relative w-full cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 ease-in-out"
      >
        <div className="absolute inset-0 z-[15] m-auto opacity-0 transition-all duration-300 ease-in-out group-hover:animate-pulse group-hover:opacity-100 group-hover:backdrop-blur-sm">
          <Eye className="absolute inset-0 m-auto" size={80} />
        </div>

        <img
          className="aspect-3/2 w-full scale-105 object-cover"
          src={props.imageUrl}
        />
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
                <BookOpenText className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-2xl">{props.title}</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-wrap items-center gap-1">
                {props.tags.map((tag) => (
                  <Chip
                    className="rounded-md"
                    key={`${props.title}-tag-${tag}`}
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
              <img
                className="mt-4 rounded-xl border object-cover"
                src={props.imageUrl}
              />
            </Modal.Body>
            <Modal.Footer>
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
