import { useContact } from "@/hooks/use-contact";
import { Input, Textarea, Button, addToast } from "@heroui/react";
import { ArrowDownRight, ArrowDownLeft, MapPin } from "lucide-react";
import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { contactFormSchema as formSchema } from "@/constants/form-schemas/contact";
import { useCallback } from "react";

export const Contact = () => {
  const { sendMessageMutation } = useContact();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: async ({ value }) => {
      await sendMessageMutation.mutateAsync(value).then(({ error }) => {
        if (!error) {
          addToast({
            title: "Message has been set successfuly!",
            color: "success",
          });
          form.reset();
        } else {
          addToast({
            title: "An error has occured.",
            color: "danger",
          });
        }
      });
    },
  });

  const getFieldError = useCallback((field: AnyFieldApi) => {
    const { isTouched, isValid, errors } = field.state.meta;
    const isInvalid = isTouched && !isValid;

    const errorMessage = isInvalid
      ? errors
          ?.map((e) => e?.message)
          .filter(Boolean)
          .join(", ")
      : "";

    return { isInvalid, errorMessage };
  }, []);

  return (
    <>
      <div className="" id="ContactSection">
        <div className="grid gap-2 sm:gap-4">
          <div className="bg-background space-y-2 rounded-xl sm:space-y-4">
            <div className="relative p-[3px] sm:p-0">
              <div className="absolute bottom-[-10px] left-2 z-20">
                <div className="relative">
                  <div className="border-primary dark:border-foreground absolute inset-0 flex h-full w-full animate-ping rounded-full border"></div>
                  <div className="border-primary bg-background text-primary rounded-full border">
                    <ArrowDownRight size={30} className="" />
                  </div>
                </div>
              </div>
              <div className="border-default relative space-y-2 rounded-xl border p-6 px-8">
                <p className="text-5xl font-bold">Get in touch.</p>
                <p className="text-xs sm:text-base xl:text-sm 2xl:text-base">
                  Considering to be in contact with me regarding a project?
                  Perhaps collaboration? Or just about anything?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background relative rounded-xl p-[3px] sm:p-0">
            <div className="absolute right-2 bottom-[-10px] z-20">
              <div className="relative">
                <div className="border-primary dark:border-foreground absolute inset-0 flex h-full w-full animate-ping rounded-full border"></div>
                <div className="border-primary bg-background text-primary rounded-full border">
                  <ArrowDownLeft size={30} className="" />
                </div>
              </div>
            </div>
            <div className="bg-background border-default space-y-4 rounded-xl border p-6 px-8 text-xs sm:text-base xl:text-sm 2xl:text-base">
              <div className="space-y-2">
                <p className="">
                  With hands-on freelancing experience across multiple projects,
                  I have honed my skills in delivering tailored solutions that
                  meet client needs. While I don't have formal job experience
                  yet, Im confident that I have the skills to take on any
                  challenging job that matches my interest.
                </p>
                <p className="">
                  Sincerely, a broke ass tea-powered programmer badly in need of
                  money.
                </p>
              </div>

              <div className="text-primary flex items-center gap-4">
                <MapPin size={18} />
                <p className="font-bold">Currently based in the Philippines</p>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-xl p-[3px] sm:p-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
            >
              <div className="bg-background border-default space-y-4 rounded-xl border p-6 px-8">
                <p className="text-primary dark:text-foreground text-2xl font-bold">
                  Send me a message!
                </p>
                <form.Field
                  name="email"
                  children={(field) => {
                    const { isInvalid, errorMessage } = getFieldError(field);

                    return (
                      <Input
                        id={field.name}
                        name={field.name}
                        label={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        isInvalid={isInvalid}
                        errorMessage={errorMessage}
                        classNames={{ label: "capitalize" }}
                      />
                    );
                  }}
                />
                <form.Field
                  name="name"
                  children={(field) => {
                    const { isInvalid, errorMessage } = getFieldError(field);

                    return (
                      <Input
                        id={field.name}
                        name={field.name}
                        label={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        isInvalid={isInvalid}
                        errorMessage={errorMessage}
                        classNames={{ label: "capitalize" }}
                      />
                    );
                  }}
                />
                <form.Field
                  name="message"
                  children={(field) => {
                    const { isInvalid, errorMessage } = getFieldError(field);

                    return (
                      <Textarea
                        id={field.name}
                        name={field.name}
                        label={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        isInvalid={isInvalid}
                        errorMessage={errorMessage}
                        classNames={{ label: "capitalize" }}
                      />
                    );
                  }}
                />
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <Button
                      color="primary"
                      type="submit"
                      isDisabled={!canSubmit}
                      isLoading={isSubmitting}
                    >
                      {isSubmitting ? "" : "Submit"}
                    </Button>
                  )}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
