import { Tarefa } from "@/types/tarefa";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TarefaForm({
  onSubmit,
  tarefa,
}: {
  onSubmit: (t: Tarefa) => void;
  tarefa?: Tarefa;
}) {
  const [titulo, setTitulo] = useState(tarefa?.titulo ?? "");
  const [descricao, setDescricao] = useState(tarefa?.descricao ?? "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const novaTarefa: Tarefa = {
          id: tarefa?.id ?? Date.now(),
          titulo,
          descricao,
          concluida: tarefa?.concluida ?? false,
        };
        onSubmit(novaTarefa);
      }}
      className="space-y-4"
    >
      <div>
        <Label htmlFor="titulo">Título</Label>
        <Input id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="descricao">Descrição</Label>
        <Textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </div>
      <Button className="bg-pink-300" type="submit">Salvar</Button>
    </form>
  );
}
