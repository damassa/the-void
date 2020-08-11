const fs = require('fs');

fs.readFile('./skills.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    let skills = data.split("(").filter((v, index) => { 
      if(index>0) return v;
    });
    
    let objects = [];

    skills.forEach(skill => { 
      let skillObject = { 
        skillName: '',
        skillImage: '',
        skillDescription: '',
      }
      
      skill.split(',').forEach((value, index, arr) => { 
        if(index !== 0 && index !== arr.length && index !== arr.length - 1 && index !== arr.length - 2) { 
          if(index === 1) {
            skillObject.skillName = JSON.stringify(value).replace(/((^")|("$))/g, "").trim();
          } else if (index === arr.length - 3) {
            skillObject.skillImage = value;
          } else { 
            skillObject.skillDescription += value;
          }
        }
      });

      objects.push(skillObject);
    });

    console.log(objects);
  }
);

