var ball;


function setup() {
  createCanvas(800,600);
  ball=createSprite(200,200,60,60)
}

function draw() 
{
  background("blue");


if (keyDown(LEFT_ARROW))
{
ball.x-=5;

}


if (keyDown(RIGHT_ARROW))
{
ball.x+=5;


}
if (keyDown(UP_ARROW))
{
ball.y-=5;

}
if (keyDown(DOWN_ARROW))
{
ball.y+=5;

}
drawSprites()
}



