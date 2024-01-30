import { LucideMenu } from 'lucide-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react"

// App imports
import ThemeToggle from '@components/base/ThemeToggle'

export default function Header() {
  const navigations = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "About", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "Contact", href: "#" },
  ]

  return (
    <>
      <header className='my-5'>
        <div className="flex items-center">
          <a href='#' className='font-bold text-xl me-auto md:me-2 md:text-2xl'>
            {'Jj Cabrera'}
          </a>

          <div className="hidden md:flex gap-x-2 mx-auto lg:gap-x-8">
            {navigations.map((navigation, index) => (
              <a
                key={`NavigationExpanded-${index}`}
                href={navigation.href}
                className='text-xs transition-all ease-in-out duration-1000 hover:text-primary lg:text-sm dark:font-semibold'
              >
                {navigation.label}.
              </a>
            ))}
          </div>

          <ThemeToggle />

          <div className="md:hidden">
            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <Button isIconOnly variant='light' size='sm'>
                  <LucideMenu />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                {navigations.map((navigation, index) => (
                  <DropdownItem
                    key={`NavigationCollapsed-${index}`}
                    href={navigation.href}
                  >
                    {navigation.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </header>
    </>
  )
}