var targety;
var ty;

function setup(){
    let myCanvas = createCanvas(600,400);

    myCanvas.parent('myContainer');

    drawingContext.shadowOffsetX= 5;
    drawingContext.shadowOffsetY= -5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'Black';
    background(200);
    //ellipse(width/2,height/2,50,50);

    targety = 0;
    ty=1;
}

function draw(){
    background(200);
    ellipse(width/2,targety,50,50);

    if( 400 < targety ){
        ty=-1;
    }else if( 0> targety ){
        ty=1;
    }

    targety+=(10*ty);
}

function draw2(){
    if( mouseIsPressed ){
        fill(0);
    }else{
        fill(255);
    }
    ellipse(mouseX,mouseY,80,80);
    
}