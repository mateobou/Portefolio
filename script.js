//Variables phrases
const texte  = "Hello";
const phrase = "Hey, I’m ";
const orange = "Matéo Boukhobza "
const phrase2 = "and I’m a front developer. "
const phrase3 = " My challenge : "
const grey = "create an object that you will use ";
const phrase4 = "I’m a maker before all.";


//DOM
const button = document.querySelector('.button');

//DOM phrase 
const elPhrase = document.querySelector('#phrase');
const elOrange = document.querySelector('#orange');
const elPhrase2 = document.querySelector('#phrase2');
const elPhrase3 = document.querySelector('#phrase3');
const elGrey = document.querySelector('#grey');
const elPhrase4 = document.querySelector('#phrase4');

//tableaux 
const phraseEntière = 
[
	[phrase, elPhrase],
	[orange, elOrange],
	[phrase2, elPhrase2],
	[phrase3, elPhrase3],
	[grey, elGrey],
	[phrase4, elPhrase4]
]

//Events
//mouseCursor.classList.toggle('none');
bar = document.querySelector('#bar1');
elphrasebar = document.getElementById('phrase');
function clignoter() {
	setTimeout(function(){  
		console.log('hello');
		bar.classList.toggle('fontcolor');
		bar.classList.toggle('bar');
	}, 100);
} 
var c = 0;
var t;
var timer_is_on = 0;
c = -1;
nbTxt = 0;
numLettre = 0;
function test()
{
	numLettre = 0; 
	nbTxt++; 
	console.log(true)
}
function timedCount() {
  
  c = c + 1;
  clignoter();
  phraseEntière[nbTxt][1].textContent += phraseEntière[nbTxt][0][numLettre];
  phraseEntière[nbTxt][0].length -1 === numLettre ? test() : numLettre++;
  phraseEntière[nbTxt][0].length -1 === numLettre && nbTxt === phraseEntière.length ? mouseCursor.classList.toggle('none') : console.log('hello');

  t = setTimeout(timedCount, 100);
  console.log(phrase[c]);
  
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
    if (c == phrase.length) {
    	stopCount();
    }
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}
startCount();


//GLIDE

		
new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3
}).mount()
		