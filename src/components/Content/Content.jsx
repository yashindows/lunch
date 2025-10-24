import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../firestore";
import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import styles from "./Card/card.module.css";

function Content() {
  const [recipes, setRecipes] = useState([
    { status: "loading", id: "loading" },
  ]);
  useEffect(() => {
    onSnapshot(collection(db, "recipes"), (snapshot) =>
      setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);
  return (
    <main className={styles.content} id="container">
      <div className={styles.recipeCardWrapper}>
        <div className={styles.recipeCard}>
          <a
            data-item="link"
            href="/soups"
            className={styles.recipeForward}
          ></a>
          <img className={styles.recipeImg} src="./src/assets/icons/soup.png" />
          <div className={styles.recipe__title}>Супы</div>
        </div>
        <div className={styles.recipeCard}>
          <a
            data-item="link"
            href="/salads"
            className={styles.recipeForward}
          ></a>
          <img
            className={styles.recipeImg}
            src="./src/assets/icons/salad.png"
          />
          <div className={styles.recipe__title}>Салаты</div>
        </div>
        <div className={styles.recipeCard}>
          <a
            data-item="link"
            href="/main-course"
            className={styles.recipeForward}
          ></a>
          <img
            className={styles.recipeImg}
            src="./src/assets/icons/mainCourse.png"
          />
          <div className={styles.recipe__title}>Вторые блюда</div>
        </div>
        <div className={styles.recipeCard}>
          <a
            data-item="link"
            href="/drinks"
            className={styles.recipeForward}
          ></a>
          <img
            className={styles.recipeImg}
            src="./src/assets/icons/drink.png"
          />
          <div className={styles.recipe__title}>Напитки</div>
        </div>
      </div>
    </main>
  );
}

export default Content;
