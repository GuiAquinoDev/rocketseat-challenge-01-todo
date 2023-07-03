import { useState } from 'react'
import { Header } from '../../components/Header'
import { TaskInputForm } from '../../components/TaskInputForm'
import { Container, TodoInfo, TaskStatus, ToDoSection } from './style'
import { Todo } from '../../components/Todo'

export interface ITaskItemProps {
  id: string
  description: string
  status: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<ITaskItemProps[]>([])
  const isTask = true

  function taskSubmit(taskItemContent: string) {
    const newTask: ITaskItemProps = {
      id: String(new Date().getTime()),
      description: taskItemContent,
      status: false,
    }
    setTasks([newTask, ...tasks])
  }

  function taskDelete(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  function taskUpdate(data: any) {
    const taskId = data.id
    const taskStatus = data.status

    const taskUpdateStatus = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: taskStatus }
      }
      return task
    })
    console.log(taskUpdateStatus)
    setTasks(taskUpdateStatus)
  }

  return (
    <>
      <Header />
      <TaskInputForm onTaskSubmit={taskSubmit} />
      <Container>
        <TodoInfo>
          <TaskStatus variant="todo">
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </TaskStatus>
          <TaskStatus variant="done">
            <p>Concluídas</p>
            <span>{tasks.filter((task) => task.status === true).length}</span>
          </TaskStatus>
        </TodoInfo>
        <ToDoSection>
          {isTask ? (
            tasks.map((task) => (
              <Todo
                key={task.id}
                task={task}
                onTaskDelete={taskDelete}
                onTaskUpdate={taskUpdate}
              />
            ))
          ) : (
            <p>No task</p>
          )}
        </ToDoSection>
      </Container>
    </>
  )
}
