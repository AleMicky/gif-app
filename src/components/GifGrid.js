import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GifGrid = ({ Category }) => {
    const {data:images ,loading} = useFetchGifs(Category)
    return (
        <>
            <h1>{Category}</h1>
            {loading && <p>loading...</p>}
            <div className="card-grid animate__animated animate__bounce animate__delay">
                {
                    images.map(img => (<GifGridItem
                        key={img.id}
                        {...img}
                    />
                    ))
                }
            </div>
        </>
    )
}
