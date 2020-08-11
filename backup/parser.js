const fs = require('fs');
const regionsTxt = require('./regions.txt');

const cleanData = (data) => data.split("'").filter((regionSplitted, index) => index%2);

const createObject = (name, image) => { 
  return {"name": name, "image": image};
};

let objects = [];

fs.readFile('./regions.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    cleanData(data)
    .forEach((data, index, arr) => { 
      if(!((index + 1)%2)) objects.push(createObject(arr[index-1], data));
    });

    // TODO
    console.log(objects);
});

