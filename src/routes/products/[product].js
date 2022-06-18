// @ts-nocheck
import Products from '$lib/ProductsDatabase'

export async function get({params}) {
    //connect to db & get data 
    console.log("json from shadow endpoint in routes: ",params.product);   
    const productEndpoint = Products.filter((item)=> item.href === params.product)    

    if (productEndpoint){
    return {        
        status: 200,       
        body:{productEndpoint}, 
        headers: {
            "content-type": "application/json",
            "accept":"application/json"
        },
    }}

    return {
        status: 404
    }
    
}

