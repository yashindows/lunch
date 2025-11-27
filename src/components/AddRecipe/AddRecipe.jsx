import React from "react";
import styles from "./addRecipe.module.css";
import db from "../../firestore";
import { addDoc, collection } from "firebase/firestore";

function AddRecipe() {
  const addRecipe = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      ingredients: formData.get("ingredients"),
      time: formData.get("time"),
      image: formData.get("image"),
    };
    try {
      addDoc(collection(db, "recipes"), data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={addRecipe}>
      <h2 className={styles.add__title}>Добавление рецепта</h2>
      <input
        type="text"
        name="title"
        className={styles.add__field}
        placeholder="Название"
      />
      <input
        type="text"
        name="ingredients"
        className={styles.add__field}
        placeholder="Ингредиенты"
      />
      <select name="category">
        <option value="soups">Суп</option>
        <option value="salads">Салат</option>
        <option value="main-course">Второе блюдо</option>
        <option value="drinks">Напиток</option>
      </select>

      <input
        name="time"
        type="text"
        className={styles.add__field}
        placeholder="Вид обработки блюда, время готовки"
      />
      <input
        name="image"
        type="text"
        className={styles.add__field}
        placeholder="Введите url изображения"
      />
      <div className={styles.btns}>
        {/* <input type="file" id="file" />
        <label htmlFor="file" className={styles.addImg__field}>
          <img src="./src/assets/icons/upload.svg" />
          <p>Загрузить изображение</p>
        </label> */}
        <input type="submit" className="btn" value="Опубликовать рецепт" />
      </div>
    </form>
  );
}

export default AddRecipe;
