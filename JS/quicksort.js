const partition = async (array,left,right) => {
    let pivotColor = "ORANGE";
    let pivot = array[Math.floor((left+right)/2)];
    while(left<=right)
    {
        setBarColor([numArray.indexOf(pivot)],pivotColor);
        await delay();
        setBarColor([left],compareColor);
        await delay();
        while(array[left]<pivot)
        {
            setBarColor([left],compareColor);
            await delay();
            setBarColor([left],initialColor);
            left++;            
        }
        
        setBarColor([left],swapColor);
        setBarColor([right],compareColor);
        await delay();
        while(array[right]>pivot)
        {
            setBarColor([right],compareColor);
            await delay();
            setBarColor([right],initialColor);
            right--            
        }
        if(left<=right)
        {
          setBarColor([left,right],swapColor);
          await delay();
          let temp = array[left];
          array[left]=array[right];
          array[right]=temp;
          await delay();
          setBarColor([left,right],initialColor);
          left++;
          right--
        }
        //await delay();       
    }
    clearBarColor();
    return left;
};


const quickSort = async (array,left,right) =>
{
    let index = await partition(array,left,right);
    
    if(left < index-1)
       await quickSort(array,left,index-1);
    if(right>index)
       await quickSort(array,index,right)
}
