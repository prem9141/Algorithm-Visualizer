let numArray = [];
let colorArray = [];
let initialColor = "BLACK";
let compareColor = "RED";
let swapColor = "BLUE";
let sortedColor = "GREEN";
let maxValue = 300;
let minValue = 10;

let elements = document.getElementById("elements");
elements.addEventListener("input",getRandomArray);

let seconds = document.getElementById("seconds");
let delaySec = seconds.value*100;

seconds.addEventListener("input",() => delaySec = seconds.value*100);

let bubble = document.getElementById("bubble");
bubble.addEventListener("click",()=> {
    clearBarColor();
    bubbleSort();
    });

let selection = document.getElementById("selection");
selection.addEventListener("click",() => {
    clearBarColor();
    selectionSort();});

let insertion = document.getElementById("insertion");
insertion.addEventListener("click",() => {
    clearBarColor();
    insertionSort(); 
});

let quick = document.getElementById("quick");
quick.addEventListener("click",async ()=> {
    clearBarColor();
    togglebutton(true);
    await quickSort(numArray,0,numArray.length-1);
    setBarColor([...numArray.keys()],sortedColor);
    drawRect();
    togglebutton(false);
});

let merge = document.getElementById("merge");
let helperArray = []
merge.addEventListener("click",async ()=> {
    clearBarColor();
    togglebutton(true);
    await mergeSort(numArray,helperArray,0,numArray.length-1);
    setBarColor([...numArray.keys()],sortedColor);
    drawRect();
    togglebutton(false);
});

let refresh = document.getElementById("refresh");
refresh.addEventListener("click",getRandomArray);

window.addEventListener("load",getRandomArray);