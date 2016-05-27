var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

//var homepageController = function (req, res) {
//  res.render('index', { title: '**Express**'})
//};

// GET home page.
//router.get('/', ctrlMain.index);

// Locations pages
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

// Other pages
router.get('/about', ctrlOthers.about);

module.exports = router;
