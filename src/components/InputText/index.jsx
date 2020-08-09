import React from 'react'
import { Input } from './styles'

const InputText = ({ query, setQuery, placeholder, animation = false, position = false, name = 'InputText' }) => {
  return (
    <Input
      type='text'
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      animation={animation}
      position={position}
      name={name}
    />
  )
}

export default InputText
