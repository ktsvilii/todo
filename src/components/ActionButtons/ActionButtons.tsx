import { useState } from "react"

import { useDispatch } from "react-redux"
import classNames from "classnames"
import { FILTERS, setFilter } from "../../store"
import "./ActionButtons.css"
import { Button } from "../Button"

export const ActionButtons = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<FILTERS | null>(null)
  const dispatch = useDispatch()

  const filters: FILTERS[] = [FILTERS.ALL, FILTERS.COMPLETED, FILTERS.ACTIVE]

  const handleSetFilter = (filter: FILTERS): void => {
    dispatch(setFilter(filter))
    setActiveFilter(filter)
  }

  return (
    <>
      {filters.map((filter) => 
        <Button
          key={filter}
          className={classNames({
            active: activeFilter === filter,
          })}
          onClick={(): void => handleSetFilter(filter)}
          text={filter}
        />
      )}
    </>
  )
}
