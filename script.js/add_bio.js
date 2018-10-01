// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("bio");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function addBio(){
    console.log("add bio called")
    
    if (localStorage.getItem('token')){
        let url = "http://127.0.0.1:5000/api/v1/users/bio";
        let bio = document.getElementById('addbio').value;
        console.log(bio)
        let userbio ={
            "bio":bio
        }
        fetchAPI(url,'put', userbio)
        .then(results => {
            if (results.status === 201) {
                    alert("Your bio has been added")
                }
        }
    ).catch(function(error){
        console.log(error)
    });
    document.getElementById('userbio').innerHTML = bio;
}

    }


function getbio(){
    
    if (localStorage.getItem('token')){
        let url = "http://127.0.0.1:5000/api/v1/users/bio";
        fetchAPI(url,'get')
        .then((res) => res.data)
        .then((data) => {
            let output = data;
            document.getElementById('userbio').innerHTML = output;
        })
    
}

    }

getbio();
