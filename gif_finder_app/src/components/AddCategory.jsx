import React, { useState } from 'react';

const AddCategory = ({setCategorias, categorias}) => {
    const [inputValue, setInputValue] = useState("");
   
    const handlerInputChange = (e) => {
        setInputValue(e.target.value)
      
    };

    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (categorias.includes(inputValue.trim())){
            return;
        }
        if (inputValue.trim().length < 3){
            return;
        }
        setCategorias([inputValue.trim(), ...categorias]);
        console.log(categorias);

        setInputValue("");
        };

   
    return (
 <>
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={inputValue} onChange={(e => handlerInputChange(e))}
        ></input>
    </form>
    </>
);
};

export default AddCategory
