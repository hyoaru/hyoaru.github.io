import { BookOpenCheck, Parentheses, Github } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from '@nextui-org/react'
import { Button as MovingBorder } from '@components/ui/MovingBorder'

// App imports
import getCertifications from '@services/certifications/getCertifications'
import CertificationsFeed from '@components/certifications/CertificationsFeed'

export default function CertificationSection() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  
  const { data: certifications, isLoading } = useQuery({
    queryKey: ['certifications'],
    queryFn: getCertifications
  })

  return (
    <>
      <div className="">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <MovingBorder
              borderRadius="0.75rem"
              className="bg-white w-full dark:bg-background text-black dark:text-white border-neutral-200 dark:border-slate-800"
              disabled
            >
              <div className="p-5 flex items-center w-full gap-4 h-full">
                <BookOpenCheck size={30} className='text-primary' />
                <div className="text-start ">
                  <p className='font-semibold text-xs md:text-sm dark:text-primary'>Certifications</p>
                  <p className='text-xs'>A list of my accomplishments for every field</p>
                </div>
              </div>
            </MovingBorder>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="p-5 border rounded-xl w-full dark:border-default">
              <div className="flex items center">
                <p className='text-start text-xs me-auto opacity-50'>Certification count</p>
                <Parentheses size={18} />
              </div>
              <div className="">
                <p className='font-semibold text-base'>{certifications?.length?.toLocaleString() ?? '-'}</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="p-5 border rounded-xl w-full dark:border-default">
              <div className="flex items-center">
                <div className="me-auto">
                  <p className="font-semibold text-sm">List down certification</p>
                  <p className="text-xs opacity">See listed in modal</p>
                </div>
                <Button color='primary' disabled={isLoading} onClick={onOpen}>Open</Button>
              </div>
            </div>
          </div>

          <CertificationsFeed />
        </div >

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                  <p className="font-semibold">Certifications</p>
                  <div className="h-[400px] overflow-y-auto">
                    <ol className='list-decimal list-inside'>
                      {certifications && certifications?.map((certification) => (
                        <li
                          className='text-sm'
                          key={`CertificationListed-${certification.title}`}
                        >
                          {certification.title}
                        </li>
                      ))}
                    </ol>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <a href="https://github.com/hyoaru/certifications" target='_blank'>
                    <Button
                      color="primary"
                      onPress={onClose}
                      startContent={<Github size={20} />}
                    >
                      Go to repository
                    </Button>
                  </a>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}
