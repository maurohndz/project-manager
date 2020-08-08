import React from 'react'
import { Input } from './styles'

const InputText = ({ query, setQuery, placeholder, animation = false, position }) => {
  console.log(position)
  return (
    <Input
      type='text'
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      animation={animation}
      position={position}
    />
  )
}

export default InputText
