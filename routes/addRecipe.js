var data = require("../data.json");

exports.addRecipe = function(request, response) {
    response.render('addRecipe', data);
}