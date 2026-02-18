import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-[#b242af] text-white hover:bg-[#8f3590] hover:shadow-lg hover:shadow-[#b242af]/30',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-[#b242af] hover:text-[#b242af]',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  return React.createElement(
    'button',
    {
      className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`,
      ...props
    },
    children
  )
}