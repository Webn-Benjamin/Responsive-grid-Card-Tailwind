import React from "react";

const ArticleCardComponent = () => {
  return (
    <article className="group w-full min-h-360 max-h-360 sm:min-h-500 lg:w-full overflow-hidden rounded-3xl">
      <img
        className="group-hover:scale-105 ease-in duration-300 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1680516199065-00f84fd2c0b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt=""
      />
    </article>
  );
};

export default ArticleCardComponent;
