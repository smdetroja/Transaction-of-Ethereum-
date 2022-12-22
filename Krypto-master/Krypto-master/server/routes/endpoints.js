const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/getmarket', async (req, res) => {
    try {
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=b533ba07-7742-4850-8f89-6acc95294e69&limit=10')
            .then((result) => {
                console.log('data received')
                res.json(result.data.data)
            }).catch((err) => {
                console.log(err.message)
                res.status(500).send(err);
            });
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send(error);
    }
});
router.post('/getnews', async (req, res) => {
    try {
        const { page } = req.body;
        console.log(page)
        axios.get(`https://newsdata.io/api/1/news?apikey=pub_128818326b49207ddc09b9d381b42a943bf3c&q=blockchain&language=en&page=${page}`)
            .then((result) => {
                console.log('data received')
                res.json(result.data)
            }).catch((err) => {
                console.log(err.message)
                res.status(500).send(err);
            });
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send(error);
    }
});
module.exports = router