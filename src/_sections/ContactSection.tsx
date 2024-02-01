import React, { useRef } from 'react'
import { Input, Textarea, Button } from '@nextui-org/react'
import { MapPin, ArrowUpRight, ArrowDownLeft } from 'lucide-react'

// App imports
import { Button as MovingBorder } from '@components/ui/MovingBorder'
import { TypewriterEffect } from '@components/ui/TypewriterEffect'
import { toast } from 'sonner'
import useSendMessage from '@hooks/contact/useSendMessage'

export default function ContactSection() {
  const formData = useRef<any>({})
  const formRef = useRef<HTMLFormElement>(null)
  const { sendMessage, isLoading } = useSendMessage()

  const typewriterEffectWords = [
    { text: 'Get' },
    { text: 'in' },
    { text: 'touch.' },
  ]

  function onFieldsChange(event: React.ChangeEvent<HTMLInputElement>) {
    formData.current.value = {
      ...formData.current.value, [event.target.name]: event.target.value
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await sendMessage(formData.current.value)
      .then(({ error }) => {
        if (!error) {
          toast.success('Message has been set successfuly!')
        } else {
          toast.error('An error has occured.')
        }
      })
    formRef.current?.reset()
  }

  return (
    <>
      <div className="" id='ContactSection'>
        <div className="grid grid-cols-12 gap-4 lg:gap-8 mt-12">
          <div className="col-span-12 md:col-span-6 space-y-4 xl:col-span-5">
            <div className="relative">
              <div className="absolute z-20 bottom-[-10px] right-[-10px]">
                <div className="bg-background text-primary border border-primary rounded-full">
                  <ArrowUpRight size={40} className='hidden md:block' />
                  <ArrowDownLeft size={40} className='block md:hidden' />
                </div>
              </div>
              <MovingBorder
                borderRadius="0.75rem"
                className="bg-white dark:bg-background text-black dark:text-white border-neutral-200 dark:border-slate-800"
                disabled
              >
                <div className="p-10 rounded-xl text-start relative">
                  <TypewriterEffect words={typewriterEffectWords} cursorClassName='hidden' />
                  <p className="mt-4 text-xs md:text-sm">
                    Considering to be in contact with me regarding a project? Perhaps collaboration? Or just about anything?
                  </p>
                </div>
              </MovingBorder>
            </div>

            <div className="border p-10 rounded-xl bg-background space-y-4 text-xs hidden md:block md:text-sm dark:border-default">
              <p className=''>
                I don't have any job experience yet
                <span className='opacity-50'>─currently willing to get exploited just to get that experience jkjk, </span>
                but I am confident that I have the skills to take on any challenging job that matches my interest.
              </p>
              <p className=''>Sincerely, a broke ass tea-powered programmer badly in need of money.</p>
              <div className="flex items-center gap-4 text-primary">
                <MapPin size={18} />
                <p className="font-bold">Currently based in the Philippines</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-7">
            <form onSubmit={onSubmit} ref={formRef}>
              <div className="border p-10 rounded-xl space-y-4 bg-background dark:border-default">
                <p className="font-bold text-xl text-primary ">Send me a message!</p>
                <Input
                  type='email'
                  label='Email'
                  name='email'
                  onChange={onFieldsChange}
                  isRequired
                />
                <Input
                  type='text'
                  label='Name'
                  name='name'
                  onChange={onFieldsChange}
                  isRequired
                />
                <Textarea
                  label='Message'
                  name='message'
                  onChange={onFieldsChange}
                  isRequired
                />
                <div className="flex justify-end">
                  <Button
                    color='primary'
                    type='submit'
                    isLoading={isLoading}
                  >
                    Send message
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-12">
            <div className="border p-10 rounded-xl bg-background space-y-4 text-xs block md:hidden dark:border-default">
              <p className=''>
                I don't have any job experience yet
                <span className='opacity-50'>─currently willing to get exploited just to get that experience jkjk, </span>
                but I am confident that I have the skills to take on any challenging job that matches my interest.
              </p>
              <p className=''>Sincerely, a broke ass tea-powered programmer badly in need of money.</p>
              <div className="flex items-center gap-4 text-primary">
                <MapPin size={18} />
                <p className="font-bold">Currently based in the Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
