import { useState } from "react";
import styles from "../modules/Contato.module.css";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula o envio do formulário
    setEnviado(true);
    
    // Limpa o formulário após 3 segundos
    setTimeout(() => {
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      });
      setEnviado(false);
    }, 3000);
  };

  return (
    <div className={`container mt-4 ${styles.containerContato}`}>
      <div className={styles.formularioContainer}>
        <h1 className={styles.titulo}>Entre em Contato</h1>
        <p className={styles.subtitulo}>
          Preencha o formulário abaixo e entraremos em contato em breve.
        </p>

        {enviado ? (
          <div className={`alert alert-success ${styles.mensagemSucesso}`}>
            <i className="fas fa-check-circle me-2"></i>
            <strong>Mensagem enviada com sucesso!</strong> Entraremos em contato em breve.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome Completo
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">
                Telefone
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="assunto" className="form-label">
                Assunto
              </label>
              <select
                className="form-select"
                id="assunto"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um assunto</option>
                <option value="venda">Venda de Veículos</option>
                <option value="servico">Serviços e Manutenção</option>
                <option value="restauracao">Restauração</option>
                <option value="duvida">Dúvidas Gerais</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">
                Mensagem
              </label>
              <textarea
                className="form-control"
                id="mensagem"
                name="mensagem"
                rows="5"
                value={formData.mensagem}
                onChange={handleChange}
                required
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.botaoEnviar}`}>
              <i className="fas fa-paper-plane me-2"></i>
              Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contato;

