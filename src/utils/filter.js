import { useState, useMemo } from 'react'

function fiter (data) {
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

export default fiter
