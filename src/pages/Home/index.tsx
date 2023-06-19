import { Header } from '../../components/Header'
import { Task } from '../../components/Task'
import { Container } from './style'

export function Home() {
  return (
    <>
      <Header />
      <Task />
      <Container></Container>
    </>
  )
}
