import styled from 'styled-components'

export const CradList = styled.div`
  background-color: var(--soft-gray);
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 280px;
  height: max-content;
  margin-right: 1.8em;
`

export const Container = styled(CradList)`
  display:flex;
  flex-flow: column;
`

export const TitleList = styled.h3`
  font-size: .9em;
  font-weight: 700;
  color: #605f5f;
  margin-bottom: 8px;
`
