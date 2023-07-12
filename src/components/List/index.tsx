import { TaskItemProps } from '../../pages/Home'
import { ToDoSection } from './style'
import { Todo } from './Todo'
import { TodoEmpty } from './TodoEmpty'

interface IListProps {
  data: TaskItemProps[]
  taskDelete: (taskToDelete: string) => void
  taskUpdate: (taskIdToBeChecked: number) => void
}

export function List({ data, taskDelete, taskUpdate }: IListProps) {
  return (
    <>
      {data ? (
        data.map((task) => (
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
    </>
  )
}
