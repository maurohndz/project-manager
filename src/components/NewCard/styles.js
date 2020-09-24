import styled from 'styled-components'
import { CradList } from '../List/styles'
import { MdRemoveCircleOutline } from 'react-icons/md'

export const ConatinerForm = styled(CradList)`
  background-color: #f7f7f7 !important;
  min-width: auto !important;
`

export const ConatinerOpen = styled.div`
  display: flex;
  align-items: center;
  color: var(--dark-gray);
  font-size: .9em;
  cursor: pointer;
  margin-top: auto;
  & p{
    color: #848484;
    margin-right: 5px;
  }
`

export const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
export const BtnClose = styled(MdRemoveCircleOutline)`
  color: var(--dark-gray);
  margin-left: 5px;
  cursor: pointer;
`
