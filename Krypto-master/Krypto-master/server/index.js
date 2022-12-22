const express = require('express');
const cors = require('cors');
const app = express()
const port = 5000
app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/endpoints'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})