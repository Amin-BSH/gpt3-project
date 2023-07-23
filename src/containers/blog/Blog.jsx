import React from "react";
import { Article } from "./../../components/index";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog1}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog2}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog3}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog4}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog5}
            date="Sep 26, 2021"
            text="GPT-3 and Open AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
