import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Comp } from './style'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: IButtonProps) {
  return <Comp {...props}>{children}</Comp>
}
