import React from 'react'

const GifsGriditem = ({imagen}) => {
    return (
        <div className="card">
            <img src={imagen.url} alt={imagen.title}/>
            <p>{imagen.title}</p>
            
        </div>
    )
}

export default GifsGriditem
