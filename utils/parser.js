const request = require('request');

const fs = require('fs');

const cleanData = (data) => data.split("'").filter((regionSplitted, index) => index%2);

const createObject = (name, image) => { 
  return {"name": name, "image": image};
};

fs.readFile('./regions.txt', 'utf8', function (err,data) {
  
    if (err) {
      return console.log(err);
    }
    var objects = [];

    cleanData(data)

    .forEach((data, index, arr) => { 
      if(!((index + 1)%2)) objects.push(createObject(arr[index-1], data));
    });

    // TODO
    console.log(objects);

    objects.forEach(data => {
      request.post('http://localhost:3333/api/other_regions', {json: data});
    });
});

