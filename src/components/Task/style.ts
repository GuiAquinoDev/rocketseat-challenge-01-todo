import styled from 'styled-components'
import { PlusCircle } from '@phosphor-icons/react'

export const TaskContainer = styled.section`
  width: 100%;
  max-width: 832px;
  margin: -27px auto 0;
  padding: 24px;
`

export const TaskForm = styled.form`
  width: 100%;
  padding-inline: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 8px;
`
export const TaskInput = styled.input`
  flex: 1;
  padding: 16px;

  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gray-700']};

  border-radius: 8px;

  &::placeholder {
    font-size: 16px;
    color: ${(props) => props.theme['gray-300']};
  }
`

export const TaskButton = styled.button`
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
export const TaskPlusIcon = styled(PlusCircle).attrs({
  width: '16px',
  height: '16px',
})``
