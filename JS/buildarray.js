const getRandomArray = () => 
{
    numArray.splice(0,numArray.length);
    for(let i=0;i<elements.value;)
    {
        let randValue = Math.ceil(Math.random()*(maxValue - minValue) + minValue);
        if(!numArray.includes(randValue))
        {
            numArray[i]=randValue;
            colorArray[i] = initialColor;
            i++;
        }    
    }
    drawRect();    
};