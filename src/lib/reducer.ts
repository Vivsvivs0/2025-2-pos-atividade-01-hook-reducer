import { Tarefa } from "@/types/tarefa";

type Action =
  | { type: "ADICIONAR"; payload: Tarefa }
  | { type: "EDITAR"; payload: Tarefa }
  | { type: "REMOVER"; payload: number };

export function tarefasReducer(state: Tarefa[], action: Action): Tarefa[] {
  switch (action.type) {
    case "ADICIONAR":
      return [...state, action.payload];
    case "EDITAR":
      return state.map(t =>
        t.id === action.payload.id ? action.payload : t
      );
    case "REMOVER":
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
}
