import React from 'react'


const FilterSelect = ({ icon, name, onSelectChange, options, selected }) => {
  const optionsValues = options.map(({ value, name }) =>
    <option value={value}>{name}</option>
  )
  return (
    <div class="control has-icons-left">
      <div class="select">
        <select value={selected} onChange={onSelectChange} name={name}>
          {optionsValues}
        </select>
      </div>
      <div class="icon is-small is-left">
        <img src={icon} />
      </div>
    </div>
  )
}

export default FilterSelect
