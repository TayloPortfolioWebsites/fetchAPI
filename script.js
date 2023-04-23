// fetch("https://reqres.in/api/users").then(res=>console.log(res));

/* All Users
fetch("https://reqres.in/api/users")
.then(res=>res.json())
.then(data=>console.log(data));
*/

/* Single User 
fetch("https://reqres.in/api/users/25")
.then(res=>res.json())
.then(data=>console.log(data));
*/

/* add.catch() method to get any errors. this will not work unless there is some sort of network error.
fetch("https://reqres.in/api/users/25")
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error => console.log("Error"));
*/
 
/*
fetch("https://reqres.in/api/users")
.then(res=> {
    if(res.ok){
        console.log('Fetch Successful');
    }
    else{
        console.log('Fetch is NOT SUCCESSFUL');
    }
    res.json()
})
.then((data)=>console.log(data))
.catch(error=>console.log("Error"));
*/

// GET, POST

/* POST REQUEST */
fetch("https://reqres.in/api/users",{
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify({
        name: 'New User 1',
    }) 
})
.then(res=> {
    return res.json()})
.then((data)=>console.log(data))
.catch(error=>console.log("Error"));