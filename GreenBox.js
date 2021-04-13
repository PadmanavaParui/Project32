class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill("green");
        if((this.body.speed)<3){
            super.display();
        }
        else{
           push();
           World.remove(world, this.body);          
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           pop();
        }
    }
}