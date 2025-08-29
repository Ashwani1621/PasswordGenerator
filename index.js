const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let oneEl = document.getElementById("pass-one");
let twoEl = document.getElementById("pass-two");

function genPassword(){
    let string_one = ""
    let string_two = ""
    for(let i=0; i<15; i++){
        string_one += characters[Math.floor(Math.random()* characters.length)]
        string_two += characters[Math.floor(Math.random()* characters.length)]
    }
    
    oneEl.textContent = string_one;
    twoEl.textContent = string_two;
    
}

function copyPassword(id){
    let passField = document.getElementById(id)
    navigator.clipboard.writeText(passField.textContent)
    .then(()=> alert("Password copied successfully!"))
    .catch(()=> console.error("Failed to copy"))
}


