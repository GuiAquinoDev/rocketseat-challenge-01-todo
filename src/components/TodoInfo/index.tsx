import { TaskItemProps } from '../../pages/Home'
import { Container, Status } from './style'

interface ITodoProps {
  todoStatus: TaskItemProps[]
}

export function Info({ todoStatus }: ITodoProps) {
  const completedTaskCount = todoStatus.filter(
    (task) => task.status === true,
  ).length

  return (
    <Container>
      <Status variant="todo">
        <p>Tarefas criadas</p>
        <span>{todoStatus.length}</span>
      </Status>
      <Status variant="done">
        <p>Concluídas</p>
        <span>
          {todoStatus.length > 0
            ? `${String(completedTaskCount)} de ${String(todoStatus.length)}`
            : '0'}
        </span>
      </Status>
    </Container>
  )
}
