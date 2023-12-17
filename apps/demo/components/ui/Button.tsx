import { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  variant: 'fill' | 'outline'
  size?: 'sm' | 'md'
  href?: string
  className?: string
  children: ReactNode
}

const variants = {
  fill: 'bg-black text-white hover:opacity-80 border-black',
  outline:
    'bg-transparent text-black hover:bg-gray-100 hover:bg-opacity-50 border-gray-800 hover:border-gray-600'
}

export default function Button({ variant, size = 'md', href, className, children }: ButtonProps) {
  const buttonSize = size === 'sm' ? 'py-2 px-4 text-sm' : 'py-2 px-5 text-base'

  const buttonClassName = clsx('rounded border-2 block', buttonSize, variants[variant], className)

  if (href) {
    return (
      <Link href={href ?? ''} className={buttonClassName}>
        {children}
      </Link>
    )
  }

  return <button className={buttonClassName}>{children}</button>
}
