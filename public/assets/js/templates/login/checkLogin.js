const profileButton = document.getElementById("profileUser");

const user_id = localStorage.getItem('user_id') 
                ? localStorage.getItem('user_id') 
                : sessionStorage.getItem('user_id')
                    ? sessionStorage.getItem('user_id')
                    : 0

const isLoggedIn = localStorage.getItem('isLoggedIn')
                    ? localStorage.getItem('isLoggedIn')
                    : sessionStorage.getItem('isLoggedIn')
                        ? sessionStorage.getItem('isLoggedIn')
                        : false

profileButton.addEventListener("click",() => {
    if(isLoggedIn && user_id !== 0){
        window.location.replace("http://127.0.0.1:5500/public/profile.html")
    }else{
        window.location.replace("http://127.0.0.1:5500/public/login.html")
    }
})