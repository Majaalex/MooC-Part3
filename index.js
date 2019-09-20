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
    Person.find({})
        .then(persons => {
            res.json(persons.map(p => p.toJSON()))
        })
})

// Get info on a specific person
app.get('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    Person
        .findById(id)
        .then(person => res.json(person))
        .catch(error => next(error))
})

// Get info on how large the phonebook is
app.get('/info', (req, res) => {
    Person.find({})
    .then(persons => {
        res.send(`Phonebook has info for ${persons.length} people ${new Date}`)
    })
    .catch(error => next(error))
    
})

// Delete a specific person
app.delete('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    Person
        .deleteOne({ _id: id })
        .then(res.status(204).end())
        .catch(error => next(error))
})

// Create a new person
app.post('/api/persons/', (req, res, next) => {
    const body = req.body

    if (!body.name ||!body.number) return next(error)

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person
        .save()
        .then(p => res.json(person))
        .catch(error => next(error))
})

// Update a person
app.put('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    const body = req.body

    if (!body.number) {
        return next(error)
    }

    Person
        .findOneAndUpdate(
            { _id: id },
            { $set: { number: body.number } },
            (error, doc) => { error ? console.log('Update error') : console.log('Update success') }
        )
        .then(res.status(204).end())
        .catch(error => next(error))


})
const unknownEndpoint = (req, res) => {
    res.status(404).send({error : 'Unknown endpoint'})
}
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
    console.log('Error', error.message)
    console.log('Errorname', error.name, error.kind)
    
    if(error.name === 'TypeError'){
        return res.status(500).send({error: `Issue with the server`})
    }
    if(error.name === 'CastError' && error.kind === 'ObjectId'){
        console.log('CastError')
        return res.status(400).send({error: 'Incorrect Id'})
    } else {
        return res.status(400).send({error: 'Bad request'})
    }
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
