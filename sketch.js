function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,750,1200,20);
}
var particle = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;





function draw() {
  
  background(255,255,255);
  
  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new divisions(k, height-divisionHeight/2,10,divisionHeight));
  }  
   
  for(var j=40; j<=width; j=j+50)
   {
     plinkos.push(new Plinko(j,75));
   }
   for(var j =15; j <=width-10; j=j+50)
   {
     plinkos.push(new Plinko(j,175))
   }
   for(var j=40; j<=width; j=j+50)
   {
     plinkos.push(new Plinko(j,75));
   }
   for(var j =15; j <=width-10; j=j+50)
   {
     plinkos.push(new Plinko(j,175))
   }
   
   if(frameCount%90==0){
     particles.push(new Particles(random(width/2-10,width/2+10),10,10));
   }
   ground.display();
   for(var j = 0; j <particles,length; j++){
     particles[j].display();
   }
   for(var k = 0; k <divisions,length; k++){
    divisions[k].display();
  }
  for(var o = 0; o <plinkos,length; o++){
    plinkos[o].display();
  }
  drawSprites();
}