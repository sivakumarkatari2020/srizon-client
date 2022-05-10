const getSearchList = async (key) => {
    return fetch(`https://srizon-5fcc1.el.r.appspot.com/api/client/getSearchList/${key}`)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getSearchList;