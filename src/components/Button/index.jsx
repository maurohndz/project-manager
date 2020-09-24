import React from 'react'
import { Item } from './styles'

const Button = ({ text = 'Button', type = 'button', typeBtn = 'success' }) => {
  return (
    <Item
      type={type}
      typeBtn={typeBtn}
    >{text}
    </Item>
  )
}

export default Button
