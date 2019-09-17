var express = require('express')
var app = express()

let persons = [
    {
        name: "Alexander Maja",
        number: "0444 444 44",
        id: 1
    },
    {
        name: "Kalle Anka",
        number: "0500 555 555",
        id: 2
    },
    {
        name: "Firstname Lastname",
        number: "040 404 404",
        id: 3
    }
]

app.get('/api/persons/', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if(person){
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/info/', (req, res) => {
    res.send("<div><p>Phonebook has info for " + persons.length + " people</p> <p> " + 
    new Date + "</p></div>")
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
