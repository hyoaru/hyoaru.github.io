import { ScrollShadow } from "@heroui/react";

export const ContactPanel = () => {
  return (
    <div className="flex h-full min-h-0 flex-col space-y-2.5">
      <div className="h-fit shrink-0">
        <p className="pb-2.5 lg:text-xl">
          Thinking about reaching out regarding a project? Maybe a
          collaboration—or just about anything? I’m always open to a quick chat
          about <span className="text-accent font-bold">new ideas</span>,{" "}
          <span className="text-accent font-bold">interesting builds</span>, or{" "}
          <span className="text-accent font-bold">solving real problems</span>{" "}
          with{" "}
          <span className="text-accent font-bold">
            clean, practical solutions
          </span>
          .
        </p>
      </div>

      <ScrollShadow hideScrollBar className="h-full min-h-0">
        <div className="grid grow grid-cols-1 gap-2.5 sm:grid-cols-2"></div>
      </ScrollShadow>
    </div>
  );
};
