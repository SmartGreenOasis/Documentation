import React from "react";

function Card({title,img,description}) {
    return (
        <div style={{ backgroundColor:'var(--ifm-background-card)',padding: '20px', borderRadius: '8px', width: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <img src={img}  style={{ width: '80px', height: '80px' }} />
        <h4 style={{color:'var(--ifm-text-card)'}}>{title}</h4>
        <p style={{color:'var(--ifm-text-card   )'}}>{description}</p>
      </div>
    );
}

export default Card;