import React from 'react'
import { ErrorSpan } from './styles'

const ErrorLabel = ({ text, error }) => {
  return <ErrorSpan error={error}>{text}</ErrorSpan>
}

export default ErrorLabel
