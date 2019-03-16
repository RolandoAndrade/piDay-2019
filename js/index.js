let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let background = new Rectangle(0,0,400,400,"#39ff9e");
let b1 = new Ball(50,200,10,"#997eff",1);
let b2 = new Ball(250,200,40,"#ff8265",10000);

let collisions=1;


let frames=1000;
b2.vx=-1/frames;

function loop()
{
    for(let i=0;i<1000;i++)
    {
        background.draw();
        b1.move(b2);
        b2.move(b1);
        if(b1.wall())
        {
            b1.vx*=-1;
            b1.x=2*b1.radius-b1.x;
            console.log(collisions++);
        }
        if(b2.collision(b1))
        {
            b2.bounce(b1);

            console.log(collisions++);
        }
    }

    b1.draw();
    b2.draw();
}



window.setInterval(loop,8);