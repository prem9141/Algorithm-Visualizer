const mergeArray = async (array,helper,left,middle,right) =>
{
    for(let i=left;i<=right;i++) 
        helper[i] = array[i];

    let temp = [...array];
    //console.log("Temp" + temp);

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
            //await delay();
            
            low++
        }
        else
        {
            setBarColor([low,high],compareColor);
            await delay();
            temp[current] = helper[high];
            setBarColor([low,high],initialColor);
           // await delay();
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
   console.log("MergeArray:" + array.slice(left,right+1));
}

const mergeSort = async (array,helper,left,right) =>
{
    
    if(left<right)
    {
        console.log("Original Array:" + array.slice(left,right+1));
        let middle = Math.floor((left+right)/2);
        console.log("Middle:" + array[middle]);
        await mergeSort(array,helper,left,middle);
        await mergeSort(array,helper,middle+1,right);
        await mergeArray(array,helper,left,middle,right);        
    }
    console.log(numArray);
};