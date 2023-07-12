import { styled } from 'styled-components'

interface TodoSectionProps {
  variant: 'todo' | 'empty'
}

export const ToDoSection = styled.section<TodoSectionProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  margin: 24px auto;

  border-top: ${(props) =>
    props.variant === 'todo' ? 'none' : `1px solid ${props.theme['gray-400']}`};
`
