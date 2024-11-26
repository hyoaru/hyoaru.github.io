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
            <div className="flex gap-2 flex-wrap">
              {data?.map((social, index) => (
                <a
                  href={social.link}
                  target="_blank"
                  key={`SocialTile-${social.link}-${index}`}
                  className="rounded-xl bg-custom-secondary px-3 py-2 flex items-center gap-3 grow transition-all duration-300 ease-in-out hover:bg-primary/5 hover:border-primary border border-transparent"
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
