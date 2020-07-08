import React, { useState, useEffect } from 'react'
import Map from './components/Map'

export default function App () {
  const [shops, setShops] = useState([])
  const [loading, setLoading] = useState(false)

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
      <Map shops={shops} />
    </>
  )
}
