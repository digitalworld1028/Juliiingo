import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

interface types {
  item?: any
  handlModal?: any
}

function DetailModal({ item, handlModal }: types) {
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  useEffect(() => {}, [])
  console.log(item)
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={handlModal}>
          <Modal.Title>{item?.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{item?.name}</p>
          <p>{item?.staus}</p>
          <p>{item?.gender}</p>
          <p>{item?.created}</p>
          <p>{item?.species}</p>
          <p>{item?.location?.name}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handlModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  )
}

export default DetailModal
