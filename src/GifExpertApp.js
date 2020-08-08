import React from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categoria, setCategoria] = React.useState(['One Punch']);
    return (
        <div className="container">  
            <h1>GifExpertApp</h1>
            <AddCategory setCategoria = {setCategoria}/>
            <hr/>
            <ul>
                {
                    categoria.map(Category => (<GifGrid key={Category}
                                                        Category={Category}/>))
                }
            </ul>
        </div>
    )
}
