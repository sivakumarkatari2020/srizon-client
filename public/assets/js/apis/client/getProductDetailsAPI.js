const getProductDetails = async (product_id) => {
    return fetch(`http://localhost:8080/api/client/getProductDetails/${product_id}`)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getProductDetails;