const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json([
        {
            "id": "1",
            "title": "Book Review: The Bear & The Nightingales"
        },
        {
            "id": "2",
            "title": "Book Review: The Queens & The King"
        },
        {
            "id": "3",
            "title": "Book Review: The Man & The Nightmare"
        }
    ]);
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

