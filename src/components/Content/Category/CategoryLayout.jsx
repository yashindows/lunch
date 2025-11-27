import React, { useEffect, useState } from "react";
import styles from "../Card/card.module.css";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import db from "../../../firestore";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

function CategoryLayout(props) {
  const [category, setCategory] = useState([
    { status: "loading", id: "loading" },
  ]);
  useEffect(() => {
    onSnapshot(collection(db, "recipes"), (snapshot) =>
      setCategory(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);
  return (
    <div className={styles.recipeCardWrapper}>
      {category.map((el) =>
        el.category == props.category ? (
          <Card
            key={el.id}
            saved={el.saved}
            id={el.id}
            url={el.id}
            title={el.title}
            image={el.image}
          />
        ) : (
          el.status
        )
      )}
    </div>
  );
}

export default CategoryLayout;
