"use strict"

const shoppingList = [
    "Pane",
    "Vino",
    "Acqua",
    "Gin"
];

let i = 0

while (i < shoppingList.length ){
    
    const container = document.querySelector(".container")
    container.innerHTML = container.innerHTML +  `<li>${shoppingList[i]}</li>`

    i++;
}
