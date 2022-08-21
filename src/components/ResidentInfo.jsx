import React from 'react'
import useFetch from '../assets/hooks/useFecth';

const ResidentInfo = ({ url }) => {
  const resident = useFetch(url)
  return (
    <article className='card__resident_info'>
      <header>
        <img className='card_img_resident' src={resident?.image} alt={`image of ${resident?.name}`} />
      </header>
      <div className='resident__container_info'>

        <h3 className='card_residents_title'>{resident?.name}</h3>
        <div className='residents__status'>
          {
            resident?.status == 'Alive' ?
              <div className='cirlce' style={{ backgroundColor: 'green' }}></div>
              :resident?.status == 'unknown' ?
              <div className='cirlce' style={{ backgroundColor: 'grey' }}></div>
              : <div className='cirlce' style={{ backgroundColor: 'red' }}></div>
          }
          <span>{resident?.status} - {resident?.species}</span>
        </div>

        <ul className='card__ul_residentIndo'>
          <li className='card__item'><span>origin</span></li>
          <li className='card__item'>{resident?.origin.name}</li>
          <li className='card__item'><span>eppisodes where appear</span></li>
          <li className='card__item'>{resident?.episode.length}</li>
        </ul>
      </div>
    </article>
  )
}

export default ResidentInfo