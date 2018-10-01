function editProfile(){
    let user = document.getElementById('displayname').value;
    console.log('hello')
    if (localStorage.getItem('token')){
        let url = "http://127.0.0.1:5000/api/v1/users";
    
        fetchAPI(url,'put',newQuestion)
        .then(results => {

            if (results.status === 201) {
                    alert("Your profile has been edited")
                }
        }
    ).catch(function(error){
        console.log(error)
    })
}

    }
