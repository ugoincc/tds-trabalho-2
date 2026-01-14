import React, { useState } from "react";
import { newsData, mainCarouselData } from "../api/data/mockData";
import styles from "./Noticias.module.css"; 

function Noticias() {
  // Estado para guardar a notícia clicada
  const [noticiaAtiva, setNoticiaAtiva] = useState(null);

  const destaque = mainCarouselData[0];

  // Função para abrir
  const abrirModal = (item) => {
    setNoticiaAtiva(item);
  };

  // Função para fechar
  const fecharModal = () => {
    setNoticiaAtiva(null);
  };

  return (
    <div className={`container ${styles.container}`}>
      <header className={styles.header}>
        <h1 className={styles.titulo}>HK Journal</h1>
        <p className={styles.subtitulo}>
          Notícias, eventos e cultura automotiva clássica.
        </p>
      </header>

      {/* Seção (Destaque Grande) */}
      <section className={styles.heroSection}>
        <img
          src={destaque.image}
          alt={destaque.title}
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Em Destaque</span>
          <h2 className="display-5 fw-bold text-white mt-2">
            {destaque.title}
          </h2>
          <p className="lead text-light">{destaque.text}</p>
        </div>
      </section>

      {/* Grid de Cards */}
      <section>
        <h3 className="mb-4 border-bottom border-secondary pb-2">
          Últimas Atualizações
        </h3>
        <div className={styles.newsGrid}>
          {newsData.map((item, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.cardImageContainer}>
                <img
                  src={item.imagePath}
                  alt={item.altText}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardDate}>14 Jan, 2026</span>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardExcerpt}>{item.summary}</p>
                
                {/* Botão que ativa o Modal Bootstrap */}
                <button
                  className="btn btn-outline-danger mt-auto"
                  onClick={() => abrirModal(item)}
                >
                  Ler Matéria Completa
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal */}
      {noticiaAtiva && (
        <>
           {/* Fundo escuro */} 
          <div className="modal-backdrop fade show"></div>

          {/* Janela do Modal */}
          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex="-1"
            onClick={fecharModal} // Fecha ao clicar fora
          >
            <div 
              className="modal-dialog modal-lg modal-dialog-centered"
              onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar dentro
            >
              <div className="modal-content bg-dark text-white border-secondary">
                
                <div className="modal-header border-secondary">
                  <h5 className="modal-title text-danger fw-bold">
                    {noticiaAtiva.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={fecharModal}
                  ></button>
                </div>

                <div className="modal-body">
                  <img
                    src={noticiaAtiva.imagePath}
                    alt={noticiaAtiva.altText}
                    className={styles.modalImagemResponsiva}
                  />
                  <p className="lead fs-6">{noticiaAtiva.information}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Noticias;