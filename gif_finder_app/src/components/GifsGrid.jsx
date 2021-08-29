import React, { useEffect, useState } from 'react'
import GifsGriditem from './GifsGriditem';

const GifsGrid = ({categoria}) => {
    const [imagenes, setimagenes] = useState([]);
    useEffect(() => {
        getGifs();
    }, []); 
     

    const getGifs = async() => {
        const api_key="AuJLrOfEFkC16Amb27Vo7S1R2MZqe1Hv"
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=10`;
        fetch(url);
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url,

            };
        });

        setimagenes(gifs);
    };
  
    return (
        <>
            <h3>{categoria}</h3>
            <div className="card-grid">
            {imagenes.map((imagen) => {
                return <GifsGriditem key={imagen.id} imagen={imagen} />
            })}           
        </div>
        </>
    );
};

export default GifsGrid
