import React from 'react'
import { Popup } from 'react-map-gl'
import './styles.css'

const PopupBox = (props) => {
  console.log('props', props)
  const latitude = props.coordinates[0]
  const longitude = props.coordinates[1]
  const { name, address } = props

  return (
    <Popup
      latitude={latitude}
      longitude={longitude}
    >
      <div className='contentPopup'>
        <h3>{name}</h3>
        <span>{address}</span>
      </div>
    </Popup>
  )
}

export default PopupBox
