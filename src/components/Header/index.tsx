import { Container } from './style'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo To-Do" />
    </Container>
  )
}
