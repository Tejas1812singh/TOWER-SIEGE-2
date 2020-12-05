class Block{
    constructor(x,y,width,height)
    {
        
        var options={
           // isStatic:true,
            restitution:0.5,
            friction:0,
            //density:1.2
        }
            this.Visiblity=255
            this.x=x
            this.y=y
          this.width=width
          this.height=height
            
            this.body=Bodies.rectangle(  x,y,width,height,options)
             World.add(world,this.body)   
        }
    display(){
        if(this.body.speed<3){

        
            var pos =this.body.position;
            var angle=this.body.angle
            push();
            translate(pos.x,pos.y)
            rotate(angle)

        
            fill(255,0,255);
            rectMode(CENTER)
          
           rect(0,0,this.width,this.height);
            pop();
        
          }
          else{
              World.remove(world,this.body)
              push()
              this.Visiblity=this.Visiblity-5
              pop();
          }
          }
    }    
