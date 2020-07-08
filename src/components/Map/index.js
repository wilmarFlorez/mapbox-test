import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl'
import MarkerPlace from '../MarkerPlace'
import PoputBox from '../Popup'

const mapBoxToken = process.env.REACT_APP_MAPBOX_TOKEN

const Map = ({ shops, title, description }) => {
  const [viewport, setViewport] = useState({
    latitude: -74.036865234375,
    longitude: 4.737253893957665,
    width: '100%',
    height: '45vh',
    zoom: 1
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
        <div>

          <PoputBox
            coordinates={coordinates}
            name={name}
            address={address}
          />
        </div>
      )
    }
  }

  const setMarker = (shop) => {
    if (Object.keys(shop.properties).length) {
      return (
        <MarkerPlace
          key={shop.properties.id}
          shop={shop}
          onMouseEnter={() => handleSelectedShop(shop)}
          onMouseLeave={resetSelectedShop}
        />
      )
    }
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
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
    </div>
  )
}

export default Map
