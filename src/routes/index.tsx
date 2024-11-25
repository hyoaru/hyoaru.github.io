import { Button } from '@/components/ui/Button'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowDownToLine, PersonStanding } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="bg-custom-background container-2xl">
      <div className="grid grid-cols-12 h-screen p-4 gap-4">
        <div className="col-span-4">
          <div className="flex flex-col gap-4">
            <div className="bg-background p-[2px] rounded-xl flex items-center">
              <PersonStanding className="me-4" />
              <p className="font-bold me-auto">Cabrera, Jen Jade</p>
              <Button>
                Download
                <Button.Icon>
                  <ArrowDownToLine />
                </Button.Icon>
              </Button>
            </div>
            <div className="bg-background p-4 rounded-xl flex flex-col">
              s
            </div>
          </div>
          <div className="">
          </div>
        </div>
        <div className="col-span-8">
          <div className="h-full "></div>
        </div>
      </div>
    </div>
  )
}
