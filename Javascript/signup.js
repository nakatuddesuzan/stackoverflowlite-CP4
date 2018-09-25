window.onload = function () {
    
    let signupForm = document.getElementById('signupform');
    if(signupForm)
        signupForm.onsubmit = createUser;

}

function createUser(e){
    e.preventDefault()
    let username = document.getElementById("dname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let newUser = {
        "username": username,
        "email": email,
        "password": password
    };
    let url = "https://sue-stack-db.herokuapp.com/api/v1/users/signup";

    fetchAPI(url,'post',newUser)
        .then(res => {
            if(res.status=='409'){
                console.log(res.status)
                alert("Sorry, this email already exists, try another one");
            }

            else if (res.status === 201) {
                    window.location.href = '../html/login.html';
                    alert("You have successfully registered")
                }
        }
    ).catch(function(error){
        console.log(error)
    })

}

