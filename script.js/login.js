window.onload = function () {
    let loginForm = document.getElementById('loginform');
    if(loginForm)
        loginForm.onsubmit = signinUser;
        

}

function signinUser(event) {
    event.preventDefault()
    let url = "https://sue-stack-db.herokuapp.com/api/v1/users/login";
    let email = document.getElementById("email").value;
    let password = document.getElementById("psw").value;

    let user = {
        "email": email,
        "password": password
    };

    fetchAPI(url,'post',user)
    .then(results => {
            if(!results) return;
            if (results.status === 200 && results.data.token) {
            localStorage.setItem('token', results.data.token);
            localStorage.setItem("email", email);
            console.log(localStorage.getItem('token'))
            window.location.href = "profile.html"
        }

        })
}
