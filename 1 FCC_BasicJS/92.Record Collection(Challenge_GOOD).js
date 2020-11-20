// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
  
    if (value == ""){
      delete collection[id][prop];
    } else if(prop !== "tracks" && value !== "" ){
    collection[id][prop] = value;
    } else if (prop === "tracks" &&  collection[id][prop] === undefined){
          
        collection[id][prop] = [];
        collection[id][prop].push(value);
  
    } else if (prop === "tracks"){
            
      
          collection[id][prop].push(value);
      }
     
   
   
    return collection;
  }
  
  updateRecords(5439, "artist", "ABBA");

  
  /// เก็บไว้ดูเป็น Idea  Solution2 คลีนมาก ใช้ ternary
  function updateRecords(id, prop, value) {
    if (value === '') {
      delete collection[id][prop];
    } else {
      if (prop !== 'tracks') {
        collection[id][prop] = value;
      } else {
        collection[id].hasOwnProperty('tracks') ? collection[id].tracks.push(value) : collection[id].tracks = [value];
      }
    }
    return collection;
  }

  
  /// Solution 3  if รัวๆ
  function updateRecords(id, prop, value) {
  
    if(prop !== 'tracks' && value !== "") {
      collection[id][prop] = value;
    }
    
    if(prop === 'tracks' && collection[id][prop] === undefined) {
      collection[id][prop] = [];
    }
    
    if(prop === 'tracks') {
      let track = collection[id][prop];
      track.push(value)
    }
    
    if(value === "") {
      delete collection[id][prop]
    }
    
    console.log(collection)
    return collection;
  }

  // Solution4 วิธีคิดคล้ายๆเรา แต่ใช้ has own property กับ if รัวๆ
  // Setup


// Only change code below this line
function updateRecords(id, prop, value) {
  
  if(prop !== "tracks" && value !== ""){ 
    collection[id][prop] = value; }

  if(prop == "tracks" &&  !collection[id].hasOwnProperty("tracks")){
    collection[id].tracks = []; 
  collection[id].tracks.push(value);}
 
  if(prop == "tracks" && value !== ""){
    collection[id].tracks.push(value);}
  
  if(value === ""){delete collection[id][prop];}
  return collection;
}

updateRecords(5439, "artist", "ABBA");
