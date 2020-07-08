import React, { useEffect, useState } from 'react'
import Card from '../Card'

const ListOfCards = () => {
  const [shops, setShops] = useState([])

  useEffect(() => {
    window.fetch('https://alw-lab.herokuapp.com/commerces')
      .then(res => res.json())
      .then(response => setShops(response))
  }, [])

  return (
    <div className='container'>
      <div className="row">
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
