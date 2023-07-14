import { useForm } from 'react-hook-form'

import { Button } from '../Button'
import { toast } from 'react-toastify'

import { Container, Form, TaskInput, PlusIcon, Toast } from './style'

interface IFormValues {
  taskItemContent: string
}

interface ITaskProps {
  onTaskSubmit: (taskItemContent: string) => void
}

export function TaskInputForm({ onTaskSubmit }: ITaskProps) {
  const { handleSubmit, register, reset } = useForm<IFormValues>()

  function handleTaskSubmit(data: IFormValues) {
    if (!data.taskItemContent) {
      toast.warn('Por favor digite uma tarefa!')
      return
    }

    onTaskSubmit(data.taskItemContent)
    reset()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleTaskSubmit)}>
        <TaskInput
          type="text"
          placeholder="Adicione uma nova tarefa"
          {...register('taskItemContent')}
        />
        <Button type="submit">
          Criar <PlusIcon />
        </Button>
      </Form>
      <Toast />
    </Container>
  )
}
