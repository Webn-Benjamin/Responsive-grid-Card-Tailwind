import React from "react";
import ArticleCardComponent from "./Article-card";

const ArticlesComponent = () => {
  return (
    <>
      <section className="p-3.5 lg:p-20">
        <div className="sm:grid-cols-2 mt-20 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          <ArticleCardComponent />
          <ArticleCardComponent />
          <ArticleCardComponent />
          <ArticleCardComponent />
        </div>
      </section>
    </>
  );
};

export default ArticlesComponent;
