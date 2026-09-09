import resume from "@/infrastructure/assets/documents/resume/resume.pdf";
import { Button, Modal, toast, type ModalBackdropProps } from "@heroui/react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import JsFileDownloader from "js-file-downloader";
import { FileUser } from "lucide-react";

export const ResumeModal = (props: ModalBackdropProps) => {
  async function handleDownloadResume() {
    return await new JsFileDownloader({
      url: resume,
      filename: "Cabrera-Jenjade_Software-Engineer_Resume.pdf",
      method: "GET",
    })
      .then(() => {
        toast("Resume has been downloaded", {
          variant: "accent",
          actionProps: {
            children: "Dismiss",
            onPress: () => toast.clear(),
            variant: "tertiary",
          },
        });
      })
      .catch(() => {
        toast("An error has occured when downloading resume", {
          variant: "warning",
          actionProps: {
            children: "Dismiss",
            onPress: () => toast.clear(),
            variant: "tertiary",
          },
        });
      });
  }
  return (
    <Modal.Backdrop className="bg-transparent backdrop-blur-xs" {...props}>
      <Modal.Container>
        <Modal.Dialog className="sm:max-w-3xl">
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <FileUser className="size-5" />
            </Modal.Icon>
          </Modal.Header>

          <div className="flex min-h-[60vh] flex-col">
            <Modal.Body>
              <div className="h-full">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer fileUrl={resume} />
                </Worker>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary" className="rounded-lg">
                Close
              </Button>
              <Button onClick={handleDownloadResume} className="rounded-lg">
                Download
              </Button>
            </Modal.Footer>
          </div>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
};
