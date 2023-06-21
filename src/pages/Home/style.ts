import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  margin: 0 auto;
`
export const ToDoContainer = styled.div`
  width: 100%;
  max-width: 784px;

  margin: 0 auto;
  padding-inline: 24px;
  background-color: ${(props) => props.theme['gray-400']};

  border-radius: 8px;
`
