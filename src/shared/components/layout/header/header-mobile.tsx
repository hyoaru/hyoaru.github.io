import { VisitorBadge } from "@/features/visitor";
import { AsyncBoundary } from "../../ui";

export const HeaderMobile = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-2.5">
        <div className="flex shrink-0 items-center gap-2">
          <div className="bg-accent relative size-2.5 rounded-full">
            <div className="border-accent absolute inset-0 m-0 animate-ping rounded-full" />
          </div>
          <p className="font-mono text-xs uppercase">Cabrera, Jen Jade B.</p>
        </div>

        <div className="flex w-full justify-end self-stretch">
          <AsyncBoundary
            classNames={{
              errorBoundary: { icon: "hidden", skeleton: "rounded-sm" },
              suspense: { spinner: "hidden", skeleton: "rounded-sm" },
            }}
          >
            <VisitorBadge />
          </AsyncBoundary>
        </div>
      </div>
    </>
  );
};
