import React, { useState } from 'react'
import InputText from '../InputText'
import Button from '../Button'
import { Container, ConatinerBtn, BtnClose, CreateContainer } from './styles'
import ErrorLabel from '../ErrorLabel'
import { MdAddCircleOutline } from 'react-icons/md'

const NewList = ({ createList }) => {
  const [controller, setController] = useState(false)
  const [title, setTitle] = useState('')
  const [errorTitle, setErrorTitle] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      setErrorTitle(true)
    } else {
      createList({ title: title })
      clearData()
    }
  }

  const clearData = () => {
    setController(false)
    setTitle('')
    setErrorTitle(null)
  }

  return (
    <>
      {
        !controller &&
          <CreateContainer onClick={() => setController(true)}>
            <p>Create a new list</p>
            <MdAddCircleOutline size={25} />
          </CreateContainer>
      }
      {
        controller &&
          <Container>
            <form onSubmit={handleSubmit}>
              <InputText
                query={title}
                setQuery={setTitle}
                placeholder='Insert list title'
                name='input-list-title'
                focus={() => setErrorTitle(null)}
              />
              <ErrorLabel text='Insert list title' error={errorTitle} />
              <ConatinerBtn>
                <Button text='Save' type='submit' />
                <BtnClose size={30} onClick={clearData} />
              </ConatinerBtn>
            </form>
          </Container>

      }
    </>
  )
}

export default NewList
