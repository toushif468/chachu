
import { createContext } from "react";
import { products } from "../assets/assets";

export interface ShopContextType {
    products: typeof products;
    currency: string;
    delivery_fee: number;
}

export const ShopContext = createContext<ShopContextType | null>(null);


const ShopContextProvider = (props:any) => {
    const currency = '$';
    const delivery_fee = 10;

    const value = {
        products,currency, delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
