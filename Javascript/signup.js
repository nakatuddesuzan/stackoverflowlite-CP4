window.onload = function () {
    
    let signupForm = document.getElementById('signupform');
    if(signupForm)
        signupForm.onsubmit = createUser;

}

function createUser(event){
    event.preventDefault()
    let username = document.getElementById("dname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let newUser = {
        "username": username,
        "email": email,
        "password": password
    };
    let url = "http://127.0.0.1:5000/api/v1/users/signup";

    fetchAPI(url,'post',newUser)
        .then(results => {

            if (results.status === 201) {
                    window.location.href = '../html/login.html';
                    alert("Account created successfully you can now login with your details")
                }
        }
    ).catch(function(error){
        console.log(error)
    })

}

