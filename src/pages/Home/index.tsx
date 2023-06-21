import { useState } from 'react'
import { Header } from '../../components/Header'
import { Task } from '../../components/Task'
import {
  Container,
  TodoInfo,
  TaskStatus,
  ToDoSection,
  ToDoContent,
} from './style'

export function Home() {
  const [taskItem, setTaskItem] = useState<string>('')
  const [taskCardItems, setTaskCardItems] = useState(['teste'])
  const isTask = true

  return (
    <>
      <Header />
      <Task taskContent={setTaskItem} />
      <Container>
        <TodoInfo>
          <TaskStatus>
            <p>Tarefas criadas</p>
            <span>0</span>
          </TaskStatus>
          <TaskStatus>
            <p>Concluídas</p>
            <span>0</span>
          </TaskStatus>
        </TodoInfo>
        <ToDoSection>
          {isTask ? (
            taskCardItems.map((item, index) => (
              <ToDoContent key={index}>
                <p>Hello world</p>
              </ToDoContent>
            ))
          ) : (
            <p>No task</p>
          )}
        </ToDoSection>
      </Container>
    </>
  )
}
