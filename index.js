var arr_hinh=[
    "img/oppo.jpg.webp",
    "img/js2.webp",
    "img/js3.webp",
    "img/js4.webp",
    "img/js5.webp",
]
var index=0;
function next()
{
    index++;
    if(index>=arr_hinh.length)
    index=0;
    var hinh=document.getElementById("hinh");
    hinh.src=arr_hinh[index];
}
function trai(){
    index--;
    if(index<0)
    index= arr_hinh.length -1;
    document.getElementById("hinh").src=arr_hinh[index];
}  
setInterval("next()",3000); 



