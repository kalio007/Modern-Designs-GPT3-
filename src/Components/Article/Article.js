import React from 'react';
import './Article.css';


export default function Article(props){
return(
    <div className='gpt3__blog-container_article'>
        <div className='gpt3__blog-container_article'>
            <img src="{imgUrl}" alt='blog images' />
        </div>

    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{props.date}</p>
        <h3>{props.text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
    
)
}