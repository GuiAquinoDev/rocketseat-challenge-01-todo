import styled from 'styled-components'

export const ToDoContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  margin: 64px auto;

  p {
    margin-top: 16px;

    color: ${(props) => props.theme['gray-300']};
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    font-size: 16px;
  }
`
