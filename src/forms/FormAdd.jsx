import { useState } from 'react';
import { Plus } from 'lucide-react';

const FormAdd = ({ aoAdicionar }) => {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    aoAdicionar(texto);
    setTexto('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="O que precisa ser feito?"
        className="flex-1 bg-white border border-gray-200 rounded-2xl px-6 py-4 text-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all shadow-sm"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl transition-all shadow-lg shadow-blue-200 active:scale-95"
      >
        <Plus size={28} />
      </button>
    </form>
  );
};

export default FormAdd;