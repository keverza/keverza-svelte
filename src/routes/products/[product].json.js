// @ts-nocheck
import Products from '../../api/ProductsDatabase'

export async function get({params}) {
    //connect to db & get data    
    const product = Products.find((item)=> item.href === params.product)

    if (product){
    return {
        
        status: 200,
        body:{product}
    }}

    return {
        status: 404
    }
    
}