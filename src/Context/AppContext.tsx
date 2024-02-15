import React, { createContext, useState } from 'react';

type Texto = string; // Definição do tipo Texto

interface Imagens {
    id: string;
    url: string;
}

interface Product {
    id: string;
    name: string;
    value: number; // Alterado para number, assumindo que é um valor monetário
    images: Imagens[];
}

interface AppContextProps {
    txtBusca: Texto;
    setTxtBusca: (products: Texto) => void;
    product: Product[]; // Adicionado res ao contexto
    setProduct: (products: Product[]) => void;
   
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [txtBusca, setTxtBusca] = useState<Texto>("");
    console.log(txtBusca)
    const [product, setProduct] = useState<Product[]>([]);


    return (
        <AppContext.Provider value={{ txtBusca,setTxtBusca, product, setProduct }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };