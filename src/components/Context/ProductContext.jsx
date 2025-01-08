import { createContext } from "react";
export const ProductContext = createContext();
export const ProductProvider = ({ children }) =>{


    return(
        <ProductContext.Provider>
            
        </ProductContext.Provider>
    )
}