const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(50,50,100,60);

// ctx.fillStyle = "blue";
// ctx.fillRect(10,10,50,50);

// ctx.fillStyle = "green";
// ctx.fillRect(80,10,50,50);

// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect(10,10,55,50);

// ctx.fillStyle = "rgba(0,0,200,0.5)";
// ctx.fillRect(30,30,55,50);

// ctx.fillRect(25,25,100,100);
// ctx.clearRect(45,45,60,60);
// ctx.strokeRect(50,50,50,50);

// ctx.beginPath();
// ctx.moveTo(10,10);
// ctx.lineTo(200,50);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(100,25)
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(25,25);
// ctx.lineTo(105,25);
// ctx.lineTo(25,105)
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(125,125);
// ctx.lineTo(125,45);
// ctx.lineTo(45,125);
// ctx.closePath();
// ctx.stroke();


// ctx.beginPath();
// ctx.arc(100,100,40,0,Math.PI*2);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(75,75,50,0,Math.PI*2,true);
// ctx.moveTo(110,75);
// ctx.arc(75,75,35,0,Math.PI,false);
// ctx.moveTo(65,65);
// ctx.arc(60,65,5,0,Math.PI*2,true);
// ctx.moveTo(95,65);
// ctx.arc(90,65,5,0,Math.PI*2,true);
// ctx.stroke();


// ctx.beginPath();
// ctx.moveTo(75,25);
// ctx.quadraticCurveTo(25,25,25,62.5);
// ctx.quadraticCurveTo(50,100,50,100);
// ctx.quadraticCurveTo(50,120,30,125);
// ctx.quadraticCurveTo(60,120,65,100);
// ctx.quadraticCurveTo(125,100,125,62.5);
// ctx.quadraticCurveTo(125,25,75,25);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 40);
ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fill();

ctx.font = "20px Arial"
ctx.fillText("hello", 150, 150);


// let x=0;
// function draw(){
//     ctx.clearRect(0,0,400,300);
//     ctx.fillRect(x,100,50,50);
//     x+=1;
//     requestAnimationFrame(draw);
// }
// draw();


// ctx.shadowColor = "rgba(0,0,0,0.35)";
// ctx.shadowBlur = 12;
// ctx.shadowOffsetX = 8;
// ctx.shadowOffsetY = 8;

// ctx.fillStyle = "#ffb166";
// ctx.fillRect(60,60,160,100);


ctx.shadowColor = "rgba(0,0,0,0.4)";
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 4;
ctx.shadowOffsetY = 4;

ctx.lineWidth = 8;
ctx.strokeStyle = "#118ab2";

ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(250,200);
ctx.stroke();


const imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
const data = imageData.data;

for (let i=0; i<data.length; i+=4){
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];

    const gray = (r+g+b)/3;

    data[i] = gray;
    data[i+1] = gray;
    data[i+2] = gray;
}

ctx.putImageData(imageData,0,0);
