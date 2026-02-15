import { Marquee } from "@/shared/components";
import { useSuspenseQuery } from "@tanstack/react-query";
import { identityApi } from "../api";
import { TechnologyBadge } from "./technology-badge";

export default function TechnologyMarquee() {
  const { data } = useSuspenseQuery(identityApi.query.technologies());

  return (
    <Marquee
      pauseOnHover
      classNames={{
        base: "flex h-full [--duration:140s] [--gap:0.25rem] rounded-lg",
      }}
    >
      {data.technologies.map((technology) => (
        <TechnologyBadge
          key={`TechnologyBadge-${technology.name}`}
          name={technology.name}
          simpleIconUrl={technology.logoUrl}
        />
      ))}
    </Marquee>
  );
}
