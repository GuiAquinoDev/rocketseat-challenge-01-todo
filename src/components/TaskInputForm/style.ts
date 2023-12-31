import styled from 'styled-components'
import { PlusCircle } from '@phosphor-icons/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Container = styled.section`
  width: 100%;
  max-width: 832px;
  margin: -27px auto 0;
  padding-inline: 24px;
`

export const Form = styled.form`
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

export const PlusIcon = styled(PlusCircle).attrs({
  width: '16px',
  height: '16px',
})``

export const Toast = styled(ToastContainer)`
  .Toastify__toast-theme--light {
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
  }
`
