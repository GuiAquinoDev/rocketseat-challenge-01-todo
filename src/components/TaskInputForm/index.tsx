import { useForm } from 'react-hook-form'
import { TaskContainer, TaskForm, TaskInput, TaskPlusIcon } from './style'
import { Button } from '../Button'

interface IFormValues {
  taskItemContent: string
}

interface ITaskProps {
  onTaskSubmit: (taskItemContent: string) => void
}

export function TaskInputForm({ onTaskSubmit }: ITaskProps) {
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
        <Button type="submit">
          Criar <TaskPlusIcon />
        </Button>
      </TaskForm>
    </TaskContainer>
  )
}
