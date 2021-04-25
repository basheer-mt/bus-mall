'use strict';

// let imgArray = [
//   'pablo-merchan-montes-MXovqM130UI-unsplash',
//   'anna-pelzer-IGfIGP5ONV0-unsplash',
//   'anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash',
//   'brooke-lark-HlNcigvUi4Q-unsplash',
//   'joseph-gonzalez-zcUgjyqEwe8-unsplash',
//   'shayna-douglas-GvoVScughvI-unsplash',
//   'brooke-lark-qdyBKWSzpSI-unsplash'
// ];

// // Constructor
// // New obj
// // prototype render
// // Random function
// // get by id
// // Event Handler

// const imageSection = document.getElementById( 'imageSection' );
// const leftImage = document.getElementById( 'leftImage' );
// const rightImage = document.getElementById( 'rightImage' );

// let clickNumber = 0;
// let leftImageIndex = 0;
// let rightImageIndex = 0;

// function Images( name ) {
//   this.name = name;
//   this.img = `./img/${name}.jpg`;
//   this.shown = 0;
//   this.clicks = 0;
//   Images.all.push( this );
// }

// Images.all = [];

// for ( let i = 0; i < imgArray.length; i++ ) {
//   new Images( imgArray[i] );
// }

// function eventHandler( e ) {
//   if ( ( e.target.id == 'leftImage' || e.target.id == 'rightImage' ) && clickNumber < 15 ) {

//     if( e.target.id == 'leftImage' ) {
//       Images.all[leftImageIndex].clicks++;
//     }

//     if( e.target.id == 'rightImage' ) {
//       Images.all[rightImageIndex].clicks++;
//     }

//     clickNumber++;
//     renderImages();

//   } else {
//     console.log( Images.all );
//   }
// }

// function renderImages() {
//   let leftIndex = randomNumber( 0, imgArray.length - 1 );
//   let rightIndex;

//   do {
//     rightIndex = randomNumber( 0, imgArray.length - 1 );
//   } while ( leftIndex === rightIndex );

//   leftImage.src = Images.all[leftIndex].img;
//   rightImage.src = Images.all[rightIndex].img;

//   leftImageIndex = leftIndex;
//   rightImageIndex = rightIndex;

//   Images.all[leftIndex].shown++;
//   Images.all[rightIndex].shown++;
//   // console.log(Images.all);
// }

// // Helper function
// function randomNumber( min, max ) {
//   min = Math.ceil( min );
//   max = Math.floor( max );
//   return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
// }

// imageSection.addEventListener( 'click', eventHandler );
// renderImages();






















//create an array

//Create a constructor function that creates an object associated with each product, 
// and has the following properties:Name of the product/File path of image

function BusMall(title, src) {
    this.title = title;
    this.src = src;
    this.clickCtr = 0;
    this.shownCtr = 0;
    BusMall.all.push(this);
}

BusMall.roundCtr = 0;
BusMall.roundLimit = 25;

BusMall.all = [];

// console.log('cliq',BusMall.all);
BusMall.container = document.getElementById('container');
BusMall.leftImage = document.getElementById('left-busmall-image');
BusMall.centerImage = document.getElementById('center-busmall-image');
BusMall.rightImage = document.getElementById('right-busmall-image');



BusMall.leftTitle = document.getElementById('left-busmall-title');
BusMall.centerTitle = document.getElementById('center-busmall-title');
BusMall.rightTitle = document.getElementById('right-busmall-title');

BusMall.leftObject = null;
BusMall.centerObject = null;
BusMall.rightObject = null;


new BusMall('bag', 'img/bag.jpg');
new BusMall('banana', 'img/banana.jpg');
new BusMall('bathroom', 'img/bathroom.jpg');
new BusMall('boots', 'img/boots.jpg');
new BusMall('breakfast', 'img/breakfast.jpg');
new BusMall('bubblegum', 'img/bubblegum.jpg');
new BusMall('chair', 'img/chair.jpg');
new BusMall('cthulhu', 'img/cthulhu.jpg');
new BusMall('dog-duck', 'img/dog-duck.jpg');
new BusMall('dragon', 'img/dragon.jpg');
new BusMall('pen', 'img/pen.jpg');
new BusMall('pet-sweep', 'img/pet-sweep.jpg');
new BusMall('scissors', 'img/scissors.jpg');
new BusMall('shark', 'img/shark.jpg');
new BusMall('sweep', 'img/sweep.png');
new BusMall('tauntaun', 'img/tauntaun.jpg');
new BusMall('unicorn', 'img/unicorn.jpg');
new BusMall('usb', 'img/usb.gif');
new BusMall('water-can', 'img/water-can.jpg');
new BusMall('wine-glass', 'img/wine-glass.jpg');




