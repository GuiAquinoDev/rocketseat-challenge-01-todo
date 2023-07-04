import { Check, Trash } from '@phosphor-icons/react'
import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const ToDoContent = styled.div`
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
    color: ${(props) => props.theme['gray-100']};
  }

  [data-state='checked'] + p {
    text-decoration: line-through;
  }
`
export const TaskDescription = styled.div`
  flex: 1;
`

export const CheckboxRoot = styled(Checkbox.Root)`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: 1px solid ${(props) => props.theme.blue};
  cursor: pointer;

  &[data-state='checked'] {
    border: none;
    background-color: ${(props) => props.theme['purple-dark']};

    &:hover {
      border: none;
      background-color: ${(props) => props.theme.purple};
    }
  }

  &:hover {
    border: 1px solid ${(props) => props.theme['blue-dark']};
    background-color: ${(props) => props.theme['blue-light']};
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

export const TaskDelete = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px;
  background-color: transparent;
  border: none;
`

export const DeleteIcon = styled(Trash)`
  width: 24px;
  height: 24px;

  color: ${(props) => props.theme['gray-300']};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.danger};
    background-color: ${(props) => props.theme['gray-400']};
    border-radius: 6px;
  }
`
