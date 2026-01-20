import { useState, useCallback } from "react";

/**
 * Hook personalizado para gerenciar requisições HTTP.
 * Retorna o estado atual da requisição (loading, error) e a função para executá-la.
 */
export function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useCallback garante que a função não seja recriada a cada renderização,
  // evitando loops infinitos quando usada em useEffects.
  const request = useCallback(async (url, options = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      
      const json = await response.json();
      return json; // Retorna os dados diretamente para uso imediato na função chamadora
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, request };
}