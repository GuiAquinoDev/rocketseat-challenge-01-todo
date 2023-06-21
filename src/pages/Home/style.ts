import styled from 'styled-components'

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
export const TaskStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;

  p {
    color: ${(props) => props.theme.blue};

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
`

export const ToDoContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;

  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  padding: 16px;

  input[type='radio'] {
    appearance: none;
    width: 17px;
    height: 17px;

    border: 2px solid ${(props) => props.theme.blue};
    border-radius: 50%;

    &:after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 0.75em;
      height: 0.75em;
      margin: 3px;
    }

    &:focus {
      outline: 2px solid blue;
    }

    &:checked {
      &:after {
        background-color: blue;
      }
    }
  }
`
