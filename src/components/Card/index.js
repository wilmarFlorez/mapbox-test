import React from 'react'

const Card = (data) => {
  const {
    name,
    nit,
    address,
    phone,
    owner,
    schedule,
    days,
    sales
  } = data

  return (
    <div className='card'>
      <div className="card-body">
        <h5>Name: {name}</h5>
        <h6>Nit: {nit}</h6>
        <div>Address: {address}</div>
        <div>Phone: {phone}</div>
        <div>Owner: {owner}</div>
        <div>Schedule: {schedule}</div>
        <div>Days: {days}</div>
        <div>Sales: {sales}</div>
      </div>
    </div>
  )
}

export default Card
