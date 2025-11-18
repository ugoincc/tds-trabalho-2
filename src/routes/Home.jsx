import VehicleCard from "../components/cards/VehicleCard";
import {
  availableCars,
  mainCarouselData,
  newsData,
} from "../api/data/mockData";
import SlideCarousel from "../components/SlideCarousel";
import NewsItemCard from "../components/cards/NewsItemCard";

function Home() {
  return (
    <div id="conteudo-principal" className="container mt-4">
      <main id="coluna-esquerda">
        <section className="secao-principal">
          <h2>HK Engineering - Especialistas em carros</h2>
          <p>
            Somos especializados em todos os aspectos do setor automotivo. Desde
            a venda de veículos de alto padrão até a restauração completa e a
            manutenção de carros clássicos e modernos.
            <a href="#">Saiba mais...</a>
          </p>

          <div id="carouselExampleCaptions" className="carousel slide">
            <SlideCarousel carouselData={mainCarouselData} />
          </div>
        </section>

        <section className="secao-estoque pt-4">
          <h2>Nosso Estoque</h2>
          <p className="text-secondary">Veja carros à pronta entrega:</p>

          <div id="estoqueContainer" className="row">
            {availableCars.map((car) => (
              <VehicleCard key={car.modelYear} car={car} />
            ))}
          </div>
        </section>
      </main>

      <aside id="coluna-direita">
        <section className="secao-horarios">
          <h3>Horários de Atentimento</h3>

          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Dia</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segunda - Sexta</td>
                <td>08:00 - 18:00</td>
              </tr>
              <tr>
                <td>Sábado</td>
                <td>09:00 - 13:00</td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>Fechado</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr />

        <h2>Últimas Notícias</h2>
        {newsData.map((newsItem) => (
          <NewsItemCard key={newsItem.altText} item={newsItem} />
        ))}

        <section className="secao-video">
          <h3>Vídeo em Destaque</h3>

          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Kfj1SJBaeuQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="secao-especialidades">
          <h3>Nossas Especialidades</h3>
          <ul>
            <li>Restauração de Carros Clássicos</li>
            <li>Manutenção de Superesportivos</li>
            <li>Importação e Venda de Veículos</li>
            <li>Customização de Interiores e Pintura</li>
          </ul>
        </section>

        <section className="secao-processo">
          <h3>Nosso Processo</h3>
          <ol>
            <li>Avaliação e Desmontagem Completa</li>
            <li>Funilaria e Preparação do Chassis</li>
            <li>Pintura e Acabamento</li>
            <li>Remontagem e Testes Finais</li>
          </ol>
        </section>
      </aside>
    </div>
  );
}

export default Home;
