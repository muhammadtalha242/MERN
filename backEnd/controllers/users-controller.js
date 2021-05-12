const { uuid } = require('uuidv4');
const HttpError = require("../models/http-error");


let DUMMY_USER =[
    {
        id:"u1",
        name:"user 1"

    },
    {
        id:"u2",
        name:"user 2"

    },
    {
        id:"u3",
        name:"user 3"

    }
]

const getAllUsers=(req, res, next)=>{
    res.json({users: DUMMY_USER})
}

const addUser=(req, res, next)=>{
    const user = req.body;
    user.id = uuid();
    DUMMY_USER.push(user);

    res.status(201).json({message:'users added',users: DUMMY_USER})

}

const loginUser=(req, res, next)=>{
    const {username, password}= req.body;
    console.log(JSON.stringify(req.body));
    console.log(username, password)
    const user = DUMMY_USER.find(u => u.name=== username)

    if(!user)
    return next(new HttpError('Could not find a place for the provided id.', 404));

    res.json({message:'users logged in', user });
}

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.loginUser = loginUser;