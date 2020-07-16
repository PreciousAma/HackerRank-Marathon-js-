
   /* for(i=10; i>=0; i--){
        console.log(i)
    }
    for(i=1; i<=10; i++){ 
    console.log(i); 
}

var lowest = 0;
var highest= 10;
i= +1;
current=0;

var counter = function() {
    if(current>=highest){i= -1;}
    if(current<=lowest){i= +1;}
    current += i;
    console.log(current);
}
counter();*/



var evenNum = 0;
var oddNum = 0;

 var count = function(){
     //console.log('test');
     for(i = 1; i < 101; i++){
         if(i % 2 === 0){
             console.log(i);
             evenNum += i;
         }else{
             oddNum += i;
             console.log("skipped odd number");
         }
         }
     }
 count();
