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

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
