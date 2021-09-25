import React from 'react'


const FilterDate = ({ check, date, name, onDateChange }) => {
  return (
    <p class="control has-icons-left">
      <input class="input" type="date" onChange={onDateChange} value={date} name={name} />
      <span class="icon is-small is-left">
        <img src={check} />
      </span>
    </p>
  )
}

export default FilterDate
