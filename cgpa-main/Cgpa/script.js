function sub(){
    let first=document.getElementById("first").value ;
    let first1=(first/100)*5;
    let firstresult=first1.toPrecision(3);

   let second=document.getElementById("two").value  ;
    let second1=(second/100)*5;
    let secondresult=second1.toPrecision(3);
    
    let third=document.getElementById("three").value  ;
    let third1=(third/100)*10;
    let thirdresult=third1.toPrecision(3);

    let four=document.getElementById("four") .value;
    let four1=(four/ 100) * 10;
    let fourresult=four1.toPrecision(3);
    
    let five=document.getElementById("five") .value;
    let five1=(five/ 100) * 20;
    let fiveresult=five1.toPrecision(3);

    
    let six=document.getElementById("six") .value;
    let six1=(six/ 100) * 20;
    let sixresult=six1.toPrecision(3);

    
    let seven=document.getElementById("seven") .value ;
    let seven1=(seven/ 100) * 20;
    let sevenresult=seven1.toPrecision(3);

    
    let eight=document.getElementById("eight").value;
    let eight1=(eight/ 100) * 10;
    let eightresult=eight1.toPrecision(3);

     let total=parseFloat(firstresult)+parseFloat(secondresult)
      +parseFloat(thirdresult)+parseFloat(fourresult)
    +parseFloat(fiveresult)+parseFloat(sixresult)+
    parseFloat(sevenresult)+parseFloat(eightresult);

     let totalvalue=total.toPrecision(3);

    document.getElementById("tot_cgpa").innerHTML+=totalvalue;
   

  }
 
   function reset(){
    document.getElementById("tot_cgpa").innerHTML=`TOTAL CGPA =`
   document.getElementById("first").value="";
   document.getElementById("two").value="";
   document.getElementById("three").value="";
   document.getElementById("four").value="";
   document.getElementById("five").value="";
   document.getElementById("six").value="";
   document.getElementById("seven") .value="";
   document.getElementById("eight") .value="";
 }