import { Cycle } from "../../contexts/types";

export type CyclesState = {
  cycles: Cycle[];
  activeCycleId: string | null;
};
