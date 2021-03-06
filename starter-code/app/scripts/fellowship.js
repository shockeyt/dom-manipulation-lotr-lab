console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

// var globalrivendell = document.getElementsByTagName("article")[1];
// var globalshire = document.getElementsByTagName("article")[0];
// var globalmordor = document.getElementsByTagName("article")[2];

// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
  middleEarth.id = "middle_earth";
  // inside, add each land as an article tag
  for (i = 0; i < lands.length; i++) {

    var article = document.createElement("article");
    var h1 = document.createElement("h1");
    h1.innerHTML = lands[i];
    article.appendChild(h1);
    middleEarth.appendChild(article);
    
    //console.log(middleEarth);
  }
  // inside each article tag include an h1 with the name of the land
  
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2
var theshire = document.querySelector("article");
var unordered = document.createElement("ul");

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
    
  for (var i = 0; i < hobbits.length; i++) {
    
    var list = document.createElement("li");
    list.className = "hobbit";
    //list.id = "group";
    list.innerHTML = hobbits[i];
    unordered.appendChild(list);
    //.appendChild(unordered);
    //body.appendChild(middleEarth);
    //console.log(unordered);
  }
  //var theshire = document.querySelector("article");
  theshire.appendChild(unordered);
  // give each hobbit a class of hobbit
}

makeHobbits();

// Part 3
var frodo = document.querySelector("li");
var div = document.createElement("div");

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  //var div = document.createElement("div");
  div.setAttribute("id" , "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  div.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  div.addEventListener('click', function() {
    nazgulScreech();
  });
  // add the ring as a child of Frodo
  // var frodo = document.querySelector("li");
  frodo.appendChild(div);
  //console.log(frodo);
}

keepItSecretKeepItSafe();
// Part 4

var rivendell = document.querySelectorAll("article")[1];
var friends = document.createElement("ul");

function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  // var friends = document.createElement("ul");
  for (i = 0; i < buddies.length; i++) {
    var buddylist = document.createElement("li");
    buddylist.className = "frienzies";
    buddylist.innerHTML = buddies[i];
    friends.appendChild(buddylist);
    aside.appendChild(friends);
    //console.log(friends);
  }

  // insert your aside as a child element of rivendell
  
  rivendell.appendChild(friends);
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementsByClassName("frienzies")[3].innerHTML = "Aragorn";
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  // var kids = document.getElementsByTagName(".hobbit");
  // var rivendellnew = document.querySelectorAll("article")[1];
  // console.log(kids);
  // rivendellnew.appendChild(kids);
  
  rivendell.appendChild(unordered);

}
leaveTheShire();


// Part 7




function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var thefellowship = document.createElement("div");
  rivendell.appendChild(thefellowship);
  
  // add each hobbit and buddy one at a time to 'the-fellowship'
  thefellowship.appendChild(unordered);
  thefellowship.appendChild(friends);
  var forge = thefellowship.querySelectorAll("li");
  //var combine = hobbits.concat(buddies);
  // after each character is added make an alert that they have joined your party
  // alert(unordered.innerHTML + " they've joined the party");
  for (var i = 0; i < forge.length; i++) {
    
    alert(forge[i].innerText + " have joined the party");
  }
  // console.log(thefellowship);
}

forgeTheFellowShip();
// Part 8

var gandalf = document.getElementsByClassName("frienzies")[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  document.getElementsByClassName("frienzies")[0].innerHTML = "Gandalf the Grey";
  // apply style to the element
  //var gandalf = document.getElementsByClassName("frienzies")[0];
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "thick solid grey";
  // console.log(gandalf);
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown");

  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var boromir = document.getElementsByClassName("frienzies")[4];
  // Remove Boromir from the Fellowship
  boromir.style.textDecoration = "line-through";
}
hornOfGondor();

// Part 10

var mordor = document.querySelectorAll("article")[2];
var mountdoom = document.createElement("div");
mountdoom.id = "mount-doom";
mordor.appendChild(mountdoom);
var sam = document.querySelectorAll("li")[0];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  

  mordor.appendChild(frodo);
  //var sam = document.querySelectorAll("li")[0];
  mordor.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
  


}
//console.log(mordor);
itsDangerousToGoAlone();

// Part 11


function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.id = "gollum";
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(div);
  // Move Gollum into Mount Doom
  mountdoom.appendChild(gollum);
}
//console.log(mordor);
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  gollum.remove();
  // remove all the baddies from the document
  friends.remove();
  // Move all the hobbits back to the shire
  theshire.appendChild(frodo);
  theshire.appendChild(sam);
  theshire.appendChild(unordered);
}
thereAndBackAgain();
