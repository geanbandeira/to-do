import imgLogo from './assets/logo.png'
import "../App.css"

const Header = () => (
  <header className="bg-white border-b border-gray-100 py-6 text-center shadow-sm flex flex-col items-center justify-center gap-2">
    <div className="flex items-center gap-3">
      <img src={imgLogo} alt="logo" className="w-10 h-10 object-contain" />
      <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
        To-do List 2026
      </h1>
    </div>
    <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Sua lista de tarefas inteligente</p>
  </header>
)

export default Header;