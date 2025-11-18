import React from "react";

function NewsItemCard({ item }) {
  return (
    <article className="item-noticia">
      <img src={item.imagePath} alt={item.altText} />

      <div className="texto-noticia">
        <h3>{item.title}</h3>

        <p>
          {item.summary} <a href="#">Saiba mais...</a>
        </p>
      </div>
    </article>
  );
}

export default NewsItemCard;
