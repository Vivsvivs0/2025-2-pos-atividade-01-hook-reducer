"use client";
import { useTarefa } from "@/lib/TarefaContext";
import { useRouter } from "next/navigation";
import { TarefaForm } from "@/components/TarefaForm";

export default function NovaTarefa() {
  const { dispatch } = useTarefa();
  const router = useRouter();

  function handleAdicionar(tarefa: any) {
    dispatch({ type: "ADICIONAR", payload: tarefa });
    router.push("/tarefas");
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-pink-600 mb-5">Nova Tarefa</h2>
      <TarefaForm onSubmit={handleAdicionar} />
    </div>
  );
}
