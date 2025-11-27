import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Content from "./Content/Content";
import styles from "./Content/Card/card.module.css";
import CategoryLayout from "./Content/Category/CategoryLayout";
import AddRecipe from "./AddRecipe/AddRecipe";
import SavedRecipes from "./Content/SavedRecipes/SavedRecipes";
import RecipePage from "./Content/RecipePage/RecipePage";

function Router() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route
          element={
            <main className={styles.content} id="container">
              <Content />
            </main>
          }
          path="/"
        />
        <Route
          element={
            <main className={styles.content} id="container">
              <CategoryLayout category="soups" />
            </main>
          }
          path="/soups"
        />
        <Route
          element={
            <main className={styles.content} id="container">
              <CategoryLayout category="salads" />
            </main>
          }
          path="/salads"
        />
        <Route
          element={
            <main className={styles.content} id="container">
              <CategoryLayout category="main-course" />
            </main>
          }
          path="/main-course"
        />
        <Route
          element={
            <main className={styles.content} id="container">
              <CategoryLayout category="drinks" />
            </main>
          }
          path="/drinks"
        />
        <Route
          element={
            <main className={styles.content} id="container">
              <RecipePage />
            </main>
          }
          path="/recipes/:id"
        />
        <Route
          element={
            <main className={styles.content} id="container">
              <AddRecipe />
            </main>
          }
          path="/add"
        />
        <Route
          element={
            <main className={styles.content} id="container">
              <SavedRecipes />
            </main>
          }
          path="/my-recipes"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
