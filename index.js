var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDice1='dice'+randomNumber1+'.png';
var randomDice2='dice'+randomNumber2+'.png';

var randomSrc1='images/'+randomDice1;
var randomSrc2='images/'+randomDice2;

var image1=document.querySelectorAll('img')[0];
var image2=document.querySelectorAll('img')[1];

image1.setAttribute('src',randomSrc1);
image2.setAttribute('src',randomSrc2);


var h1Tag=document.querySelector('h1');

if(randomNumber1>randomNumber2){
    h1Tag.innerHTML='Player 1 Wins !'
}

else if (randomNumber1<randomNumber2) {
    h1Tag.innerHTML='Player 2 Wins !'
    
} else {
    h1Tag.innerHTML='Draw !'
    
}
