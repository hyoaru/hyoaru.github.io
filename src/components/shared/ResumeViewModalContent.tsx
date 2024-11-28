import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ScrollShadow,
} from "@nextui-org/react";
import { coreService } from "@/services/core";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import useCore from "@/hooks/useCore";
import { toast } from "sonner";

export default function ResumeViewModalContent() {
  const { downloadResumeMutation } = useCore();
  const pdfUrl = coreService.getResumeUrl();

  async function onDownloadResume() {
    await downloadResumeMutation
      .mutateAsync()
      .then(() => {
        toast.success("Resume has been downloaded successfully");
      })
      .catch(() => {
        toast.error("An error has occured");
      });
  }

  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            <p>RESUME_CABRERA-JENJADE.PDF</p>
            <p className="text-base font-normal">{""}</p>
          </ModalHeader>
          <ModalBody>
            <ScrollShadow
              size={40}
              hideScrollBar
              className="h-[70vh] rounded-xl"
            >
              <div className="h-full">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer fileUrl={pdfUrl} />
                </Worker>
              </div>
            </ScrollShadow>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button
              onPress={onDownloadResume}
              isLoading={downloadResumeMutation.isPending}
              color="primary"
            >
              Download
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
}
