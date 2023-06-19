import {
  TaskContainer,
  TaskForm,
  TaskInput,
  TaskButton,
  TaskPlusIcon,
} from './style'

export function Task() {
  return (
    <TaskContainer>
      <TaskForm>
        <TaskInput type="text" placeholder="Adicione uma nova tarefa" />
        <TaskButton type="submit">
          Criar <TaskPlusIcon />
        </TaskButton>
      </TaskForm>
    </TaskContainer>
  )
}
