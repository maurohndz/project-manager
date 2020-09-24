import styled from 'styled-components'

const Button = styled.button`
  outline: none;
  border-radius: 9px;
  padding: 10px 15px;
  font-size: .9em;
`

export const ButtonSuccess = styled(Button)`
  background-color: var(--success);
  border: 1px solid var(--success);
  color: var(--ligth);
`
