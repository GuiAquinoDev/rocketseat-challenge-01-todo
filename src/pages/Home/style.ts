import styled from 'styled-components'

interface TodoInfoTypeProps {
  variant: 'todo' | 'done'
}

export const Container = styled.main`
  width: 100%;
  max-width: 784px;

  margin: 0 auto;
  padding-inline: 24px;
`
export const TodoInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin: 64px auto 0;
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

  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 24px;
`
