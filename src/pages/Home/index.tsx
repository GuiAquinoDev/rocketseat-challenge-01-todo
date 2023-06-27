import { useState } from 'react'
import { Header } from '../../components/Header'
import { Task } from '../../components/Task'
import {
  Container,
  TodoInfo,
  TaskStatus,
  ToDoSection,
  ToDoContent,
  TaskCheck,
  CheckboxIndicator,
  CheckboxRoot,
  TaskDelete,
} from './style'

interface ITaskItemProps {
  id: string
  description: string
  status: string
}

export function Home() {
  const [tasks, setTasks] = useState<ITaskItemProps[]>([])
  const isTask = true

  function taskSubmit(taskItemContent: string) {
    const newTask: ITaskItemProps = {
      id: String(new Date().getTime()),
      description: taskItemContent,
      status: 'unchecked',
    }
    setTasks([newTask, ...tasks])
  }

  function handleTaskDelete(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  function handleTaskUpdate(data: any) {
    const taskChecked = data.currentTarget.dataset.state
    const taskId = data.currentTarget.dataset.targetId

    const taskUpdateStatus = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: taskChecked }
      }
      return task
    })

    setTasks(taskUpdateStatus)
  }

  return (
    <>
      <Header />
      <Task onTaskSubmit={taskSubmit} />
      <Container>
        <TodoInfo>
          <TaskStatus variant="todo">
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </TaskStatus>
          <TaskStatus variant="done">
            <p>Concluídas</p>
            <span>
              {tasks.filter((task) => task.status === 'checked').length}
            </span>
          </TaskStatus>
        </TodoInfo>
        <ToDoSection>
          {isTask ? (
            tasks.map((task) => (
              <ToDoContent key={task.id} variant={task.status}>
                <CheckboxRoot data-task-id={task.id} onClick={handleTaskUpdate}>
                  <CheckboxIndicator>
                    <TaskCheck />
                  </CheckboxIndicator>
                </CheckboxRoot>
                <p>{task.description}</p>
                <TaskDelete onClick={() => handleTaskDelete(task.id)} />
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
