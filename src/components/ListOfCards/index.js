import React, { useEffect, useState } from 'react'
import Card from '../Card'

import './styles.css'

const ListOfCards = (props) => {
  const [shops, setShops] = useState([])
  const { title, description } = props

  useEffect(() => {
    window.fetch('https://alw-lab.herokuapp.com/commerces')
      .then(res => res.json())
      .then(response => setShops(response))
  }, [])

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

export default ListOfCards
