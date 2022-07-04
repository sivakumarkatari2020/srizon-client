const getBestSellers = async () => {
    return fetch('https://srizon-uplink.el.r.appspot.com/api/client/getBestSellers')
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getBestSellers;
