const getCategoryList = async () => {
    return fetch(`https://srizon-5fcc1.el.r.appspot.com/api/client/getCategoryList`)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getCategoryList;