const { request } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const pose = {
    "child's": {
        'name': 'balasana',
        'type':  'forward fold'
    },
    "chair": {
        'name': 'utkatasana',
        'type':  'standing'
    },
    "low plank": {
        'name': 'chaturanga dandasana',
        'type':  'arm balance'
    },
    "push up": {
        'name': 'chaturanga dandasana',
        'type':  'arm balance'
    },
    "four limbed staff pose": {
        'name': 'chaturanga dandasana',
        'type':  'arm balance'
    },
    "unknown": {
        'name': 'unknown',
        'type':  'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const poseName = request.params.name.toLowerCase()
    if(pose[poseName]) {
        response.json(pose[poseName])
    } else{
        response.json(pose['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})

