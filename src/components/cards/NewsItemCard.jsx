import React from "react";
import styles from "../../modules/NewsItemCard.module.css";

function NewsItemCard({ item }) {
  return (
    <article className={styles["item-noticia"]}>
      <img src={item.imagePath} alt={item.altText} />

      <div className={styles["texto-noticia"]}>
        <h3>{item.title}</h3>

        <p>
          {item.summary} <a href="/noticias">Saiba mais...</a>
        </p>
      </div>
    </article>
  );
}

export default NewsItemCard;
