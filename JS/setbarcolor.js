const setBarColor = (array,color) =>
{
    for(let i=0;i<array.length;i++)
        colorArray[array[i]]=color;
};

const clearBarColor = () =>
{
    for(let i=0;i<colorArray.length;i++)
        colorArray[i] = initialColor;
    drawRect();    
};