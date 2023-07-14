import { Todo } from './Todo'
import { Empty } from './Empty'
import { TaskItemProps } from '../../pages/Home'

import { ToDoSection } from './style'

interface IListProps {
  data: TaskItemProps[]
  taskDelete: (taskToDelete: number) => void
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
          <Empty />
        </ToDoSection>
      )}
    </>
  )
}
