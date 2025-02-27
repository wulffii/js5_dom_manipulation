// Opgave 1: sørg for at man ved klik på ☼/◯ (findes i nav > ul > .toggleColormode) skifter imellem light og darkmode. Se at <body> har en class der matcher det i style.css

const toggleEl = document.querySelector(".toggleColormode");

const bodyEl = document.querySelector("body");

toggleEl.addEventListener("click", function(){
    if(bodyEl.classList.contains("light")) {
        bodyEl.classList.remove("light")
        bodyEl.classList.add("dark")
        toggleEl.innerHTML ="◯"
        localStorage.setItem("theme", "dark")
    } else {
        bodyEl.classList.remove("dark")
        bodyEl.classList.add("light") 
        toggleEl.innerHTML = "☼"
        localStorage.setItem("theme", "light")
    }
})

// Opgave 2: sørg for at gemme det i localStorage så brugerens indstillinger gemmes
// Opgave 3: Hver person har en <h4> inde i <main>. Den er dog meget dum og der står bare "Look at me". Du skal istedet opdatere <h4> med det der står i billedets alt-attribute. For den første person skal der altså stå: "Jim the Chef". Anvend for guds skyld loops/løkker til det!

// Opgave 4: skab og indsæt i bunden (under nederste person) et link der fører til toppen af siden (så href="#" i linket).
