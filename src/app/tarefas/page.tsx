"use client";
import Link from "next/link";
import { useTarefa } from "@/lib/TarefaContext";
import { Button } from "@/components/ui/button";

export default function ListaTarefas() {
  const { tarefas } = useTarefa();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-pink-600">Lista de Tarefas</h2>
      <Link href="/tarefas/nova"><Button className="p-4 bg-pink-300">Nova Tarefa</Button></Link>
      <ul className="mt-4 space-y-2">
        {tarefas.map(t => (
          <li key={t.id} className="border p-2 rounded">
            <strong>{t.titulo}</strong><br />
            {t.descricao}<br />
            <Link href={`/tarefas/${t.id}`}>Editar</Link> |{" "}
            <Link href={`/tarefas/${t.id}/apagar`}>Apagar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
