import styled from 'styled-components'
import { MdSettings } from 'react-icons/md'

export const Container = styled.form`
  width: 100%;
  margin-bottom: 5px;
  background-color: #F7F7F7;
  padding: 5px 3px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  & h4{
    font-size: .85em;
    font-weight: 400;
  }
  &:hover svg{
    opacity: 1;
  }
`

export const Settings = styled(MdSettings)`
  opacity: 0;
  color: var(--dark-gray);
`
