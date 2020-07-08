import React, { useState, useEffect } from 'react'
import Map from './components/Map'
import BarChart from './components/BarChart'
import ListOfCards from './components/ListOfCards'

export default function App() {
  const [shops, setShops] = useState([])
  const [loading, setLoading] = useState(false)

  // BarChart contants
  const width = 900
  const height = 400
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

  if (!Object.keys(shops).length || loading) {
    return 'Loading...'
  }

  return (
    <>
      {/* <Map shops={shops} /> */}
      {/* <BarChart
        color={color}
        width={width}
        height={height}
      /> */}
      <ListOfCards />
    </>
  )
}
