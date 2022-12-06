import React from 'react';

import './Feature.css';



export default function Feature({title, text}) {
    return (
      <div className="gpt3__features-contianer__feature " id="features">
          <div className='gpt3__features-contianer__feature-title'>
              <div className='space'></div>
              <h1>{title}</h1>
              </div>

            <div className='gpt3__features-container_feature-text'>
              <p>{text}</p>
            </div>
    </div>
)
}