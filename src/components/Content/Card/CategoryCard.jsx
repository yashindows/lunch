import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

function CategoryCard(props) {
  return (
    <div className={styles.recipeCard}>
      <Link to={props.url} className={styles.recipeForward} />
      <img className={styles.recipeImg} src={props.image} />
      <div className={styles.recipe__title}>{props.title}</div>
    </div>
  );
}

export default CategoryCard;
