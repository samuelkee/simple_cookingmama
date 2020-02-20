var data = require("../data.json");

exports.addFriend = function(request, response) {    
    var name = request.query.name;
    var shortDescription = request.query.shortDescription;
    var ingredients = request.query.ingredients;
    var description = request.query.description;
    var newFriend = { "name": name, 
    "description": description, 
    "imageURL": "http://lorempixel.com/400/400/people" 
    };

    data.friends.push(newFriend);
    response.render('index', data);
 }