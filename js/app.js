'use strict'
var productsNames = ['bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'
];

var leftImage = document.querySelector('#leftImage');
var middleImage = document.querySelector('#middleImage');
var rightImage = document.querySelector('#rightImage');
var imageSection = document.querySelector('#imagesSection');

leftImage.setAttribute('src', `img/${productsNames[0]}`);
leftImage.setAttribute('alt', productsNames[0]);
leftImage.setAttribute('title', productsNames[0]);

middleImage.setAttribute('src', `img/${productsNames[1]}`);
middleImage.setAttribute('alt', productsNames[1]);
middleImage.setAttribute('title', productsNames[1]);

rightImage.setAttribute('src', `img/${productsNames[2]}`);
rightImage.setAttribute('alt', productsNames[2]);
rightImage.setAttribute('title', productsNames[2]);



function Product(name) {
    this.name = name;
    this.clicks = 0;
    this.views = 0;
    this.imagePath = `img/${this.name}`;
    Product.all.push(this);
}
Product.all = [];

for (var i = 0; i < productsNames.length; i++) {
    new Product(productsNames[i]);
}



var leftProduct, middleProduct, rightProduct;


function render() {
    leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    middleProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];

    
    if(leftProduct !== middleProduct && leftProduct !== rightProduct && middleProduct !==rightProduct ){

    leftImage.setAttribute('src', leftProduct.imagePath);
    leftImage.setAttribute('alt', leftProduct.name);
    leftImage.setAttribute('title', leftProduct.name);

    middleImage.setAttribute('src', middleProduct.imagePath);
    middleImage.setAttribute('alt', middleProduct.name);
    middleImage.setAttribute('title', middleProduct.name);

    rightImage.setAttribute('src', rightProduct.imagePath);
    rightImage.setAttribute('alt', rightProduct.name);
    rightImage.setAttribute('title', rightProduct.name);
}
}

render();


imageSection.addEventListener('click', handleClickOnProduct);
var totalClicks = 0;

function handleClickOnProduct(event) {
    if (totalClicks < 25) {
        
                    if (event.target.id !== 'imagesSection') {

                        if (event.target.id === 'leftImage') {
                            leftProduct.clicks++;
                        }
                        else if (event.target.id === 'middleImage') {
                            middleProduct.clicks++;
                        }
                        else if (event.target.id === 'rightImage') {
                            rightProduct.clicks++;
                        }

                        totalClicks++;
                        leftProduct.views++;
                        middleProduct.views++;
                        rightProduct.views++;

                        render();
                    }
                }
            
    else {
        console.log('more than 25 clicks');
        imageSection.removeEventListener('click', handleClickOnProduct);
        render2();
    }
}

function render2() {
    var container = document.getElementById('container');
    var ul = document.getElementById('result');
    container.appendChild(ul);
    for (var i = 0; i < Product.all.length; i++) {
        var li = document.createElement('li');
        li.textContent = `Image ${i} has:  ${Product.all[i].clicks} clicks, and , ${Product.all[i].views} views.`;
        ul.appendChild(li);
    }
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}









