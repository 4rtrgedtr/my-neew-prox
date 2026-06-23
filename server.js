const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.static('public'));
app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get(req.query.url);
        res.send(response.data);
    } catch (e) { res.send("Error"); }
});
app.listen(3000);
