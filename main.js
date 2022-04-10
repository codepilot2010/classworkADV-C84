canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";

function add()
{
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtagsrc=rover_image;

}

function uploadbackground()
{
    ctx.drawImage(background_imgtag,0,0,canvas.with,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
      up();
      console.log("up arrow key is pressed");
    }
    if(keypressed=='40')
    {
      down();
      console.log("down arrow key is pressed");
    }
    if(keypressed=='37')
    {
      left();
      console.log("left arrow key is pressed");
    }
    if(keypressed=='39')
    {
      right();
      console.log("right arrow key is pressed");
    }


    }