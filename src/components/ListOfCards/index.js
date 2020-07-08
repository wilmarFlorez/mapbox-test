import React, { useEffect, useState } from 'react'
import Card from '../Card'
import Loader from '../Loader'

import './styles.css'

const ListOfCards = (props) => {
  const [shops, setShops] = useState([])
  const [loading, setLoading] = useState(false)
  const { title, description } = props

  useEffect(() => {
    setLoading(true)
    window.fetch('https://alw-lab.herokuapp.com/commerces')
      .then(res => res.json())
      .then(response => {
        setShops(response)
        setLoading(false)
      })
  }, [])

  const setList = () => {
    if (!shops.length > 0 || loading) {
      return <Loader />
    }
    return (
      <div className='list'>
        <div className='headerList'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='row'>
          {
            shops.map((shop) => (
              <div key={shop.id} className='col-12'>
                <Card {...shop} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  return (
    setList()
  )
}

export default ListOfCards
