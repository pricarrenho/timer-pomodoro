import { Cycle } from "../../contexts/types";

export enum ActionTypes {
  add_new_cycle = "add_new_cycle",
  interrupt_current_cycle = "interrupt_current_cycle",
  mark_current_cycle_as_finished = "mark_current_cycle_as_finished",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.add_new_cycle,
    payload: {
      newCycle,
    },
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.interrupt_current_cycle,
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.mark_current_cycle_as_finished,
  };
}
