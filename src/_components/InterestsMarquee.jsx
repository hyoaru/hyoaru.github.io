import React from 'react'
import Marquee from 'react-fast-marquee'
import { Chip } from '@nextui-org/react'

// App imports
import { interests } from '@constants/home'
import { useThemeContext } from '@context/ThemeContext'

export default function InterestsMarquee(props) {
  const { theme } = useThemeContext()

  return (
    <>
      <Marquee
        className={'transition-all duration-1000 ease-in-out'}
        speed={25}
        gradient={true}
        gradientColor={theme === 'light' ? 'white' : 'black'}
        gradientWidth={50}
        pauseOnHover
      >
        {interests.map((interest) => (
          <Chip
            key={`Interest-${interest}`}
            color='primary'
            variant='dot'
            size='sm'
            classNames={{ base: "border-1 bg-background mx-2 h-[25px]", content: "w-[100px] text-[10px] text-center lg:text-xs" }}
          >
            {interest}
          </Chip>
        ))}
      </Marquee>

    </>
  )
}
