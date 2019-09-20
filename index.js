require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))


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

// Get all persons
app.get('/api/persons/', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons.map(p => p.toJSON()))
    })
})

// Get info on a specific person
app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    Person
        .findById(id)
        .then(person => {
            res.json(person)
        })
        .catch((error) => {
            res.status(500).end()
        })
})

// Get info on how large the phonebook is
app.get('/info', (req, res) => {
    Person.find({}).then(persons => {
        res.send(`Phonebook has info for ${persons.length} people ${new Date}`)
    })
})

// Delete a specific person
app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    Person
        .deleteOne({ _id: id })
        .then(res.status(204).end())
        .catch((error) => {
            res.status(500).end()
        })
})

// Create a new person
app.post('/api/persons/', (req, res) => {
    const body = req.body

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

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(p => {
        res.json(person)
    })
})

// Update a person
app.post('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    if (!body.number) {
        return res.status(400).json({
            error: 'Number missing'
        })
    }

    Person.findOneAndUpdate({ _id: id },
        { $set: { number: body.number } }
        , (error, doc) => {error ? console.log('Update error') : console.log('Update success')}
    )
    .then(res.status(204).end())
    .catch((error) => {
        res.status(500).end()
    })


})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
