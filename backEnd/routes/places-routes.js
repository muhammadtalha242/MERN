const express = require('express');

const placesControllers = require('../controllers/places-controller')

const router = express.Router();

router.get('/:pid', placesControllers.getPlacesById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.post('/', placesControllers.ceatedPlace);

router.patch('/:pid', placesControllers.updatePlace);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
