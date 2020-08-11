const request = require('request');

const fs = require('fs');

fs.readFile('./skills.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    var skills = data.split("(").filter((v, index) => { 
      if(index>0) return v;
    });

    var objects = [];

    skills.forEach(skill => { 
      var skillObject = { 
        ability: '',
        description: '',
        skill_image: '',
      }

      skill.split(',').forEach((value, index, arr) => { 
        if(index !== 0 && index !== arr.length && index !== arr.length - 1 && index !== arr.length - 2) { 
          if(index === 1) {
            skillObject.ability = JSON.stringify(value).replace(/((^")|("$))/g, "").trim();
          } else if (index === arr.length - 3) {
            skillObject.skill_image = value;
          } else { 
            skillObject.description += value;
          }
        }
      });

      objects.push(skillObject);
    });

    console.log(objects);

    objects.forEach(data => {
        request.post('http://localhost:3333/api/skills', {json: data});
    });
  }
);