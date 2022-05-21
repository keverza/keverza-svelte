import Products from '../api/ProductsDatabase'

export async function get() {
    //connect to db & get data

    return {
        status: 200,
        body:{Products}
    }
}