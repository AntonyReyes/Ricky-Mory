import React from 'react'

const Location = ({ location }) => {
    return (
        <article className='card__location'>
            <h2 className='card__titleLocation'> {location?.name} </h2>
            
            <ul className='card__ul_Location'>
                <li className='card_li_location'> <span>Type: </span> {location?.type}</li>
                <li className='card_li_location'> <span>Dimension: </span> {location?.dimension}</li>
                <li className='card_li_location'> <span>Population: </span> {location?.residents.length}</li>
            </ul>

            <h1 className='card_residents_location'>Residents</h1>

        </article>
    )
}

export default Location