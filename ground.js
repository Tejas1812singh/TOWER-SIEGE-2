class Ground{
    constructor()
    {
        
        var options={
            isStatic:true,
            //restitution:0.5,
            //friction:0,
            //density:1.2
        }
            
           
            
            this.ground=Bodies.rectangle(450,400,900,10 ,options)
             World.add(world,this.ground)   
        }
    display(){
        noStroke()


        
            fill("BROWN");
            rectMode(CENTER)
          
           rect(this.ground.position.x,this.ground.position.y,900,10);
        
          }
    }    