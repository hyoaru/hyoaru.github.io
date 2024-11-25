import { Button } from '@/components/ui/Button'
import { PersonStanding, ArrowDownToLine } from 'lucide-react'

export default function Header() {
  return (
    <div className="bg-background p-[3px] rounded-xl flex items-center">
      <PersonStanding className="me-4" />
      <p className="font-bold me-auto">Cabrera, Jen Jade</p>
      <Button>
        Download
        <Button.Icon>
          <ArrowDownToLine />
        </Button.Icon>
      </Button>
    </div>
  )
}

