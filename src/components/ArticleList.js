import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    const postArticle = posts.map(blog => 
        <Article
            key={blog.id}
            title={blog.title}
            date={blog.date}
            preview={blog.preview}
            />
    );
    return (
        <main>
            {postArticle}
        </main>
    )
};

export default ArticleList