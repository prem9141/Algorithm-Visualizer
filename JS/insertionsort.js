const insertionSort = async () =>
{
    togglebutton(true);
    let helperArray = [...numArray];
    let length = numArray.length;
    let temp,j;
    for(let i=1;i<length;i++)
    {
        j=i;
        temp = helperArray[j];
        setBarColor([j,j-1],compareColor);
        while(j>0 && temp<helperArray[j-1])
        {
            setBarColor([j-1],compareColor);
            await delay();
            helperArray[j] = helperArray[j-1];
            setBarColor([j-1],sortedColor);
            j--;
        }
        if(i!=j)
        {
            setBarColor([i,j],swapColor);
            await delay();
            helperArray[j] = temp;
            numArray = [...helperArray];
            setBarColor([i,j],sortedColor);
        }
        else
        {
            await delay();
            setBarColor([j,j-1],sortedColor);
        }
        await delay();
    }
    togglebutton(false); 
};