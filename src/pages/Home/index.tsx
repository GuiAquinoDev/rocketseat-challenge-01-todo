import { useState } from 'react'
import { Header } from '../../components/Header'
import { TaskInputForm } from '../../components/TaskInputForm'
import { Container } from './style'
import { TodoInfo } from '../../components/TodoInfo'
import { List } from '../../components/List'

export type TaskItemProps = {
  id: string
  description: string
  status: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskItemProps[]>([])

  function taskSubmit(taskItemContent: string) {
    const newTask: TaskItemProps = {
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
    setTasks(taskUpdateStatus)
  }

  return (
    <>
      <Header />
      <TaskInputForm onTaskSubmit={taskSubmit} />
      <Container>
        <TodoInfo todoStatus={tasks} />
        <List data={tasks} taskDelete={taskDelete} taskUpdate={taskUpdate} />
      </Container>
    </>
  )
}
