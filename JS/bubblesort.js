const bubbleSort = async () => {
    togglebutton(true);
    
    for(let i=0;i<numArray.length-1;i++)
    {
        let j;
        for(j=0;j<numArray.length-i-1;j++)
        {
            setBarColor([j,j+1],compareColor);
            await delay();
            setBarColor([j,j+1],initialColor);
            if(numArray[j]>numArray[j+1])
            {
                setBarColor([j,j+1],swapColor);
                await delay();
                let temp = numArray[j+1];
                numArray[j+1] = numArray[j];
                numArray[j] = temp;
                setBarColor([j,j+1],swapColor);
                await delay();
                setBarColor([j,j+1],initialColor);
            }
        }
        setBarColor([j],sortedColor);
        await delay();        
    }
    setBarColor([0],sortedColor);
    await delay();
    togglebutton(false);
};