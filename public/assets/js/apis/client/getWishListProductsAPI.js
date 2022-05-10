const getWishList = async (user_id) => {
    return fetch(`https://srizon-5fcc1.el.r.appspot.com/api/client/getWishList/${user_id}`)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getWishList;