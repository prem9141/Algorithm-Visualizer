/* Function to enable and disable button */
const togglebutton = (value) =>
{
    let button = document.getElementsByTagName("button");
    for(let i=0;i<button.length;i++)
        button[i].disabled = value;
    elements.disabled = value;
};


