import { AsyncBoundary } from "@/shared/components";
import {
  Button,
  Modal,
  ScrollShadow,
  type ModalBackdropProps,
} from "@heroui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CircleCheck } from "lucide-react";
import { identityApi } from "../api";
import { TechnologyBadge } from "./technology-badge";

const TechnologyContent = () => {
  const { data } = useSuspenseQuery(identityApi.query.technologies());
  return (
    <>
      <Modal.Body>
        <p className="py-4 text-base font-medium">
          <span>{"A total of "}</span>
          <span className="text-accent p-1 font-bold">
            {data.technologies.length}
          </span>
          <span>
            {" "}
            languages and technologies that I work and used to work with
          </span>
        </p>
        <ScrollShadow hideScrollBar className="max-h-60">
          <div className="flex flex-wrap items-center gap-1">
            {data.technologies.map((technology) => (
              <TechnologyBadge
                className="px-2 py-1"
                key={`TechnologyModal-${technology.name}`}
                name={technology.name}
                simpleIconUrl={technology.logoUrl}
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

export const TechnologyModal = (props: ModalBackdropProps) => {
  return (
    <Modal.Backdrop {...props}>
      <Modal.Container>
        <Modal.Dialog className="sm:max-w-xl">
          <Modal.CloseTrigger />

          <Modal.Header>
            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <CircleCheck className="size-5" />
            </Modal.Icon>
          </Modal.Header>
          <div className="my-4 flex min-h-[20vh] flex-col">
            <AsyncBoundary>
              <TechnologyContent />
            </AsyncBoundary>
          </div>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
};
