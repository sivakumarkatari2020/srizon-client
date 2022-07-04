const getOrderlistAPI = async (user_id) => {
    return fetch(`https://srizon-uplink.el.r.appspot.com/api/client/getUserOrderlist/${user_id}`)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getOrderlistAPI;