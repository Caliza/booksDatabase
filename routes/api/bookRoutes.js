const router = require('express').Router();
const Book = require('../../models/Book');


router.get('/', (req, res) => {
    Book.findAll().then((bookData) => {
        res.json(bookData);
    });
});

router.get('/paperbacks', (req, res) => {
    Book.findAll({
        order: ['title'],
        where: {
            is_paperback: true
        },
        attributes: {
            exclude: ['is_paperback', 'edition']
        }
    }).then((bookData) => {
        res.json(bookData);
    });
});