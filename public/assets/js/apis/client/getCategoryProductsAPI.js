const getCategoryProducts = async (category_id=0) => {
    return fetch(`https://srizon-5fcc1.el.r.appspot.com/api/client/getCategoryProducts/${category_id}`)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getCategoryProducts;