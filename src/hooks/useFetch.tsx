import { useState, useEffect, useCallback } from 'react'
import { BASE_URL } from '../constants'
import axios from 'axios'

interface types {
  query?: any
  page?: any
}

function useFetch({ query, page }: types) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const sendQuery = useCallback(
    async (query) => {
      try {
        setLoading(true)
        setError(false)
        if (query === '') {
          const res = await axios.get(`${BASE_URL}/character/?page=${page}`)
          setList((prev): any => [...prev, ...res.data.results])
        } else {
          const res = await axios.get(`${BASE_URL}/character/${query}`)
          setList((prev): any => res.data.results)
        }

        setLoading(false)
      } catch (err) {
        setError(true)
      }
    },
    [query, page],
  )

  useEffect(() => {
    sendQuery(query)
  }, [query, sendQuery, page])

  return { loading, error, list }
}

export default useFetch
