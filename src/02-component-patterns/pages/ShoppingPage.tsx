import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();
    
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map( product => (
                        <ProductCard 
                            product={ product }
                            className="bg-dark text-white"
                            onChange={ onProductCountChange }
                            value={shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }


                <div className='shopping-cart'>
                        {
                            Object.entries( shoppingCart ).map( ([key, product]) => (
                                <ProductCard 
                                    key={ key }
                                    product={ product }
                                    className="bg-dark text-white"
                                    onChange={ onProductCountChange }
                                    value={ product.count }
                                >
                                    <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                                    <ProductTitle className="text-bold" />
                                    <ProductButtons className="custom-buttons" />
                                </ProductCard>
                            ))
                        }
                </div>

                <div>
                    <code>
                        {
                            JSON.stringify( shoppingCart, null, 5 )
                        }
                    </code>
                </div>

            </div>
        </div>
    )
}
