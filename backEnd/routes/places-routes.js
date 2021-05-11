const express = require('express')

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: "1",
        title: "Title of the building",
        description: 'Description of the building',
        location: {
            lat: "12345",
            lng: "98765"
        },
        address: "address of the building",
        creater: "u1"


    }
]

router.get("/:id", (req, res, next) => {
    const placeID = req.params.id;
    console.log("placeID: "+ placeID)

    const place = DUMMY_PLACES.find(p => {

        return p.id === placeID
    })
    console.log("place: "+ place)

    res.json({
        message: 'Success',
        response: place
    })

})

module.exports = router