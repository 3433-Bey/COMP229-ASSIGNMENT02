let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
   router.get('/home', indexController.displayHomePage);
 /* GET About me page. */
  router.get('/aboutme',  indexController.displayAboutPage);

/* GET Project page. */
  router.get('/project', indexController.displayProjectPage);

/* GET Services page. */
  router.get('/services', indexController.displayServicesPage); 

  /* GET Contact me page. */
  router.get('/contactme', indexController.displayContactPage);

  //GET Route for displaying the Login page 
router.get('/login', indexController.displayLoginPage);

//POST Route for Processing the Login page 
router.post('/login', indexController.processLoginPage );
  
  //GET Route for displaying the Register page 
  router.get('/register', indexController.displayRegisterPage);

  //POST Route for Processing the Register page 
  router.post('/register', indexController.processRegisterPage );

  //Get to perforn User Logout 
  router.get('/logout', indexController.performLogout );
module.exports = router; 