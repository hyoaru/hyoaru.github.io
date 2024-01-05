import React from 'react'
import { LucideMoon, LucideSun } from 'lucide-react'
import { Button, Switch, ButtonGroup } from '@nextui-org/react'

// App imports
import { useThemeContext } from '@context/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme, toggleTheme } = useThemeContext()

  function onChange(event) {
    setTheme(event.target.value)
  }

  return (
    <>
      <div className="hidden md:flex bg-default rounded-full p-[2px] ">
        <Button
          size='sm'
          value={'light'}
          radius='full'
          variant='light'
          className={theme === 'light' ? 'bg-background' : ''}
          onClick={onChange}
        >
          Light
        </Button>
        <Button
          size='sm'
          value={'dark'}
          radius='full'
          variant='light'
          className={theme === 'dark' ? 'bg-background' : ''}
          onClick={onChange}
        >
          Dark
        </Button>
      </div>

      <Button
        isIconOnly
        variant='light'
        size='sm'
        onClick={toggleTheme}
        className='md:hidden'
      >
        {theme === 'light' ? <LucideSun className='text-primary' /> : <LucideMoon />}
      </Button>

    </>


  )
}
