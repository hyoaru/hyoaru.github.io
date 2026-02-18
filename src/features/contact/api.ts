import { commandBus } from "@/shared/infrastructure/command-bus";
import { mutationOptions } from "@tanstack/react-query";
import { SendMessage } from "./application/commands";
import {
  DecoratedMessenger,
  FormSubmitMessenger,
} from "./infrastructure/adapters";
import {
  DecoratedFormSubmitClient,
  HttpFormSubmitClient,
} from "./infrastructure/external";

const formSubmitClient = new DecoratedFormSubmitClient(
  new HttpFormSubmitClient(),
);

const messenger = new DecoratedMessenger(
  new FormSubmitMessenger({ formSubmitClient }),
);

export const contactApi = {
  baseKey: ["contact"] as const,
  mutation: {
    message: () =>
      mutationOptions({
        mutationKey: [...contactApi.baseKey, "message"],
        mutationFn: (message: string) =>
          commandBus.dispatch(
            new SendMessage({ request: { message }, messenger }),
          ),
      }),
  },
};
