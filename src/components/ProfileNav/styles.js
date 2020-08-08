import styled from 'styled-components'

export const Container = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & a{
    text-decoration: none;
    font-size: .9em;
  }
`

export const Item = styled.li`
  list-style: none;
  margin-left: 15px;
  & a{
    color: var(--ligth);
    font-weight: 700;
  }
`

export const ItemBold = styled.li`
  list-style: none;
  margin-left: 15px;
  padding: 7px 15px;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 10px;
  & a{
    color: var(--ligth);
    font-weight: 700;
  }
`