//   Create an algorithm that will randomly generate three unique product images from 
//   the images directory and display them side-by-side-by-side in the browser window.
function renderNewBusMall() {

    // ensure that previous goats not shown on next round
    var forbidden = [BusMall.leftObject, BusMall.rightObject, BusMall.centerObject];

    do {

        BusMall.leftObject = getRandomBusMall();

    } while (forbidden.includes(BusMall.leftObject))

    // add left  to forbidden list so we don't double up
    forbidden.push(BusMall.leftObject);

    do {

        BusMall.rightObject = getRandomBusMall();

    } while (forbidden.includes(BusMall.rightObject));
    forbidden.push(BusMall.rightObject);


    do {

        BusMall.centerObject = getRandomBusMall();

    } while (forbidden.includes(BusMall.centerObject));



    BusMall.leftObject.shownCtr++;
    BusMall.rightObject.shownCtr++;
    BusMall.centerObject.shownCtr++;

    var leftImageElement = BusMall.leftImage;
    var rightImageElement = BusMall.rightImage;
    var centerImageElement = BusMall.centerImage;

    leftImageElement.setAttribute('src', BusMall.leftObject.src);
    leftImageElement.setAttribute('alt', BusMall.leftObject.title);
    centerImageElement.setAttribute('src', BusMall.centerObject.src);
    centerImageElement.setAttribute('alt', BusMall.centerObject.title);
    rightImageElement.setAttribute('src', BusMall.rightObject.src);
    rightImageElement.setAttribute('alt', BusMall.rightObject.title);

    BusMall.leftTitle.textContent = BusMall.leftObject.title;
    BusMall.centerTitle.textContent = BusMall.centerObject.title;
    BusMall.rightTitle.textContent = BusMall.rightObject.title;

}

function getRandomBusMall() {
    var index = Math.floor(Math.random() * BusMall.all.length);

    return BusMall.all[index];
}



//to write sentences
function renderSentences() {
    var container = document.getElementById('report-sen');
    for (var i = 0; i < BusMall.all.length; i++) {
        addElement('p', container, sentence)
        var product = BusMall.all[i];
        var sentence = product.title + ' had ' + product.clickCtr + ' votes and was shown ' + product.shownCtr + ' times.'
    }
}


// to add tag to html and type text 
function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    if (text) {
        element.textContent = text;
    }
    return element;
}

// 
function clickHandler(event) {

    var clickedId = event.target.id;
    var busMallClicked;

    if (clickedId === 'left-busmall-image') {
        busMallClicked = BusMall.leftObject;
        var busMallNew = BusMall.leftObject;

    } else if (clickedId === 'right-busmall-image') {
        busMallClicked = BusMall.rightObject;
        var busMallNew = BusMall.rightObject;

    } else if (clickedId === 'center-busmall-image') {
        busMallClicked = BusMall.centerObject;
        var busMallNew = BusMall.centerObject;
    }
    else {
        alert(' what was clicked on?', clickedId);
    }

    if (busMallClicked) {
        busMallClicked.clickCtr++;

        BusMall.roundCtr++;

        // to stop round on limit
        if (BusMall.roundCtr === BusMall.roundLimit) {

            alert('No more clicking ');
            renderSentences();

            typeChart();


            BusMall.container.removeEventListener('click', clickHandler);

            // set in local Storage
            var busmallstring = JSON.stringify(BusMall.all);
            localStorage.setItem('products', busmallstring);

        } else {

            renderNewBusMall();
        }
    }
}


////////////chart/////////////

var tittleArray = [];
var clickedArray = [];
var shownArray = [];
function typeChart() {

    for (var i = 0; i < BusMall.all.length; i++) {
        var titlei = BusMall.all[i].title;
        tittleArray.push(titlei);

        var clickedi = BusMall.all[i].clickCtr;
        clickedArray.push(clickedi);

        var showni = BusMall.all[i].shownCtr;
        shownArray.push(showni);

    }
    // 

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: tittleArray,
            datasets: [{
                label: 'Bus Mall Products click',
                backgroundColor: '#FFC14F',
                borderColor: '#E89D48',
                data: clickedArray
            }, {
                label: 'Bus Mall Products shown',
                backgroundColor: '#E86E48',
                borderColor: '#FF9A5C',
                data: shownArray
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

BusMall.container.addEventListener('click', clickHandler);

function getFromStorage() {
    //retrive the stored 
    var productString = localStorage.getItem('products');

    if (productString) {

        var rowObjectArray = JSON.parse(productString);

        for (var i = 0; i < rowObjectArray.length; i++) {

            var rowObject = rowObjectArray[i];
            var currentInstance = BusMall.all[i];
            currentInstance.clickCtr = rowObject.clickCtr;
            currentInstance.shownCtr = rowObject.shownCtr;
        }

    }

}
getFromStorage();

renderNewBusMall();


