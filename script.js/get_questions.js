function getallQuestions(){
    if(localStorage.getItem('token')){
    let url = "http://127.0.0.1:5000/api/v1/questions";

    fetchAPI(url,'get')
        .then((res) => res.data)
        .then((data) => {
            let output = '<h2> Questions</h2>';
            data.forEach (function(question){
                output += `
                <div>
                    <h2 class = "question-link" onclick="getoneQuestion(${question.qtn_id})">${question.title}</h2>
                    <ul><li>${question.subject}</li></ul>
                    <p>${question.qtn_desc}</p>
                    <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
                    <hr>
                </div>
                `;

            });
            platformquestions.innerHTML = ""
            document.getElementById('platformquestions').innerHTML = output;
            document.getElementById('displayname').innerHTML = localStorage.getItem("username");
        })
}
}
function getoneQuestion(qtn_id){
    if (localStorage.getItem('token')){
    let url = "http://127.0.0.1:5000/api/v1/question/" + qtn_id;
    console.log(qtn_id);
    localStorage.setItem('qtn_id', qtn_id);
    fetchAPI(url,'get')
    .then((res)=> res.data)
    .then((data)=> console.log(data[4]))

    }
}
// document.getElementById('del-qn').addEventListener("click", editQuestion())
function editQuestion(){
    qtn_id = localStorage.getItem('qtn_id')
    console.log('hello')
    if (localStorage.getItem('token')){
        let url = "http://127.0.0.1:5000/api/v1/questions/" + qtn_id;
    }

    fetchAPI(url,'edit',newQuestion)
        .then(results => {

            if (results.status === 201) {
                    alert("Your question has been edited")
                }
        }
    ).catch(function(error){
        console.log(error)
    })
}

getallQuestions();