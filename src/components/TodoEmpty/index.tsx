import { ToDoContent } from './style'
import clipboard from '../../assets/clipboard.svg'

export function TodoEmpty() {
  return (
    <ToDoContent>
      <img src={clipboard} alt="Empty Icon" />
      <span>oi</span>
    </ToDoContent>
  )
}
