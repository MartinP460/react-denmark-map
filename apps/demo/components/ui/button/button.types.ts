import { TablerIconsProps } from '@tabler/icons-react'
import { type JSX, MouseEventHandler } from 'react'

export type ButtonProps = {
  variant: 'fill' | 'outline'
  size?: 'sm' | 'md'
  href?: string
  externalLink?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  Icon?: (props: TablerIconsProps) => JSX.Element
  children: React.ReactNode
}
