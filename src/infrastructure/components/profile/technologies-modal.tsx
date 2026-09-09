import { useProfileActions } from "@/infrastructure/hooks/profile";
import { Button, Modal, ScrollShadow, type ModalBackdropProps } from "@heroui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CircleCheck } from "lucide-react";
import { AsyncBoundary } from "../ui";
import { TechnologyBadge } from "./technology-badge";

const TechnologiesContent = () => {
  const { getTechnologies } = useProfileActions();
  const { data } = useSuspenseQuery(getTechnologies());

  return (
    <>
      <Modal.Body>
        <p className="pt-2 pb-4 text-base font-medium">
          <span>{"A total of "}</span>
          <span className="text-accent p-1 font-bold">{data.length}</span>
          <span>
            {" "}
            languages and technologies that I work and used to work with
          </span>
        </p>
        <ScrollShadow hideScrollBar className="max-h-60">
          <div className="flex flex-wrap items-center gap-1">
            {data.map((name) => (
              <TechnologyBadge
                className="px-2 py-1"
                key={`TechnologyModal-${name}`}
                name={name}
              />
            ))}
          </div>
        </ScrollShadow>
      </Modal.Body>
      <Modal.Footer>
        <Button className="rounded-lg" slot="close">
          Close
        </Button>
      </Modal.Footer>
    </>
  );
};

export const TechnologiesModal = (props: ModalBackdropProps) => {
  return (
    <Modal.Backdrop {...props}>
      <Modal.Container>
        <Modal.Dialog className="sm:max-w-xl">
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <CircleCheck className="size-5" />
            </Modal.Icon>
            <Modal.Heading className="mb-4 text-2xl">
              {"Languages & Technologies"}
            </Modal.Heading>
          </Modal.Header>
          <div className="flex min-h-[20vh] flex-col">
            <AsyncBoundary>
              <TechnologiesContent />
            </AsyncBoundary>
          </div>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
};
