class Ball
{
    constructor(x,y,radius,color, mass)
    {
        this.circle=new Circle(x, y, radius, color);
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.mass=mass;
        this.vx=0;
    }
    move()
    {
        this.x+=this.vx;
    }

    collision(ball)
    {
        return (ball.x-ball.radius<=this.x+this.radius&&this.x-this.radius<=ball.x+ball.radius)||(
            this.x+this.radius<=ball.x+ball.radius&&ball.x<=this.x+this.radius);
    }

    wall()
    {
        return this.x-this.radius<0;
    }

    bounce(ball)
    {
        let v1=this.vx,v2=ball.vx,m1=this.mass,m2=ball.mass;
        ball.vx=2*m1*v1/(m1+m2)-(m1-m2)*v2/(m1+m2);
        this.vx=(m1-m2)*v1/(m1+m2)+2*m2*v2/(m1+m2);
        if(this.x>ball.x)
        {
            this.circle.x=this.radius+ball.radius+ball.x;
        }
    }

    draw()
    {
        if(this.x<0)
            this.circle.x=this.radius;
        else if(this.radius===40&&this.x-this.radius<=20)
            this.circle.x=20+this.radius;
        else
            this.circle.x=this.x;
        this.circle.draw();
    }
}