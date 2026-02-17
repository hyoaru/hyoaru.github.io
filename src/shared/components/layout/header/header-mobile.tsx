import { VisitorBadge } from "@/features/visitor";

export const HeaderMobile = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="bg-accent relative size-2.5 rounded-full">
            <div className="border-accent absolute inset-0 m-0 animate-ping rounded-full border" />
          </div>
          <p className="font-mono text-xs uppercase">Cabrera, Jen Jade B.</p>
        </div>
        <VisitorBadge />
      </div>
    </>
  );
};
