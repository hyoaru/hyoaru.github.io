import { container } from "../container";

export const useContactActions = () => {
  return {
    sendMessage: container.contact.sendMessage,
  };
};
