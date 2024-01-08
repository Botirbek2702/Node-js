const fs = require("fs")
const path = require("path")


// fs.mkdir(path.join(__dirname, "templetse") , err =>{
//     if(err) throw new Error()

//     console.log("sucsesflly");
// })

fs.writeFile(path.join(__dirname, "templetse" , "Janury.txt") , "Create new course Nodejs" , err => {
    if(err) throw new Error()


    console.log("create");

    fs.appendFile(path.join(__dirname, "templetse" , "Janury.txt") ," and Reactjs", err=>{
         if(err) throw new Error()

         console.log("sucsesfully");
    })
    
    fs.readFile(path.join(__dirname, "templetse", "Janury.txt"), (err, data)=>{
        if(err) throw new Error()

        console.log(Buffer.from(data).toString());
    })
})

