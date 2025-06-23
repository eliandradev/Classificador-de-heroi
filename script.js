let heroi = "Eli";
let exp = 5001;
let nivel = "";

if (exp === 1000) {
    nivel="Ferro";
}
else if (exp >= 1001 && exp <= 2000) {
    nivel = "Bronze";
}
else if (exp >= 2001 && exp <= 5000 ){
    nivel ="Prata";
}
else if (exp >= 5001 && exp <= 6000) {
    nivel="Ouro";
}
else if (exp >= 6001 && exp <= 7000){
    nivel = "PLatina";
}
else if (exp >= 7001 && exp <= 8000){
    nivel ="Ascendente";
}
else if (exp >=  8001 && exp <= 9000){
    nivel ="Imortal";
}
else if (exp >= 10000) {
   nivel ="Radiante";
}

console.log("Heroi "+ [heroi] + " é do nivel " + [nivel]);