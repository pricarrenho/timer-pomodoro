import { HandPalm, Play } from "phosphor-react";
import { NewCycleFormData } from "./types";
import { Countdown } from "../../components/Countdown";
import { FormProvider, useForm } from "react-hook-form";
import { NewCycleForm } from "../../components/NewCycleForm";
import { CyclesContext } from "../../contexts/CyclesContexts";
import { useContext } from "react";
import * as S from "./styles";

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>();
  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  // Observa o input task para poder ver se está vazio ou não
  // Me auxilia para desabilitar/habilitar o botão de começar
  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <S.HomeContainer>
      <S.Form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <S.StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </S.StopCountdownButton>
        ) : (
          <S.CountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </S.CountdownButton>
        )}
      </S.Form>
    </S.HomeContainer>
  );
}
