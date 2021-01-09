let values = [];

let index = 0;
let j = 0;
let button;


function setup() {
  
  // canvas creation
  createCanvas(windowWidth, windowHeight);
  background(2,72,82);
  textSize(48);
  text('Visualizing Algorithms: By Jacob Metcalfe', windowWidth/3, windowHeight/4);

  values = new Array(width);
    //initial array
    for (let index = 0; index < values.length; index++) {
      //values[index] = random(height/3);
  
      //normal distribution
      values[index] = standardDistGen();
    }

  bubbleButton = createButton('Bubble Sort');
  bubbleButton.position(width/8, height/3);
  bubbleButton.mousePressed(bubbleSort);

  quickButton = createButton('QuickSort');
  quickButton.position(width*2/8, height/3);
  quickButton.mousePressed(bubbleSort);

  mergeButton = createButton('Merge Sort');
  mergeButton.position(width*3/8, height/3);
  mergeButton.mousePressed(bubbleSort);

  insertionButton = createButton('Insertion Sort');
  insertionButton.position(width*4/8, height/3);
  insertionButton.mousePressed(bubbleSort);

  dijkstrasButton = createButton("Dijkstra's Algorithm");
  dijkstrasButton.position(width*5/8, height/3);
  dijkstrasButton.mousePressed(bubbleSort);

  primButton = createButton("Prim's Algorithm");
  primButton.position(width*6/8, height/3);
  primButton.mousePressed(bubbleSort);

  knapsackButton = createButton('Knapsack Algorithm');
  knapsackButton.position(width*7/8, height/3);
  knapsackButton.mousePressed(bubbleSort);
}


function standardDistGen(){
let x = (Math.random()*6) - 3;
let u = 0;
let v = 1;
let num1 = 1/Math.sqrt(2*PI * v);
let num2 = Math.exp(-((Math.pow(x-u,2))/2*v));
return (num1*num2)*2500;
}

function bubbleSort() {
  clear();
  
  // template
  smooth();
  textSize(128);
  text('Bubble Sort O(n^2)', 120, 180);
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
  return 0;
}

function swap(arr, a, b) {
  stroke('red');
  let temp = arr[a];
  arr[a] = arr[b];
  line(a, height, a, height - arr[a]);
  arr[b] = temp;
  line(b, height, b, height - arr[b]);
}