import { TaskItemProps } from '../../../pages/Home'
import {
  CheckboxIndicator,
  CheckboxRoot,
  DeleteIcon,
  TaskCheck,
  TaskDelete,
  TaskDescription,
  ToDoContent,
} from './style'

interface ITodoProps {
  task: TaskItemProps
  onTaskDelete: (taskItemDelete: number) => void
  onTaskUpdate: (taskItemUpdate: number) => void
}

export function Todo({ onTaskDelete, onTaskUpdate, task }: ITodoProps) {
  function handleTaskDelete() {
    onTaskDelete(task.id)
  }

  function handleTaskUpdate() {
    onTaskUpdate(task.id)
  }

  return (
    <ToDoContent>
      <CheckboxRoot onCheckedChange={handleTaskUpdate}>
        <CheckboxIndicator>
          <TaskCheck />
        </CheckboxIndicator>
      </CheckboxRoot>
      <TaskDescription>
        <p>{task.description}</p>
      </TaskDescription>
      <TaskDelete onClick={handleTaskDelete}>
        <DeleteIcon />
      </TaskDelete>
    </ToDoContent>
  )
}
