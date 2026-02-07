import { Marquee } from "@/shared";
import { useSuspenseQuery } from "@tanstack/react-query";
import { technologyApi } from "../api";
import { TechnologyBadge } from "./badge";

export default function TechnologyMarquee() {
  const { data: technologies } = useSuspenseQuery(
    technologyApi.query.technologies(),
  );

  return (
    <Marquee
      pauseOnHover
      classNames={{
        base: "flex h-full [--duration:140s] [--gap:0.25rem] rounded-lg",
      }}
    >
      {technologies.map((technology) => (
        <TechnologyBadge
          key={`TechnologyBadge-${technology.name}`}
          name={technology.name}
          simpleIcon={technology.logo}
        />
      ))}
    </Marquee>
  );
}
