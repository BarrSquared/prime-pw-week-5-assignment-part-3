console.log('***** Music Collection *****')
//comment; collection var, empty []

let collection = [];

//comment; collection var, create obj w/ album properties

function addToCollection (title, artist, yearPublished) {
  let albumInfo = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(albumInfo);
  return collection;
}

//comment;test for addToCollection, adding info then console.logging it
addToCollection ('testTitle1', 'testArtist1', 'testYearPub1');
addToCollection ('testTitle2', 'testArtist2', 'testYearPub2');
addToCollection ('testTitle3', 'testArtist3', 'testYearPub3');
addToCollection ('testTitle4', 'testArtist4', 'testYearPub4');
addToCollection ('testTitle5', 'testArtist5', 'testYearPub5');
addToCollection ('testTitle6', 'testArtist6', 'testYearPub6');
console.log(collection);

//comment; create function showCollection, take in an array, log number of items in array, loop over array and console.log info, T/A/YP
function showCollection (inputArray) {
  console.log('The number of items in this array is: ' + inputArray.length);
  for(let i = 0; i < inputArray.length; i++){
    console.log('TITLE: ' + inputArray[i]['title'] + ' by ' + inputArray[i]['artist'] + ', published in ' + inputArray[i]['yearPublished']);
  }
  return;
}
//comment; test of showCollection
showCollection (collection);
