import porscheImage from "../../assets/img/2026-911.jpg";
import audiImage from "../../assets/img/2019-r8-coupe.jpg";
import astonImage from "../../assets/img/2025-amVantage.jpg";
import mercedesImage from "../../assets/img/2024-amg-gt.jpg";
import mclarenImg from "@assets/img/mclaren.jpg";
import garage from "@assets/img/garage.jpg";
import goodwodFOS from "@assets/img/goodwood-fos.jpg";
import astonMartin from "@assets/img/astonMartin.jpg";
import classicBmw from "@assets/img/bmw_classica.jpg";

//Carrossel
export const mainCarouselData = [
  {
    image: mclarenImg,
    title: "Avaliação do seu usado",
    text: "Valorizamos seu usado na troca por um de nossos veículos",
  },
  {
    image: garage,
    title: "Vasto inventário de clássicos",
    text: "Ícones automotivos e itens de coleção fazem parte da HK",
  },
  {
    image: goodwodFOS,
    title: "Eventos exclusivos para clientes",
    text: "O clube HK dá acesso a um calendário de eventos apenas para membros",
  },
];

//Carros disponíveis
export const availableCars = [
  {
    make: "Porsche",
    modelYear: "911 Turbo S - 2026",
    description: "KM: 3.032 - Chalk",
    imagePath: porscheImage,
    details: "O Porsche 911 Turbo S é um carro de alta performance, equipado com um motor V8 biturbo de 4.0 litros feito à mão, entregando 650 cv. A grande novidade é a nova aerodinâmica ativa, com um spoiler dianteiro pneumático e asa traseira que ajustam a downforce em tempo real. Em testes de pista, ele superou supercarros com o dobro do preço, mantendo o luxo e a usabilidade diária típica da Porsche.",
  },
  {
    make: "Audi",
    modelYear: "R8 Coupe - 2019",
    description: "KM: 25.299 - Deep Blue",
    imagePath: audiImage,
    details: "O Audi R8 Coupe é um carro de alta performance, equipado com um motor V8 biturbo de 4.0 litros feito à mão, entregando 650 cv. A grande novidade é a nova aerodinâmica ativa, com um spoiler dianteiro pneumático e asa traseira que ajustam a downforce em tempo real. Em testes de pista, ele superou supercarros com o dobro do preço, mantendo o luxo e a usabilidade diária típica da Porsche.",
  },
  {
    make: "Aston Martin",
    modelYear: "Vantage - 2025",
    description: "KM: 8.600 - Tanzanite Yellow",
    imagePath: astonImage,
    details: "O Aston Martin Vantage é um carro de alta performance, equipado com um motor V8 biturbo de 4.0 litros feito à mão, entregando 650 cv. A grande novidade é a nova aerodinâmica ativa, com um spoiler dianteiro pneumático e asa traseira que ajustam a downforce em tempo real. Em testes de pista, ele superou supercarros com o dobro do preço, mantendo o luxo e a usabilidade diária típica da Porsche.",
  },
  {
    make: "Mercedes-Benz",
    modelYear: "AMG GT - 2024",
    description: "KM: 4.121 - Pristine Red",
    imagePath: mercedesImage,
    details: "O Mercedes-Benz AMG GT é um carro de alta performance, equipado com um motor V8 biturbo de 4.0 litros feito à mão, entregando 650 cv. A grande novidade é a nova aerodinâmica ativa, com um spoiler dianteiro pneumático e asa traseira que ajustam a downforce em tempo real. Em testes de pista, ele superou supercarros com o dobro do preço, mantendo o luxo e a usabilidade diária típica da Porsche.",
  },
];

//Notícias
export const newsData = [
  {
    imagePath: astonMartin,
    altText: "Aston Martin",
    title: "Scramble! HK Engineering",
    summary: "Ontem, membros da HK team participaram de um encontro exclusivo...",
    information:
      "O evento 'Scramble' da HK Engineering reuniu mais de 50 colecionadores de elite. O destaque foi a rara aparição de um DB5 original de 1964, totalmente restaurado pela nossa equipe. O evento contou com um café da manhã ao ar livre e um tour técnico pelos motores V12 aspirados que definiram uma era da marca britânica. Foi discutido o futuro dos clássicos com combustíveis sintéticos.",
  },
  {
    imagePath: classicBmw,
    altText: "BMW Classica",
    title: "6 Horas de Fuji — WEC",
    summary: "Sob a sombra do Monte Fuji, o Fuji Speedway recebeu a penúltima etapa...",
    information:
      "A etapa de Fuji é famosa por suas condições climáticas imprevisíveis. A equipe BMW M Hybrid V8 enfrentou chuva torrencial nas duas primeiras horas, exigindo uma estratégia de pneus arriscada que garantiu o pódio. O carro #15 demonstrou uma confiabilidade impressionante no sistema híbrido, recuperando 3 voltas de desvantagem após um incidente na largada.",
  },
  {
    imagePath: mercedesImage,
    altText: "Mercedes-Benz",
    title: "Mercedes-Benz AMG GT",
    summary: "O novo Mercedes-AMG GT redefine o conceito de Grand Tourer...",
    information:
      "Este modelo vem equipado com um motor V8 biturbo de 4.0 litros feito à mão, entregando 585 cv. A grande novidade é a suspensão AMG Active Ride Control, que elimina as barras estabilizadoras tradicionais por um sistema hidráulico, permitindo curvas planas sem sacrificar o conforto. O 0 a 100 km/h é feito em apenas 3,2 segundos.",
  },
  {
    imagePath: porscheImage,
    altText: "Porsche",
    title: "Porsche 911 Turbo S",
    summary: "A referência absoluta em performance cotidiana continua imbatível...",
    information:
      "O 911 Turbo S (Geração 992.2) chega com 650 cv e tração integral inteligente. O destaque técnico é a nova aerodinâmica ativa, com um spoiler dianteiro pneumático e asa traseira que ajustam a downforce em tempo real. Em testes de pista, ele superou supercarros com o dobro do preço, mantendo o luxo e a usabilidade diária típica da Porsche.",
  },
];
