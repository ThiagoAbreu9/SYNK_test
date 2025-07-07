import axios from 'axios';

export function useAssistFormModel() {
  const apiUrl = 'http://localhost:5678/webhook/gerar-resposta'; // webhook n8n

  const fetchResponse = async (empresa: string, produto: string, detalhes: string) => {
    try {
      const response = await axios.post(apiUrl, { empresa, produto, detalhes });

      // A resposta é um array, vamos pegar o primeiro elemento
      const firstItem = Array.isArray(response.data) ? response.data[0] : response.data;

      console.log('Resposta completa do n8n:', firstItem);

      // Agora extrair o texto esperado de resposta ou output dentro do objeto
      const resposta = firstItem?.resposta || firstItem?.output || null;

      if (!resposta) {
        throw new Error('Resposta inválida do servidor: campo esperado não encontrado');
      }

      return resposta;
    } catch (error) {
      console.error('Erro ao buscar resposta do n8n:', error);
      throw error;
    }
  };

  return {
    fetchResponse,
    apiUrl,
  };
}
