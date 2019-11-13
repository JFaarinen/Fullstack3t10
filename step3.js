const express = require('express')
const app = express()

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

app.get('/info', (req, res) => {
    const koska = Date(Date.now())
    const info = '<div><div>Puhelinmuistiossa on '+yhteystiedot.length+' henkilön yhteystiedot</div>'
    +'<div>Pyyntö esitetty '+koska+'</div></div>'
    res.send(info)
    })

app.get('/api/persons', (req, res) => {
    res.json(yhteystiedot)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const henkilo = yhteystiedot.find(henkilo => henkilo.id === id)
    if (henkilo) {
        res.json(henkilo)
    } else {
        res.status(404).end()
    }
})

const port = 3001
app.listen(port, () => {
console.log(`Server running on port ${port}`)
})