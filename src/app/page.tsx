import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-4 m-20">
      <h1 className="text-2xl text-pink-600 font-bold mb-2">Atividade 1 do segundo bim | Aplicativo de Tarefas</h1>
      <p className="mb-4">Bem-vindo! Use o menu para navegar.</p>

      <Link href="/tarefas">
        <Button className="text-xl bg-pink-400 font-bold mb-3">Acessar Tarefas</Button>
      </Link>
    </main>
  );
}
