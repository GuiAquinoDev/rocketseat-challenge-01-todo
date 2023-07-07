import styled from 'styled-components'

export const Comp = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  border: 0;
  padding: 16px;

  color: ${(props) => props.theme['gray-100']};
  font-size: 14px;
  font-weight: 700;

  background-color: ${(props) => props.theme['blue-dark']};
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  }
`
