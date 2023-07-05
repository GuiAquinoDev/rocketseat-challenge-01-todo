import { useState } from 'react'
import { Header } from '../../components/Header'
import { TaskInputForm } from '../../components/TaskInputForm'
import { Container, ToDoSection } from './style'
import { Todo } from '../../components/Todo'
import { TodoInfo } from '../../components/TodoInfo'
import { TodoEmpty } from '../../components/TodoEmpty'

export interface ITaskItemProps {
  id: string
  description: string
  status: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<ITaskItemProps[]>([])
  const isTask = tasks.length

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
        <TodoInfo todoStatus={tasks} />
        {isTask ? (
          tasks.map((task) => (
            <ToDoSection key={task.id} variant="todo">
              <Todo
                task={task}
                onTaskDelete={taskDelete}
                onTaskUpdate={taskUpdate}
              />
            </ToDoSection>
          ))
        ) : (
          <ToDoSection variant="empty">
            <TodoEmpty />
          </ToDoSection>
        )}
      </Container>
    </>
  )
}
