import React from 'react'
import Card from '../Card/Card'
import sad_face from '../../imgs/sad_face.svg'
import { ReactComponent as Loader } from '../../imgs/loader.svg';

const Main = ({ isLoading, hotels }) => {
  return (
    <div className="container hotelsgrid">
      {!isLoading ? (
        <div className="columns is-multiline">
          {hotels.length == 0 ?
            <div className="hotels_not_found">
              <img src={sad_face} alt="cara triste"></img>
              <h2>Ups!</h2>
              <p>No se encontraron hoteles</p>
            </div>
            : hotels.map(hotel => <Card hotel={hotel} />)}
        </div>
      ) : <div className="loader"><Loader className="clock" /></div>}
    </div>
  )
}

export default Main
