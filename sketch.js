let values = [];

let index = 0;
let j = 0;
let start = 0;


function setup() {
  
  // canvas creation
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  
  //initial array
  for (let index = 0; index < values.length; index++) {
    //values[index] = random(height/3);

    //normal distribution
    values[index] = standardDistGen();
  }
  start = new Date().getTime();
}


function standardDistGen(){
let x = (Math.random()*6) - 3;
let u = 0;
let v = 1;
let num1 = 1/Math.sqrt(2*PI * v);
let num2 = Math.exp(-((Math.pow(x-u,2))/2*v));
return (num1*num2)*windowHeight;
}

function draw() {
  
  // template
  smooth();
  background(2,72,82);
  textSize(128);
  text('Bubble Sort O(n^2)', width/6, height/4);
  fill(255);

  // bubble sort
  if (index < values.length) {
    for (j = 0; j < values.length - index - 1; j++) {
      let num1 = values[j];
      let num2 = values[j + 1];
      if (num1 > num2) {
        swap(values, j, j + 1);
      }
    }
  } else {
    noLoop();
  }
  index++;

  for (let index = 0; index < values.length; index++) {
    stroke(255);
    line(index, height, index, height - values[index]);
  }

  if (index === values.length-1){
    let end = new Date().getTime();
    let total = ((start-end)*-1)/1000;
    console.log("Time taken: " + total + "seconds");
  }
}

function swap(arr, a, b) {
  stroke('red');
  let temp = arr[a];
  arr[a] = arr[b];
  line(a, height, a, height - arr[a]);
  arr[b] = temp;
  line(b, height, b, height - arr[b]);
}