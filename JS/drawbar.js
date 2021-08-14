const drawRect = () => 
{
    
    let screen = document.getElementById("screen");
    let cvs_screen = screen.getContext("2d");
    
    cvs_screen.clearRect(0,0,screen.width,screen.height);

    let x = Math.floor((screen.width - (elements.value)*30)/2);
    
    let y = screen.height;
    
    for(let i=0; i<numArray.length; i++)
    {
        let randValue = numArray[i];
        cvs_screen.fillStyle = colorArray[i];
        cvs_screen.fillRect(x,y-randValue,22,randValue);
        cvs_screen.fillText(randValue,x,y-randValue-5);
        x += 30;
        
    }
};
