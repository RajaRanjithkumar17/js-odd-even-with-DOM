var num =[4,5,12,6,8,11,3]




function odd(){


for (let index = 0; index < num.length; index++) {
    var odd = document.createElement("h1");
   

   if(num[index]%2!=0){
    console.log(num[index]);
    odd.innerText= num[index];
    
}


   
   document.body.appendChild(odd)

}
}

function even(){

    for (let index = 0; index < num.length; index++) {
        var even = document.createElement("h1");
       
       if(num[index]%2==0){
        console.log(num[index]);

        even.innerText=num[index];
        
       }
       document.body.appendChild(even)
    
    }
    }