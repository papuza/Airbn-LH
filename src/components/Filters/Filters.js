import React from 'react'
import FilterDate from '../FilterDate/FilterDate'
import FilterSelect from '../FilterSelect/FilterSelect'
import checkin from '../../imgs/in.svg'
import checkout from '../../imgs/out.svg'
import mundo from '../../imgs/mundo.svg'
import money from '../../imgs/money.svg'
import cama from '../../imgs/roomsgray.svg'


const Filters = ({ filters, onFilterChange, hotels }) => {



  const handleDateChange = (event) => {
    let payload = filters
    payload[event.target.name] = event.target.value
    onFilterChange(payload)
  }

  const handleSelectChange = (event) => {
    let payload = filters
    payload[event.target.name] = event.target.value
    onFilterChange(payload)
  }

  return (
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-item container">
        <FilterDate check={checkin}
          date={filters.dateFrom}
          name="dateFrom"
          onDateChange={handleDateChange} />
        <FilterDate check={checkout}
          date={filters.dateTo}
          name="dateTo"
          onDateChange={handleDateChange} />
        <FilterSelect selected={filters.country}
          icon={mundo}
          options={[
            { value: "select", name: "Cualquier país" },
            { value: "Argentina", name: "Argentina" },
            { value: "Brasil", name: "Brasil" },
            { value: "Chile", name: "Chile" },
            { value: "Uruguay", name: "Uruguay" }]}
          name="country"
          onSelectChange={handleSelectChange} />
        <FilterSelect selected={filters.price}
          icon={money}
          options={[
            { value: "select", name: "Cualquier precio" },
            { value: 1, name: "$" },
            { value: 2, name: "$$" },
            { value: 3, name: "$$$" },
            { value: 4, name: "$$$$" }]}
          name="price"
          onSelectChange={handleSelectChange} />
        <FilterSelect selected={filters.rooms}
          icon={cama}
          options={[
            { value: "select", name: "Cualquier tamaño" },
            { value: 10, name: "Hotel pequeño" },
            { value: 20, name: "Hotel mediano" },
            { value: 30, name: "Hotel grande" }]}
          name="rooms"
          onSelectChange={handleSelectChange} />
      </div>
    </div>
  )
}

export default Filters
