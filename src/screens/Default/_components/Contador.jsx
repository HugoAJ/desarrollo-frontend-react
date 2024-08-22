import { useState, useEffect } from "react";


const Contador =()=>{

    const [contador, setContador]=useState(0);

    const handleContador=()=>{
        setContador(contador+1 );
    };

    const handleContador2=()=>{
        setContador(contador-1);
    };

    //Esta función especial se ejecuta cuando el componente
    //se haya montado ()
    //[]
    useEffect(()=>{
        setContador(12);
    }, []);

    //Esta funcion especial se ejecuta cuando haya cambiado
    //el valor de contador
    //[contador]
    useEffect(()=>{
        if(contador===15){
            alert('Contador igual a 15');
        }
    }, [contador]);

    //Esta funcion especial se ejecuta cuando el componente
    //se desmonta
    useEffect(()=>{
        return()=>{
            console.log('El componente se desmonto');
        }
    },[]);

    return(
        <>
            <h5>Componente Contador</h5>
            <h5>{contador}</h5>
            <div>
                <button onClick={handleContador}>Aumentar</button>
                <button onClick={handleContador2}>Disminuir</button>
            </div>
        </>
    );
};

export default Contador;