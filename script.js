let langue = 'FR';
const fr = document.getElementById('fr');
const en = document.getElementById('en');
const es = document.getElementById('es');
const Langues = [fr,es,en];
for( let i = 0; i < Langues.length; i++)
{
  Langues[i].addEventListener('click', (e)=>{
	langue = e.target.textContent;
	langue === 'FR' ? phraseEntière = phraseEntièreFr : console.log(langue);
  	langue === 'EN' ? phraseEntière = phraseEntièreEn : console.log(langue);
  	langue === 'ES' ? phraseEntière = phraseEntièreEs : console.log(langue);
	for(let i = 0; i < phraseEntière.length; i++)
	{
		console.log(phraseEntière[i][1]);
		phraseEntière[i][1].textContent = phraseEntière[i][0];
	}
  })
}
//Variables phrases
const phrase = "Hey, I’m ";
const orange = "Matéo Boukhobza "
const phrase2 = "and I’m a front developer. "
const phrase3 = " My challenge : "
const grey = "create an object that you will use ";
const phrase4 = "I’m a maker before all.";

//Variables phrases fr
const texteFr  = "Hello";
const phraseFr = "Hey, Je m'appelle ";
const orangeFr = "Matéo Boukhobza "
const phrase2Fr = "et je suis un front developpeur. "
const phrase3Fr = " Mon défi : "
const greyFr = "créer un objet que vous allez utiliser";
const phrase4Fr = "Je suis un créateur avant tout.";

//Variables phrases fr
const texteEs  = "Hola";
const phraseEs = "Me llamo ";
const orangeEs = "Matéo Boukhobza "
const phrase2Es = "y soy un front developer "
const phrase3Es = " mi desafio"
const greyEs = "crear un objecto que vas usar";
const phrase4Es = "Soy un creator antes todo.";



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
const phraseEntièreEn = 
[
	[phrase, elPhrase],
	[orange, elOrange],
	[phrase2, elPhrase2],
	[phrase3, elPhrase3],
	[grey, elGrey],
	[phrase4, elPhrase4]
]
const phraseEntièreFr = 
[
	[phraseFr, elPhrase],
	[orangeFr, elOrange],
	[phrase2Fr, elPhrase2],
	[phrase3Fr, elPhrase3],
	[greyFr, elGrey],
	[phrase4Fr, elPhrase4]
]
const phraseEntièreEs = 
[
	[phraseEs, elPhrase],
	[orangeEs, elOrange],
	[phrase2Es, elPhrase2],
	[phrase3Es, elPhrase3],
	[greyEs, elGrey],
	[phrase4Es, elPhrase4]
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
  langue === 'FR' ? phraseEntière = phraseEntièreFr : console.log(langue);
  langue === 'EN' ? phraseEntière = phraseEntièreEn : console.log(langue);
  langue === 'ES' ? phraseEntière = phraseEntièreEs : console.log(langue);
  console.log(phraseEntière);
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
		