import BookAMeetingModalContent from "@/components/shared/BookAMeetingModalContent";
import useContact from "@/hooks/useContact";
import {
  Input,
  Textarea,
  Button,
  Modal,
  useDisclosure,
} from "@nextui-org/react";
import { ArrowDownLeft, MapPin, ArrowDownRight } from "lucide-react";
import React, { useRef } from "react";
import { toast } from "sonner";

export default function Contact() {
  const formData = useRef<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const { sendMessageMutation } = useContact();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function onFieldsChange(event: React.ChangeEvent<HTMLInputElement>) {
    formData.current = {
      ...formData.current,
      [event.target.name]: event.target.value,
    };
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = formData.current;
    if (
      Object.values(data).length < 3 ||
      Object.values(data).some((value) => value.trim() === "")
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    await sendMessageMutation
      .mutateAsync(
        data as Parameters<typeof sendMessageMutation.mutateAsync>[0],
      )
      .then(({ error }) => {
        if (!error) {
          toast.success("Message has been set successfuly!");
        } else {
          toast.error("An error has occured.");
        }
      });
    formData.current = {};
    formRef.current?.reset();
  }

  return (
    <>
      <div className="" id="ContactSection">
        <div className="grid gap-2 sm:gap-4">
          <div className="space-y-2 rounded-xl bg-background sm:space-y-4">
            <div className="relative p-[3px] sm:p-0">
              <div className="absolute bottom-[-10px] left-2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 flex h-full w-full animate-ping rounded-full border border-primary dark:border-foreground"></div>
                  <div className="rounded-full border border-primary bg-background text-primary">
                    <ArrowDownRight size={30} className="" />
                  </div>
                </div>
              </div>
              <div className="relative space-y-2 rounded-xl border p-6 px-8 dark:border-default">
                <p className="text-4xl font-bold">Get in touch.</p>
                <p className="text-xs sm:text-base xl:text-sm 2xl:text-base">
                  Considering to be in contact with me regarding a project?
                  Perhaps collaboration? Or just about anything?
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl bg-background p-[3px] sm:p-0">
            <div className="absolute bottom-[-10px] right-2 z-20">
              <div className="relative">
                <div className="absolute inset-0 flex h-full w-full animate-ping rounded-full border border-primary dark:border-foreground"></div>
                <div className="rounded-full border border-primary bg-background text-primary">
                  <ArrowDownLeft size={30} className="" />
                </div>
              </div>
            </div>
            <div className="space-y-4 rounded-xl border bg-background p-6 px-8 text-xs dark:border-default sm:text-base xl:text-sm 2xl:text-base">
              <div className="space-y-2">
                <p className="">
                  With hands-on freelancing experience across multiple projects,
                  I have honed my skills in delivering tailored solutions that
                  meet client needs. While I don't have formal job experience
                  yet, Im confident that I have the skills to take on any
                  challenging job that matches my interest.
                </p>
                <p className="">
                  Sincerely, a broke ass tea-powered programmer badly in need of
                  money.
                </p>
              </div>

              <div className="flex items-center gap-4 text-primary">
                <MapPin size={18} />
                <p className="font-bold">Currently based in the Philippines</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-background p-[3px] sm:p-0">
            <form onSubmit={onSubmit} ref={formRef}>
              <div className="space-y-4 rounded-xl border bg-background p-6 px-8 dark:border-default">
                <div className="flex flex-col items-start sm:flex-row sm:items-center">
                  <p className="me-auto text-2xl font-bold text-primary dark:text-foreground">
                    Send me a message!
                  </p>
                  <button
                    className="text-xs uppercase text-primary/60 underline"
                    type="button"
                    onClick={onOpen}
                  >
                    Or book a meeting!
                  </button>
                </div>
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  onChange={onFieldsChange}
                  isRequired
                />
                <Input
                  type="text"
                  label="Name"
                  name="name"
                  onChange={onFieldsChange}
                  isRequired
                />
                <Textarea
                  label="Message"
                  name="message"
                  onChange={onFieldsChange}
                  isRequired
                />
                <div className="flex justify-end">
                  <Button
                    color="primary"
                    type="submit"
                    isLoading={sendMessageMutation.isPending}
                  >
                    Send message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal size={"5xl"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <BookAMeetingModalContent />
      </Modal>
    </>
  );
}
