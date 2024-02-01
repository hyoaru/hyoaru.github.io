import { HTMLAttributes } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@nextui-org/react";
import JsFileDownloader from 'js-file-downloader';
import { toast } from 'sonner';

// App imports
import { CertificationType } from '@constants/certifications/types'

export default function CertificationCard({ title, tags, imageShrinked, imageOriginal, className }: CertificationType & HTMLAttributes<HTMLDivElement>) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  function downloadCertificate(url: string, onClose: () => void) {
    new JsFileDownloader({
      url: url
    })
      .then(function () {
        onClose()
        toast.success('Certificate will download immediately.')
      })
      .catch(function () {
        toast.error('An error has occured.')
      });
  }

  return (
    <>
      <div
        className={`border rounded-xl overflow-hidden mx-2 transition-all duration-300 ease-in-out cursor-pointer hover:border-primary hover:opacity-20 ${className}`}
        onClick={onOpen}
      >
        <Image
          radius='none'
          src={imageShrinked}
          classNames={{
            img: 'object-cover h-[200px] md:h-[300px]',
            wrapper: 'object-cover h-[200px] md:h-[300px]'
          }}
        />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <p className="text-lg font-semibold">{title}</p>
                <Image
                  src={imageOriginal}
                  isBlurred
                  height={'300px'}
                  width={'full'}
                  classNames={{
                    img: 'w-full object-cover',
                    wrapper: 'w-full object-cover',
                  }}
                />
                <div className="flex flex-wrap gap-1 items-center">
                  {tags && tags?.map((tag) => (
                    <span className="p-1 px-2 border rounded-lg text-xs" key={`Tag-${title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => downloadCertificate(imageOriginal, onClose)}
                >
                  Download
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
