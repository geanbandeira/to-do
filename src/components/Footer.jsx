import imgFim from '../assets/footer-fim.png'
import imgImporte from '../assets/importe.png'
import imgLogo from '../assets/footer-logo.png'
import html2pdf from 'html2pdf.js'
import "../App.css"

const Footer = () => {
  const exportarParaPDF = () => {
    // Captura o elemento principal da listagem de tarefas
    const elemento = document.querySelector('main');
    
    if (!elemento) return;

    // Configurações do arquivo PDF
    const opcoes = {
      margin:       10,
      filename:     'Minha-Lista-De-Tarefas.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Executa a exportação
    html2pdf().set(opcoes).from(elemento).save();
  };

  return (
    <section className="max-w-2xl mx-auto px-4 mt-12 border-t border-gray-200 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center pb-28">
      {/* Botão de Exportar Único */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
        <div 
          onClick={exportarParaPDF} 
          className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:scale-105 transition-all cursor-pointer select-none"
        >
          <img src={imgImporte} alt="importar" className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Exportar como PDF</span>
        </div>
      </div>

      {/* Branding */}
      <div className="flex flex-col items-center text-center">
        <img src={imgLogo} alt="logo-nome" className="h-8 mb-1" />
        <p className="text-xs text-gray-400">O passo a passo é simples.</p>
      </div>

      {/* Integrantes */}
      <div className="text-center md:text-right text-sm text-gray-500">
        <p className="font-bold text-gray-700">Dupla:</p>
        <p>Bruno & Gean</p>
      </div>

      {/* Imagem de Fim e Barra Fixa */}
      <div className="col-span-1 md:col-span-3 flex justify-center mt-4">
        <img src={imgFim} alt="fim-pagina" className="max-h-12 opacity-50" />
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 border-t border-gray-100 py-4 text-center text-xs text-gray-400 backdrop-blur-md z-50">
        <p>© 2026 - Desenvolvido por <strong>Bruno & Gean</strong> | CRUD Completo</p>
      </footer>
    </section>
  );
};

export default Footer;