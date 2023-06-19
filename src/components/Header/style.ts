import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 72px 0 80px 0;
  background-color: ${(props) => props.theme['gray-700']};
`
