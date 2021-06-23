function Ball(x,y,r){
    var option={
        friction:2,
        restitution:0.5
    }
    this.body=Bodies.circle(x,y,r,option);
    this.r=r;
    this.body.friction=0;
    World.add(world,this.body);

    this.show=function(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(radians(angle))
        //strokeWeight(random(1,10))
        stroke("black")
        fill(random(["violet","skyblue","green","yellow","orange","red","indigo"]))
        circle(0,0,this.r);
        pop();
    }
}