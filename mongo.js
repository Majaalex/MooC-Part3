const mongoose = require('mongoose')

if( process.argv.length<3 ){
    console.log('Need password argument')
    process.exit(1)
}

const password = process.argv[2]
const inputName = process.argv[3]
const inputNumber = process.argv[4]

const url =
`mongodb+srv://fullstack:${password}@cluster0-fu7cs.azure.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})
const Person = mongoose.model('Person', personSchema)

// Add a database entry if input params amount to 5
if(process.argv.length === 5){
    const person = new Person({
        name: inputName,
        number: inputNumber
    })
    
    person.save().then(p => {
        console.log(`Added ${p.name}, number ${p.number} to phonebook`)
        mongoose.connection.close()
    })
}

// Fetch all persons in the database if input params amount to 3
if(process.argv.length === 3){
    console.log('Phonebook:')
    Person
    .find({})
    .then(persons => {
        persons.map(p => {
            console.log(`${p.name} ${p.number}`)
            
        })
        mongoose.connection.close
    })
}
