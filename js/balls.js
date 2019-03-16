class Ball extends Circle
{
    constructor(x,y,radius,color, mass)
    {
        super(x, y, radius, color);
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
    }
}