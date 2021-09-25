import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'moment';
//AXIOS ES UNA LIBRERIA PARA OBTENER DATOS DE UNA API

import 'bulma/css/bulma.min.css';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main'
import Footer from '../Footer/Footer';
import { loadConfig } from 'browserslist';

function App() {
  //Hotels States
  const [hotels, setHotels] = useState([])
  const [hotelsFiltered, setHotelsFiltered] = useState([])
  const [isLoading, setisLoading] = useState(false)

  //Formateo de las fechas
  const today = new Date()
  const todayFormated = Moment(today).format("YYYY-MM-DD");
  const nextMonthFormated = Moment(today).add(1, "month").format("YYYY-MM-DD");

  //Filters States
  const [filters, setFilters] = useState({
    dateFrom: todayFormated,
    dateTo: nextMonthFormated,
    country: 'select',
    price: 'select',
    rooms: 'select'
  })

  //USEEFFECT ES PARA EJECUTAR FUNCIONES SEGUN EL VALOR DE UN STATE. Se ejecuta cada vez que cambia un state
  useEffect(() => {
    //Me traigo los hoteles de la api, usando axios
    const getHotels = async () => {
      try {
        //1.Pongo el loading en true
        setisLoading(true)
        //2. Hago la llamada a la api
        const hotelsFromApi = await axios.get('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
        //3. Guardo el array obtenido en hotels y hotelsFiltered, usando setHotels()
        setHotels(hotelsFromApi.data)
        setHotelsFiltered(hotelsFromApi.data)
        //4. Pongo el loading en false
        setisLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getHotels()
  }, [])

  const handleFilter = ({ dateFrom, dateTo, country, rooms, price }) => {
    return hotels.filter(
      (hotel) =>
        Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom &&
        Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo &&
        //Filters de select vvvv
        hotel.country == (country != 'select' ? country : hotel.country) &&
        parseInt(hotel.price) == (price != 'select' ? parseInt(price) : parseInt(hotel.price)) &&
        (parseInt(hotel.rooms) >= (rooms != 'select' ? (rooms == 10 ? 0 : (rooms == 20 ? 10 : 20)) : parseInt(hotel.rooms)) &&
          parseInt(hotel.rooms) <= (rooms == 10 ? 10 : (rooms == 20 ? 20 : parseInt(hotel.rooms))))
    );
  };

  const onFilterChange = (payload) => {
    console.log("payload", payload);
    const hotelsFilt = handleFilter(payload)
    //Aplicar un filter para filtrar los hoteles TODO
    setFilters((prevState) => ({
      ...prevState,
      ...payload,
    }));

    setHotelsFiltered(hotelsFilt)
  };

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  //input son las dependencias del use effect. Quiere decir que cuando esas dependencias cambien, se va a ejecutar el useEffect. Si está vacio, se ejecuta una sola vez al ppio.

  return (
    <>
      <NavBar hotels={hotels} filters={filters} onFilterChange={onFilterChange} />
      <Main isLoading={isLoading} hotels={hotelsFiltered} />
      <Footer/>
    </>
    //Las {} son para insertar javascript dentro del jsx
  );
}

export default App;
