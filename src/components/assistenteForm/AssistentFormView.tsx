
import { useAssistenteFormControl } from './AssistentFormControl';
import './AssistentForm.scss'; // Importando o CSS para estilização

export default function AssistentFormView() {
  const {
    empresa,
    setEmpresa,
    produto,
    setProduto,
    detalhes,
    setDetalhes,
    resposta,
    carregando,
    handleSubmit,
  } = useAssistenteFormControl();

  return (
    <div className="assistente-container">
      <div className="assistente-card">
        <h2>🤖 Assistente Comercial Inteligente</h2>
        <p className="descricao">
          Preencha os campos abaixo e receba uma resposta automática personalizada com IA.
        </p>

        <form onSubmit={handleSubmit} className="assistente-form">
          <label>Nome da empresa</label>
          <input
            type="text"
            placeholder="Ex: Loja XPTO"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            required
          />

          <label>Produto ou serviço desejado</label>
          <input
            type="text"
            placeholder="Ex: Assistente virtual de atendimento"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            required
          />

          <label>Detalhes adicionais</label>
          <textarea
            placeholder="Ex: Querem que o assistente responda perguntas frequentes"
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
            rows={4}
          />

          <button type="submit" disabled={carregando}>
            {carregando ? 'Gerando resposta...' : 'Gerar Resposta'}
          </button>
        </form>

        {resposta && (
          <div className="resposta-box">
            <h4>📨 Resposta gerada:</h4>
            <p>{resposta}</p>
          </div>
        )}
      </div>
    </div>
  );
};