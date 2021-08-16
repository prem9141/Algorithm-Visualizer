const selectionSort = async () =>
{
    togglebutton(true);
    let length = numArray.length;
    let minIndex,temp;
    for(let i=0;i<length-1;i++)
    {
        minIndex = i;
        setBarColor([i],compareColor);
        for(let j=i+1;j<length;j++)
        {
            setBarColor([j],compareColor);
            await delay();
            setBarColor([j],initialColor);
            if(numArray[j]<numArray[minIndex])
            {
                setBarColor([minIndex],initialColor);
                minIndex = j;
                setBarColor([minIndex],compareColor);
            }
        }

        if(minIndex!=i)
        {
            setBarColor([minIndex,i],swapColor);
            await delay();
            temp = numArray[i];
            numArray[i]=numArray[minIndex];
            numArray[minIndex]=temp;
            await delay();
        }
        setBarColor([minIndex],initialColor);
        setBarColor([i],sortedColor);
    }
    setBarColor([numArray.length-1],sortedColor);
    await delay();
    togglebutton(false);
};