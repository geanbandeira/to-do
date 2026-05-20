import { CheckSquare } from 'lucide-react' // Usando ícone do lucide direto
import "../App.css"

const Header = () => (
  <header className="bg-white border-b border-gray-100 py-6 text-center shadow-sm flex flex-col items-center justify-center gap-2">
    <div className="flex items-center gap-3">
      <CheckSquare size={36} className="text-blue-600" /> {/* Ícone moderno no lugar da imagem */}
      <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
        To do List 2026
      </h1>
    </div>
    <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Sua lista de tarefas inteligente</p>
  </header>
)

export default Header;