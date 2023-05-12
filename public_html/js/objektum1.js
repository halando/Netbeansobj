/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ando_attila_beszel= function(){
   // console.log("Itt fogom majd kimondani a nevem");
   // console.log("Andó Attilának hívnak.");
  console.log(this.nev+"nak(nek) hívnak.");
}
var objektum = {nev:"Andó Attila",beszede:ando_attila_beszel};
console.log(objektum);
console.log(objektum.nev);
for (let elem in objektum){
    console.log(elem+":"+objektum [elem]);
}
console.log("OBJEKTUM1:");
objektum.beszede();