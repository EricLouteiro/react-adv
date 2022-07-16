import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );

    const isMount = useRef(false);
    const increaseBy = ( value: number ) => {
        const newValue = Math.max( counter + value, 0 )
        const maxCount = initialValues?.maxCount || newValue;
        setCounter( Math.min( newValue, maxCount ) );

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value )
    }

    useEffect(() => {
        if ( !isMount.current ) return
        setCounter( value );

    }, [ value ])

    useEffect(() => {
      isMount.current = true;
    }, [])
    
    
    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset
    }

}