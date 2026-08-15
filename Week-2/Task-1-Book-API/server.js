const express = require("express");

const app = express();

app.use(express.json());

const books = [
    {
        id: 1,
        title: "PEER-E-KAMIL",
        author: "UMERA AHMED",
        category: "Fiction"
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-Help"
    }
];

app.get("/books", (req, res) => {
    res.json(books);
});
app.post("/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});