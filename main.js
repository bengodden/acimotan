let requestURL = 'http://127.0.0.1:8000/cardsData.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType= 'json';
request.send();
request.onload = function(){
    const cardSRC = request.response;
    console.log(cardSRC);
    //populateHeader(cardSRC);
    showHeroes(cardSRC);
}

//const header = document.querySelector('header');
const section = document.querySelector('section');
/*
function populateHeader(obj){
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['cardId'];
    header.appendChild(myH1);
    

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed:' + obj['formed'];
    header.appendChild(myPara);
}
*/
function showHeroes(obj){
    const hereos = obj['cards'];

    for (let i=0;i<hereos.length; i++){
        const myArticle = document.createElement('article');
        //const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
       // const myList = document.createElement('ul');
    
    //myH2.textContent = hereos[i].image;
    //console.log(hereos[i].languages)
    myPara1.textContent = 'English: ' + hereos[i].languages.english;
    //console.log(hereos[i].languages.english);
    myPara2.textContent = 'Y Dialect: ' + hereos[i].languages.creeY;
    myPara3.textContent = 'Th Dialect: ' + hereos[i].languages.creeTH;

    /*const superPowers = hereos[i].powers;
    for (let j =0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
    }*/

    //myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    //myArticle.appendChild(myList);

    section.appendChild(myArticle);

    }
}