const http = require("http")
const fs = require("fs")
const path = require("path")
const { isUtf8 } = require("buffer")

const server = http.createServer((req, res) =>{
    if(req.method === "GET"){
        


        if(req.url==="/"){
            fs.readFile(path.join(__dirname, "templetse" , "index.html") , "utf-8" , (err,content) => {
                if (err) throw err
                res.end(content)
            })
        }else if(req.url==="/about"){
            fs.readFile(path.join(__dirname, "templetse" , "about.html") , "utf-8" , (err,content) => {
                if(err) throw err
                res.end(content)
            })
        } else if(req.url === "/contact"){
            fs.readFile(path.join(__dirname, "templetse" , "contact.html") , "utf-8" , (err,content) => {
                if(err) throw err
                res.end(content)
            })
        }else if(req.url === "/api/admin"){
            res.writeHead(200 , {'Content-Type' : 'text/html'})
            const admin = {
                name:"Botir",
                surname:"Shuhratov",
                phone: "+998-94-720-20-08"
            }
            res.end(JSON.stringify(admin))  
            
        }       
    
    
    
    }else if (req.method==="POST"){
        const body = []
        res.writeHead(200, {"Content-Type" : "text-html; charset= utf-8"})
        req.on("data" , data => {
            body.push(Buffer.from(data))
        })

        req.on('end' , () => {
            const message = body.toString().split('=')[1]
            res.end(`Name successfully added : ${message}`)
        })
    }
})
 
server.listen(3000, () =>{
    console.log("Server has been started on port: 3000");
})

