import { useState } from 'react'
import { Header } from '../../components/Header'
import { Task } from '../../components/Task'
import { Container, ToDoContainer } from './style'

export function Home() {
  const [taskItem, setTaskItem] = useState<string>('')
  const [taskCardItems, setTaskCardItems] = useState(['teste'])
  const isTask = true

  return (
    <>
      <Header />
      <Task taskContent={setTaskItem} />
      <Container>
        {isTask ? (
          taskCardItems.map((item, index) => (
            <ToDoContainer key={index}>
              <p>Hello world</p>
            </ToDoContainer>
          ))
        ) : (
          <p>No task</p>
        )}
      </Container>
    </>
  )
}
