import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContexts";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import * as S from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <S.HistoryContainer>
      <S.Title>Meu histórico</S.Title>

      <S.HistoryList>
        <S.Table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <S.Status styleType="green">Concluído</S.Status>
                    )}

                    {cycle.interruptDate && (
                      <S.Status styleType="yellow">Interrompido</S.Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptDate && (
                      <S.Status styleType="red">Em andamento</S.Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </S.Table>
      </S.HistoryList>
    </S.HistoryContainer>
  );
}
