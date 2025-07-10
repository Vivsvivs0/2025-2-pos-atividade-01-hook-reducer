"use client";
import { useTarefa } from "@/lib/TarefaContext";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ApagarTarefa() {
  const { tarefas, dispatch } = useTarefa();
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) return <div className="p-4">Tarefa não encontrada.</div>;

  function handleRemover() {
    dispatch({ type: "REMOVER", payload: id });
    router.push("/tarefas");
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-pink-600">Apagar Tarefa</h2>
      <p>Deseja apagar a tarefa <strong>{tarefa.titulo}</strong>?</p>
      <div className="mt-4 space-x-2">
        <Button className="bg-pink-300" onClick={handleRemover} variant="destructive">Apagar</Button>
        <Button className="bg-pink-200" onClick={() => router.push("/tarefas")}>Cancelar</Button>
      </div>
    </div>
  );
}
