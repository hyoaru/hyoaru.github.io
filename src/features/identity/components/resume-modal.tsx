import { AsyncBoundary } from "@/shared/components";
import { Button, Modal, toast, type ModalBackdropProps } from "@heroui/react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useSuspenseQuery } from "@tanstack/react-query";
import JsFileDownloader from "js-file-downloader";
import { FileUser } from "lucide-react";
import { Ripple } from "m3-ripple";
import { identityApi } from "../api";

const ResumeContent = () => {
  const { data } = useSuspenseQuery(identityApi.query.resume());

  async function handleDownloadResume() {
    return await new JsFileDownloader({
      url: data.resume,
      filename: "RESUME_CABRERA-JENJADE.pdf",
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
    <>
      <Modal.Body>
        <div className="h-full">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={data.resume} />
          </Worker>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button slot="close" variant="secondary" className="rounded-lg">
          <Ripple />
          Close
        </Button>
        <Button onClick={handleDownloadResume} className="rounded-lg">
          <Ripple />
          Download
        </Button>
      </Modal.Footer>
    </>
  );
};

export const ResumeModal = (props: ModalBackdropProps) => {
  return (
    <Modal.Backdrop className="bg-transparent backdrop-blur-xs" {...props}>
      <Modal.Container>
        <Modal.Dialog className="sm:max-w-3xl">
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <FileUser className="size-5" />
            </Modal.Icon>
            <Modal.Heading className="mb-4 text-2xl">
              RESUME_CABRERA-JENJADE.PDF
            </Modal.Heading>
          </Modal.Header>

          <div className="flex min-h-[60vh] flex-col">
            <AsyncBoundary>
              <ResumeContent />
            </AsyncBoundary>
          </div>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
};
