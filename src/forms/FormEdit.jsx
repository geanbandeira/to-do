import { useState } from 'react';
import { Save, X } from 'lucide-react';

const FormEdit = ({ tarefa, aoSalvar, aoCancelar }) => {
  const [novoTexto, setNovoTexto] = useState(tarefa.atividade);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novoTexto.trim()) return;
    aoSalvar(tarefa.id, novoTexto);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 bg-blue-50 p-4 rounded-2xl border border-blue-200 mb-6">
      <input
        type="text"
        className="flex-1 bg-white border border-blue-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        value={novoTexto}
        onChange={(e) => setNovoTexto(e.target.value)}
        autoFocus
      />
      <button type="submit" className="bg-green-600 text-white p-2 rounded-xl hover:bg-green-700 transition-all">
        <Save size={20} />
      </button>
      <button type="button" onClick={aoCancelar} className="bg-gray-400 text-white p-2 rounded-xl hover:bg-gray-500 transition-all">
        <X size={20} />
      </button>
    </form>
  );
};

export default FormEdit;