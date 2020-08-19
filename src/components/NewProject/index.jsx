import React, { useState } from 'react'
import InputText from '../InputText'
import { Container, Group, Label, ColorContent, GridColors, Title, ErrorSpan } from './styles'
import Button from '../Button'

const NewProject = ({ colors, userId, close, createProject }) => {
  const [title, setTitle] = useState('')
  const [color, setColor] = useState(null)
  const [errorTitle, setErrorTitle] = useState(null)
  const [errorColor, setErrorColor] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      setErrorTitle(true)
    } else if (!color) {
      setErrorColor(true)
    } else {
      createProject({
        title: title,
        userID: userId,
        color: { value: color }
      })
      close()
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Group>
        <Title>Create New Project</Title>
      </Group>
      <Group>
        <Label htmlFor='title-project'>Title Project</Label>
        <InputText
          type='text'
          name='title-project'
          id='title-project'
          query={title}
          setQuery={setTitle}
          placeholder='Insert project title'
          focus={() => setErrorTitle(null)}
        />
        <ErrorSpan error={errorTitle}>Insert project title</ErrorSpan>
      </Group>
      <Group>
        <Label>Select Color</Label>
        <GridColors>
          {
            colors.map((value, key) => (
              <ColorContent
                color={value}
                onClick={() => {
                  setColor(value)
                  setErrorColor(null)
                }}
                key={`${value}-${key}`}
                select={value === color}
              />
            ))
          }
        </GridColors>
        <ErrorSpan error={errorColor}>Select project color</ErrorSpan>
      </Group>
      <Group>
        <Button typeBtn='success' type='submit' text='Save' />
      </Group>
    </Container>
  )
}

export default NewProject
