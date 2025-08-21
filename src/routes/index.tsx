import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@heroui/button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button color="primary">hello</Button>
      <p>test</p>
    </div>
  );
}
