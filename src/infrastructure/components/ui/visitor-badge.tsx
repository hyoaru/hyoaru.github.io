import { cn } from "@heroui/styles";
import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

export const VisitorBadge = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"p">) => {
  const { data } = useSuspenseQuery({
    queryKey: ["visitors"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.visitorbadge.io/api/visitors",
        {
          params: { path: "github.com/hyoaru" },
          responseType: "text",
        },
      );

      const match = data.match(/VISITORS:\s*([\d.kKM,]+)/i);

      if (match && match[1]) {
        const rawValue = match[1].trim();
        const numericValue = parseInt(rawValue.replace(/,/g, ""), 10);
        return { numericValue };
      } else {
        throw new Error("Unable to extract visitor count from response");
      }
    },
  });

  return (
    <p className={cn("space-x-1 font-mono text-xs", className)} {...rest}>
      <span className="text-foreground/60">VISITORS</span>
      <span className="bg-default rounded-sm p-0.5">
        {data.toLocaleString()}
      </span>
    </p>
  );
};
