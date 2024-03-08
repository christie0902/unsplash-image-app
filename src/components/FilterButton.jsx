import React from 'react'

const FilterButton = ({color, label, applyColorFilter, colorStyle}) => {
  return (
    <>
         <button onClick={() => applyColorFilter(color)} style={{backgroundColor: colorStyle}}>
              Filter by {label}
        </button>
    </>
  )
}

export default FilterButton