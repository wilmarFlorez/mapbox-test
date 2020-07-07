import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl'
import MarkerPlace from '../MarkerPlace'
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
      debugger
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
