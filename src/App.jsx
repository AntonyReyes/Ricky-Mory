import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'

function App() {
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let numberLocation
    if (searchInput === '') {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err.message))
  }, [searchInput])


  //Busqueda de input
  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }

  console.log(location);

  return (
    <div className="App">
     <div className='card__App'>
     <header>
        <div className='img_header'>
        </div>
      </header>
      <div className="card-container">
        <div className='card_container_1'>
          <h1 className='card__title'>Ricky and Morty</h1>

          <form className='card__form' onSubmit={handleSubmit}>
            <input className='card__input' placeholder='Type location' type="text" id='search' />
            <button className='card__button'>Search</button>
          </form>

          <div className='card__location_container'>
            <Location location={location} />
          </div>

          <div className='card__container_ResidentInfo'>
            {
              location?.residents.map(url => (
                <ResidentInfo
                  key={url}
                  url={url}
                />
              ))
            }
          </div>
        </div>

      </div>
     </div>
     <footer className='card_footer'>
        <h2 className='card__footer_h1'>Echo en Academlo @copyright Antony Reyes Figueroa</h2>
      </footer>
    </div>
  )
}

export default App
