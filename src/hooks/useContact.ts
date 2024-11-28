import { contactService } from "@/services/contact";
import { useMutation } from "@tanstack/react-query";

export default function useContact() {
  const sendMessageMutation = useMutation({
    mutationFn: (params: Parameters<typeof contactService.sendMessage>[0]) =>
      contactService.sendMessage(params),
  });

  return {
    sendMessageMutation,
  };
}
