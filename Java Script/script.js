let btn = document.getElementsByClassName("btn");

let color = ["white", "aqua", "blueviolet", "black"];

for(let i=0; i<btn.length; i++)
{
    // btn[i].addEventListener('click', myFun(color[i]));
    btn[i].addEventListener('click', function(){
        document.body.style.backgroundColor = color[i];
        let text = document.getElementsByClassName("text");
        if(color[i]=="black")
        {
            for(let j=0; j<text.length; j++)
            {
                text[j].style.color = "white";
            }
        }
        else
        {
            for(let j=0; j<text.length; j++)
            {
                text[j].style.color = "black";
            }
        }
    });
}

// function myFun(color){
//     document.body.style.backgroundColor = color;

// }

// console.log(color);