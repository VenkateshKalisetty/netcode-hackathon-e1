const express = require('express');
const app = express();
const PORT = 12345;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./public/index.html');
})


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})