const mergeArray = async (array,helper,left,middle,right) =>
{
    for(let i=left;i<=right;i++) 
        helper[i] = array[i];

    /*** Temp array just for animation purpose */    
    let temp = [...array];
    
    let low = left;
    let high = middle+1;
    let current = left;

    while((low<=middle) && (high<=right))
    {
        
        if(helper[low]<=helper[high])
        {
            setBarColor([low,high],compareColor);
            await delay();
            temp[current] = helper[low];
            setBarColor([low,high],initialColor);
                        
            low++
        }
        else
        {
            setBarColor([low,high],compareColor);
            await delay();
            temp[current] = helper[high];
            setBarColor([low,high],initialColor);
            high++            
        }
        current++;
    }

    let remaining = middle - low;

    for(let i=0;i<=remaining;i++)
        temp[current+i] = helper[low+i];

    for(let i=left;i<=right;i++) 
        array[i] = temp[i];
    
    await delay();
   
}

const mergeSort = async (array,helper,left,right) =>
{
    
    if(left<right)
    {
        let middle = Math.floor((left+right)/2);
        await mergeSort(array,helper,left,middle);
        await mergeSort(array,helper,middle+1,right);
        await mergeArray(array,helper,left,middle,right);        
    }
    
};