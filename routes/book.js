let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

//Get Route for the BOOK list page - Read Operation
router.get('/',(req,res, next)=> {
    Book.find((err, BookList)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);
            
            res.render('book.ejs', {title: 'Book List', BookList: bookList})
        }
    });
});

module.exports = router;