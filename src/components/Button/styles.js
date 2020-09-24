import styled, { css } from 'styled-components'

export const Item = styled.button`
  padding: 8px 15px;
  outline: none;
  border-radius: 5px;
  font-size: .95em;
  border: 1px solid var(--gray);

  ${props => (props.typeBtn === 'success') && css`{
    border-color: var(--success);
    background-color: var(--success);
    color: var(--ligth);
  }`}
`
