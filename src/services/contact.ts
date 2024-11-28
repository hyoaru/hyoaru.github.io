import axios from "axios";

export const contactService = {
  sendMessage: async (data: {
    email: string;
    name: string;
    message: string;
  }) => {
    const url = "https://formsubmit.co/ajax/jjcabreraaaa@gmail.com";
    return axios
      .post(url, {
        "Content-Type": "application/json",
        body: JSON.stringify(data),
      })
      .then((response) => response.data);
  },
};
