const http = require('http')

let yhteystiedot = [
    {
        nimi: "Arto Hellas",
        puh: "040-123456",
        id: 1
    },
    {
        nimi: "Ada Lovelace",
        puh: "39-44-5323523",
        id: 2
    },
    {
        nimi: "Dan Abramov",
        puh: "12-43-234345",
        id:3
    },
    {
        nimi: "Mary Poppendick",
        puh: "39-23-6423122",
        id: 4
    }
]

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(JSON.stringify(yhteystiedot))
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)