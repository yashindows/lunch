import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firestore";
import React, { useEffect, useState } from "react";
import styles from "./Card/card.module.css";
import CategoryCard from "./Card/CategoryCard";

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
    <div className={styles.recipeCardWrapper}>
      <CategoryCard
        url="/soups"
        image="./src/assets/icons/soup.png"
        title="Супы"
      />
      <CategoryCard
        url="/salads"
        image="./src/assets/icons/salad.png"
        title="Салаты"
      />
      <CategoryCard
        url="/main-course"
        image="./src/assets/icons/mainCourse.png"
        title="Вторые блюда"
      />
      <CategoryCard
        url="/drinks"
        image="./src/assets/icons/drink.png"
        title="Напитки"
      />
    </div>
  );
}

export default Content;
