

function preload()
{

}
function setup()
{
  canvas = createCanvas(displayWidth, displayHeight);
}

function draw()
{
  
  background ("grey");
  
drawSprites();
Debug()


}

function Debug()
{

  if(keyDown("p"))
  {
     
  //X,Y coordinate
  fill("white");
  stroke("black");
  strokeWeight(6)
  textFont("MineCrafter")
  textSize(50);
  text("X: " + mouseX,displayWidth-1900,displayHeight-1000);
  text("Y: " + mouseY,displayWidth-1900,displayHeight-955);
  //Calling FPS
  fill("teal")
  stroke("black");
  strokeWeight(6)
  textFont("MineCrafter")
  textSize(80);
  text("fps:" + fps.getFPS(),displayWidth-250,displayHeight-1000 );

  
  }

}
//This code isn't mine
//Code that I don't fully understand
//credits:Felipe , @bitnenfer
//FPS
  var fps = 
  {	startTime : 0,
  	frameNumber : 0,
getFPS : function()
    {		this.frameNumber++;
    		var d = new Date().getTime(),
        			currentTime = ( d - this.startTime ) / 1000,
              			result = Math.floor( ( this.frameNumber / currentTime ) );
                    		if( currentTime > 1 )
                        {			this.startTime = new Date().getTime();
                        			this.frameNumber = 0;	
                              	}	
                          	return result;	
                            }	};

