const getUserDetailsAPI = async (user_id) => {
    return fetch(`http://localhost:8080/api/admin/getUserDetails/${user_id}`)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return {'status': 404,'message': error}
    })
}

export default getUserDetailsAPI;