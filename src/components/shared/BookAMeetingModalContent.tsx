import Cal from "@calcom/embed-react";
import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
} from "@nextui-org/react";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function BookAMeetingModalContent() {
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            <p>Book a meeting</p>
            <p className="text-base font-normal">{""}</p>
          </ModalHeader>
          <ModalBody>
            <ScrollShadow
              size={40}
              hideScrollBar
              className="h-[50vh] rounded-xl"
            >
              <Cal
                namespace="30min"
                calLink="hyoaru/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view" }}
              />
            </ScrollShadow>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
}
