import styled from 'styled-components'
import { Check, Trash } from '@phosphor-icons/react'
import * as Checkbox from '@radix-ui/react-checkbox'

interface TodoInfoTypeProps {
  variant: 'todo' | 'done'
}

interface TaskStatusTypeProps {
  variant: checked | unchecked | undefined
}

export const Container = styled.main`
  width: 100%;
  max-width: 784px;

  margin: 0 auto;
  padding: 0 24px;
`
export const TodoInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-top: 64px;
`
export const TaskStatus = styled.div<TodoInfoTypeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;

  p {
    color: ${(props) =>
      props.variant === 'todo' ? props.theme.blue : props.theme.purple};

    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme['gray-200']};
    background-color: ${(props) => props.theme['gray-400']};

    padding: 2px 8px;
    border-radius: 999px;

    font-size: 12px;
    font-weight: 700;
  }
`
export const ToDoSection = styled.section`
  width: 100%;

  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ToDoContent = styled.div<TaskStatusTypeProps>`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  padding: 16px;

  p {
    flex: 1;
    text-decoration: ${(props) =>
      props.variant === 'checked' ? 'line-through' : 'none'};
  }
`

export const CheckboxRoot = styled(Checkbox.Root)`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.blue};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &[data-state='checked'] {
    border: none;
    background-color: ${(props) => props.theme['purple-dark']};
  }

  &:focus {
    box-shadow: none;
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)``

export const TaskCheck = styled(Check)`
  width: 12px;
  height: 12px;
  color: ${(props) => props.theme['gray-100']};
`

export const TaskDelete = styled(Trash)`
  width: 20px;
  height: 20px;

  margin: 6px;
  color: ${(props) => props.theme['gray-300']};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.danger};
  }
`
