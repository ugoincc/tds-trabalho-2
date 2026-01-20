# HK Engineering (Trabalho 2 TDS - Versão React)

Este é um projeto evoluído para a disciplina de "Tecnologias de Desenvolvimento de Software". O site da "HK Engineering", anteriormente uma aplicação vanilla client-side, foi migrado e reconstruído utilizando React, aplicando conceitos avançados como Hooks customizados, Context API para roteamento e integração com APIs externas.

O objetivo desta versão é demonstrar a componentização de uma interface complexa e a gestão de estados assíncronos.

#### Autores:
- [Hugo Cordeiro](https://github.com/ugoincc)
- [Kelyton Lacerda](https://github.com/Kelyton21)

## Funcionalidades Principais

Este projeto não é apenas um site estático. Ele utiliza JavaScript para criar uma experiência modular e dinâmica:

* **Arquitetura Baseada em Componentes**
    A interface é totalmente dividida em componentes reutilizáveis, como VehicleCard, NewsItemCard e SlideCarousel. O layout principal utiliza um Outlet para renderização dinâmica de rotas.

* **Hook Customizado**
    Hook Customizado useFetch Desenvolvimento de um hook de abstração para requisições HTTP que utiliza useCallback para garantir a estabilidade das referências de memória e evitar loops infinitos em useEffect.

* **Integração Real-time com API FIPE**
    Nova funcionalidade de consulta de preços de mercado. O componente FipeConsulta realiza chamadas em cascata (Marca -> Modelo -> Ano) para a API pública da FIPE, permitindo ao usuário avaliar veículos em tempo real.

* **Estilização com CSS Modules**
    Para evitar conflitos de escopo, cada componente possui seu próprio arquivo de estilo (.module.css), garantindo que as regras de CSS sejam aplicadas apenas ao componente específico.

* **Gestão de Estado e Modais**
    Uso intensivo de useState para controlar a abertura de diálogos de detalhes de veículos e modais de leitura de matérias completas.

## Tecnologias Utilizadas

* **React 18** (Hooks, Context API, Fragments)
* **JavaScript (ES6+)** (Async/Await, Array Methods)
* **CSS Modules** (Escopo local de estilos)
* **Bootstrap 5** (Componentes, Grid System, Utilities)
* **Font Awesome** (Ícones)
* **API FIPE (Paralellum)** (Dados de mercado automotivo)

## Como Executar

Diferente da versão anterior, este projeto agora requer um ambiente Node.js para o gerenciamento de dependências e o processo de build do React.

### 1. Instalação das Dependências

```
npm install
```

### 2. Execução em Desenvolvimento
Para iniciar o servidor de desenvolvimento via Vite

```
npm run dev
```

### 3. Build para Produção
Para gerar os arquivos otimizados para deploy:

```
npm run build
```

Acesse http://localhost:5173 no seu navegador.
