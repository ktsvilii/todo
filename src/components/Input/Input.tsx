import React, { BaseSyntheticEvent, FC } from 'react'
import classNames from 'classnames'

import './Input.css'

interface InputProps {
  type: React.HTMLInputTypeAttribute
  value: string | number
  className?: string
  placeholder?: string
  onChange: (e: BaseSyntheticEvent) => void
}

export const Input: FC<InputProps> = ({
  type,
  value,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={classNames('input', className)}
      onChange={onChange}
    />
  )
}
