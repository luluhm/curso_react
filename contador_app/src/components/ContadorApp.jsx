import React, {useState} from "react";

const ContadorApp = ({valor}) => {
    const [cuenta, setCuenta] = useState(valor);

    const incrementaCuenta = (e) => {
        
        setCuenta(cuenta + 1);
    };
    return (
        <>
            <h1>Contador App</h1>
            <hr />
            <h2>{cuenta}</h2>
            <button onClick={(e) => incrementaCuenta(e)}>+1</button>
         </>
  
    );
    };
export default ContadorApp;
