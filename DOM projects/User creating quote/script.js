let button = document.querySelector("button");
let main = document.querySelector("#main");



let quotes = ["It’s better to be alone than to be in bad company.",
              "In life, if you don’t risk anything, you risk everything.",
              "Trying to be someone else is a waste of the person you are.",
              "People are more what they hide than what they show.",
              "Don’t listen to what people say, watch what they do.",
              "You don’t drown by falling in the water. You drown by staying there.",
              "When values are clear, decisions are easy.",
              "To be interesting – be interested.",
              "Hope is NOT a strategy."
]

button.addEventListener('click', function(){
    let h3 = document.createElement('h3');
    let quotesIn = Math.floor(Math.random()*9);
    h3.innerHTML = quotes[quotesIn];
    let left = Math.random()*80;
    let top = Math.random()*80;
    let r = Math.random()*360;
    let s = Math.random()*2;
    let red = Math.random()*256;
    let green = Math.random()*256;
    let blue = Math.random()*256;
    h3.style.position = 'absolute';
    h3.style.left = `${left}%`;
    h3.style.top = `${top}%`;
    h3.style.rotate = `${r}deg`;
    h3.style.scale = `${s}`;
    h3.style.textWrap = 'balance';
    h3.style.color = `rgb(${red}, ${green}, ${blue})`;
    main.appendChild(h3);
    
}
)