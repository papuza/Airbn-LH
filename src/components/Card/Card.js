import React from 'react'
import styles from './Card.module.css'
import Star from '../../imgs/star.svg'
import Location from '../../imgs/location.svg'
import Rooms from '../../imgs/rooms.svg'


const Card = ({ hotel }) => {
  const { name, photo, description, city, country, rooms, price } = hotel;

  var stars = []
  for (var i = 0; i < price; i++) {
    stars.push({ Star })
  }


  return (
    <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={photo.charAt(0) == '.' ? 'https://via.placeholder.com/150' : photo} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>
          <div className="content">
            <p>{description}</p>
            <div className={styles.specifications}>
              <div className={styles.info}>
                <img src={Location} />
                <p>{city}, {country}</p>
              </div>
              <div className={styles.info}>
                <img src={Rooms} />
                <p>{rooms} Habitaciones</p>
              </div>
              <div className={styles.stars}>
                {stars.map(one_star => <img src={one_star.Star} />)}
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button}>Reservar</button>
      </div>
    </div>
  )
}

export default Card
