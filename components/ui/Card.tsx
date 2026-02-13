import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export default function Card({ children, className = '', hover = true, gradient = false }: CardProps) {
  const baseStyles = 'bg-white rounded-2xl p-8 shadow-lg transition-all duration-300'
  const hoverStyles = hover ? 'hover:shadow-xl' : ''
  const gradientStyles = gradient ? 'bg-gradient-to-br from-gray-50 to-white' : ''
  
  return React.createElement(
    'div',
    { className: `${baseStyles} ${hoverStyles} ${gradientStyles} ${className}` },
    children
  )
}