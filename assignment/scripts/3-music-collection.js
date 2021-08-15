console.log('***** Music Collection *****')
//collection var, empty []
let collection = [];

// collection var, create obj w/ album properties
function addToCollection (title, artist, yearPublished) {
  let albumInfo = {
    'title': title,
    'artist': artist,
    'yearPublished': yearPublished
  }
  collection.push(albumInfo);
  return collection;
}

//test for addToCollection, adding info then console.logging it
addToCollection ('testTitle1', 'testArtist1', 'testYearPub1');
addToCollection ('testTitle2', 'testArtist2', 'testYearPub2');
addToCollection ('testTitle3', 'testArtist1', 'testYearPub3');
addToCollection ('testTitle4', 'testArtist4', 'testYearPub4');
addToCollection ('testTitle5', 'testArtist1', 'testYearPub5');
addToCollection ('testTitle6', 'testArtist6', 'testYearPub6');
console.log(collection);

//test of showCollection
console.log('Test of collection array and applied functions. Should provide number of items in array and list each album info on a new line.');
//create function showCollection, take in an array, log number of items in array, loop over array and console.log info, T/A/YP
function showCollection (inputArray) {
  console.log('The number of items in this array is: ' + inputArray.length);
  for(let i = 0; i < inputArray.length; i++){
    console.log('TITLE: ' + inputArray[i]['title'] + ' by ' + inputArray[i]['artist'] + ', published in ' + inputArray[i]['yearPublished']);
  }
  return;
}

//test of showCollection
showCollection (collection);

//create findByArtist function, takes in string(artist),loop over collection, return array with matching results

function findByArtist (artist) {
  //array to hold results
  let matchingArtist = [];
  //loop over
  for(let i = 0; i < collection.length; i++){
    if(collection[i]['artist'] === artist){
          //push matches to
      matchingArtist.push(collection[i]);
    }
  }
  //return array
  return matchingArtist;
}

//test for findByArtist
console.log('Test of findByArtist function. Should list 3 albums by testArtist1.')
findByArtist('testArtist1');
