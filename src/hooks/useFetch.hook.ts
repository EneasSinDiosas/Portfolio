
import { useState, useEffect } from 'react';
//Como necesitamos una url para pedir los datos, pero no tenemos ninguna, creamos una interfaz
export interface UseEffectProps{
    url: string,
}


export const useFetch = <T> ({url}: UseEffectProps) => {
     //Declaración genérica reutilizable para todo.
    // Estado para el manejo de datos
        // T de type of data
    const [data, setData] = useState<T | null>(null)
    // Estado para los errores (ponemos false como predeterminado porque suponemos que no hay ningún error de baase)
    const [hasError, setHasError] = useState(false);
    // Estado para la petición
    const [isFetching, setIsFetching] = useState(false);

    //método para el manejo de datos:
        //e de event
        // React.FormEvent<HTMLFormElement> Sirve para evitar que un método realice su acción por defecto. Se utiliza con event.preventDefault() en el método
        const fetchData =async (e?: React.FormEvent<HTMLFormElement>) => {
            
            e?.preventDefault();
            
            try {
                const response = await fetch(url);
                const dataBuffer = await response.json();
                setData(dataBuffer);
                setIsFetching(false);
            } catch (error) {
                setHasError(true);
                setIsFetching(false);
            }
        }
        
        // Se dispara al montar el componente
        useEffect(() => {
            (async()=>{
              await fetchData();
            })();
          },[])

        // se devuelven los datos para que cuando se llame la función se obtengan todos los datos.
        return{
            data,
            fetchData,
            hasError,
            isFetching
        }
}