$("button").click(function() {
let random = Math.random();// . to give the random # a varial 
console.log(random); // to check the # math.random gives you
 
   if( random >=.5 ) { $(".result").html(`<img src= "https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png">`);  

}  else { // what ever dosent equal the first part will equal this one
$(".result").html(`<img src= "https://upload.wikimedia.org/wikipedia/commons/4/4e/COBREcentavosecuador2000-2.png">`);
          }
});