"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { Tarefa } from "@/types/tarefa";
import { tarefasReducer } from "./reducer";

const TarefaContext = createContext<any>(null);

const tarefasIniciais: Tarefa[] = [];

export function TarefaProvider({ children }: { children: ReactNode }) {
  const [tarefas, dispatch] = useReducer(tarefasReducer, tarefasIniciais);

  return (
    <TarefaContext.Provider value={{ tarefas, dispatch }}>
      {children}
    </TarefaContext.Provider>
  );
}

export function useTarefa() {
  return useContext(TarefaContext);
}
