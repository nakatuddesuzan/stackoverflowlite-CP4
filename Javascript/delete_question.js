document.getElementById('del-qn').addEventListener("click", deleteQuestion)
function deleteQuestion(){
    qtn_id = localStorage.getItem('qtn_id')
    console.log('hello')
    if (localStorage.getItem('token')){
        let url = "http://127.0.0.1:5000/api/v1/question/" + qtn_id;
    }

    fetchAPI(url,'delete',newQuestion)
        .then(results => {

            if (results.status === 201) {
                    alert("Your question has been deleted")
                }
        }
    ).catch(function(error){
        console.log(error)
    })
}
