import { useForm } from 'react-hook-form'
import {
  TaskContainer,
  TaskForm,
  TaskInput,
  TaskButton,
  TaskPlusIcon,
} from './style'

interface IFormValues {
  taskItemContent: string
}

interface ITaskProps {
  onTaskSubmit: (taskItemContent: string) => void
}

export function Task({ onTaskSubmit }: ITaskProps) {
  const { handleSubmit, register, reset } = useForm<IFormValues>()

  function handleTaskSubmit(data: IFormValues) {
    onTaskSubmit(data.taskItemContent)
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
