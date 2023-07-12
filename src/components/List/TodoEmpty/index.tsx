import { ToDoContent } from './style'
import clipboard from '../../../assets/clipboard.svg'

export function TodoEmpty() {
  return (
    <ToDoContent>
      <img src={clipboard} alt="Empty Icon" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </ToDoContent>
  )
}
