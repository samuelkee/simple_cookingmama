var data = require("../data.json");

/*exports.addRecipe = function(request, response) {
    response.render('addRecipe', data);
}*/

exports.add = function(request, response) {
    //response.render('addRecipe', data);
    var name = request.query.name;
    var shortDescription = request.query.shortDescription;
    var ingredients = request.query.ingredients;
    var description = request.query.description;
    var imageURL = request.query.image;
    console.log("image url: " + imageURL);
    var newRecipe = { "name": name, 
    "description": shortDescription, 
    "imageURL": imageURL,
    "ingredients": ingredients,
    "preparation": description
    };

    var userName = "No name";

    var newRecipeOverview = {"name": name,
    "description": shortDescription,
    "imageURL": imageURL
    }

    /*for (x in data.friends) {
        if (x.formula = "No name") {
            x.push(newRecipeOverview);
        }
    }*/
    data.friends[1].formula.push(newRecipeOverview);
    data.recipe.push(newRecipe);
    response.render('index', data);
}