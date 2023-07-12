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
  onTaskDelete: (taskItemDelete: string) => void
  onTaskUpdate: (taskItemUpdate: any) => void
  task: TaskItemProps
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
      <TaskDescription>
        <p>{task.description}</p>
      </TaskDescription>
      <TaskDelete onClick={() => handleTaskDelete(task.id)}>
        <DeleteIcon />
      </TaskDelete>
    </ToDoContent>
  )
}
