var sc;
var bg;
var audio = new Audio('Click2-Sebastian-759472264.mp3');



function setup(){
   canvas = createCanvas(displayWidth-20, displayHeight-115);

}

function preload(){
    bg = loadImage("img/nature.jpg");
}


        

function draw(){
    background(bg);
    //audio.play();
    //text("HELLO!!", 50, 50);
    sc = second();
    textSize(20);
    text(sc, displayWidth-100, displayHeight-150);
    fill("black");
    if(sc%7 === 0){
        time = sc;
        textSize(36);
        text("Breathe", displayWidth-700, displayHeight-400);
        fill("black");
        audio.play();
        
        
    }

}