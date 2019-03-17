let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


ctx.font = "30px Arial";

ctx.textAlign = "center";

let accuracy=5;

let background = new Rectangle(0,0,400,400,"#333333");
let b1 = new Ball(50,200,10,"#997eff",1);
let b2 = new Ball(250,200,40,"#ff8265",100**accuracy);

let collisions=0;


let frames=1000;
b2.vx=-1/frames;

function loop()
{
    for(let i=0;i<frames;i++)
    {
        background.draw();
        b1.move(b2);
        b2.move(b1);
        if(b1.wall())
        {
            b1.vx*=-1;
            b1.x=2*b1.radius-b1.x;
            collisions++;
        }
        if(b2.collision(b1))
        {
            b2.bounce(b1);
            collisions++;
        }
    }
    ctx.fillStyle = "#fff";
    let text=collisions+"";
    if(collisions>0)
        ctx.fillText(text[0]+","+text.substr(1), canvas.width/2, 300);
    b1.draw(b2);
}



window.setInterval(loop,2);