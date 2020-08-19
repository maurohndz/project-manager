import React, { useState } from 'react'
import InputText from '../InputText'
import { Container, Group, Label, ColorContent, GridColors, Title } from './styles'
import { connect } from 'react-redux'
import Button from '../Button'

const NewProject = ({ colors }) => {
  const [title, setTitle] = useState('')
  const [color, setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ok')
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
        />
      </Group>
      <Group>
        <Label>Select Color</Label>
        <GridColors>
          {
            colors.map((value, key) => (
              <ColorContent
                color={value}
                onClick={() => setColor(value)}
                key={`${value}-${key}`}
                select={value === color}
              />
            ))
          }
        </GridColors>
      </Group>
      <Group>
        <Button typeBtn='success' type='submit' text='Save' />
      </Group>
    </Container>
  )
}

const mapStateToProps = ({ AppReducer }) => {
  return {
    colors: AppReducer.colors
  }
}

export default connect(mapStateToProps)(NewProject)
