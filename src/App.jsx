import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import FormAdd from "./forms/FormAdd";
import FormEdit from "./forms/FormEdit";
import Footer from "./components/Footer";
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [editando, setEditando] = useState(null);
  const [filtro, setFiltro] = useState('todas');
  const API_URL = "https://6a08b005e7e3f433d482c367.mockapi.io/tarefas";

  // READ
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTarefas(data))
      .catch(() => toast.error("Erro ao carregar tarefas"));
  }, []);

  // CREATE
  const adicionarTarefa = async (texto) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ atividade: texto, status: "pendente" })
      });
      const dadoSalvo = await res.json();
      setTarefas([...tarefas, dadoSalvo]);
      toast.success('Tarefa criada com sucesso! 🚀');
    } catch {
      toast.error("Erro ao adicionar tarefa");
    }
  };

  // DELETE
  const removerTarefa = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTarefas(tarefas.filter(t => t.id !== id));
      toast.error('Tarefa removida!');
    } catch {
      toast.error("Erro ao remover tarefa");
    }
  };

  // UPDATE (Status)
  const alternarStatus = async (tarefa) => {
    try {
      const nuevoStatus = tarefa.status === "concluido" ? "pendente" : "concluido";
      const res = await fetch(`${API_URL}/${tarefa.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nuevoStatus })
      });
      const atualizada = await res.json();
      setTarefas(tarefas.map(t => t.id === tarefa.id ? atualizada : t));
      
      if(nuevoStatus === "concluido") {
        toast.success('Tarefa concluída! 🎉');
      } else {
        toast.secondary('Tarefa reaberta ✏️');
      }
    } catch {
      toast.error("Erro ao atualizar status");
    }
  };

  // UPDATE (Texto)
  const salvarEdicao = async (id, novoTexto) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ atividade: novoTexto })
      });
      const atualizada = await res.json();
      setTarefas(tarefas.map(t => t.id === id ? atualizada : t));
      setEditando(null);
      toast.success('Tarefa editada!');
    } catch {
      toast.error("Erro ao salvar edição");
    }
  };

  // Filtro
  const tarefasFiltradas = tarefas.filter(t => {
    if (filtro === 'pendentes') return t.status === 'pendente';
    if (filtro === 'concluidas') return t.status === 'concluido';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-32">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 pt-8">
        {editando ? (
          <FormEdit tarefa={editando} aoSalvar={salvarEdicao} aoCancelar={() => setEditando(null)} />
        ) : (
          <FormAdd aoAdicionar={adicionarTarefa} />
        )}

        {/* Dashboard de Métricas */}
        <div className="flex justify-between items-center bg-white border border-gray-200 rounded-2xl p-4 mt-6 shadow-sm">
          <span className="text-sm font-medium text-gray-500">Total: <strong>{tarefas.length}</strong></span>
          <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
            Concluídas: {tarefas.filter(t => t.status === 'concluido').length} de {tarefas.length}
          </span>
        </div>

        {/* Abas de Filtros */}
        <div className="flex gap-2 mt-4 bg-gray-200/50 p-1 rounded-xl">
          {['todas', 'pendentes', 'concluidas'].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltro(tipo)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg capitalize transition-all ${
                filtro === tipo 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tipo === 'concluidas' ? 'concluídas' : tipo}
            </button>
          ))}
        </div>

        <Body tarefas={tarefasFiltradas} remover={removerTarefa} alternar={alternarStatus} setEditando={setEditando} />
      </main>
      
      <Footer />
      
      {/* Componente que renderiza os balões de alerta na tela */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;