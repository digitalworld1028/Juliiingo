import React, { useState, useEffect } from 'react'
import { isCharacterFavourite } from '../../../utils/helpers/favourite'
import { Button } from 'react-bootstrap'
import * as Icon from 'react-feather'
import './index.css'

interface card_types {
  item?: any
  title?: string
  image?: string
  status?: string
  lastKnownLocation?: string
  firstSeenIn?: string
  species?: string
  isFavourite?: boolean
  onClickFavourite?: any
  toggleModal?: any
}

function CustomCard({
  title = '',
  image = '',
  status = '',
  lastKnownLocation = '',
  firstSeenIn = '',
  species = '',
  item,
  onClickFavourite,
  toggleModal,
}: card_types) {
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  useEffect(() => {
    if (isCharacterFavourite(item)) {
      setIsFavourite(true)
    } else {
      setIsFavourite(false)
    }
  }, [isFavourite])

  return (
    <>
      <div
        className="card pointer"
        style={{ backgroundColor: '#3b3e43', position: 'relative' }}
      >
        <button
          style={{
            position: 'absolute',
            right: 0,
            margin: 10,
            fontSize: 12,
            borderRadius: 10,
          }}
          onClick={() => {
            onClickFavourite(item)
            setIsFavourite(!isFavourite)
          }}
        >
          {isFavourite ? <Icon.Heart className="text-info" /> : <Icon.Heart className="text-dark" />}
        </button>
        <div className="row no-gutters">
          <div className="col-auto">
            <img src={image} className="img-fluid" alt="" />
          </div>
          <div className="col">
            <div className="card-block px-0 mt-2">
              <h4
                className="card-title text-light font-weight-bold"
                style={{ color: '#f3f4f8', fontWeight: 'bolder' }}
              >
                {title}
              </h4>
              <span
                style={{
                  backgroundColor: status === 'Alive' ? '#54cd42' : '#d53b29',
                  color: status === 'Alive' ? '#54cd42' : '#d53b29',
                  borderRadius: '100%',
                  marginRight: 10,
                }}
              >
                {' te '}
              </span>

              <span className="card-text text-light">
                {`${status} - ${species}`}{' '}
              </span>
              <br />
              <br />
              <div className="card-sub-container" >
                <span className="card-text text-light" >
                  Last known location:
                </span>
                <span className="card-text text-gray">
                  {lastKnownLocation}
                </span>
              </div>
              <br />
              <div className="card-sub-container" >
                <span className="card-text text-light" >
                  First seen in:
                </span>
                <span className="card-text text-gray" >
                  {firstSeenIn}
                </span>
              </div>
            </div>
            <Button
              className="mt-4"
              variant="primary"
              onClick={() => toggleModal(item)}
            >
              View details
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomCard
