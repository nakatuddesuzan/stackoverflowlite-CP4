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
                    <h3 onclick="getoneQuestion(${question.qtn_id})">${question.title}</h3>
                    <ul><li>${question.subject}</li></ul>
                    <p>${question.qtn_desc}</p>
                </div>
                `;

            });
            platformquestions.innerHTML = ""
            document.getElementById('platformquestions').innerHTML = output;
        })
}
}
function getoneQuestion(qtn_id){
    if (localStorage.getItem('token')){
    let url = "http://127.0.0.1:5000/api/v1/question/" + qtn_id;
    console.log(qtn_id);
    localStorage.setItem('qtn-id', qtn_id);
    fetchAPI(url,'get')
    .then((res)=> res.data)
    .then((data)=> console.log(data[4]))

    }
}
getallQuestions();