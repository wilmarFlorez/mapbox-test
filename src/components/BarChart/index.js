import React, { useEffect, useState } from 'react'

const BarChart = () => {
  const [shops, setShops] = useState([])

  useEffect(() => {
    window.fetch('https://alw-lab.herokuapp.com/commerces/graph')
      .then(res => res.json())
      .then(response => setShops(response))
  }, [])

  return (
    <>
      <svg width='1000' height='500' />
    </>
  )
}

export default BarChart
