import { FileDown } from 'lucide-react'
import "../App.css"

const Footer = () => {
  const exportarParaPDF = () => {
    // Dispara a impressão nativa do sistema (permite salvar como PDF)
    window.print();
  };

  return (
    <section className="max-w-2xl mx-auto px-4 mt-12 border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center pb-28 print:mt-0 print:border-none">
      
      {/* Estilo CSS especial para a impressão - Invisível na tela, ativa só no PDF */}
      <style>{`
        @media print {
          /* Esconde o Header, o formulário de adicionar/editar e os botões de ação das tarefas */
          header, form, button, .flex.gap-2, footer, .select-none {
            display: none !important;
          }
          /* Remove fundos cinzas e deixa a página limpa */
          body {
            background-color: #fff !important;
            color: #000 !important;
            padding: 0 !important;
          }
          /* Garante que a lista ocupe a tela cheia no papel */
          main {
            max-w-full !important;
            padding: 0 !important;
          }
          /* Tira o efeito de transparência das tarefas concluídas no papel */
          li {
            box-shadow: none !important;
            border: 1px solid #e5e7eb !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      {/* Botão de Exportar */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 print:hidden">
        <div 
          onClick={exportarParaPDF} 
          className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:scale-105 transition-all cursor-pointer select-none"
        >
          <FileDown className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Exportar como PDF</span>
        </div>
      </div>

      {/* Branding */}
      <div className="flex flex-col items-center text-center print:hidden">
        <span className="text-lg font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">TaskFlow</span>
        <p className="text-xs text-gray-400">O passo a passo é simples.</p>
      </div>

     

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 border-t border-gray-100 py-4 text-center text-xs text-gray-400 backdrop-blur-md z-50 print:hidden">
        <p>© 2026 - Desenvolvido por <strong>Bruno & Gean</strong> | CRUD Completo</p>
      </footer>
    </section>
  );
};

export default Footer;