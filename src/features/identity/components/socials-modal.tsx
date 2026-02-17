import { Button, Modal, type ModalBackdropProps } from "@heroui/react";
import {
  AudioLines,
  CircleCheck,
  Facebook,
  Github,
  Linkedin,
  Shuffle,
} from "lucide-react";
import { Ripple } from "m3-ripple";

const socials = [
  {
    icon: Github,
    label: "hyoaru",
    link: "https://github.com/hyoaru",
  },

  {
    icon: Facebook,
    label: "jjcabreraaaa",
    link: "https://facebook.com/jjcabreraaaa",
  },

  {
    icon: Linkedin,
    label: "jjcabreraaaa",
    link: "https://www.linkedin.com/in/jjcabreraaaa/",
  },

  {
    icon: AudioLines,
    label: "jade",
    link: "https://open.spotify.com/user/12180365121",
  },

  {
    icon: Shuffle,
    label: "haru",
    link: "https://last.fm/user/hyoaru",
  },
];

export const SocialsModal = (props: ModalBackdropProps) => {
  return (
    <Modal.Backdrop {...props}>
      <Modal.Container>
        <Modal.Dialog className="sm:max-w-[360px]">
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <CircleCheck className="size-5" />
            </Modal.Icon>
            <Modal.Heading className="mb-4 text-xl">
              Connect with me on these channels
            </Modal.Heading>
          </Modal.Header>
          <Modal.Body>
            <div className="flex flex-wrap items-center gap-1">
              {socials.map((social) => (
                <a
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  className="bg-default hover:text-accent-soft-foreground flex items-center gap-2 rounded-lg border px-2 py-1 transition-all duration-300 ease-in-out"
                >
                  <social.icon />
                  {social.label}
                </a>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="rounded-lg" slot="close">
              <Ripple />
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
};
