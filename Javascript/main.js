let fetchAPI = function (url,method,data) {

    if (!('fetch' in window)) {
        console.log("API not found");
        return;
    }

    const options = {
        method: method,
        headers: {'Content-Type': 'application/json', 'token': localStorage.getItem('token')}
    };

    if (data) options.body = JSON.stringify(data)

    let status, ok;

    return fetch(url,options)

        .then(response => {
            status = response.status;
            ok = response.ok;
            return response.json()
        })

        .then(function (results) {

            if (ok) {
                console.log(results);
                return {data: results, status}
            }
            else {
                alert(results.message ? results.message : results);
            }
        })
        .catch((err) => console.log(err))
};
