import React from 'react'
import Filters from '../Filters/Filters'



const NavBar = ({ filters, onFilterChange, hotels }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      {/* PRIMERA FILA DEL NAVBAR: TITULO Y SUBTITULO */}
      <section class="hero is-info">
        <div class="hero_overlay"></div>
        <div class="hero-body">
          <h1 class="title">
            Airbn-LH
          </h1>
          <p class="subtitle">
            Encontrá el lugar perfecto para descansar
          </p>
        </div>
      </section>
      {/* SEGUNDA FILA DEL NAVBAR: FILTROS*/}
      <Filters filters={filters} onFilterChange={onFilterChange} hotels={hotels} />
    </nav>
  )
}

export default NavBar
