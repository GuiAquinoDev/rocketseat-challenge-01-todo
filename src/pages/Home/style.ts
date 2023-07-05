import styled from 'styled-components'

interface TodoSectionProps {
  variant: 'todo' | 'empty'
}

export const Container = styled.main`
  width: 100%;
  max-width: 784px;

  margin: 0 auto;
  padding-inline: 24px;
`

export const ToDoSection = styled.section<TodoSectionProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 24px;

  border-top: ${(props) =>
    props.variant === 'todo' ? 'none' : `1px solid ${props.theme['gray-300']}`};
`
