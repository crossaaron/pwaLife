const express = require('express');
const app = express();
const PORT = 1234;


app.use('/', express.static('./index.html'));

app.listen(PORT, () => {
    console.log('Server Connected on PORT:' + PORT)
});