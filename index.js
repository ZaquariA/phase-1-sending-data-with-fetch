// Add your code here
// const configObj = {
//     method: "POST",
//     header: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// }
// fetch('http://localhost:3000/dogs', configObj)
// .then(function(res){
//     return res.json()
// })
// .then(function(object) { 
//     console.log(object)
// })



// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);
function submitData(name, email){
const obj = {
    method:  "POST",
    headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body : JSON.stringify({
        name: name, 
        email: email}),
        
}

return fetch('http://localhost:3000/users', obj)
.then(function(res) {
  return res.json()  
})
.then(function (obj) {
    document.body.innerHTML = obj.id
})
.catch(function (error){
    document.body.innerHTML = error.message
})
}




