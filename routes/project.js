exports.viewProject = function(req, res) { 
    // controller code goes here 
    var name = req.params.name; 
    var data = require("../data.json");
    var iURL;
    var instruction;
    var ing;
    var desc;

    for (i = 0; i < data.recipe.length; i++) {
        if (data.recipe[i].name == name) {
            iURL = data.recipe[i].imageURL;
            instruction = data.recipe[i].preparation;
            ing = data.recipe[i].ingredients;
            desc = data.recipe[i].description;

        }
    }

    res.render('project', {
        'projectName': name,
        'projectDesc': desc,
        'imageURL': iURL,
        'projectIng': ing,
        'projectInst': instruction
      });
  };