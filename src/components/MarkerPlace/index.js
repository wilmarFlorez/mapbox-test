import React from 'react'
import { Marker } from 'react-map-gl'
import { FaMapMarkerAlt } from 'react-icons/fa'

const MarkerPlace = ({ shop, onMouseEnter, onMouseLeave }) => {
  return (
    <Marker
      latitude={shop.geometry.coordinates[0]}
      longitude={shop.geometry.coordinates[1]}
    >
      <FaMapMarkerAlt
        style={{ color: 'tomato', cursor: 'pointer' }} size='22px'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </Marker>
  )
}

export default MarkerPlace
