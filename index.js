// const UserDate = require('./user')
// const CarDate = require("./car")

// console.log(UserDate.User);
// UserDate.userLogger() 


const http = require("http")

const server = http.createServer((request, response) =>{
    //request - so'rov
    //response - javob
    console.log(request.url);

    response.write("<h1><sapn style='color:red;'>Hello world</span></h1>")
    response.end()
})
 
server.listen(5000, () =>{
    console.log("Server has been started on port: 5000");
})

