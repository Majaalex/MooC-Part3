const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

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

app.use(cors())
app.use(bodyParser.json())
// Morgan for logging
// Creates a morgan token :body which logs the content in the body of a request
morgan.token('body', function (req, res) {
    return JSON.stringify(req.body)
})
var loggerFormat = '":method :url" :status :response-time ms :body';
app.use(morgan(loggerFormat, {
    skip: function (res, req) {
        return res.statusCode < 400
    },
    stream: process.stderr
}))
app.use(morgan(loggerFormat, {
    skip: function (res, req) {
        return res.statusCode >= 400
    },
    stream: process.stdout
}))

app.get('/api/persons/', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/info', (req, res) => {
    res.send("<div><p>Phonebook has info for " + persons.length + " people</p> <p> " +
        new Date + "</p></div>")

})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

app.post('/api/persons/', (req, res) => {
    const body = req.body
    const id = Math.floor(Math.random() * 500)

    if (!body.name) {
        return res.status(400).json({
            error: 'Name missing'
        })
    }
    if (!body.number) {
        return res.status(400).json({
            error: 'Number missing'
        })
    }
    const names = persons.map(p => p.name)
    if (names.includes(body.name)) {
        return res.status(400).json({
            error: 'Names must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: id
    }
    persons = persons.concat(person)
    res.json(person)
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
