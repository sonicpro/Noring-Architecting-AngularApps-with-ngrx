import { CounterState } from "./counter/counter.reducer";
import { Jedi } from "./jedi/jedi.model";

export interface AppState {
  counterKeyModified: number;
  jedisKeyModified: Array<Jedi>;
}
