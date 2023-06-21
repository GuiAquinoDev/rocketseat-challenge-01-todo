import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import {
  TaskContainer,
  TaskForm,
  TaskInput,
  TaskButton,
  TaskPlusIcon,
} from './style'

interface ITaskProps {
  taskContent: Dispatch<SetStateAction<string>>
}

type FormData = {
  taskItemContent: string
}

export function Task({ taskContent }: ITaskProps) {
  const { handleSubmit, register, reset } = useForm<FormData>()

  function handleTaskSubmit(data: FormData) {
    taskContent(data.taskItemContent)
    reset()
  }

  return (
    <TaskContainer>
      <TaskForm onSubmit={handleSubmit(handleTaskSubmit)}>
        <TaskInput
          type="text"
          placeholder="Adicione uma nova tarefa"
          {...register('taskItemContent')}
        />
        <TaskButton type="submit">
          Criar <TaskPlusIcon />
        </TaskButton>
      </TaskForm>
    </TaskContainer>
  )
}
