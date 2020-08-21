import styled from 'styled-components'
import { CradList } from '../List/styles'
import { MdRemoveCircleOutline } from 'react-icons/md'

export const Container = styled(CradList)`
  max-height: 125px;
`
export const CreateContainer = styled(CradList)`
  display: flex;
  align-items: center;
  color: var(--dark-gray);
  font-size: .9em;
  cursor: pointer;
  & p{
    color: #848484;
    margin-right: 5px;
  }
`
export const ConatinerBtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
export const BtnClose = styled(MdRemoveCircleOutline)`
  color: var(--dark-gray);
  margin-left: 5px;
  cursor: pointer;
`
