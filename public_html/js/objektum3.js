/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class egyeni_objektum{
    constructor(nev,beszede){
    this.nev = nev;
    this.beszede = beszede;

   }
}

var eo = egyeni_objektum("Andó Attila", ando_attila_beszel);
console.log(eo);
console.log(eo.nev);
for(let elem in eo){
    console.log(elem+":"+eo[elem]);
}
console.log("OBJEKTUM3:");
eo.beszede;