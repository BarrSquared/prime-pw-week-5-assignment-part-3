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
