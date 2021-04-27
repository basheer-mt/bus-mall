// Created by: Mohammad Basheer
// Email: alkiswani.moho@gmail.com
// GitHub: https://github.com/basheer-mt
// LinkedIn: https://www.linkedin.com/in/mohammad-alkiswani/

'use strict';

let imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg',
  'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg',
  'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

// Constructor
// New obj
// prototype render
// Random function
// get by id
// Event Handler

const imageSection = document.getElementById('imageSection');
const leftImage = document.getElementById('leftImage');
const centerImage = document.getElementById('centerImage');
const rightImage = document.getElementById('rightImage');

let clickNumber = 0;
let leftImageIndex = 0;
let centerImageIndex = 0;
let rightImageIndex = 0;

function Images(name) {
  this.name = name.split('.')[0];
  console.log(name.split('.'))
  this.img = `./img/${name}`;
  this.shown = 0;
  this.clicks = 0;
  Images.all.push(this);
}

Images.all = [];

for (let i = 0; i < imgArray.length; i++) {
  new Images(imgArray[i]);
}

function eventHandler(e) {
  if ((e.target.id === 'leftImage' || e.target.id === 'centerImage' || e.target.id === 'rightImage') && clickNumber < 25) {

    if (e.target.id === 'leftImage') {
      Images.all[leftImageIndex].clicks++;
      console.log(leftImageIndex);
    }

    if (e.target.id === 'centerImage') {
      Images.all[centerImageIndex].clicks++;
      console.log(centerImageIndex);
    }

    if (e.target.id === 'rightImage') {
      Images.all[rightImageIndex].clicks++;
      console.log(rightImageIndex);
    }



    clickNumber++;
    renderImages();
  }
}

function renderImages() {
  let leftIndex = randomNumber(0, imgArray.length - 1);
  let centerIndex;
  let rightIndex;

  do {
    rightIndex = randomNumber(0, imgArray.length - 1);
    centerIndex = randomNumber(0, imgArray.length - 1);
  } while (leftIndex === rightIndex || leftIndex === centerIndex || rightIndex === centerIndex);

  leftImage.src = Images.all[leftIndex].img;
  centerImage.src = Images.all[centerIndex].img;
  rightImage.src = Images.all[rightIndex].img;

  leftImageIndex = leftIndex;
  centerImageIndex = centerIndex;
  rightImageIndex = rightIndex;

  Images.all[leftIndex].shown++;
  Images.all[centerIndex].shown++;
  Images.all[rightIndex].shown++;
  // console.log(Images.all);
}

// Helper function
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

imageSection.addEventListener('click', eventHandler);
renderImages();


var headerData = ['Item', 'Views', 'Clicks', '% of Clicks when Viewed', 'Recommended?'];
function theTable() {
  document.getElementById('theTable');

/* Header */
var tableRow = document.createElement('tr');

for (var i = 0; i < headerData.length; i++) {
  var tableHeader = document.createElement('th');
  tableHeader.textContent = headerData[i];
  tableRow.appendChild(tableHeader);
}
}