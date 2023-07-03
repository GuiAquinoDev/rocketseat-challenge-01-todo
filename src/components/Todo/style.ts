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
    flex: 1;
    color: ${(props) => props.theme['gray-100']};
  }

  [data-state='checked'] + p {
    text-decoration: line-through;
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
