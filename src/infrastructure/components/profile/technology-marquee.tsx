import { useProfileActions } from "@/infrastructure/hooks/profile";
import { useSuspenseQuery } from "@tanstack/react-query";
import { TechnologyBadge } from "./technology-badge";
import { Marquee } from "../ui";

export const TechnologyMarquee = () => {
  const { getTechnologies } = useProfileActions();
  const { data } = useSuspenseQuery(getTechnologies());

  return (
    <Marquee
      pauseOnHover
      classNames={{
        base: "flex h-full [--duration:140s] [--gap:0.25rem] rounded-lg",
      }}
    >
      {data.map((name) => (
        <TechnologyBadge key={`TechnologyBadge-${name}`} name={name} />
      ))}
    </Marquee>
  );
};
