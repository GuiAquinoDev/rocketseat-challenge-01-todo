import { ITaskItemProps } from '../../pages/Home'
import {
  CheckboxIndicator,
  CheckboxRoot,
  TaskCheck,
  TaskDelete,
  ToDoContent,
} from './style'

interface ITodoProps {
  onTaskDelete: (taskItemDelete: string) => void
  onTaskUpdate: (taskItemUpdate: any) => void
  task: ITaskItemProps
}

export function Todo({ onTaskDelete, onTaskUpdate, task }: ITodoProps) {
  function handleTaskDelete(id: string) {
    onTaskDelete(id)
  }

  function handleTaskUpdate(props: boolean) {
    const taskUpdate = {
      id: task.id,
      status: props,
    }

    onTaskUpdate(taskUpdate)
  }

  return (
    <ToDoContent>
      <CheckboxRoot onCheckedChange={handleTaskUpdate}>
        <CheckboxIndicator>
          <TaskCheck />
        </CheckboxIndicator>
      </CheckboxRoot>
      <p>{task.description}</p>
      <TaskDelete onClick={() => handleTaskDelete(task.id)} />
    </ToDoContent>
  )
}
