import { VisitorBadge } from "@/components/commons/visitor-badge";
import { PhilippineTime } from "@/components/ui/philippine-time";
import { PortfolioResourcesStaticImageRegistry } from "@/utilities/static-image-registry/registries/portfolio-resources";
import { Get } from "@/utilities/static-image-registry/registries/portfolio-resources/operations";
import { Clock } from "lucide-react";

const staticImageRegistry = new PortfolioResourcesStaticImageRegistry();
const personalImage = staticImageRegistry.execute(
  new Get("personal-image.jpg"),
);

export const Profile = () => {
  return (
    <div className="bg-background bg-dots rounded-xl p-5">
      <div className="flex w-full gap-5">
        <img
          className="aspect-square w-[40%] shrink-0 rounded-lg object-cover"
          src={personalImage}
          alt=""
        />
        <div className="w-full">
          <div className="flex items-center gap-2.5">
            <div className="text-xl">
              <Clock className="text-accent h-[1em] w-[1em]" />
            </div>
            <PhilippineTime className="me-auto text-sm" />
            <VisitorBadge />
          </div>
        </div>
      </div>
    </div>
  );
};
