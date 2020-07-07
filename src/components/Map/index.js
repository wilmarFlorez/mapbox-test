import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import { FaMapMarkerAlt } from 'react-icons/fa'
import PoputBox from '../Popup'

const mapBoxToken = process.env.REACT_APP_MAPBOX_TOKEN

const Map = ({ shops }) => {
  const [viewport, setViewport] = useState({
    latitude: -74.036865234375,
    longitude: 4.737253893957665,
    width: '100wv',
    height: '100vh',
    zoom: 3
  })

  const [selectedShop, setSelectedShop] = useState(null)

  const handleSelectedShop = (shop) => {
    setSelectedShop(shop)
  }

  const resetSelectedShop = () => {
    setSelectedShop(null)
  }

  const showPoput = () => {
    if (selectedShop) {
      const coordinates = selectedShop.geometry.coordinates
      const { name, address } = selectedShop.properties

      return (
        <PoputBox
          coordinates={coordinates}
          name={name}
          address={address}
        />
      )
    }
  }

  const setMarker = (shop) => {
    if (Object.keys(shop.properties).length) {
      return (
        <Marker
          key={shop.properties.id}
          latitude={shop.geometry.coordinates[0]}
          longitude={shop.geometry.coordinates[1]}
        >
          <FaMapMarkerAlt
            style={{ color: 'tomato', cursor: 'pointer' }} size='22px'
            onMouseEnter={(evt) => handleSelectedShop(shop)}
            onMouseLeave={resetSelectedShop}
          />
        </Marker>
      )
    }
  }

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={mapBoxToken}
      mapStyle='mapbox://styles/wilmarflorez/ckcc53n1o6s9t1imnyaqaxrwq'
      onViewportChange={(viewport) => {
        setViewport(viewport)
      }}
    >
      {
        shops.features.map((shop) => (
          setMarker(shop)
        ))
      }
      {showPoput()}
    </ReactMapGl>
  )
}

export default Map
