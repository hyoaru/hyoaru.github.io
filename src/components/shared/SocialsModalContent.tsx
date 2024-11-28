import useCore from "@/hooks/useCore";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import LoadingTile from "./LoadingTile";
import ErrorTile from "./ErrorTile";

export default function SocialsModalContent() {
  const { getSocials } = useCore();
  const { data, isLoading, error } = getSocials();

  if (isLoading)
    return (
      <ModalContent className="p-1">
        <LoadingTile className="h-[50vh]" />
      </ModalContent>
    );

  if (error)
    return (
      <ModalContent className="p-1">
        <ErrorTile className="h-[50vh]" />
      </ModalContent>
    );

  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            <p>Connect with me on my socials</p>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-wrap gap-2">
              {data?.map((social, index) => (
                <a
                  href={social.link}
                  target="_blank"
                  key={`SocialTile-${social.link}-${index}`}
                  className="flex grow items-center gap-3 rounded-xl border border-transparent bg-custom-secondary px-3 py-2 transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary/5 dark:border-default dark:hover:border-primary"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${social.name}/000000/ffffff`}
                    alt=""
                    className="size-8"
                  />
                  <div className="flex flex-col">
                    <p className="text-xs">{social.name}</p>
                    <p className="text-base">{social.label}</p>
                  </div>
                </a>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
}
