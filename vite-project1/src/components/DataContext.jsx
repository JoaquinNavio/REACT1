import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const [data, setData] = useState([]);
    const [dataCarrito, setDataCarrito] = useState([]);

    useEffect( () => {
        fetch('./datos.json')
            .then(response => response.json())
            .then(datos => setData(datos))
            .catch(error => console.error("Error fetching data concha de su madre: "+error));

    }, [onchange]);

    return (
        <DataContext.Provider value={{ data, setData,dataCarrito, setDataCarrito }}>
            {children}
        </DataContext.Provider>
    );
};
