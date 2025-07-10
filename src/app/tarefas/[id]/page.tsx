"use client";
import { useTarefa } from "@/lib/TarefaContext";
import { useRouter, useParams } from "next/navigation";
import { TarefaForm } from "@/components/TarefaForm";

export default function EditarTarefa() {
  const { tarefas, dispatch } = useTarefa();
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) return <div className="p-4">Tarefa não encontrada.</div>;

  function handleEditar(t: any) {
    dispatch({ type: "EDITAR", payload: t });
    router.push("/tarefas");
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-pink-600">Editar Tarefa</h2>
      <TarefaForm tarefa={tarefa} onSubmit={handleEditar} />
    </div>
  );
}
