const getCategoryProducts = async (category_id=0) => {
    return fetch(`http://localhost:8080/api/client/getCategoryProducts/${category_id}`)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getCategoryProducts;