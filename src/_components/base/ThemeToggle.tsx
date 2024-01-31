import { LucideMoon, LucideSun } from 'lucide-react'
import { Button } from '@nextui-org/react'

// App imports
import { useThemeContext } from '@context/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme, toggleTheme } = useThemeContext()

  return (
    <>
      <div className="hidden md:flex bg-default rounded-large p-[2px] ">
        <Button
          size='sm'
          radius='lg'
          variant='light'
          className={'bg-background dark:bg-inherit'}
          onClick={() => setTheme('light')}
        >
          Light
        </Button>
        <Button
          size='sm'
          value={'dark'}
          radius='lg'
          variant='light'
          className={'dark:bg-background'}
          onClick={() => setTheme('dark')}
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