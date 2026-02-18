import { contactApi } from "@/features/contact";
import {
  Button,
  FieldError,
  Input,
  Label,
  ScrollShadow,
  Spinner,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Forward, MessagesSquare } from "lucide-react";
import { z } from "zod";

export const ContactPanel = () => {
  const sendMessageMutation = useMutation(contactApi.mutation.message());

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onChange: z.object({
        name: z.string().trim().min(2).max(64),
        email: z.string().trim().email().max(64),
        message: z.string().trim().min(10).max(512),
      }),
    },
    onSubmit: async ({ value }) => {
      await sendMessageMutation
        .mutateAsync(`From: ${value.email}\nMessage: ${value.message}`)
        .then(() => {
          toast("Message has been set successfuly!", {
            variant: "success",
            actionProps: {
              children: "Dismiss",
              onPress: () => toast.clear(),
              variant: "tertiary",
            },
          });
          form.reset();
        })
        .catch(() => {
          toast("An error has occured", {
            variant: "warning",
            actionProps: {
              children: "Dismiss",
              onPress: () => toast.clear(),
              variant: "tertiary",
            },
          });
        });
    },
  });

  const getFieldError = (field: AnyFieldApi) => {
    const { isTouched, isValid, errors } = field.state.meta;
    const isInvalid = isTouched && !isValid;

    const errorMessage = isInvalid
      ? errors
          ?.map((e) => e?.message)
          .filter(Boolean)
          .join(", ")
      : "";

    return { isInvalid, errorMessage };
  };
  return (
    <div className="flex h-full min-h-0 flex-col space-y-2.5">
      <div className="h-fit shrink-0">
        <p className="pb-2.5 lg:text-xl">
          Thinking about reaching out regarding a project? Maybe a
          collaboration—or just about anything? I’m always open to a quick chat
          about <span className="text-accent font-bold">new ideas</span>,{" "}
          <span className="text-accent font-bold">interesting builds</span>, or{" "}
          <span className="text-accent font-bold">solving real problems</span>{" "}
          with{" "}
          <span className="text-accent font-bold">
            clean, practical solutions
          </span>
          .
        </p>
      </div>

      <ScrollShadow hideScrollBar className="h-full min-h-0">
        <div className="bg-default/40 relative rounded-lg">
          <div className="bg-accent absolute -top-1.5 -right-1.5 rounded-xl p-1.5">
            <div className="border-accent absolute inset-0 m-auto animate-ping rounded-xl border" />
            <MessagesSquare className="dark:text-foreground text-background relative top-0.5 right-0.5 scale-80" />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="space-y-4 rounded-xl border p-5">
              <p className="text-primary dark:text-foreground text-lg font-bold sm:text-xl 2xl:text-2xl">
                Lets get in touch!
                {/* <MessagesSquare className="ms-2 inline-block align-middle" /> */}
              </p>
              <div className="space-y-1">
                <form.Field
                  name="email"
                  children={(field) => {
                    const { isInvalid, errorMessage } = getFieldError(field);

                    return (
                      <>
                        <TextField isInvalid={isInvalid}>
                          <Label className="capitalize">{field.name}</Label>
                          <Input
                            id={field.name}
                            name={field.name}
                            placeholder="johndoe@email.com"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className={
                              "border-default rounded-lg border shadow-none"
                            }
                          />
                          <FieldError>{errorMessage}</FieldError>
                        </TextField>
                      </>
                    );
                  }}
                />
                <form.Field
                  name="name"
                  children={(field) => {
                    const { isInvalid, errorMessage } = getFieldError(field);

                    return (
                      <>
                        <TextField isInvalid={isInvalid}>
                          <Label className="capitalize">{field.name}</Label>
                          <Input
                            id={field.name}
                            name={field.name}
                            placeholder="John Doe"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className={
                              "border-default rounded-lg border shadow-none"
                            }
                          />
                          <FieldError>{errorMessage}</FieldError>
                        </TextField>
                      </>
                    );
                  }}
                />
                <form.Field
                  name="message"
                  children={(field) => {
                    const { isInvalid, errorMessage } = getFieldError(field);

                    return (
                      <>
                        <TextField isInvalid={isInvalid}>
                          <Label className="capitalize">{field.name}</Label>
                          <TextArea
                            id={field.name}
                            name={field.name}
                            placeholder="Are you available for consulting work?"
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className={
                              "border-default rounded-lg border shadow-none"
                            }
                          />
                          <FieldError>{errorMessage}</FieldError>
                        </TextField>
                      </>
                    );
                  }}
                />
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <Button
                      type="submit"
                      className="mt-4 rounded-lg"
                      isDisabled={!canSubmit}
                      isPending={isSubmitting}
                    >
                      {({ isPending }) => (
                        <>
                          {isPending ? (
                            <Spinner color="current" size="sm" />
                          ) : (
                            <>
                              <Forward />
                              <p>Submit</p>
                            </>
                          )}
                        </>
                      )}
                    </Button>
                  )}
                />
              </div>
            </div>
          </form>
        </div>
      </ScrollShadow>
    </div>
  );
};
