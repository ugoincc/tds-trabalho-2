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
    text: "O clube HK dá acesso à um calendário de eventos apenas para membros",
  },
];

//Carros disponíveis
export const availableCars = [
  {
    make: "Porsche",
    modelYear: "911 Turbo S - 2026",
    description: "KM: 3.032 - Chalk",
    imagePath: porscheImage,
  },
  {
    make: "Audi",
    modelYear: "R8 Coupe - 2019",
    description: "KM: 25.299 - Deep Blue",
    imagePath: audiImage,
  },
  {
    make: "Aston Martin",
    modelYear: "Vantage - 2025",
    description: "KM: 8.600 - Tanzanite Yellow",
    imagePath: astonImage,
  },
  {
    make: "Mercedes-Benz",
    modelYear: "AMG GT - 2024",
    description: "KM: 4.121 - Pristine Red",
    imagePath: mercedesImage,
  },
];

//Notícias
export const newsData = [
  {
    imagePath: astonMartin,
    altText: "Astor Martin",
    title: "Scramble! HK Engineering",
    summary: "Ontem, membros da HK team...",
  },
  {
    imagePath: classicBmw,
    altText: "BMW classica",
    title: "6 Horas de Fuji — WEC",
    summary: "Sob a sombra do Monte Fuji, o Fuji Speedway...",
  },
];
