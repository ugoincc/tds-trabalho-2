import React, { useState, useEffect } from "react";
import { useFetch } from "../../api/hooks/useFetch"; 

const BASE_URL = "https://parallelum.com.br/fipe/api/v1/carros";

function FipeConsulta() {
  const { request, loading, error } = useFetch(); 
  
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [anos, setAnos] = useState([]);
  const [veiculo, setVeiculo] = useState(null);

  // Carrega as marcas assim que o componente é montado
  useEffect(() => {
    const fetchMarcas = async () => {
      const data = await request(`${BASE_URL}/marcas`);
      if (data) setMarcas(data);
    };
    fetchMarcas();
  }, [request]); // Dependência segura graças ao useCallback no hook

  // 1. Ao selecionar a Marca: Busca os Modelos
  const handleMarcaChange = async (e) => {
    const brandId = e.target.value;
    
    // Reseta estados dependentes para evitar inconsistência (ex: modelo antigo com marca nova)
    setModelos([]);
    setAnos([]);
    setVeiculo(null);

    if (brandId) {
      const data = await request(`${BASE_URL}/marcas/${brandId}/modelos`);
      if (data) setModelos(data.modelos); // A API retorna um objeto { modelos: [], anos: [] }
    }
  };

  // 2. Ao selecionar o Modelo: Busca os Anos disponíveis
  const handleModeloChange = async (e) => {
    const modelId = e.target.value;
    // Recupera o valor do select anterior via DOM
    const brandId = document.getElementById("select-marca").value; 
    
    setAnos([]);
    setVeiculo(null);

    if (modelId) {
      const data = await request(`${BASE_URL}/marcas/${brandId}/modelos/${modelId}/anos`);
      if (data) setAnos(data);
    }
  };

  // 3. Ao selecionar o Ano: Busca os detalhes finais do Veículo (Preço, etc)
  const handleAnoChange = async (e) => {
    const yearId = e.target.value;
    const brandId = document.getElementById("select-marca").value;
    const modelId = document.getElementById("select-modelo").value;

    if (yearId) {
      const data = await request(`${BASE_URL}/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`);
      if (data) setVeiculo(data);
    }
  };

  return (
    <div className="p-4 m-4 mx-auto w-50 bg-dark rounded border border-secondary text-light">
      <h4 style={{ color: "#c00000" }}>Consulta Tabela FIPE</h4>
      
      {/* Feedback visual de carregamento e erro global */}
      {loading && <span className="spinner-border spinner-border-sm ms-2" />}
      {error && <div className="alert alert-danger mt-2">{error}</div>}

      {/* Seletor de Marcas */}
      <div className="mb-3 mt-3">
        <label className="form-label">Marca</label>
        <select id="select-marca" className="form-select" onChange={handleMarcaChange}>
          <option value="">Selecione a Marca</option>
          {marcas.map((m) => (
            <option key={m.codigo} value={m.codigo}>{m.nome}</option>
          ))}
        </select>
      </div>

      {/* Seletor de Modelos (Renderização Condicional) */}
      {modelos.length > 0 && (
        <div className="mb-3">
          <label className="form-label">Modelo</label>
          <select id="select-modelo" className="form-select" onChange={handleModeloChange}>
            <option value="">Selecione o Modelo</option>
            {modelos.map((m) => (
              <option key={m.codigo} value={m.codigo}>{m.nome}</option>
            ))}
          </select>
        </div>
      )}

      {/* Seletor de Anos (Renderização Condicional) */}
      {anos.length > 0 && (
        <div className="mb-3">
          <label className="form-label">Ano</label>
          <select className="form-select" onChange={handleAnoChange}>
            <option value="">Selecione o Ano</option>
            {anos.map((a) => (
              <option key={a.codigo} value={a.codigo}>{a.nome}</option>
            ))}
          </select>
        </div>
      )}

      {/* Card de Resultado Final */}
      {veiculo && (
        <div className="card bg-secondary text-white mt-3 p-3">
          <h5>{veiculo.Modelo}</h5>
          <p className="mb-1"><strong>Ano:</strong> {veiculo.AnoModelo}</p>
          <p className="mb-1"><strong>Combustível:</strong> {veiculo.Combustivel}</p>
          <h3 className="mt-2 text-warning">{veiculo.Valor}</h3>
          <small className="text-light">Código Fipe: {veiculo.CodigoFipe}</small>
        </div>
      )}
    </div>
  );
}

export default FipeConsulta;