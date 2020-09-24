import styled from 'styled-components'
import { MdStar } from 'react-icons/md'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1em;
  font-weight: 700;
`

export const FavoriteContainer = styled.div`
  background-color: rgba(255,255,255,.1);
  padding: 9px;
  width: 30px;
  height: 30px;
  box-sizing: content-box;
  border-radius: 10px;
  margin-left: 10px;
  color: var(--ligth);
  cursor: pointer;
`

export const Star = styled(MdStar)`
  color: #f8da2d;
`
