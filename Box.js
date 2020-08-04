var points = 0;

class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic:false
        }

        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;

        this.Visibility = 255;

        World.add(world, this.body);
    }

    display(){
        console.log(this.body.speed);
        var speed = this.body.speed;
        var pos = this.body.position;
        push();
        strokeWeight(5);
        stroke("red");
        fill("black");
        rect(pos.x,pos.y,this.width,this.height);
        pop();    
      }
    
    };