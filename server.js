const express = require('express');
const app = express();
let PORT = process.env.PORT || 1234;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes.js")(app);



app.listen(PORT, () => {
    console.log('Server Connected! 🌎 PORT:' + PORT)
});