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

function viewResults() {
  let list = document.getElementById('results');

  for (let i = 0; i < Images.all.length; i++) {
    const listElements = document.createElement('li');
    list.appendChild(listElements);
    listElements.textContent = Images.all[i].name + ' had ' + Images.all[i].clicks + ' votes, and was seen ' + Images.all[i].shown + ' times.';

  }
  renderChart();
}


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

    // convert data to string to local storage
    let stringyArr = JSON.stringify(Images.all);
    localStorage.setItem('names', stringyArr);






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

function renderChart() {

  let clicks = [];
  let names = [];
  for (let i = 0; i < Images.all.length; i++) {
    clicks.push(Images.all[i].clicks);
    names.push(Images.all[i].name);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: clicks,
        backgroundColor: [

          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}



// ======= convert data back to object for use ======== //
let dataFromLocalStorage = localStorage.getItem('names');
let parsedImages = JSON.parse(dataFromLocalStorage);

if (parsedImages !== null) {
  for (var i = 0; i < parsedImages.length; i++) {
    var reconstitutedProduct = new Images(parsedImages[i].name, parsedImages[i].img);
    reconstitutedProduct.clicks = parsedImages[i].clicks;
    reconstitutedProduct.showns = parsedImages[i].shown;
  }
  viewResults();
  renderChart();
} else {





  imageSection.addEventListener('click', eventHandler);
  renderImages();
}