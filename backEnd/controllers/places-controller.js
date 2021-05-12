const { uuid } = require('uuidv4');

const HttpError = require("../models/http-error");

let DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u1'
    }
];

const getPlacesById = (req, res, next) => {
    const placeId = req.params.pid; // { pid: 'p1' }

    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });

    if (!place) {
        return next(new HttpError('Could not find a place for the provided id.', 404));

    }

    res.json({ place }); // => { place } => { place: place }
}

const getPlacesByUserId = (req, res, next) => {

    const userId = req.params.uid;

    const place = DUMMY_PLACES.filter(p => {
        return p.creator === userId;
    });

    if (!place || place.length===0) {
        return next(new HttpError('Could not find a place for the provided user id.', 404));
    }

    res.json({ place });
}

const createPlace=(req,res,next)=>{

    const {title, description, coordinates, address, creator} = req.body;
    const ceatedPlace = {
        id : uuid(),
        title,
        description,
        location: coordinates,
        address,
        creator
    }
    DUMMY_PLACES.push(ceatedPlace);

    res.status(201).json({place: ceatedPlace});
}

const updatePlace=(req, res, next)=>{
    const placeId = req.params.pid; // { pid: 'p1' }

    const place = DUMMY_PLACES.find(p => p.id === placeId);
    const placeIndex = DUMMY_PLACES.findIndex(p=>p.id= placeId);

    const {title, description} = req.body;

    const updatedPlace = {...place};
    updatedPlace.title = title;
    updatedPlace.description = description;


    DUMMY_PLACES[placeIndex] = updatedPlace;

    res.status(200).json({place: updatedPlace})


}

const deletePlace =(req, res, next)=>{
    const placeId = req.params.pid; // { pid: 'p1' }

    DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);
    res.status(200).json({message: "deleted place"})

}

exports.getPlacesById = getPlacesById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.ceatedPlace = createPlace; 
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
