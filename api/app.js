const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json([
        {
            "id": "1",
            "username": "AndikaDS",
            "role": "EXP Laner"
        },
        {
            "id": "2",
            "username": "Ridos",
            "role": "Gold Laner"
        },
        {
            "id": "3",
            "username": "RestuZT",
            "role": "Jungler"
        }
    ]);
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

