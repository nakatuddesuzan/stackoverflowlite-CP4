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
                    <h3>${question.title}</h3>
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

getallQuestions();