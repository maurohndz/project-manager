import { useState, useMemo } from 'react'

function useFilter (data) {
  const [query, setQuery] = useState('')
  const [filterData, setFilterData] = useState(data)
  useMemo(() => {
    const result = data.filter((item) => {
      return `${item.title}`.toLowerCase().includes(query.toLowerCase())
    })

    setFilterData(result)
  }, [data, query])

  return { query, setQuery, filterData, setFilterData }
}

export default useFilter
