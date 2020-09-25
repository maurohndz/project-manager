import React, { useState } from 'react'
import InputText from '../InputText'
import { Container, Group, Label, ColorContent, GridColors, Title, ErrorSpan } from './styles'
import Colors from '../Colors'
import Button from '../Button'

const NewProject = ({ userId, close, addProject }) => {
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
      addProject({
        userId,
        title: title,
        color
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
        <Colors getColor={(key) => setColor(key)} select={color} />
        <ErrorSpan error={errorColor}>Select project color</ErrorSpan>
      </Group>
      
      <Group>
        <Button typeBtn='success' type='submit' text='Save' />
      </Group>
    </Container>
  )
}

export default NewProject
