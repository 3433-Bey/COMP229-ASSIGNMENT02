let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport= require('passport');

let bookController = require('../controllers/book');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//Get Route for the BOOK list page - Read Operation
router.get('/', bookController.displayBookList);

//GET Route for displaying the Add page - Create Operation
router.get('/add', requireAuth, bookController.displayAddPage);

//POST Route for Processing the Add page - Create Operation
router.post('/add', requireAuth, bookController.processAddPage );

//GET Route for displaying the Edit page - Update Operation
router.get('/edit/:id',  requireAuth, bookController.displayEditPage);

//POST Route for Processing the Edit page - Update Operation
router.post('/edit/:id', requireAuth, bookController.processEditPage);

//GET to perform Deletion  - Delete Operation
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;