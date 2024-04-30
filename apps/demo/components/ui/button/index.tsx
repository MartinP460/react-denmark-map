import clsx from 'clsx'
import Link from 'next/link'
import { ButtonProps } from '@/components/ui/button/button.types'

const variants = {
  fill: 'bg-black text-white hover:opacity-80 border-black active:opacity-70',
  outline:
    'bg-transparent text-black hover:bg-gray-100 hover:bg-opacity-50 border-gray-800 hover:border-gray-600 active:bg-gray-200 active:bg-opacity-80'
}

export default function Button({
  variant,
  size = 'md',
  href,
  externalLink,
  className,
  Icon,
  onClick,
  children
}: ButtonProps) {
  const buttonSize = size === 'sm' ? 'py-2 px-4 text-sm' : 'py-2 px-5 text-base'

  const buttonClassName = clsx(
    'rounded border-2 block flex items-center gap-2 hover:scale-[1.03] transition-all duration-150',
    buttonSize,
    variants[variant],
    className
  )

  if (href) {
    return (
      <Link
        href={href ?? ''}
        className={buttonClassName}
        target={externalLink ? '_blank' : undefined}
        rel={externalLink ? 'noopener noreferrer' : undefined}
      >
        {children}
        {Icon && <Icon size={size === 'sm' ? 18 : 20} />}
      </Link>
    )
  }

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  )
}
