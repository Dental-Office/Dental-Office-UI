const express = require('express')
const app = express()

app.set('PORT', process.env.PORT || 3000)

app.use(express.static('dist/dental-office-ui'))

app.listen(app.get('PORT'), () =>
    console.log(`1 Server running on port ${app.get('PORT')}`),
)
