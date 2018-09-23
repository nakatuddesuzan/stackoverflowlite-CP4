window.onload = function () {
    
    let postreplyform = document.getElementById('postreply');
    if(postreplyform)
        postreplyform.onsubmit = createReply;

}

function createReply(e){
    e.preventDefault()
    if(localStorage.getItem('token')){
    qtn_id = localStorage.getItem('qtn-id');
    let reply_desc = document.getElementById("replies").value;

    let newReply = {
        "reply_desc": reply_desc
    };
    let url = "http://127.0.0.1:5000/api/v1/question/" + qtn_id +"/answer";

    fetchAPI(url,'post',newReply)
        .then(results => {

            if (results.status === 201) {
                    alert("Your reply has been posted")
                }
        }
    ).catch(function(error){
        console.log(error)
    })
}else{
    window.location.href = "../html/login.html"
    alert("Expired token.Please login again")
}
}