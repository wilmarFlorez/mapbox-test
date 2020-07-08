import React, { useState, useEffect } from 'react'
import Map from './components/Map'
import BarChart from './components/BarChart'
import ListOfCards from './components/ListOfCards'
import Loader from './components/Loader'

export default function App() {
  const [shops, setShops] = useState([])
  const [loading, setLoading] = useState(false)

  // BarChart contants
  const width = 900
  const height = 200
  const color = 'tomato'

  useEffect(() => {
    setLoading(true)
    window.fetch('https://alw-lab.herokuapp.com/commerces/layer')
      .then(res => res.json())
      .then(response => {
        setShops(response)
        setLoading(false)
      })
  }, [])

  const setMap = () => {
    if (!Object.keys(shops).length || loading) {
      return <Loader />
    } else {
      return (
        <Map
          title='Map View'
          description='Here you can see the shops on the map view'
          shops={shops}
          className='mw-100'
        />
      )
    }
  }

  return (
    <div className='row'>
      <div className='col-3 position-fixed'>
        <ListOfCards
          title='Card View'
          description='Here you can see the shops on the card view'
        />
      </div>
      <div className='col-9 offset-3'>
        <div className='row p-2'>
          <div className='col-12  mh-50 mb-4'>
            {setMap()}
          </div>
          <div className='col-12 mh-40'>
            <BarChart
              title='Sales view'
              description='Here you can see the sales'
              color={color}
              width={width}
              height={height}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
