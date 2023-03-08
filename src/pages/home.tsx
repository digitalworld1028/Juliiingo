import React, { useEffect, useState, useRef, useCallback } from 'react'
import { NavBar, CustomCard, DetailModal } from '../components'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import { favouriteACharacter } from '../utils/helpers/favourite'

function Home() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState<number>(1)
  const [toggleModal, setToggleModal] = useState<boolean>(false)
  const [seletedItem, setSeletedItem] = useState<any>(null)

  const [searchText, setSearchText] = useState<string>('')
  const [filter, setFilter] = useState<string>('name')

  const { loading, error, list } = useFetch({ query, page })
  const loader = useRef(null)

  const handleChange = (e: any) => {
    setQuery(e.target.value)
  }

  const handleObserver = useCallback((entries) => {
    const target = entries[0]
    if (target.isIntersecting) {
      setPage((prev: number) => prev + 1)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver])

  const handleSubmit = () => {
    const newQuery = `?${filter}=${searchText}`
    setQuery(newQuery)
  }

  const handleFavourite = (item: any) => {
    setSearchText('')
    favouriteACharacter(item)
  }

  const handlModal = (item: any) => {
    setSeletedItem(item)
    setToggleModal(!toggleModal)
  }

  return (
    <div style={{ backgroundColor: '#242831', position: 'relative' }}>
      <NavBar />
      {toggleModal && (
        <div
          style={{
            position: 'absolute',
            zIndex: 9999,
            width: '100%',
          }}
        >
          <DetailModal handlModal={handlModal} item={seletedItem} />
        </div>
      )}
      <br />
      <Container style={{ backgroundColor: '#242831' }}>
        <Form className="d-flex mb-4" onSubmit={(e): any => e.preventDefault()}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <Form.Group className="me-2">
            <Form.Select
              onChange={(e) => {
                setFilter(e.target.value)
              }}
            >
              <option value={'name'}>name</option>
              <option value={'status'}>status</option>
              <option value={'gender'}>gender</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="me-2">
            <Button variant="outline-success" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>

        <Row>
          {list.map((item: any, i) => {
            return (
              <Col md={6} key={i}>
                <CustomCard
                  title={item?.name}
                  status={item?.status}
                  species={item?.species}
                  lastKnownLocation={item?.origin?.name}
                  firstSeenIn={item?.location?.name}
                  image={item?.image}
                  item={item}
                  onClickFavourite={(item: any) => {
                    handleFavourite(item)
                  }}
                  toggleModal={(item: any) => {
                    handlModal(item)
                  }}
                />
                <br />
              </Col>
            )
          })}
        </Row>

        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        <div ref={loader} />
      </Container>
    </div>
  )
}

export default Home
