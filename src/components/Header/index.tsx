import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import * as S from "./styles";

export function Header() {
  return (
    <S.HeaderContainer>
      <S.ImageLogo
        src={logo}
        alt="Logo do ignite que são dois triângulos verdes um sobre o outro"
      />

      <S.Menu>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </S.Menu>
    </S.HeaderContainer>
  );
}
