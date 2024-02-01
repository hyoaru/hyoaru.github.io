import React from 'react'

type BentoBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export default function BentoBox({ children, className }: BentoBoxProps) {
  return (
    <>
      <div className={`border rounded-xl w-full break-inside-avoid-column p-5 transition-all duration-300 ease-in-out overflow-hidden xl:p-10 hover:border-primary ${className}`}>
        {children}
      </div>
    </>
  )
}
