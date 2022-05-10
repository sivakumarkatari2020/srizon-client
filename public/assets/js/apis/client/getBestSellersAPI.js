const getBestSellers = async () => {
    return fetch('http://localhost:8080/api/client/getBestSellers')
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getBestSellers;
