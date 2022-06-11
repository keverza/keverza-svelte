// @ts-nocheck
import Products from '$lib/ProductsDatabase'

export async function get({params}) {
    //connect to db & get data 
    console.log("json from endpoint in routes: ",params.product);   
    const productArr = Products.filter((item)=> item.href === params.product)    

    if (productArr){
    return {        
        status: 200,       
        body:{productArr}, 
        headers: {
            "content-type": "application/json",
            "accept":"application/json"
        },
    }}

    return {
        status: 404
    }
    
}

