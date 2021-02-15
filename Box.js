class Bx extends BaseClass{
    constructor(x,y,width,height, color) {
      super(x,y);
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
      if(this.body.speed < 6){
        super.display();
        }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity)
        pop();}
      fill(this.color)
    }
    score(){
      if(this.Visiblity < 0 && this.Visiblity > -10){
        score++
      }
    }
  }