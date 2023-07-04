import { ITaskItemProps } from '../../pages/Home'
import { TodoContainer, TodoStatus } from './style'

interface ITodoProps {
  todoStatus: ITaskItemProps[]
}

export function TodoInfo({ todoStatus }: ITodoProps) {
  const completedTaskCount = todoStatus.filter(
    (task) => task.status === true,
  ).length

  return (
    <TodoContainer>
      <TodoStatus variant="todo">
        <p>Tarefas criadas</p>
        <span>{todoStatus.length}</span>
      </TodoStatus>
      <TodoStatus variant="done">
        <p>Concluídas</p>
        <span>
          {todoStatus.length > 0 &&
            `${String(completedTaskCount)} de ${String(todoStatus.length)}`}
        </span>
      </TodoStatus>
    </TodoContainer>
  )
}
