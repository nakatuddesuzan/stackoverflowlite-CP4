function createQuestion(){
    // e.preventDefault()
    if(localStorage.getItem('token')){
    let title = document.getElementById("title").value;
    let subject = document.getElementById("subject").value;
    let qtn_desc = document.getElementById("desc").value;

    let newQuestion = {
        "title": title,
        "subject": subject,
        "qtn_desc": qtn_desc
    };
    let url = "http://127.0.0.1:5000/api/v1/questions";

    fetchAPI(url,'post',newQuestion)
        .then(results => {

            if (results.status === 201) {
                alert("Your question has been posted")
                }
        }
    )
    .catch(function(error){
        console.log(error)
    })
}else{
    window.location.href = "login.html"
    alert("Expired token.Please login again")
}
}
