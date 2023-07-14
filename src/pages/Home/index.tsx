import { useState } from 'react'

import { Header } from '../../components/Header'
import { TaskInputForm } from '../../components/TaskInputForm'
import { TodoInfo } from '../../components/TodoInfo'
import { List } from '../../components/List'

import { Container } from './style'

export interface TaskItemProps {
  id: number
  description: string
  status: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskItemProps[]>([])

  function taskSubmit(taskItemContent: string) {
    const newTask: TaskItemProps = {
      id: new Date().getTime(),
      description: taskItemContent,
      status: false,
    }
    setTasks([newTask, ...tasks])
  }

  function taskDelete(taskToDelete: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  function taskUpdate(data: number) {
    const taskImutable = tasks.map((task) => ({ ...task }))
    const taskUpdated = taskImutable.find((task) => task.id === data)

    if (taskUpdated) {
      taskUpdated.status = !taskUpdated.status

      setTasks(taskImutable)
    }
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
