const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

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

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    yhteystiedot = yhteystiedot.filter(henkilo => henkilo.id !== id)
    res.status(204).end()
})

app.post('/api/persons/', (req, res) => {
    const id = Math.floor(Math.random()*100000)
    const body = req.body
    console.log(body)

    if (!body.nimi) {return res.status(400).json({error: 'Nimi puuttuu'})}
    if (!body.puh) {return res.status(400).json({error: 'Numero puuttuu'})}

    const henkilo = {
        nimi: body.nimi,
        puh: body.puh,
        id: id
    }
    yhteystiedot = yhteystiedot.concat(henkilo)
    console.log(henkilo)
    res.json(henkilo)
})

const port = 3001
app.listen(port, () => {
console.log(`Server running on port ${port}`)
})