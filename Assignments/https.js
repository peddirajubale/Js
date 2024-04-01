// ----------->GET -------
// let options = {
//     method: "GET"
//   };
  
//   fetch("https://gorest.co.in/public-api/users", options);


// ---->POST METHOD ------

// let data = {
//     name: "RajuBlae",
//     gender: "Male",
//     email: "rajubale@gmail.com",
//     status: "Active"
//   };
  
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer 11f25287ecc29a214d79a8d547fd78203214823d9d9439fdb5e58d9b43970c7c"
//     },
//     body: JSON.stringify(data)
//   };
  
//   fetch("https://gorest.co.in/public/v2/users", options)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(jsonData) {
//       console.log(jsonData);
//     });



// ------> PUT METHOD <-------------

// let data = {
//     name: "PeddiRaju Bale",
//     gender: "Male",
//     email: "rajubale@gmail.com",
//     status: "Active"
//   };
  
//   let options = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer 11f25287ecc29a214d79a8d547fd78203214823d9d9439fdb5e58d9b43970c7c"
//     },
//     body: JSON.stringify(data)
//   };
  
//   fetch("https://gorest.co.in/public/v2/users/6816541", options)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(jsonData) {
//       console.log(jsonData);
//     });

    // ---->    DELETE METHOD

    // let options = {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       Authorization: "Bearer 11f25287ecc29a214d79a8d547fd78203214823d9d9439fdb5e58d9b43970c7c"
    //     }
    //   };
      
    //   fetch("https://gorest.co.in/public-api/users/6816541", options)
    //     .then(function(response) {
    //       return response.json();
    //     })
    //     .then(function(jsonData) {
    //       console.log(jsonData);
    //     });