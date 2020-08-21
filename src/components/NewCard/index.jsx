import React, { useState } from 'react'
import InputText from '../InputText'
import Button from '../Button'
import ErrorLabel from '../ErrorLabel'
import { MdAddCircleOutline } from 'react-icons/md'
import { ContainerBtn, BtnClose, ConatinerForm, ConatinerOpen } from './styles'

const NewCard = () => {
  const [controller, setController] = useState(false)
  const [title, setTitle] = useState('')
  const [errorTitle, setErrorTitle] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    if (!title) {
      setErrorTitle(true)
    } else {
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
          <ConatinerOpen onClick={() => setController(true)}>
            <p>Create a new card</p>
            <MdAddCircleOutline size={25} />
          </ConatinerOpen>
      }
      {
        controller &&
          <ConatinerForm>
            <form onSubmit={handleSubmit}>
              <InputText
                query={title}
                setQuery={setTitle}
                placeholder='Insert card title'
                name='input-card-title'
                focus={() => setErrorTitle(null)}
              />
              <ErrorLabel text='Insert card title' error={errorTitle} />
              <ContainerBtn>
                <Button text='Save' type='submit' />
                <BtnClose size={30} onClick={clearData} />
              </ContainerBtn>
            </form>
          </ConatinerForm>

      }
    </>
  )
}

export default NewCard
