import { ReactNode } from 'react'
import Link from 'next/link'

type ButtonProps = {
  variant: 'fill' | 'outline'
  link?: boolean
  href?: string
  children: ReactNode
}

const variants = {
  fill: 'bg-black text-white hover:opacity-80 border-black',
  outline: 'bg-transparent text-black hover:bg-gray-100 hover:bg-opacity-50 border-gray-800'
}

export default function Button({ variant = 'fill', link, href, children }: ButtonProps) {
  if (link) {
    return (
      <Link
        href={href ?? ''}
        className={`py-2 px-5 rounded border-2 shadow-lg ${variants[variant]}`}
      >
        {children}
      </Link>
    )
  }

  return <button className={`py-2 px-5 rounded border-2 ${variants[variant]}`}>{children}</button>
}
