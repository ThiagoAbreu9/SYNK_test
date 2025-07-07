import { useState } from 'react';
import { useAssistFormModel } from './AssistentFormModel';

export function useAssistenteFormControl() {
  const { fetchResponse } = useAssistFormModel();

  const [empresa, setEmpresa] = useState('');
  const [produto, setProduto] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [resposta, setResposta] = useState('');
  const [carregando, setCarregando] = useState(false);

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setCarregando(true);
  setResposta('');

  try {
    const resposta = await fetchResponse(empresa, produto, detalhes);
    setResposta(resposta);
  } catch (err) {
    console.error('Erro:', err);
    setResposta('⚠️ Erro ao gerar resposta. Tente novamente.');
  } finally {
    setCarregando(false);
  }
};

  return {
    handleSubmit,
    empresa,
    setEmpresa,
    produto,
    setProduto,
    detalhes,
    setDetalhes,
    resposta,
    carregando,
  };
}
