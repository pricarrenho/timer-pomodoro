import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import * as S from "./styles";

export function DefaultLayout() {
  return (
    <S.LayoutContainer>
      <S.Container>
        <Header />
        <Outlet />
      </S.Container>
    </S.LayoutContainer>
  );
}
