import { FC } from "react"
import classNames from "classnames"

import './Button.css'

interface ButtonProps {
  text: string
  className?: string
  disabled?: boolean
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({
  text,
  disabled,
  className,
  onClick,
}): JSX.Element => {
  return (
    <button onClick={onClick} disabled={disabled} className={classNames("button", className)}>
      {text}
    </button>
  )
}
