import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="cardd animate__animated animate__bounce animate__delay">
           <img src={url} alt={title} />
             <p>{title}</p>    
        </div>
    )
}