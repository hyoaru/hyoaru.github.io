import { useThemeContext } from '@/context/ThemeContext'
import { default as ReactFastMarquee } from 'react-fast-marquee'

type MarqueeProps = {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  speed?: number
  pauseOnHover?: boolean
}

export default function Marquee({ direction, speed, children, pauseOnHover }: MarqueeProps) {
  const { theme } = useThemeContext()
  return (
    <>
      <ReactFastMarquee
        className={'transition-all duration-1000 ease-in-out'}
        direction={direction ?? 'right'}
        speed={speed ?? 25}
        gradient={true}
        gradientColor={theme === 'light' ? 'white' : 'black'}
        gradientWidth={50}
        pauseOnHover={pauseOnHover ?? true}
      >
        {children}
      </ReactFastMarquee>
    </>
  )
}
