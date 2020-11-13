


// The space of all stories



// elements of the text are strings in arrays
let char = ["Greg", "Sgerg", "Greg's sister, Angela", "Greg's mother", "Greg's stepfather" ,"Sgerg a chubby alien",  "Snorg, the chubby alien's father", "Nasame, the chubby alien's mother"];

let loc = ["Greg's bedroom", "Greg's classroom", "the unfinished attic", "an ice cave on Shnu-Shnot, a small planet circling a red-dwarf star 42 light-years from Earth", "the garage", "the kitchen", "Computron"];

let action = ["sees", "falls down on", "thinks about", "farts on"];

let obj = ["the ghost of Mrs. Landsdowne", "The Vic 20 computer", "yesterday's homework", "leftover pizza", "a living rock from the planet Shnu-Shnot"];

let result = ["looses energy", "gains experience", "learns something important", "begins to look at life differently"];


 
let scr =0;

let story;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(15);
  //textAlign(CENTER);
  // pick story
  makeStory();


	


}

function draw() {
   background(0, 100);
   stroke(0,255,0);
	fill(0,255,0);
    
    if (scr > windowHeight){
    	scr =0;
    	makeStory();
    }
    scr++
    //print(scr);
    let tsz = map(mouseX,0,width,15,60);
    textSize(tsz);
	text(story[0], 50,windowHeight-scr);
	text(story[1], 50,windowHeight+50-scr);
	text(story[2], 50,windowHeight+100-scr);
	text(story[3], 50,windowHeight+150-scr);
 }



 function makeStory(){


  let mylocation = random(loc);
  let myhero = random(char);
  let myobj = random(obj);
  let myresult = random(result);
  let myaction = random(action);



	story = [
		`Our little story begins in ${mylocation}.`,
		`Our hero, ${myhero} ${myaction} ${myobj}.`,
		`${myhero} is not unchanged after this event.`,
		`${myhero} ${myresult}.`
		]

	print(story)



 }