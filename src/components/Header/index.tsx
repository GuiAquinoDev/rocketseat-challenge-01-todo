import { HeaderContainer } from "./style";
import logo from "../../assets/logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <img src={ logo } alt="Logo To-Do"/>
        </HeaderContainer>
    )
}