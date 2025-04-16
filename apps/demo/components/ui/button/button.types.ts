import { MouseEventHandler } from 'react'

export type ButtonProps = {
  variant: 'fill' | 'outline'
  size?: 'sm' | 'md'
  href?: string
  externalLink?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  icon?: React.ReactNode
  children: React.ReactNode
}
