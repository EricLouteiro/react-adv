import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({});

    const onProductCountChange = ({ count, product }: {count: number, product: Product }) => {
        setShoppingCart( oldShoppingState => {

            const productInCart: ProductInCart = oldShoppingState[product.id] || { ...product, count: 0 };

            if (Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return{
                    ...oldShoppingState,
                    [product.id]: productInCart
                }
            }
               const { [ product.id ]: toDelete, ...rest} = oldShoppingState;
               return rest;
            
            // if ( count === 0 ) {
            //     const { [ product.id ]: toDelete, ...rest} = oldShoppingState;
            //     return rest;
            // }
            // return {
            //     ...oldShoppingState,
            //     [ product.id ]:{ ...product, count }
            // }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
    
};